import i18n from '../../../../i18n/i18n.ts'
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
            description:  i18n.global.t('iot.iotnodedevice.775609-0'),
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
            action: i18n.global.t('iot.iotnodedevice.775609-1'),
            nodeType: IotNodeType.Device,
            isMuti: false,
            //mutiAction: '并行接入方式',
        };
        super(context, pluginInfo, nodeConfig);
        this.data=data;
        this.context=context;
        
        
        
        
    }
}