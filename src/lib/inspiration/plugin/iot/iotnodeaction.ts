import Konva from "konva";
import { RenderContext } from "../../context";
import { BasePlugin, BasePluginInfo } from "./baseplugin";
import { IotNodeConfig,  NodeMessage } from "./iotnode";

export class IotNodeAction extends BasePlugin{
    public context: RenderContext | undefined;
    public area_action_rect: Konva.Rect;
    public area_action_text: Konva.Text;
    public area_action_image: Konva.Image | undefined;
    public area_action_imageObj: HTMLImageElement;
    public action:NodeMessage;

    constructor(context: RenderContext, pluginInfo: BasePluginInfo, nodeConfig: IotNodeConfig,action: NodeMessage){
        super();
        this.action=action;
        this.init(context, pluginInfo, nodeConfig);
        this.area_action_rect = new Konva.Rect({
            x: 0,
            y: 0,
            width: this.nodeConfig.width - 40,
            height: 30,
            stroke: '#000000',
            strokeWidth: 1,
            dash: [2, 1, 0.01, 2],
            dashOffset: 0,
        });
        this.area_action_text = new Konva.Text({
            x: 0,
            y: 0,
            text: action.text,
            fontSize: 12,
            fill: '#333333',
            align: 'center',
            verticalAlign: 'middle',
            draggable: false,
            listening: false,
            width: this.nodeConfig.width - 40,
            height: 30

        })
        this.setAttrs({
            x: 20,
            y: this.nodeConfig.height / 2 - 15,
            width: this.nodeConfig.width - 40,
            height: 30,
            draggable: false,
            //listening: false,
        })

        this.area_action_imageObj = new Image();
        
        this.area_action_imageObj.onload = function () {
            
            this.area_action_image = new Konva.Image({
                x: 20,
                y: 7,
                image: this.area_action_imageObj,
                width: 16,
                height: 16,
                draggable: false,
            });

            this.add(this.area_action_image);
        }.bind(this);
       
        this.area_action_imageObj.src = '/resources/svg/duihao.svg';
        
        this.add(this.area_action_rect);
        this.add(this.area_action_text);
      
        

        this.on('pointermove', function () {
            this.area_action_rect.setAttrs(
                {
                    fill: '#F5F5F5'
                }
            );
            document.body.style.cursor = 'pointer'
        }.bind(this));
        this.on('pointerout', function () {
            this.area_action_rect.setAttrs(
                {
                    fill: '#FFFFFF'
                }
            );
            document.body.style.cursor = 'default'
        }.bind(this));

        this.on('click',function(e){
            var nodeMessage:NodeMessage = {
                id: this.action.id,
                type: this.nodeConfig.nodeType,
                text: this.action.text,
                value: this.action.value,
                
            }
            this.context.emit('IotMutiNodeClick',nodeMessage);
        }.bind(this));
        //this.context?.scene.add(this);
        
    }
    updateAction(action:NodeMessage): void {
       // debugger
       this.area_action_text.setAttrs({
        text: action.text
       });
       this.area_action_text.draw();
    }
    
}