import Konva from "konva";
import { BaseRender, Render } from "../common/render";
import { RenderContext } from "../context";
import _  from 'lodash-es'
import { DefaultValues } from "../common/const";

export interface RulerDrawOption {
    size: number
  }
export class Ruler extends BaseRender implements Render {
    static override readonly name = 'ruler'

    option: RulerDrawOption 
    constructor(context: RenderContext, layer: Konva.Layer,option: RulerDrawOption)
    {
        super(context, layer);
        this.option = option
        this.group.listening(false)
        
    }
    override draw() {
    if (this.context.config.showRuler) {
        this.clear()
  
        // stage 状态
        const stageState = this.context.getStageState()
  
        // 格子大小
        const cellSize = 20
  
        const fontSizeMax = 12
  
        // 列数
        const lenX = Math.ceil(this.context.toStageValue(stageState.width) / cellSize)
        // 行数
        const lenY = Math.ceil(this.context.toStageValue(stageState.height) / cellSize)
  
        const startX = -Math.ceil(
          this.context.toStageValue(stageState.x - this.option.size) / cellSize
        )
        const startY = -Math.ceil(
          this.context.toStageValue(stageState.y - this.option.size) / cellSize
        )
  
        const group = new Konva.Group()
  
        // 比例尺 - 上
        const groupTop = new Konva.Group({
          x: this.context.toStageValue(-stageState.x + this.option.size),
          y: this.context.toStageValue(-stageState.y),
          width: this.context.toStageValue(
            stageState.width - this.option.size + this.context.rulerSize
          ),
          height: this.context.toStageValue(this.option.size)
        })
  
        // 比例尺 - 左
        const groupLeft = new Konva.Group({
          x: this.context.toStageValue(-stageState.x),
          y: this.context.toStageValue(-stageState.y + this.option.size),
          width: this.context.toStageValue(this.option.size),
          height: this.context.toStageValue(
            stageState.height - this.option.size + this.context.rulerSize
          )
        })
  
        {
          groupTop.add(
            // 上
            new Konva.Rect({
              name: this.constructor.name,
              x: 0,
              y: 0,
              width: groupTop.width(),
              height: groupTop.height(),
              fill: '#ddd'
            })
          )
  
          for (let x = lenX + startX - 1; x >= startX; x--) {
            const nx = -groupTop.x() + cellSize * x
            const long = (this.context.toStageValue(this.option.size) / 5) * 4
            const short = (this.context.toStageValue(this.option.size) / 5) * 3
  
            if (nx >= 0) {
              groupTop.add(
                new Konva.Line({
                  name: this.constructor.name,
                  points: _.flatten([
                    [nx, x % 5 ? long : short],
                    [nx, this.context.toStageValue(this.option.size)]
                  ]),
                  stroke: '#999',
                  strokeWidth: this.context.toStageValue(1),
                  listening: false
                })
              )
  
              if (x % 5 === 0) {
                let fontSize = fontSizeMax
  
                const text = new Konva.Text({
                  name: this.constructor.name,
                  y: this.context.toStageValue(this.option.size / 2 - fontSize),
                  text: (x * cellSize).toString(),
                  fontSize: this.context.toStageValue(fontSize),
                  fill: '#999',
                  align: 'center',
                  verticalAlign: 'middle',
                  lineHeight: 1.6
                })
  
                while (
                  this.context.toStageValue(text.width()) >
                  this.context.toStageValue(cellSize) * 4.6
                ) {
                  fontSize -= 1
                  text.fontSize(this.context.toStageValue(fontSize))
                  text.y(this.context.toStageValue(this.option.size / 2 - fontSize))
                }
                text.x(nx - text.width() / 2)
                groupTop.add(text)
              }
            }
          }
        }
  
        {
          groupLeft.add(
            // 左
            new Konva.Rect({
              name: this.constructor.name,
              x: 0,
              y: 0,
              width: groupLeft.width(),
              height: groupLeft.height(),
              fill: '#ddd'
            })
          )
  
          for (let y = lenY + startY - 1; y >= startY; y--) {
            const ny = -groupLeft.y() + cellSize * y
            const long = (this.context.toStageValue(this.option.size) / 5) * 4
            const short = (this.context.toStageValue(this.option.size) / 5) * 3
  
            if (ny >= 0) {
              groupLeft.add(
                new Konva.Line({
                  name: this.constructor.name,
                  points: _.flatten([
                    [y % 5 ? long : short, ny],
                    [this.context.toStageValue(this.option.size), ny]
                  ]),
                  stroke: '#999',
                  strokeWidth: this.context.toStageValue(1),
                  listening: false
                })
              )
  
              if (y % 5 === 0) {
                let fontSize = fontSizeMax
  
                const text = new Konva.Text({
                  name: this.constructor.name,
                  x: 0,
                  y: ny,
                  text: (y * cellSize).toString(),
                  fontSize: this.context.toStageValue(fontSize),
                  fill: '#999',
                  align: 'right',
                  verticalAlign: 'bottom',
                  lineHeight: 1.6,
                  wrap: 'none'
                })
  
                while (text.width() > short * 0.8) {
                  fontSize -= 1
                  text.fontSize(this.context.toStageValue(fontSize))
                }
                text.y(ny - text.height() / 2)
                text.width(short - this.context.toStageValue(1))
                groupLeft.add(text)
              }
            }
          }
        }
  
        group.add(
          // 角
          new Konva.Rect({
            name: this.constructor.name,
            x: this.context.toStageValue(-stageState.x),
            y: this.context.toStageValue(-stageState.y),
            width: this.context.toStageValue(this.option.size),
            height: this.context.toStageValue(this.option.size),
            fill: '#ddd'
          })
        )
  
        group.add(groupTop)
        group.add(groupLeft)
  
        this.group.add(group)
      }else{
        this.clear();
      }
    }
}