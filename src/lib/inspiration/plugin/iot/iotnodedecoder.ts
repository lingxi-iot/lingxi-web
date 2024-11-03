import { RenderContext } from "../../context";
import { BasePluginInfo } from "./baseplugin";
import { IotNode, IotNodeConfig, IotNodeDefine, IotNodeType } from "./iotnode";
import { IotNodeLink } from "./iotnodelink";
import { NetWorkType } from "./iotnodenetwork";

export interface DecoderData{
    id:string
    sourceConnect:NetWorkType
    decoderConfig:any
}

export class IotNodeDecoder extends IotNode {
    context: RenderContext;
    data :DecoderData;
    constructor(context: RenderContext, data:DecoderData) {
        
        var pluginInfo:BasePluginInfo ={
            name: 'iotDecoder',
            description:'解码器',
             icon: '/resources/svg/decoder.svg',
             type: 'iotNode',
             version: '1.0.0',
        };
        var x = 0;
        var y = 0;
        
        var nodeConfig:IotNodeConfig ={
            id:data.id,
            height: IotNodeDefine.NodeHeight,
            width: IotNodeDefine.NodeWidth + 50,
            x: x,
            y: y,
            isBegin: true,
            isEnd: true,
            action: '定义解码器',
            nodeType: IotNodeType.Decoder,
            isMuti: true,
            mutiAction: '并行解码器'
        };
        super(context, pluginInfo, nodeConfig);
        this.data=data;
        this.context=context;
        
        
        
    }
}