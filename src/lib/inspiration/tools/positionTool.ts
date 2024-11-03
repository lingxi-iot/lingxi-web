import { RenderContext } from "../context"
import * as Helpers from "../helper"

export class PositionTool {
  static readonly name = 'PositionTool'

  private context: RenderContext
  constructor(context: RenderContext) {
    this.context = context
  }
  // 恢复位置大小
  positionZoomReset() {
    this.context.stage.setAttrs({
      scale: { x: 1, y: 1 }
    })

    this.context.emit('scale-change', 1)

    this.positionReset()
  }

  // 恢复位置
  positionReset() {
    
    this.context.stage.setAttrs({
      x: this.context.rulerSize,
      y: this.context.rulerSize
    })

    // 重绘
    this.context.redraw([
      Helpers.BgGround.name,
      Helpers.Graph.name,
      Helpers.Link.name,
      Helpers.Ruler.name,
      Helpers.RefLine.name
    ])
  }

  // 更新中心位置
  updateCenter(x = 0, y = 0) {
    // stage 状态
    const stageState = this.context.getStageState()

    // 提取节点
    const nodes = this.context.scene.getChildren((node) => {
      return !this.context.ignore(node)
    })

    // 计算节点占用的区域（计算起点即可）
    let minX = 0
    let minY = 0
    for (const node of nodes) {
      const x = node.x()
      const y = node.y()

      if (x < minX) {
        minX = x
      }
      if (y < minY) {
        minY = y
      }
    }

    // 居中画布
    this.context.stage.setAttrs({
      x:
        stageState.width / 2 -
        this.context.toBoardValue(minX) -
        this.context.toBoardValue(x) +
        this.context.rulerSize,
      y:
        stageState.height / 2 -
        this.context.toBoardValue(minY) -
        this.context.toBoardValue(y) +
        this.context.rulerSize
    })
    // 重绘
    this.context.redraw([
        Helpers.BgGround.name,
        Helpers.Graph.name,
        Helpers.Link.name,
        Helpers.Ruler.name,
        Helpers.RefLine.name
    ])
  }
}
