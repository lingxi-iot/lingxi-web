import Konva from 'konva'
import { nanoid } from 'nanoid'
//

//
import * as Helpers from '../helper'
import { Handler } from '../common/handler'
import { RenderContext } from '../context'
import { AssetInfoPoint, LinkDrawPoint } from '../common/render'
import { AssetType } from '../common/enums'

export class OutsideHandler implements Handler {
  static readonly name = 'DragOutside'

  private context: RenderContext
  constructor(context: RenderContext) {
    this.context = context
  }

  handlers = {
    dom: {
      dragenter: (e: GlobalEventHandlersEventMap['dragenter']) => {
        this.context.stage.setPointersPositions(e)

        // 更新参考线
        this.context.redraw([Helpers.RefLine.name])
      },
      dragover: (e: GlobalEventHandlersEventMap['dragover']) => {
        this.context.stage.setPointersPositions(e)

        // 更新参考线
        this.context.redraw([Helpers.RefLine.name])
      },
      drop: (e: GlobalEventHandlersEventMap['drop']) => {
        const src = e.dataTransfer?.getData('src')

        // 接收连接点信息
        let morePoints: AssetInfoPoint[] = []
        const morePointsTxt = e.dataTransfer?.getData('points') ?? '[]'

        try {
          morePoints = JSON.parse(morePointsTxt)
        } catch (e) {
          console.error(e)
        }

        const type = e.dataTransfer?.getData('type')

        if (src && type) {
          // stage 状态
          const stageState = this.context.getStageState()

          this.context.stage.setPointersPositions(e)

          const pos = this.context.stage.getPointerPosition()
          if (pos) {
            this.context.assetTool[
              type === 'svg'
                ? `loadSvg`
                : type === 'gif'
                  ? 'loadGif'
                  : type === 'json'
                    ? 'loadJson'
                    : 'loadImg'
            ](src).then((target: Konva.Image | Konva.Group) => {
      
              let group = null
              // 默认连接点
              let points: AssetInfoPoint[] = []

              // 图片素材
              if (target instanceof Konva.Image) {
                group = new Konva.Group({
                  id: nanoid(),
                  width: target.width(),
                  height: target.height(),
                  name: 'asset',
                  assetType: AssetType.Image,
                  draggable: true
                })

                group.add(target)

                points = [
                  // 左
                  { x: 0, y: group.height() / 2, direction: 'left' },
                  // 右
                  {
                    x: group.width(),
                    y: group.height() / 2,
                    direction: 'right'
                  },
                  // 上
                  { x: group.width() / 2, y: 0, direction: 'top' },
                  // 下
                  {
                    x: group.width() / 2,
                    y: group.height(),
                    direction: 'bottom'
                  }
                ]
              } else {
                // json 素材
                target.id(nanoid())
                target.setAttrs({
                  name: 'asset',
                  assetType: AssetType.Json,
                  draggable: true
                })
                group = target
                this.context.linkTool.groupIdCover(group)
              }

              target.setAttrs({
                x: 0,
                y: 0
              })

              this.context.scene.add(group)

              const x = this.context.toStageValue(pos.x - stageState.x) - group.width() / 2
              const y = this.context.toStageValue(pos.y - stageState.y) - group.height() / 2

              group.setAttrs({
                x,
                y
              })

              // 自定义连接点 覆盖 默认连接点
              if (Array.isArray(morePoints) && morePoints.length > 0) {
                points = morePoints
              }

              // 连接点信息
              group.setAttrs({
                points: points.map(
                  (o) =>
                    ({
                      ...o,
                      id: nanoid(),
                      groupId: group.id(),
                      visible: false,
                      pairs: [],
                      direction: o.direction
                    }) as LinkDrawPoint
                )
              })

              // 连接点（锚点）
              for (const point of group.getAttr('points') ?? []) {
                group.add(
                  new Konva.Circle({
                    name: 'link-anchor',
                    id: point.id,
                    x: point.x,
                    y: point.y,
                    radius: this.context.toStageValue(1),
                    stroke: 'rgba(0,0,255,1)',
                    strokeWidth: this.context.toStageValue(2),
                    visible: false,
                    direction: point.direction
                  })
                )
              }

              group.on('mouseenter', () => {
                // 显示 连接点
                this.context.linkTool.pointsVisible(true, group)
              })

              // hover 框（多选时才显示）
              group.add(
                new Konva.Rect({
                  id: 'hoverRect',
                  width: target.width(),
                  height: target.height(),
                  fill: 'rgba(0,255,0,0.3)',
                  visible: false
                })
              )

              group.on('mouseleave', () => {
                // 隐藏 连接点
                this.context.linkTool.pointsVisible(false, group)

                // 隐藏 hover 框
                group.findOne('#hoverRect')?.visible(false)
              })

              // 更新历史
              this.context.updateHistory()

              // 重绘
              //TODO 待确认
              //this.context.redraw([Helpers.PreviewDraw.name])
            })
          }
        }
      }
    }
  }
}
