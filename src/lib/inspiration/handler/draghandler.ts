import Konva from "konva"
import { Handler } from "../common/handler"
import { RenderContext } from "../context"
import { MouseButton } from "../common/enums"
import * as Helpers from "../helper/index"
import { isInteger } from "lodash-es"

export class DragHandler implements Handler {
  static readonly name = 'Drag'

  private context: RenderContext
  constructor(context: RenderContext) {
    this.context = context
  }
  // zoom 速度

  // 右键是否按下
  mousedownRight = false
  // 右键按下 stage 位置
  mousedownStagePos = { x: 0, y: 0 }
  // 右键按下位置
  mousedownPointerPos = { x: 0, y: 0 }

  handlers = {
    stage: {
      
    mousedown: (e: Konva.KonvaEventObject<GlobalEventHandlersEventMap['mousedown']>) => {
      // 拐点操作中，防止异常拖动
      // 新建图形并拖动中
      if (
        !(this.context.draws[Helpers.Link.name] as Helpers.Link).state.linkManualing &&
        !this.context.graphType
      ) {
      //console.log(e.evt.offsetX+":"+e.evt.offsetY)
      if (
        e.evt.button === MouseButton.Right ||
        (e.evt.ctrlKey && e.evt.button === MouseButton.Left) // mac 拖动画布快捷键
      ) {
       document.body.style.cursor = 'pointer'
        // stage 状态
        const stageState = this.context.getStageState()

        // 鼠标右键
        this.mousedownRight = true

        this.mousedownStagePos = { x: stageState.x, y: stageState.y }

        const pos = this.context.stage.getPointerPosition()
        //console.log(pos)
        if (pos) {
          this.mousedownPointerPos = { x: pos.x, y: pos.y }
        }


      }
       }
    }
    ,
    
    mouseup: () => {
      this.mousedownRight = false
      document.body.style.cursor = 'Default'
    },
    mousemove: () => {
      
      if (this.mousedownRight) {
        // 鼠标右键拖动
        const pos = this.context.stage.getPointerPosition()
        if (pos) {
          const offsetX = pos.x - this.mousedownPointerPos.x
          const offsetY = pos.y - this.mousedownPointerPos.y
 
          // 移动 stage
          this.context.stage.position({
            x: this.mousedownStagePos.x + offsetX,
            y: this.mousedownStagePos.y + offsetY
          })
 
          // 重绘
          this.context.redraw([
            Helpers.BgGround.name,
            Helpers.Ruler.name,
            Helpers.Link.name,
            Helpers.Graph.name
          ])
        }
      }
    },
    wheel: (e: Konva.KonvaEventObject<GlobalEventHandlersEventMap['wheel']>) => {
     // console.log(e.type + ":" + e.evt.deltaX + ":" + e.evt.deltaY)
      if (isInteger(e.evt.deltaY)) {
        const pos = this.context.getStageState();
        if (pos) {

          document.body.style.cursor = 'pointer'
          const offsetX = e.evt.deltaX
          const offsetY = e.evt.deltaY

          // 移动 stage
          this.context.stage.position({
            x: pos.x - offsetX,
            y: pos.y - offsetY
          })

          // 重绘
          this.context.redraw([
            Helpers.BgGround.name,
            Helpers.Ruler.name,
            Helpers.Link.name,
            Helpers.Graph.name,
          ])
          document.body.style.cursor = 'Default'
        }
      }
    }
  },
    
  }
}

