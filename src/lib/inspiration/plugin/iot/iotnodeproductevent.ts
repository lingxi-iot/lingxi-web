import i18n from "../../../../i18n/i18n";
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
            description:i18n.global.t('iot.iotnodeproductevent.018739-0'),
             icon: '/resources/svg/productevent.svg',
             type: 'iotNode',
             version: '1.0.0',
        };
        var x = 0;
        var y = 0;
        
        var nodeConfig:IotNodeConfig ={
            id:data.id,
            height: IotNodeDefine.NodeHeight,
            width: IotNodeDefine.NodeWidth,
            x: x,
            y: y,
            isBegin: true,
            isEnd: true,
            action: i18n.global.t('iot.iotnodeproductevent.018739-1'),
            nodeType: IotNodeType.ProductEvent,
            isMuti: true,
            mutiAction: i18n.global.t('iot.iotnodeproductevent.018739-2')
        };
        super(context, pluginInfo, nodeConfig);
        this.data=data;
        this.context=context;
        
        
        
    }
}