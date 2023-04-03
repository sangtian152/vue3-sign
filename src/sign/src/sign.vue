<template>
  <div class="zm-sign">
    <div v-if="erasable" class="zm-sign-tool">
      <span
        :class="['iconfont', 'icon-eraser', { active: clip }]"
        @click="doErase(!clip)"
      ></span>
    </div>
    <div class="can_vans">
      <canvas
        ref="canvasRef"
        :width="canvasWidth ? canvasWidth : w"
        :height="canvasHeight ? canvasHeight : h"
      ></canvas>
    </div>
    <div v-if="footer" class="zm-sign-handle">
      <button class="zm-button zm-button--mini" @click="handleClear">
        清空
      </button>
      <button class="zm-button zm-button--mini" @click="handleDone">
        完成
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { signProps, signEmits } from './sign'
  import { touchEvent, getPointer } from "@/utils/utils";
  import { onBeforeUnmount, onMounted, ref, watch } from "vue";
  import type { Coordinate } from '@/utils/types'

  defineOptions({
    name: 'Vue3Sign',
  })

  const props = defineProps(signProps)
  const emit = defineEmits(signEmits)

  const w = ref(0)
  const h = ref(0)
  watch(() => props.canvasWidth, (value) => {
    w.value = value as number
  })
  watch(() => props.canvasHeight, (value) => {
    h.value = value as number
  })

  const canvasRef = ref<HTMLCanvasElement>()
  const canvasTxt = ref<CanvasRenderingContext2D | null>()
  onMounted(() => {
    /* let canvas = this.$refs.canvasF;
    this.canvas = canvas; */
    const canvas = canvasRef.value as HTMLCanvasElement
    canvas.style.background = props.bgColor;
    canvasTxt.value = canvas.getContext("2d", { willReadFrequently: true });
    resizeRender(true);
    // 在画板以外松开鼠标后冻结画笔
    document.onmouseup = () => {
      closure();
    };
    const { tapstart, tapend } = touchEvent();
    document.addEventListener(tapend, closure);
    canvas.addEventListener(tapstart, drawStart, { passive: false });
    if (typeof window !== 'undefined') {
      const evt = "onorientationchange" in window ? "orientationchange" : "resize";
      window.addEventListener(evt, resizeRender, false);
    }
  })
  onBeforeUnmount(() => {
    const { tapend } = touchEvent();
    document.removeEventListener(tapend, closure);
    if (typeof window !== 'undefined') {
      const evt = "onorientationchange" in window ? "orientationchange" : "resize";
      window.removeEventListener(evt, resizeRender, false);
    }
  })

  const clip = ref(false)
  const doErase = (bool:boolean) => {
    clip.value = bool;
    if (clip.value) {
      initClip(canvasRef.value as HTMLCanvasElement);
    } else {
      removeClip(canvasRef.value as HTMLCanvasElement);
    }
  }
  const isVertical = ref(false)
    // 页面尺寸改变，主要用于手机旋转屏幕时调用
  const resizeRender = (init:any) => {
      const orientation = window.orientation;
      isVertical.value = orientation == 0 || orientation == 180;
      setTimeout(() => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        if (isVertical) {
          verticalCanvas(w, h);
        } else {
          horizontalCanvas(w, h);
        }
      }, 50);
      if (init !== true) {
        emit("orientationchange", orientation);
      }
    }
    // 垂直方向
    const verticalCanvas = (width:number, height:number) => {
      w.value = width - 40;
      h.value = height / 2;
    }
    // 水平方向
    const horizontalCanvas = (width:number, height:number) => {
      w.value = width - 40;
      h.value = height - 120;
    }
    const isDraw = ref(false)
    const hasDrew = ref(false)
    const startX = ref(0)
    const startY = ref(0)
    // 绘制开始
    const drawStart = (event:TouchEvent|MouseEvent) => {
      if (event.cancelable) {
        event.preventDefault();
      }
      if (clip.value) return;
      const obj = getPointer(event, canvasRef.value as HTMLCanvasElement);
      if (obj) {
        isDraw.value = true;
        hasDrew.value = true;
        startX.value = obj.x;
        startY.value = obj.y;
        const ctx = canvasTxt.value as CanvasRenderingContext2D
        ctx.lineCap = "round"; // 设置或返回线条的结束端点样式。
        ctx.lineJoin = "round"; // 设置或返回两条线相交时，所创建的拐角类型。
        ctx.strokeStyle = props.lineColor;
        ctx.lineWidth = props.lineWidth;
        drawLine(obj, "source-over");
      }
      const { tapmove, tapend } = touchEvent();
      const canvasEl = canvasRef.value as HTMLCanvasElement
      canvasEl.addEventListener(tapmove, drawMove, { passive: false });
      canvasEl.addEventListener(tapend, drawEnd, { passive: false });
    }
    // 鼠标移动
    const drawMove = (event:TouchEvent|MouseEvent) => {
      if (event.cancelable) {
        event.preventDefault();
      }
      if (clip.value || !isDraw.value) return;
      const obj = getPointer(event, canvasRef.value as HTMLCanvasElement);
      if (obj) {
        drawLine(obj, null);
        startY.value = obj.y;
        startX.value = obj.x;
      }
    }
    // 绘制结束
    const drawEnd = (event:TouchEvent|MouseEvent) => {
      if (event.cancelable) {
        event.preventDefault();
      }
      if (clip.value) return;
      const canvas = canvasRef.value as HTMLCanvasElement
      const { tapmove, tapend } = touchEvent();
      canvas.removeEventListener(tapmove, drawMove);
      canvas.removeEventListener(tapend, drawEnd);
    }
    const drawLine = ({ x, y }:Coordinate, globalCompositeOperation:GlobalCompositeOperation|null) => {
      const ctx = canvasTxt.value as CanvasRenderingContext2D
      if (globalCompositeOperation) {
        // 设置或返回如何将一个源（新的）图像绘制到目标（已有的）的图像上。
        // 启用橡皮擦后会设置成destination-out，所以重新绘制时需要设置回默认值source-over
        ctx.globalCompositeOperation = globalCompositeOperation;
      }
      ctx.beginPath();
      ctx.moveTo(startX.value, startY.value);
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.closePath();
    }
    // isDraw false冻结画笔
    const closure = () => {
      isDraw.value = false;
    }
    // 创建图片
    const createImage = () => {
      const pm = new Promise((resolve, reject) => {
        if (!hasDrew.value) {
          reject(`Warning: Not Signned!`);
          return;
        }
        const canvas = canvasRef.value as HTMLCanvasElement;
        const ctx = canvasTxt.value as CanvasRenderingContext2D
        const ImgData = ctx.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        );
        ctx.globalCompositeOperation = "destination-over";
        ctx.fillStyle = props.bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        let resultImg:string = canvas.toDataURL();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.putImageData(ImgData, 0, 0);
        ctx.globalCompositeOperation = "source-over";
        if (props.crop) {
          const crop_area = getCropArea(ImgData.data);
          const crop_canvas = document.createElement("canvas");
          const crop_ctx = crop_canvas.getContext("2d", { willReadFrequently: true }) as CanvasRenderingContext2D;
          crop_canvas.width = crop_area[2] - crop_area[0];
          crop_canvas.height = crop_area[3] - crop_area[1];
          const crop_imgData = ctx.getImageData(...crop_area);
          crop_ctx.globalCompositeOperation = "destination-over";
          crop_ctx.putImageData(crop_imgData, 0, 0);
          crop_ctx.fillStyle = props.imgBgColor;
          crop_ctx.fillRect(0, 0, crop_canvas.width, crop_canvas.height);
          resultImg = crop_canvas.toDataURL();
          if (crop_canvas.width > 0 && crop_canvas.height > 0) {
            resolve(resultImg);
          } else {
            reject(`Warning: Not Signned!`);
          }
        }
        doErase(clip.value);
        resolve(resultImg);
      });
      return pm;
    }
    // 计算画布中，有图像的区域坐标
    const getCropArea = (imgData:Uint8ClampedArray):[number, number, number, number] => {
      const canvas = canvasRef.value as HTMLCanvasElement;
      var topX = canvas.width;
      var btmX = 0;
      var topY = canvas.height;
      var btmY = 0;
      for (var i = 0; i < canvas.width; i++) {
        for (var j = 0; j < canvas.height; j++) {
          var pos = (i + canvas.width * j) * 4;
          if (
            imgData[pos] > 0 ||
            imgData[pos + 1] > 0 ||
            imgData[pos + 2] ||
            imgData[pos + 3] > 0
          ) {
            btmY = Math.max(j, btmY);
            btmX = Math.max(i, btmX);
            topY = Math.min(j, topY);
            topX = Math.min(i, topX);
          }
        }
      }
      topX++;
      btmX++;
      topY++;
      btmY++;
      return [topX, topY, btmX, btmY];
    }
    // 清空画布
    const handleClear = () => {
      clear();
      emit("on-clear");
    }
    // 完成
    const ImgSrc = ref('')
    const handleDone = () => {
      let canvas = canvasRef.value as HTMLCanvasElement;;
      let flag = true;
      if (props.beforeDone && typeof props.beforeDone === "function") {
        flag = props.beforeDone(canvas);
      }
      if (flag) {
        createImage().then(res => {
          ImgSrc.value = res as string;
          emit("on-done", ImgSrc.value);
        }).catch(() => {
          ImgSrc.value = '';
          emit("on-done", '');
        });
      }
    }
    // 清空画布方法，供外部调用
    const clear = () => {
      hasDrew.value = false;
      doErase(clip.value);
      const canvasEl = canvasRef.value as HTMLCanvasElement
      (canvasTxt.value as CanvasRenderingContext2D).clearRect(
        0,
        0,
        canvasEl.width,
        canvasEl.height
      );
      ImgSrc.value = "";
      closure();
    }
    // 完成签名方法，供外部调用
    const done = async () => {
      let ImgSrc = await createImage();
      return ImgSrc;
    }
    // 移除橡皮擦效果
    const removeClip = (canvas:HTMLCanvasElement) => {
      const { tapstart } = touchEvent();
      (canvasTxt.value as CanvasRenderingContext2D).globalCompositeOperation = "source-over";
      canvas.removeEventListener(tapstart, tapdownHandler);
    }

    //通过修改globalCompositeOperation来达到擦除的效果
    const initClip = (canvas:HTMLCanvasElement) => {
      if (!props.erasable) return;
      const { tapstart } = touchEvent();
      const ctx = canvasTxt.value as CanvasRenderingContext2D
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth = props.eraserRadius * 2;
      // destination-out 在源图像之外显示目标图像。只有源图像之外的目标图像部分会被显示，源图像是透明的。
      ctx.globalCompositeOperation = "destination-out";
      canvas.addEventListener(tapstart, tapdownHandler, {
        passive: false
      });
    }
    // 鼠标或触屏按下事件
    const clipX = ref(0)
    const clipY = ref(0)
    const tapdownHandler = (event:TouchEvent|MouseEvent) => {
      event.preventDefault();
      const canvas = canvasRef.value as HTMLCanvasElement
      const { tapmove, tapend } = touchEvent();
      let x2, y2;
      let area = getPointer(event, canvas) as Coordinate;
      clipX.value = area.x;
      clipY.value = area.y;

      drawHyaline(clipX.value, clipY.value);
      // 监听鼠标或触屏移动
      canvas.addEventListener(tapmove, tapmoveHandler, { passive: false });
      // 监听鼠标或触屏抬起
      canvas.addEventListener(tapend, tapendHandler, { passive: false });
      function tapendHandler() {
        canvas.removeEventListener(tapmove, tapmoveHandler);
        canvas.removeEventListener(tapend, tapendHandler);
      }
      function tapmoveHandler(e:TouchEvent|MouseEvent) {
        e.preventDefault();
        area = getPointer(e, canvas) as Coordinate;
        if (area) {
          x2 = area.x;
          y2 = area.y;
          drawHyaline(clipX.value, clipY.value, x2, y2);
          clipX.value = x2;
          clipY.value = y2;
        }
      }
    }
    // 绘制擦除线
    const drawHyaline = (clipX:number, clipY:number, x2?:number, y2?:number) => {
      const ctx = canvasTxt.value as CanvasRenderingContext2D
      ctx.save();
      ctx.beginPath();
      if (x2!==undefined && y2!==undefined) {
        ctx.arc(clipX, clipY, props.eraserRadius, 0, 2 * Math.PI);
        ctx.fill();
      } else {
        ctx.moveTo(clipX, clipY);
        ctx.lineTo(x2 as number, y2 as number);
        ctx.stroke();
      }
      ctx.restore();
    }

    defineExpose({
      clear,
      done
    })
</script>
