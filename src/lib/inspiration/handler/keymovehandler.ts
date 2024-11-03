import { RenderContext } from "../context"
import { Handler } from "../common/handler.ts"
import * as Helpers from "../helper"
import {MoveKey} from "../common/enums.ts"
import _ from "lodash-es"

export class KeyMoveHandler implements Handler {
    static readonly name = 'KeyMove'
  
    private context: RenderContext
    constructor(context: RenderContext) {
      this.context = context
    }
  
    speed = 1
    speedMax = 20
  
    change = _.debounce(() => {
      // 更新历史
      this.context.updateHistory()
    }, 200)
  
    handlers = {
      dom: {
        keydown: (e: GlobalEventHandlersEventMap['keydown']) => {
          if (!e.ctrlKey) {
            if (
              Object.values(MoveKey)
                .map((o) => o.toString())
                .includes(e.code)
            ) {
              if (e.code === MoveKey.Up) {
                this.context.selectionTool.selectingNodesMove({ x: 0, y: -this.speed })
              } else if (e.code === MoveKey.Left) {
                this.context.selectionTool.selectingNodesMove({ x: -this.speed, y: 0 })
              } else if (e.code === MoveKey.Right) {
                this.context.selectionTool.selectingNodesMove({ x: this.speed, y: 0 })
              } else if (e.code === MoveKey.Down) {
                this.context.selectionTool.selectingNodesMove({ x: 0, y: this.speed })
              }
  
              if (this.speed < this.speedMax) {
                this.speed++
              }
  
              this.change()
  
              // 重绘
              this.context.redraw([
                Helpers.Ruler.name,
                Helpers.BgGround.name,
                Helpers.Link.name,
                Helpers.Graph.name
              ])
            }
          }
        },
        keyup: () => {
          this.speed = 1
        }
      }
    }
  }