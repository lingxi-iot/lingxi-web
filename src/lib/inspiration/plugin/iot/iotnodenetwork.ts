import { RenderContext } from "../../context";
import { BasePluginInfo } from "./baseplugin";
import { IotNode, IotNodeConfig, IotNodeDefine, IotNodeType } from "./iotnode";
import { IotNodeLink } from "./iotnodelink";

export interface NetworkData{
    id:string
    networkType:NetWorkType
    networkConfig :any
}
export enum NetWorkType{
    MQTT='MQTT Server',
    HTTP='HTTP Server/Webhook/Restful',
    TCP='TCP',
    UDP='UDP',
    WebSocket='WebSocket',
    CoAP='CoAP',
    Lwm2m='lwm2m',
    Modbus='Modbus',
    OPCUA='OPCUA',
    RocketMQ='RocketMQ',
    STOMP='STOMP',
    JT86='JT808',
    GB28181='GB28181',
    Bacnet='Bacnet',
    Other='Other'
}
export class IotNodeNetwork extends IotNode {
    context: RenderContext;
    data :NetworkData;
    constructor(context: RenderContext, data:NetworkData,preNode?:IotNode) {
        
        var pluginInfo:BasePluginInfo ={
            name: 'iotNetWork',
            description:'网络通道',
             icon: '/resources/svg/network.svg',
             type: 'iotNode',
             version: '1.0.0',
        };
        var x = 0;
        var y = 0;
        if (preNode)
        {
            x = preNode.x() + preNode.width() + IotNodeDefine.NodeSpace;
            y = preNode.y();
            
        }
        var nodeConfig:IotNodeConfig ={
            id:data.id,
            height: IotNodeDefine.NodeHeight,
            width: IotNodeDefine.NodeWidth,
            x: x,
            y: y,
            isBegin: true,
            isEnd: true,
            action: '选择网络通道',
            nodeType: IotNodeType.Network,
            isMuti: false,
        };
        super(context, pluginInfo, nodeConfig);
        this.data=data;
        this.context=context;
        
        
        
    }
}