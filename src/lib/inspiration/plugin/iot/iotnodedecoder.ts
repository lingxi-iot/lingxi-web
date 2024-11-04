import i18n from "../../../../i18n/i18n";
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
            description:i18n.global.t('iot.iotnodedecoder.087345-0'),
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
            action: i18n.global.t('iot.iotnodedecoder.087345-1'),
            nodeType: IotNodeType.Decoder,
            isMuti: true,
            mutiAction: i18n.global.t('iot.iotnodedecoder.087345-2')
        };
        super(context, pluginInfo, nodeConfig);
        this.data=data;
        this.context=context;
        
        
        
    }
}