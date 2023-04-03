import { buildProps } from '@/utils/props'
import { isString, isNumber } from '@/utils/utils'
import type { ExtractPropTypes } from 'vue'
export const signProps = buildProps({
  canvasWidth: Number,
  canvasHeight: Number,
  lineColor: {
    type: String,
    default: "#000"
  },
  lineWidth: {
    type: Number,
    default: 3
  },
  bgColor: {
    type: String,
    default: "#f7f7f7"
  },
  imgBgColor: {
    type: String,
    default: "transparent"
  },
  crop: {
    type: Boolean,
    default: true
  },
  footer: {
    type: Boolean,
    default: true
  },
  beforeDone: Function,
  erasable: {
    type: Boolean,
    default: true
  },
  eraserRadius: {
    type: Number,
    default: 6
  }
} as const)

export type SignProps = ExtractPropTypes<typeof signProps>

export const signEmits = {
  'on-clear': () => true,
  'on-done': (result:string) => isString(result),
  'orientationchange': (orientation:number) => isNumber(orientation),
}
export type SignEmits = typeof signEmits