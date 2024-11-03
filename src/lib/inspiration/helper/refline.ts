import _ from 'lodash-es'
import Konva from 'konva'
import { BaseRender, Render } from '../common/render'
import { Handler } from '../common/handler'
import { RenderContext } from '../context'
//


export interface RefLineOption {
  padding: number
}

export class RefLine extends BaseRender implements Render, Handler {
  static override readonly name = 'refLine'

  option: RefLineOption

  constructor(context: RenderContext, layer: Konva.Layer, option: RefLineOption) {
    super(context, layer)

    this.option = option

    this.group.listening(false)
  }

  override draw() {
    if (this.context.config.showRefLine) {
      this.clear()

      // stage 状态
      const stageState = this.context.getStageState()

      const group = new Konva.Group()

      const pos = this.context.stage.getPointerPosition()
      if (pos) {
        if (pos.y >= this.option.padding) {
          // 横
          group.add(
            new Konva.Line({
              name: this.constructor.name,
              points: _.flatten([
                [
                  this.context.toStageValue(-stageState.x),
                  this.context.toStageValue(pos.y - stageState.y)
                ],
                [
                  this.context.toStageValue(stageState.width - stageState.x + this.context.rulerSize),
                  this.context.toStageValue(pos.y - stageState.y)
                ]
              ]),
              stroke: 'rgba(255,0,0,0.2)',
              strokeWidth: this.context.toStageValue(1),
              listening: false
            })
          )
        }

        if (pos.x >= this.option.padding) {
          // 竖
          group.add(
            new Konva.Line({
              name: this.constructor.name,
              points: _.flatten([
                [
                  this.context.toStageValue(pos.x - stageState.x),
                  this.context.toStageValue(-stageState.y)
                ],
                [
                  this.context.toStageValue(pos.x - stageState.x),
                  this.context.toStageValue(stageState.height - stageState.y + this.context.rulerSize)
                ]
              ]),
              stroke: 'rgba(255,0,0,0.2)',
              strokeWidth: this.context.toStageValue(1),
              listening: false
            })
          )
        }
      }
      this.group.add(group)
    }
  }

  handlers = {
    dom: {
      mousemove: () => {
        // 更新参考线
        this.draw()
      },
      mouseout: () => {
        // 清除参考线
        this.clear()
      }
    }
  }
}
