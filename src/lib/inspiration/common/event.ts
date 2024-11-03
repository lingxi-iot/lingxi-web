import Konva from "konva";

export type RenderEvents = {
    ['history-change']: { records: string[]; index: number }
    ['selection-change']: Konva.Node[]
    ['debug-change']: boolean
    ['link-type-change']: LinkType
    ['scale-change']: number
    ['loading']: boolean
    ['graph-type-change']: GraphType | undefined
    ['stage-selected']:boolean
  }

  // 连接线 类型
export enum LinkType {
    'auto' = 'auto',
    'straight' = 'straight', // 直线
    'manual' = 'manual' // 手动折线
  }

/**
 * 图形类型
 */
export enum GraphType {
    Line = 'Line', // 直线
    Curve = 'Curve', // 曲线
    Rect = 'Rect', // 矩形
    Circle = 'Circle' // 圆/椭圆形
  }
  export enum EventState {
    IDLE = 'idle',
    INIT = 'init',
  }
