import Konva from "konva"
import { RenderContext } from "../context"
import { Handler } from "../common/handler"
import * as Helpers from '../helper'
import { isInteger } from "lodash-es"

export class ZoomHandler implements Handler {
    static readonly name = 'Zoom'
  
    private context: RenderContext
    constructor(context: RenderContext) {
      this.context = context
    }
  
    // zoom 速度
    scaleBy = 0.1
    // zoom 范围
    scaleMin = 0.2
    scaleMax = 5
  
    handlers = {
      stage: {
        wheel: (e: Konva.KonvaEventObject<GlobalEventHandlersEventMap['wheel']>) => {
          // stage 状态
          if (!isInteger(e.evt.deltaY))
          {
          const stageState = this.context.getStageState()
  
          const oldScale = stageState.scale
  
          const pos = this.context.stage.getPointerPosition()
          if (pos) {
            const mousePointTo = {
              x: (pos.x - stageState.x) / oldScale,
              y: (pos.y - stageState.y) / oldScale
            }
  
            // 滚轮方向
            const direction = e.evt.deltaY > 0 ? -1 : 1;
  
            
 
            //console.trace()
 
            const newScale = direction > 0 ? oldScale + this.scaleBy : oldScale - this.scaleBy
  
            if (newScale >= this.scaleMin && newScale < this.scaleMax) {
              // 缩放 stage
              this.context.stage.scale({ x: newScale, y: newScale })
              this.context.emit('scale-change', newScale)
  
              // 移动 stage
              this.context.stage.position({
                x: pos.x - mousePointTo.x * newScale,
                y: pos.y - mousePointTo.y * newScale
              })
  
              // 重绘
              this.context.redraw([
                Helpers.Ruler.name,
                Helpers.BgGround.name,
                Helpers.Link.name,
                Helpers.RefLine.name,
                Helpers.Graph.name,
              ])
            }
          }
        }
        }
      }
    }
  }
  