import { RenderContext } from "../../context";
import { BasePluginInfo } from "./baseplugin";
import { IotNode, IotNodeConfig, IotNodeDefine, IotNodeType } from "./iotnode";
import { IotNodeLink } from "./iotnodelink";

export interface StorageData{
    id:string;
    storageType:StorageType;
    storageConfig:any;
    
}
export enum StorageType{
    MySQL='MySQL',
    PostgreSQL='PostgreSQL',
    TDEngine='TDEngine',
    Elasticsearch='Elasticsearch',
    SQLLite='SQLLite',
    H2='H2',
}
export class IotNodeStorage extends IotNode {
    context: RenderContext;
    data :StorageData;
    
    constructor(context: RenderContext, data:StorageData) {
        
        var pluginInfo:BasePluginInfo ={
            name: 'iotStorage',
            description:'存储介质',
             icon: '/resources/svg/storage.svg',
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
            action: '选择存储介质',
            nodeType: IotNodeType.Storage,
            isMuti: false,
        };
        super(context, pluginInfo, nodeConfig);
        this.data=data;
        this.context=context;
        
        
        
        
    }
}