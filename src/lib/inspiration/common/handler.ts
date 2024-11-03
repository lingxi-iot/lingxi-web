import Konva  from 'konva';
export interface Handler {
    handlers?: {
      stage?: {
        [index: string]: (e?: any) => void
      }
      dom?: {
        [index: string]: (e?: any) => void
      }
      transformer?: {
        [index: string]: (e?: any) => void
      }
    }
    transformerConfig?: {
      anchorDragBoundFunc?: (
        oldPos: Konva.Vector2d,
        newPos: Konva.Vector2d,
        e: MouseEvent
      ) => Konva.Vector2d
      dragBoundFunc?: (newPos: Konva.Vector2d, e: MouseEvent) => Konva.Vector2d
    }
  }