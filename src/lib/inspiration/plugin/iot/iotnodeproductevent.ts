import { RenderContext } from "../../context";
import { BasePluginInfo } from "./baseplugin";
import { IotNode, IotNodeConfig, IotNodeDefine, IotNodeType } from "./iotnode";



export interface ProductEventData{
    id:string
    productEventConfig:any
}

export class IotNodeProductEvent extends IotNode {
    context: RenderContext;
    data :ProductEventData;
    constructor(context: RenderContext, data:ProductEventData) {
        
        var pluginInfo:BasePluginInfo ={
            name: 'iotProductEvent',
            description:'产品事件',
             icon: '/resources/svg/productevent.svg',
             type: 'iotNode',
             version: '1.0.0',
        };
        var x = 0;
        var y = 0;
        
        var nodeConfig:IotNodeConfig ={
            id:data.id,
            height: IotNodeDefine.NodeHeight,
            width: IotNodeDefine.NodeWidth+50,
            x: x,
            y: y,
            isBegin: true,
            isEnd: true,
            action: '定义产品事件',
            nodeType: IotNodeType.ProductEvent,
            isMuti: true,
            mutiAction: '并行产品事件'
        };
        super(context, pluginInfo, nodeConfig);
        this.data=data;
        this.context=context;
        
        
        
    }
}