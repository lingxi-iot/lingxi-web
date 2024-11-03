
export interface SceneConfig {
    showRefLine: any
    attractBg: any
    attractNode: any
    attractResize: any
    x?: number
    y?: number
    width: number
    height: number
    showRuler?: boolean
    showBackground?: boolean
    draggable?: boolean
    
  }
export class SceneConfigUtil{
  static formate(config: SceneConfig): SceneConfig {
    return {
      x: config.x || 0,
      y: config.y || 0,
      width: config.width || 1,
      height: config.height || 1,
      showRuler: config.showRuler || false,
      showBackground: config.showBackground || false,
      draggable: config.draggable || false
    }
  }
}