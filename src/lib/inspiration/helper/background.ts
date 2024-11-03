import _ from 'lodash-es'
import Konva from "konva"
import { RenderContext } from "../context"
import { BaseRender, Render } from "../common/render"

export interface BackgroundOption {
    size: number
  }
  export class BgGround extends BaseRender implements Render {
    static override readonly name = 'BgGround'
  
    option: BackgroundOption
  
    constructor(context: RenderContext, layer: Konva.Layer, option: BackgroundOption) {
      super(context, layer)
  
      this.option = option
  
      this.group.listening(true);
      this.group.on('click',function(e){
          this.context.emit('sceneClick',e);
      })
    }
  
    override draw() {
      if (this.context.config.showBackground) {
        this.clear()
  
        // stage 状态
        const stageState = this.context.getStageState()
  
        // 相关参数
  
        // 格子大小
        const cellSize = this.option.size
  
        // 列数
        const lenX = Math.ceil(this.context.toStageValue(stageState.width + this.context.rulerSize) / cellSize)
        // 行数
        const lenY = Math.ceil(this.context.toStageValue(stageState.height + this.context.rulerSize) / cellSize)
  
        const startX = -Math.ceil(this.context.toStageValue(stageState.x) / cellSize)
        const startY = -Math.ceil(this.context.toStageValue(stageState.y) / cellSize)
  
        const group = new Konva.Group()
  
        group.add(
          new Konva.Rect({
            name: this.constructor.name,
            x: 0,
            y: 0,
            width: stageState.width,
            height: stageState.height,
            stroke: 'rgba(255,0,0,0.2)',
            strokeWidth: this.context.toStageValue(2),
            listening: false,
            dash: [this.context.toStageValue(6), this.context.toStageValue(6)]
          })
        )
  
        // 竖线
        for (let x = startX; x < lenX + startX + 2; x++) {
          group.add(
            new Konva.Line({
              name: this.constructor.name,
              points: _.flatten([
                [cellSize * x, this.context.toStageValue(-stageState.y + this.context.rulerSize)],
                [
                  cellSize * x,
                  this.context.toStageValue(stageState.height - stageState.y + this.context.rulerSize)
                ]
              ]),
              stroke: '#ddd',
              strokeWidth: this.context.toStageValue(1),
              listening: false
            })
          )
        }
  
        // 横线
        for (let y = startY; y < lenY + startY + 2; y++) {
          group.add(
            new Konva.Line({
              name: this.constructor.name,
              points: _.flatten([
                [this.context.toStageValue(-stageState.x + this.context.rulerSize), cellSize * y],
                [
                  this.context.toStageValue(stageState.width - stageState.x + this.context.rulerSize),
                  cellSize * y
                ]
              ]),
              stroke: '#ddd',
              strokeWidth: this.context.toStageValue(1),
              listening: false
            })
          )
        }
  
        this.group.add(group)
      }else{
        this.clear();
      }    
    }
  }
  