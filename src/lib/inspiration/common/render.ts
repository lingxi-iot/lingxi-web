import { RenderContext } from "../context"
import Konva from "konva"
import { LinkType } from "./enums"

export interface Render {
    readonly layer: Konva.Layer

    option: {
      [index: string]: any
    }
    init: () => void
    draw: () => void
    clear: () => void
  }

export class BaseRender {
    
    protected context: RenderContext
    readonly layer: Konva.Layer
    protected group: Konva.Group
  
    constructor(context: RenderContext, layer: Konva.Layer) {
      this.context = context
      this.layer = layer
  
      this.group = new Konva.Group()
    }
  
    init() {
      this.layer.add(this.group)
      this.draw()
    }
  
    draw() {}
  
    clear() {
      // 重置
      this.group.destroy()
      // 
      const name = this.group.name()
      this.group = new Konva.Group({ name })
      this.layer.add(this.group)
    }
  }
  
 /***
 * 图形类型
 */
export enum GraphType {
  Line = 'Line', // 直线
  Curve = 'Curve', // 曲线
  Rect = 'Rect', // 矩形
  Circle = 'Circle' // 圆/椭圆形
}

/**
 * 图形 的 调整点 信息
 */
export interface GraphAnchor {
  type?: GraphType
  adjustType: string
  //
  name?: string
  groupId?: string
  //
  adjusted?: boolean
}

/**
 * 图形 的 调整点 图形、锚点关系
 */
export interface GraphAnchorShape {
  shape: Konva.Shape
  anchorShadow: Konva.Circle
}


/**
 * 连接对
 */
export interface LinkDrawPair {
  id: string
  from: {
    groupId: string
    pointId: string
    rawGroupId?: string // 预留
  }
  to: {
    groupId: string
    pointId: string
    rawGroupId?: string // 预留
  }
  disabled?: boolean // 标记为 true，算法会忽略该 pair 的画线逻辑
  linkType?: LinkType // 连接线类型
}
/**
 * 连接点
 */
export interface LinkDrawPoint {
  id: string
  groupId: string
  rawGroupId?: string // 预留
  visible: boolean
  pairs: LinkDrawPair[]
  x: number
  y: number
  direction?: 'top' | 'bottom' | 'left' | 'right' // 人为定义连接点属于元素的什么方向
  alias?: string
}

export interface AssetInfoPoint {
  x: number
  y: number
  direction?: 'top' | 'bottom' | 'left' | 'right' // 人为定义连接点属于元素的什么方向
  alias?: string
}

/**
 * 直线、折线 拐点
 */
export interface LineManualPoint {
  x: number
  y: number
  index: number
}

/**
 * 连接线 拐点
 */
export interface ManualPoint {
  x: number
  y: number
}

/**
 * 连接线 拐点 表
 */
export interface ManualPointsMap {
  [index: string]: ManualPoint[]
}
/**
 * 对齐信息
 */
export interface SortItem {
  id?: number // 有 id 就是其他节点，否则就是 选择目标
  value: number // 左、垂直中、右的 x 坐标值; 上、水平中、下的 y 坐标值；
}
export interface AssetInfoPoint {
  x: number
  y: number
  direction?: 'top' | 'bottom' | 'left' | 'right' // 人为定义连接点属于元素的什么方向
  alias?: string
}

export interface AssetInfo {
  url: string
  avatar?: string // 子素材需要额外的封面
  points?: Array<AssetInfoPoint>
}