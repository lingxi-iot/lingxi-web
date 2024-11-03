import Konva from "konva";
import { RenderContext } from "../../context";

export  interface BasePluginInfo {
   /**
   * 插件名称
   */
     name: string;
   /**
    * 插件描述
    */
     description: string;
   /**
    * 插件图标
    */
    icon: string;
   /**
    * 插件类型
    */
    type: string;
   /**
    * 插件版本
    */
    version: string;
 }

export abstract class BasePlugin extends Konva.Group{
 
  
  protected  pluginInfo: BasePluginInfo | undefined;
  public  context:RenderContext | undefined;
  public  nodeConfig:any;
  
  constructor()
  {
    super();
    
  }
  
  init(context:RenderContext,pluginInfo:BasePluginInfo,nodeConfig:any){

    this.context = context;
    this.pluginInfo = pluginInfo;
    this.nodeConfig =nodeConfig;
  }
  abstract redraw(): void;  
 }