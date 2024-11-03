import { RenderContext } from "../../context";
import { BasePluginInfo } from "./baseplugin";
import { IotNode, IotNodeConfig, IotNodeDefine, IotNodeType } from "./iotnode";
import { IotNodeLink } from "./iotnodelink";

export interface DeviceData{
    id:string;
    joinType:JoinType;
    
}
export enum JoinType{
    Direct='Direct',
    GateWay='GateWay',
    Platform='Platform',
    SDK='SDK'
}
export class IotNodeDevice extends IotNode {
    context: RenderContext;
    data :DeviceData;
    
    constructor(context: RenderContext, data:DeviceData) {
        
        var pluginInfo:BasePluginInfo ={
            name: 'iotDevice',
            description:'物理设备',
             icon: '/resources/svg/box.svg',
             type: 'iotNode',
             version: '1.0.0',
        };
        var x = 0;
        var y = 0;
        
        var nodeConfig:IotNodeConfig ={
            id: data?.id,
            height: IotNodeDefine.NodeHeight,
            width: IotNodeDefine.NodeWidth,
            x: x,
            y: y,
            isBegin: true,
            isEnd: true,
            action: '选择接入方式',
            nodeType: IotNodeType.Device,
            isMuti: false,
            //mutiAction: '并行接入方式',
        };
        super(context, pluginInfo, nodeConfig);
        this.data=data;
        this.context=context;
        
        
        
        
    }
}