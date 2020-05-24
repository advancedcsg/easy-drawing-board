class Draw {
  constructor(options) {
    const {
      container,
      lineColor = "#f00",
      lineWidth = "1",
      bgImg = "",
      arrowSize = 15,
      canvasBgColor = "#fff",
    } = options;
    if (!container) {
      throw Error("No container element were found...");
    }
    this.canvas = this.createCanvasEl(container);
    this.context = this.canvas.getContext("2d");
    this.type = "pencil";
    this.canvasWidth = this.canvas.width;
    this.canvasHeight = this.canvas.height;
    this.canvasBgColor = canvasBgColor;
    this.lineWidth = lineWidth;
    this.lineColor = lineColor;
    this.arrowSize = arrowSize;
    this.arrowPoints = [];
    this.isDrawing = false;
    this.image = new Image();
    this.bgImg = bgImg;
  }

  createCanvasEl(container) {
    const canvasEl = document.createElement("canvas");
    canvasEl.style.height = `${container.clientHeight}px`;
    canvasEl.style.width = `${container.clientWidht}px`;
    canvasEl.height = container.clientHeight;
    canvasEl.width = container.clientWidth;
    container.appendChild(canvasEl);
    return canvasEl;
  }

  init() {
    let originX,
      originY = null; // 鼠标的坐标 (屏幕坐标 + 容器偏移量)
    const {
      x: c_offsetLeft,
      y: c_offsetTop,
    } = this.canvas.getBoundingClientRect();
    this.clear();
    this.drawBackground();

    this.canvas.addEventListener("mousedown", (event) => {
      this.isDrawing = true;
      this.image.src = this.canvas.toDataURL("image/png"); //将当前的图片转化为base64
      const { clientX, clientY } = event;
      // 鼠标按下时, canvas的初始坐标
      originX = clientX - c_offsetLeft;
      originY = clientY - c_offsetTop;

      if (this.type === "arrow") {
        this.arrowPoints = [];
        this.arrowPoints.push({
          x: originX / this.canvasWidth,
          y: originY / this.canvasHeight,
        });
      }

      this.context.moveTo(originX, originY);
      this.context.lineWidth = this.lineWidth;
      this.context.strokeStyle = this.lineColor;
      this.context.fillStyle = this.lineColor;
      this.context.beginPath();
    });

    this.canvas.addEventListener("mousemove", (event) => {
      if (this.isDrawing) {
        const { clientX, clientY } = event;

        // 鼠标移动时, canvas中的实时坐标
        const x = clientX - c_offsetLeft;
        const y = clientY - c_offsetTop;

        // 默认是鼠标刚按下的坐标.
        let newOriginX = originX,
          newOriginY = originY;

        // 计算 横/纵 坐标到初始点的距离
        let distanceX = Math.abs(x - originX);
        let distanceY = Math.abs(y - originY);

        // 让形状左上角的坐标永远大于右下角的坐标, 保证图形能正确绘制
        if (x < originX) newOriginX = x;
        if (y < originY) newOriginY = y;

        // (x, y) 为画布中的实时坐标. (originX / Y) 是鼠标点击时在画布上的坐标
        // (newOriginX / Y) 绘制形状(比如矩形)时, 左上角的坐标
        const mousePosition = {
          x,
          y,
          originX,
          originY,
          newOriginX,
          newOriginY,
          distanceX,
          distanceY,
        };
        let mousemoveEvent = this.handleMousemove();
        let currMousemoveEvent = mousemoveEvent[this.type];
        currMousemoveEvent && currMousemoveEvent(mousePosition);
      }
    });

    // 鼠标移出和松开鼠标时, 结束绘画
    this.canvas.addEventListener("mouseup", () => this.endOfDrawing());
    this.canvas.addEventListener("mouseleave", () => this.endOfDrawing());
  }

  // 在绘制形状的过程中需要重新绘制，否则会画出移动过程中的图像
  reDraw() {
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.context.drawImage(this.image, 0, 0);
    this.context.beginPath();
  }

  endOfDrawing() {
    if (this.isDrawing) {
      this.context.closePath();
      this.isDrawing = false;
    }
  }

  clear() {
    this.context.fillStyle = this.canvasBgColor;
    this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.drawBackground();
  }

  drawBackground() {
    if (this.bgImg) {
      const that = this;
      const img = new Image();
      img.setAttribute("crossOrigin", "anonymous");
      img.src = this.bgImg;
      img.onload = function () {
        that.context.drawImage(this, 0, 0, that.canvasWidth, that.canvasHeight);
      };
    }
  }

  handleMousemove() {
    return {
      pencil: (mousePosition) => {
        const { x, y } = mousePosition;
        this.context.lineTo(x, y);
        this.context.stroke();
      },
      straightLine: (mousePosition) => {
        let { x, y, originX, originY } = mousePosition;
        this.reDraw();

        this.context.moveTo(originX, originY);
        this.context.lineTo(x, y);
        this.context.stroke();
      },
      rect: (mousePosition) => {
        const { newOriginX, newOriginY, distanceX, distanceY } = mousePosition;
        this.reDraw();
        this.context.rect(newOriginX, newOriginY, distanceX, distanceY);
        this.context.stroke();
        this.context.closePath();
      },
      circle: (mousePosition) => {
        const { newOriginX, newOriginY, distanceX, distanceY } = mousePosition;
        this.reDraw();
        // 根据狗股定理算出半径
        const r = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        // 确保鼠标在圆心位置(虽然只能保证左边)
        this.context.arc(
          newOriginX + distanceX,
          newOriginY + distanceY,
          r,
          0,
          2 * Math.PI
        );
        this.context.stroke();
      },
      arrow: (mousePosition) => {
        const { x, y } = mousePosition;
        this.reDraw();
        this.arrowPoints[1] = {
          x: x / this.canvasWidth,
          y: y / this.canvasHeight,
        };
        this.drawArrow(this.context, {
          points: this.arrowPoints,
        });
      },
      clear: () => this.clear(),
    };
  }

  // 箭头
  getArrowPoint(beginPoint, endPoint, par) {
    const slopyAngle = Math.atan2(
      endPoint.y - beginPoint.y,
      endPoint.x - beginPoint.x
    );
    const arrowLength = Math.sqrt(
      Math.pow(endPoint.y - beginPoint.y, 2) +
        Math.pow(endPoint.x - beginPoint.x, 2)
    );
    const angle = 0.6;
    const innerAngle = 0.3;
    const innerPar = (par / 3) * 2;
    const point1 = {
      x: endPoint.x - Math.round(par * Math.cos(slopyAngle + angle)),
      y: endPoint.y - Math.round(par * Math.sin(slopyAngle + angle)),
    };
    const point2 = {
      x: endPoint.x - Math.round(par * Math.cos(slopyAngle - angle)),
      y: endPoint.y - Math.round(par * Math.sin(slopyAngle - angle)),
    };
    const point3 = {
      x: endPoint.x - Math.round(innerPar * Math.cos(slopyAngle + innerAngle)),
      y: endPoint.y - Math.round(innerPar * Math.sin(slopyAngle + innerAngle)),
    };
    const point4 = {
      x: endPoint.x - Math.round(innerPar * Math.cos(slopyAngle - innerAngle)),
      y: endPoint.y - Math.round(innerPar * Math.sin(slopyAngle - innerAngle)),
    };
    return [beginPoint, point4, point2, endPoint, point1, point3];
  }

  drawArrow(ctx, options) {
    const canvasWidth = this.canvasWidth;
    const canvasHeight = this.canvasHeight;
    const arrowSize = 15;
    ctx.save();
    // ctx.globalCompositeOperation = 'source-over';
    ctx.beginPath();
    ctx.moveTo(
      options.points[0].x * canvasWidth,
      options.points[0].y * canvasHeight
    );
    const paintArrar = (ctx, polygonVertex) => {
      const canvasWidth = ctx.canvas.width,
        canvasHeight = ctx.canvas.height;
      ctx.beginPath();
      ctx.moveTo(polygonVertex[0].x, polygonVertex[0].y);
      for (let i = 1; i < polygonVertex.length; i++) {
        ctx.lineTo(polygonVertex[i].x, polygonVertex[i].y);
      }
      ctx.closePath();
      ctx.fill();
    };
    const drawArrow = (ctx, stopPoint, beginPoint, arrowSize) => {
      const polygonVertex = this.getArrowPoint(
        beginPoint,
        stopPoint,
        arrowSize
      );
      paintArrar(ctx, polygonVertex);
    };
    for (let i = 1; i < options.points.length; i++) {
      drawArrow(
        ctx,
        {
          x: options.points[i].x * canvasWidth,
          y: options.points[i].y * canvasHeight,
        },
        {
          x: options.points[i - 1].x * canvasWidth,
          y: options.points[i - 1].y * canvasHeight,
        },
        arrowSize
      );
    }
    ctx.restore();
  }

  exportBase64(type = "png") {
    return this.canvas.toDataURL(`image/${type}`);
  }

  saveImg({ type = "png", fileName = "canvas_image" }) {
    const aEl = document.createElement("a");
    aEl.href = this.canvas.toDataURL(`image/${type}`);
    aEl.download = `${fileName}.${type}`;
    aEl.click();
  }

  // Change the default setting
  // type, lineWidth, color, arrowSize, canvasBgColor
  config(type, value) {
    this[type] = value;
    type === "canvasBgColor" && this.clear();
  }
}

export default Draw;
