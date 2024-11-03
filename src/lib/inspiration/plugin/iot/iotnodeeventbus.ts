import { RenderContext } from "../../context";
import { BasePluginInfo } from "./baseplugin";
import { IotNode, IotNodeConfig, IotNodeDefine, IotNodeType } from "./iotnode";


export interface EventBusData{
    id:string
    filterType:FilterType
    filterConfig :any
}
export enum FilterType{
    HttpFilter='HttpFilter',
    MqttFilter='MqttFilter',
    TcpFilter='TcpFilter',
    UdpFilter='UdpFilter',
    WebSocketFilter='WebSocketFilter',
    Other='Other',
}
export class IotNodeEventbus extends IotNode {
    context: RenderContext;
    data :EventBusData;
    constructor(context: RenderContext, data:EventBusData) {
        
        var pluginInfo:BasePluginInfo ={
            name: 'iotEventbus',
            description:'事件总线',
             icon: '/resources/svg/eventbus.svg',
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
            action: '定义过滤规则',
            nodeType: IotNodeType.EventBus,
            isMuti: false,
        };
        super(context, pluginInfo, nodeConfig);
        this.data=data;
        this.context=context;
        
        
        
    }
}