import { ShutcutKey } from "../common/enums"
import { Handler } from "../common/handler"
import { RenderContext } from "../context"


export class ShutcutHandler implements Handler {
  
  static readonly name = 'Shutcut'

  private context: RenderContext
  constructor(context: RenderContext) {
    this.context = context
  }

  handlers = {
    dom: {
      keydown: (e: GlobalEventHandlersEventMap['keydown']) => {
        if (e.ctrlKey || e.metaKey) {
          if (e.code === ShutcutKey.C) {
            this.context.copyTool.pasteStart()
          } else if (e.code === ShutcutKey.V) {
            this.context.copyTool.pasteEnd()
          } else if (e.code === ShutcutKey.Z) {
            if (e.shiftKey) {
              this.context.nextHistory()
            } else {
              this.context.prevHistory()
            }
          } else if (e.code === ShutcutKey.A) {
            this.context.selectionTool.selectAll()
          } else if (e.code === ShutcutKey.R) {
            window.location.reload()
          }
        } else if (e.code === ShutcutKey.Del || e.code === ShutcutKey.Backspace) {
          this.context.remove(this.context.selectionTool.selectingNodes)
        } else if (e.code === ShutcutKey.Esc) {
          this.context.selectionTool.selectingClear()
        }
      }
    }
  }
}
