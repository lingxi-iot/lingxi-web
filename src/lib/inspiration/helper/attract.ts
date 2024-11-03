import _ from 'lodash-es'
import Konva from 'konva'
//
import * as Helpers from '../helper'
import { BaseRender, Render } from '../common/render'
import { RenderContext } from '../context'

export class Attract extends BaseRender implements Render {
  static override readonly name = 'Attract'

  option: {}

  on = {}

  constructor(context: RenderContext, layer: Konva.Layer, option: any) {
    super(context, layer)

    this.option = option

    this.group.name(this.constructor.name)
  }

  override draw() {
    this.clear()

    if (this.context.debug) {
      // stage 状态
      const stageState = this.context.getStageState()

      const groups = this.context.scene.find('.asset') as Konva.Group[]
      const lastGroup = groups.pop()

      if (lastGroup) {
        this.context.selectionTool.selectingNodes = [lastGroup]

        const rect = lastGroup.getClientRect()
        const { sortX, sortY } = this.context.attractTool.getSortItems(rect)
        for (const x of sortX) {
          this.group.add(
            new Konva.Line({
              name: this.constructor.name,
              points: _.flatten([
                [x.value, this.context.toStageValue(this.context.rulerSize - stageState.y)],
                [
                  x.value,
                  this.context.toStageValue(this.context.rulerSize - stageState.y + stageState.height)
                ]
              ]),
              stroke: 'rgba(0,200,0,1)',
              strokeWidth: 1,
              dash: [4, 4],
              listening: false
            })
          )
        }
        for (const y of sortY) {
          this.group.add(
            new Konva.Line({
              name: this.constructor.name,
              points: _.flatten([
                [this.context.toStageValue(this.context.rulerSize - stageState.x), y.value],
                [
                  this.context.toStageValue(this.context.rulerSize - stageState.x + stageState.width),
                  y.value
                ]
              ]),
              stroke: 'rgba(0,200,0,1)',
              strokeWidth: 1,
              dash: [4, 4],
              listening: false
            })
          )
        }
      }
    }
  }
}
