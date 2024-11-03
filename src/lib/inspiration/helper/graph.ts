import Konva from 'konva'
import { BaseRender, GraphAnchor, GraphType, Render } from '../common/render'
import { RenderContext } from '../context'
import { AssetType } from '../common/enums'
import * as Helpers from '../helper'
import * as Graphs from '../graphs'
//



export interface GraphDrawState {
  /**
   * 调整中
   */
  adjusting: boolean

  /**
   * 调整中 id
   */
  adjustGroupId: string

  /**
   * 调整中 调整点
   */
  adjustAnchor?: GraphAnchor

  /**
   * 鼠标按下 调整点 位置
   */
  startPointCurrent: Konva.Vector2d

  /**
   * 图形 group
   */
  graphCurrent?: Konva.Group

  /**
   * 图形 group 镜像，用于计算位置、大小的偏移
   */
  graphCurrentSnap?: Konva.Group
}

export interface GraphDrawOption {
  //
}

export class Graph extends BaseRender implements Render {
  static override readonly name = 'Graph'

  option: {}

  on = {}

  state: GraphDrawState = {
    adjusting: false,
    adjustGroupId: '',
    startPointCurrent: { x: 0, y: 0 }
  }

  constructor(context: RenderContext, layer: Konva.Layer, option: GraphDrawOption) {
    super(context, layer)

    this.option = option

    this.group.name(this.constructor.name)
  }

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

  override draw() {
    this.clear()
    // 所有图形
    const graphs = this.context.scene
      .find('.asset')
      .filter((o) => o.attrs.assetType === AssetType.Graph) as Konva.Group[]

    for (const graph of graphs) {
      // 非选中状态才显示 调整点
      if (!graph.attrs.selected) {
        let anchorAndShadows: {
          anchor: GraphAnchor
          anchorShadow: Konva.Circle
          shape?: Konva.Shape | undefined
        }[] = []

        switch (graph.attrs.graphType) {
          case GraphType.Circle:
            {
              const res = Graphs.Circle.draw(graph, this.context, this.state.adjustAnchor)

              anchorAndShadows = res.anchorAndShadows
            }
            break
          case GraphType.Rect:
            {
              const res = Graphs.Rect.draw(graph, this.context, this.state.adjustAnchor)

              anchorAndShadows = res.anchorAndShadows
            }
            break
          case GraphType.Line:
            {
              const res = Graphs.Line.draw(graph, this.context, this.state.adjustAnchor)

              anchorAndShadows = res.anchorAndShadows
            }
            break

          case GraphType.Curve:
            {
              const res = Graphs.Curve.draw(graph, this.context, this.state.adjustAnchor)

              anchorAndShadows = res.anchorAndShadows
            }
            break
        }

        for (const anchorAndShadow of anchorAndShadows) {
          const { shape } = anchorAndShadow

          if (shape) {
            // 鼠标按下
            shape.on('mousedown', () => {
              const pos = this.getStagePoint()
              if (pos) {
                this.state.adjusting = true
                this.state.adjustAnchor = shape.attrs.anchor
                this.state.adjustGroupId = graph.id()

                this.state.startPointCurrent = pos

                this.state.graphCurrent = graph
                this.state.graphCurrentSnap = graph.clone()

                shape.setAttr('adjusting', true)

                if (this.state.adjustAnchor) {
                  switch (shape.attrs.anchor?.type) {
                    case GraphType.Line:
                      // 使用 直线、折线 静态处理方法
                      Graphs.Line.adjustStart(this.context, graph, this.state.adjustAnchor, pos)
                      break
                    case GraphType.Curve:
                      // 使用 直线、折线 静态处理方法
                      Graphs.Curve.adjustStart(this.context, graph, this.state.adjustAnchor, pos)
                      break
                  }
                }
              }
            })

            // 调整中
            this.context.stage.on('mousemove', () => {
              if (this.state.adjusting && this.state.graphCurrent && this.state.graphCurrentSnap) {
                if (shape.attrs.adjusting) {
                  // 调整 圆/椭圆 图形
                  const pos = this.getStagePoint(true)
                  if (pos) {
                    switch (shape.attrs.anchor?.type) {
                      case GraphType.Circle:
                        // 使用 圆/椭圆 静态处理方法
                        Graphs.Circle.adjust(
                          this.context,
                          graph,
                          this.state.graphCurrentSnap,
                          shape,
                          anchorAndShadows,
                          this.state.startPointCurrent,
                          pos
                        )
                        break
                      case GraphType.Rect:
                        // 使用 圆/椭圆 静态处理方法
                        Graphs.Rect.adjust(
                          this.context,
                          graph,
                          this.state.graphCurrentSnap,
                          shape,
                          anchorAndShadows,
                          this.state.startPointCurrent,
                          pos
                        )
                        break
                      case GraphType.Line:
                        // 使用 直线、折线 静态处理方法
                        Graphs.Line.adjust(
                          this.context,
                          graph,
                          this.state.graphCurrentSnap,
                          shape,
                          anchorAndShadows,
                          this.state.startPointCurrent,
                          pos
                        )
                        break
                      case GraphType.Curve:
                        // 使用 直线、折线 静态处理方法
                        Graphs.Curve.adjust(
                          this.context,
                          graph,
                          this.state.graphCurrentSnap,
                          shape,
                          anchorAndShadows,
                          this.state.startPointCurrent,
                          pos
                        )
                        break
                    }

                    // 重绘
                    this.context.redraw([
                      Helpers.Graph.name,
                      Helpers.Link.name,
                    ])
                  }
                }
              }
            })

            // 调整结束
            this.context.stage.on('mouseup', () => {
              if (shape.attrs.adjusting) {
                // 更新历史
                this.context.updateHistory()

                // 重绘
                this.context.redraw([
                  Helpers.Graph.name,
                  Helpers.Link.name,
                ])
              }
              this.state.adjusting = false
              this.state.adjustAnchor = undefined
              this.state.adjustGroupId = ''

              // 恢复显示所有 调整点
              for (const { shape } of anchorAndShadows) {
                if (shape) {
                  shape.opacity(1)
                  shape.setAttr('adjusting', false)
                  if (
                    [GraphType.Line, GraphType.Curve].includes(shape.attrs.anchor?.type)
                  ) {
                    if (shape.attrs.anchor.adjusted) {
                      shape.fill('rgba(0,0,0,0.4)')
                    } else {
                      shape.fill('rgba(0,0,255,0.2)')
                    }
                  } else {
                    shape.stroke('rgba(0,0,255,0.2)')
                  }
                }

                document.body.style.cursor = 'default'
              }

              // 销毁 镜像
              this.state.graphCurrentSnap?.destroy()

              // 对齐线清除
              this.context.attractTool.alignLinesClear()
            })

            this.group.add(shape)
          }
        }
      }
    }
  }
}