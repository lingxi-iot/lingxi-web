import Konva from 'konva'
import { Handler } from '../common/handler'
import { RenderContext } from '../context'
import  * as Graphs  from '../graphs'
import { GraphType } from '../common/render'
import * as Helpers from '../helper'

//


export class GraphHandler implements Handler {
  static readonly name = 'Graph'

  private context: RenderContext
  constructor(context: RenderContext) {
    this.context = context
  }

  /**
   * 新建图形中
   */
  graphing = false

  /**
   * 当前新建图形类型
   */
  currentGraph: Graphs.BaseGraph | undefined

  /**
   * 获取鼠标位置，并处理为 相对大小
   * @param attract 含磁贴计算
   * @returns
   */
  getStagePoint(attract = false) {
    const pos = this.context.stage.getPointerPosition()
    if (pos) {
      const stageState = this.context.getStageState()
      if (attract) {
        // 磁贴
        const { pos: transformerPos } = this.context.attractTool.attractPoint(pos)
        return {
          x: this.context.toStageValue(transformerPos.x - stageState.x),
          y: this.context.toStageValue(transformerPos.y - stageState.y)
        }
      } else {
        return {
          x: this.context.toStageValue(pos.x - stageState.x),
          y: this.context.toStageValue(pos.y - stageState.y)
        }
      }
    }
    return null
  }

  handlers = {
    stage: {
      mousedown: (e: Konva.KonvaEventObject<GlobalEventHandlersEventMap['mousedown']>) => {
        if (this.context.graphType) {
          // 选中图形类型，开始

          if (e.target === this.context.stage) {
            this.graphing = true

            this.context.selectionTool.selectingClear()

            const point = this.getStagePoint()
            if (point) {
              if (this.context.graphType === GraphType.Circle) {
                // 新建 圆/椭圆 实例
                this.currentGraph = new Graphs.Circle(this.context, point)
              } else if (this.context.graphType === GraphType.Rect) {
                // 新建 圆/椭圆 实例
                this.currentGraph = new Graphs.Rect(this.context, point)
              } else if (this.context.graphType === GraphType.Line) {
                // 新建 直线、折线
                this.currentGraph = new Graphs.Line(this.context, point)
              } else if (this.context.graphType === GraphType.Curve) {
                // 新建 曲线
                this.currentGraph = new Graphs.Curve(this.context, point)
              }
            }
          }
        }
      },
      mousemove: () => {
        if (this.graphing) {
          if (this.currentGraph) {
            const pos = this.getStagePoint(true)
            if (pos) {
              // 新建并马上调整图形
              this.currentGraph.drawMove(pos)
            }
          }
        }
      },
      mouseup: () => {
        if (this.graphing) {
          if (this.currentGraph) {
            // 调整结束
            this.currentGraph.drawEnd()
          }

          // 调整结束
          this.graphing = false

          // 清空图形类型选择
          this.context.changeGraphType()

          // 对齐线清除
          this.context.attractTool.alignLinesClear()

          // 重绘
          this.context.redraw([Helpers.Graph.name, Helpers.Link.name])
        }
      }
    }
  }
}
