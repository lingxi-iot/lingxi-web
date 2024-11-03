import Konva from "konva";
import { RenderContext } from "../context";
import { FilterType, IotNode, IotNodeDecoder, IotNodeDefine, IotNodeDevice, IotNodeEventbus, IotNodeLink, IotNodeNetwork, IotNodeProductEvent, IotNodeStorage, IotNodeType, JoinType, NetWorkType } from "../plugin/iot";
import { v4 as uuidv4 } from "uuid";
import { StorageType } from "../plugin/iot/iotnodestorage";
import { NodeMessage } from "../plugin/iot/iotnode";

export class IotScene{
    context:RenderContext;
    step:number=0;
    iotDevice:IotNodeDevice;
    iotNetWork:IotNodeNetwork | undefined;
    iotEventbus:IotNodeEventbus | undefined;
    iotDecoder:IotNodeDecoder | undefined;
    iotProductEvent:IotNodeProductEvent | undefined;
    iotStorage:IotNodeStorage | undefined;
    
    iotNodeLinks:{ [index: string]: IotNodeLink } = {}
    curNodeLink:IotNodeLink|undefined;
    
    constructor(context:RenderContext)
    {
        this.context=context;
        
      this.iotDevice = new IotNodeDevice(this.context, {
        id: uuidv4(),
        joinType: JoinType.Direct
      });
      this.iotDevice.setAttrs({
        x: 40,
        y: 100
      });
      this.iotDevice.redraw();
      this.iotDevice.on('dragend', (e)=>{
          this.onDragStart(e);
      });
      this.curNodeLink=new IotNodeLink(this.context,this.iotDevice);
      this.curNodeLink.redraw();
      this.curNodeLink.on('mouseup', ()=>{
         this.add();
      })
    }
    add(){
        this.step++;
        
        if (this.step==1)
        {
             this.iotNetWork = new IotNodeNetwork(this.context, {
                id: uuidv4(),
                networkType: NetWorkType.Bacnet,
                networkConfig: {
                }
              });
              this.iotNetWork.setAttrs({
                x: this.iotDevice.x() + this.iotDevice.width() + IotNodeDefine.NodeSpace,
                y: this.iotDevice.y(),
                //opacity:0
              });
              /*
              var tween = new Konva.Tween({
                node: this.iotNetWork,
                rotation: Math.PI * 2,
                easing:Konva.Easings['EaseIn'],
                opacity:1
              });
              tween.play();
              */
              this.iotNetWork.redraw();
              this.iotNodeLinks[IotNodeType.Device]=new IotNodeLink(this.context,this.iotDevice,this.iotNetWork);
              this.iotNodeLinks[IotNodeType.Device].redraw();
              this.curNodeLink.change(this.iotNetWork);
              this.iotNetWork.on('dragend', (e)=>{
                this.onDragStart(e);
            });
        }else if (this.step==2)
        {
             this.iotEventbus= new IotNodeEventbus(this.context, {
                id: uuidv4(),
                filterType: FilterType.HttpFilter,
                filterConfig: {
                }
              });
              this.iotEventbus.setAttrs({
                x: this.iotNetWork!.x() + this.iotNetWork!.width() + IotNodeDefine.NodeSpace,
                y: this.iotNetWork!.y()
              });
              this.iotEventbus.redraw();
              this.iotNodeLinks[IotNodeType.Network]=new IotNodeLink(this.context,this.iotNetWork,this.iotEventbus);
              this.iotNodeLinks[IotNodeType.Network].redraw();
              this.curNodeLink.change(this.iotEventbus);
              
              this.iotEventbus.on('dragend', (e)=>{
                this.onDragStart(e);
            });
        }else if (this.step==3)
            {
                 this.iotDecoder= new IotNodeDecoder(this.context, {
                    id: uuidv4(),
                    sourceConnect: NetWorkType.Bacnet,
                    decoderConfig: {
                    }
                  });
                  this.iotDecoder.setAttrs({
                    x: this.iotEventbus!.x() + this.iotEventbus!.width() + IotNodeDefine.NodeSpace,
                    y: this.iotEventbus!.y()
                  });
                  this.iotDecoder.redraw();
                  this.iotNodeLinks[IotNodeType.EventBus]=new IotNodeLink(this.context,this.iotEventbus,this.iotDecoder);
                  this.iotNodeLinks[IotNodeType.EventBus].redraw();
                  this.curNodeLink.change(this.iotDecoder);
                  this.iotDecoder.on('dragend', (e)=>{
                    this.onDragStart(e);
                });
            }else if (this.step==4)
            {
                    this.iotProductEvent= new IotNodeProductEvent(this.context, {
                    id: uuidv4(),
                    productEventConfig: {
                    }
                    });
                    this.iotProductEvent.setAttrs({
                    x: this.iotDecoder!.x() + this.iotDecoder!.width() + IotNodeDefine.NodeSpace,
                    y: this.iotDecoder!.y()
                    });
                    this.iotProductEvent.redraw();
                    this.iotNodeLinks[IotNodeType.Decoder]=new IotNodeLink(this.context,this.iotDecoder,this.iotProductEvent);
                    this.iotNodeLinks[IotNodeType.Decoder].redraw();
                    this.curNodeLink?.change(this.iotProductEvent);
                    this.iotProductEvent.on('dragend', (e)=>{
                      this.onDragStart(e);
                  });
            }else if (this.step==5)
              {
                      this.iotStorage= new IotNodeStorage(this.context, {
                      id: uuidv4(),
                      storageType: StorageType.Elasticsearch,
                      storageConfig: {
                      }
                      });
                      this.iotStorage.setAttrs({
                      x: this.iotProductEvent!.x() + this.iotProductEvent!.width() + IotNodeDefine.NodeSpace,
                      y: this.iotProductEvent!.y()
                      });
                      this.iotStorage.redraw();
                      this.iotNodeLinks[IotNodeType.ProductEvent]=new IotNodeLink(this.context,this.iotProductEvent,this.iotStorage);
                      this.iotNodeLinks[IotNodeType.ProductEvent].redraw();
                      this.curNodeLink.remove();
                      this.iotStorage.on('dragend', (e)=>{
                        this.onDragStart(e);
                    });
              }
      
    }
    update(actions: Array<NodeMessage>) {
      console.log(actions);
        actions.forEach(action=>{
          if (action.type==IotNodeType.Device)
            {
                this.iotDevice.updateAction([action]);
            }else if (action.type==IotNodeType.Network)
            {
                this.iotNetWork!.updateAction([action]);
            }else if (action.type==IotNodeType.EventBus)
            {
                this.iotEventbus!.updateAction([action]);
            }else if (action.type==IotNodeType.Decoder)
            {
                this.iotDecoder!.updateAction([action]);
            }else if (action.type==IotNodeType.ProductEvent)
            {
              this.iotProductEvent!.updateAction([action]);
            }else if (action.type==IotNodeType.Storage)
            {
              this.iotStorage!.updateAction([action]);
            }
        })
        
    }
    onDragStart(e: Konva.KonvaEventObject<DragEvent>) {
     // debugger;
        if (e.target instanceof IotNodeDevice && this.step>0)
        {
          this.iotNodeLinks[IotNodeType.Device].redraw();
        }else if (e.target instanceof IotNodeNetwork)
        {
          this.iotNodeLinks[IotNodeType.Device].redraw();
          if (this.step>1)
          this.iotNodeLinks[IotNodeType.Network].redraw();
        }else if (e.target instanceof IotNodeEventbus)
        {
          this.iotNodeLinks[IotNodeType.Network].redraw();
          if (this.step>2)
          this.iotNodeLinks[IotNodeType.EventBus].redraw();
        }else if (e.target instanceof IotNodeDecoder)
        {
          this.iotNodeLinks[IotNodeType.EventBus].redraw();
          if (this.step>3)
          this.iotNodeLinks[IotNodeType.Decoder].redraw();
        }else if (e.target instanceof IotNodeProductEvent)
        {
          this.iotNodeLinks[IotNodeType.Decoder].redraw();
          if (this.step>4)
          this.iotNodeLinks[IotNodeType.ProductEvent].redraw();
        }else if (e.target instanceof IotNodeStorage)
        {
          this.iotNodeLinks[IotNodeType.ProductEvent].redraw();
        }
        this.curNodeLink?.redraw();
    }
    
}