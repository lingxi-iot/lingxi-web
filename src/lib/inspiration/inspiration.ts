
import { SelectProps } from 'element-plus/es/components/select/src/select.mjs';
import { SceneConfig, SceneConfigUtil } from './common/config.ts'
import { DefaultValues } from './common/const.ts';
import { RenderContext } from './context.ts'
import * as Helpers from './helper/index.ts'
import { IotScene } from './layout/iot.ts';


export class Inspiration {
  public context: RenderContext | undefined;
  public iotScence: IotScene;

  constructor() {


  }
  init(stageEle: HTMLDivElement, config: SceneConfig) {
    var config = SceneConfigUtil.formate(config);
    this.context = new RenderContext(stageEle, config);

    this.iotScence=new IotScene(this.context);
    
 
  }

  resize(width: number, height: number): void {
    this.context.resize(width, height);
  }
  redraw(): void {
    this.context.redraw();
  }
  toggleShowRuler(): void {
    this.context.config.showRuler = !this.context.config.showRuler;
    this.context.config = SceneConfigUtil.formate(this.context.config);
    if (this.context.config.showRuler) {
      this.context.rulerSize = DefaultValues.RULER_SIZE;
    } else {
      this.context.rulerSize = 0;
    }
    this.context.stage.setAttrs({
      x: this.context.rulerSize,
      y: this.context.rulerSize
    }
    );
    // 重绘
    this.context.redraw([
      Helpers.BgGround.name,
      Helpers.Graph.name,
      Helpers.Link.name,
      Helpers.Ruler.name,
      Helpers.RefLine.name
    ])
  }
  toggleShowBackground(): void {
    this.context.config.showBackground = !this.context.config.showBackground;
    this.context.draws[Helpers.BgGround.name].draw();
  }
  
}
