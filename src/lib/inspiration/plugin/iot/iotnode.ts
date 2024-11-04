
import { RenderContext } from "../../context";
import Konva from "konva";
import { BasePlugin, BasePluginInfo } from "./baseplugin";
import { IotNodeAction } from "./iotnodeaction";
import { v4 as uuidv4 } from "uuid";


export class IotNodeDefine {
    static readonly NodeWidth: number = 300;
    static readonly NodeHeight: number = 120;
    static readonly NodeSpace: number = 120;
    static readonly NodeDefaultY: number = 100;
    static readonly anchorSpace: number = 20;
}
export interface IotNodeConfig {
    id: string;
    x: number;
    y: number;
    height: number;
    width: number;
    action: string;
    nodeType: IotNodeType;
    preNode?: IotNode;
    nextNode?: IotNode;
    isMuti: boolean;
    mutiAction?: string;
    isBegin: boolean;
    isEnd: boolean;
};
export enum IotNodeType {
    Device = 'Device',
    Network = 'Network',
    EventBus = 'EventBus',
    Encoder = 'Encoder',
    Decoder = 'Decoder',
    ProductEvent = 'ProductEvent',
    ProductMethod = 'ProductMethod',
    Storage = 'Storage',
    Other = 'Other'
};
export interface NodeMessage {
    id: string;
    type: string;
    value: string;
    text: string;
    data: any;
}

export class IotNode extends BasePlugin {
    editmode: boolean = false;
    message: NodeMessage | undefined;
    
    area_title_rect: Konva.Rect | undefined;
    area_title_text: Konva.Text | undefined;
    area_title_image: Konva.Image | undefined;
    area_title_imageObj: HTMLImageElement | undefined;
    area_title_group: Konva.Group

    area_body_rect: Konva.Rect;

    area_action_rect: Konva.Rect | undefined;
    area_action_text: Konva.Text | undefined;
    area_action_imageObj: HTMLImageElement | undefined;
    area_action_image: Konva.Image | undefined;
    area_action_group: Konva.Group;

    area_more_rect: Konva.Rect | undefined;
    area_more_text: Konva.Text | undefined;
    area_more_imageObj: HTMLImageElement | undefined;
    area_more_image: Konva.Image | undefined;
    area_more_group: Konva.Group | undefined;
    area_more_action_group: Konva.Group | undefined;
    area_more_begin_point: Konva.Circle | undefined;
    area_more_end_point: Konva.Circle | undefined;
    area_more_left_line: Konva.Line | undefined;
    area_more_right_line: Konva.Line | undefined;
    area_more_horizontal_line: Konva.Line | undefined;


    iotNodeActions:  { [index: string]: IotNodeAction } = {};
    latestActionY: number = 0;
    latestMoreHeight: number = 0;
    readonly action_step: number = 40;




    constructor(context: RenderContext, pluginInfo: BasePluginInfo, nodeConfig: IotNodeConfig) {
        super();
        this.init(context, pluginInfo, nodeConfig);
        //标题区
        this.area_title_rect = new Konva.Rect({
            x: 0,
            y: 0,
            width: this.nodeConfig.width / 2,
            height: 30,
            fill: '#1075FF',
            stroke: 'black',
            strokeWidth: 0,
            draggable: false,
            cornerRadius: 5
        });
        this.area_title_text = new Konva.Text({
            x: 0,
            y: 0,
            text: '   ' + this.pluginInfo?.description,
            fontSize: 12,
            fill: 'white',
            align: 'center',
            verticalAlign: 'middle',
            draggable: false,
            listening: false,
            width: this.nodeConfig.width / 2,
            height: 30

        })
        this.area_title_group = new Konva.Group({
            x: this.nodeConfig.width / 4,
            y: -15,
            width: this.nodeConfig.width,
            height: this.nodeConfig.height,
            draggable: false,
            listening: false,
        });

        this.area_title_imageObj = new Image();
        var that = this;
        this.area_title_imageObj.onload = function () {
            that.area_title_image = new Konva.Image({
                x: 10,
                y: 3,
                image: that.area_title_imageObj,
                width: 20,
                height: 20,
            });

            that.area_title_group.add(that.area_title_image);
        };

        this.area_title_imageObj.src = this.pluginInfo?.icon!;
        this.area_title_group.add(this.area_title_rect);
        this.area_title_group.add(this.area_title_text);

        //主体区
        this.area_body_rect = new Konva.Rect({
            x: 0,
            y: 0,
            width: this.nodeConfig.width,
            height: this.nodeConfig.height,
            fill: '#FFFFFF',
            stroke: 'black',
            strokeWidth: 0.1,
            draggable: false,
            shadowBlur: 2,
            cornerRadius: 5
        });
        //操作区
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
            text: this.nodeConfig.action,
            fontSize: 12,
            fill: '#333333',
            align: 'center',
            verticalAlign: 'middle',
            draggable: false,
            listening: false,
            width: this.nodeConfig.width - 40,
            height: 30

        })
        this.area_action_group = new Konva.Group({
            x: 20,
            y: this.nodeConfig.height / 2 - 15,
            width: this.nodeConfig.width - 40,
            height: 30,
            draggable: false,
            //listening: false,
        })

        this.area_action_imageObj = new Image();

        this.area_action_imageObj.onload = function () {
            that.area_action_image = new Konva.Image({
                x: 20,
                y: 7,
                image: that.area_action_imageObj,
                width: 16,
                height: 16,
                draggable: false,
            });

            that.area_action_group.add(that.area_action_image);
        };

        this.area_action_imageObj.src = '/resources/svg/add.svg';
        this.area_action_group.add(this.area_action_rect);
        this.area_action_group.add(this.area_action_text);


        this.area_action_group.on('pointermove', function () {
            this.area_action_rect.setAttrs(
                {
                    fill: '#F5F5F5'
                }
            );
            document.body.style.cursor = 'pointer'
        }.bind(this));
        this.area_action_group.on('pointerout', function () {
            this.area_action_rect.setAttrs(
                {
                    fill: '#FFFFFF'
                }
            );
            document.body.style.cursor = 'default'
        }.bind(this));
        var that = this;
        this.message = {
            id: this.nodeConfig.id,
            type: this.nodeConfig.nodeType,
            text: '',
            value: ''
        }
        this.area_action_group.on('click', function (e) {
            
            this.context.emit('IotNodeClick', this.message);
            
            
        }.bind(this));
        this.context?.scene.add(this);
        //记录操作区起始位置
        this.latestActionY = this.nodeConfig.height / 2 - 15;
        this.latestMoreHeight = IotNodeDefine.NodeHeight-this.action_step;




    }
    redraw(): void {



        this.setAttrs({
            width: this.nodeConfig.width,
            height: this.nodeConfig.height,
            draggable: true
        });
        this.add(this.area_body_rect);
        this.add(this.area_title_group);
        this.add(this.area_action_group);





    }
    updateAction(actions: Array<NodeMessage>) {
        
        if (!this.nodeConfig.isMuti) {
            this.area_action_text.setAttr('text', actions[0].text)
            this.area_action_imageObj.src = '/resources/svg/duihao.svg';
            this.message = actions[0];
        } else {
            var startx = 20
            this.area_action_group.hide();
            actions.forEach((action, index) => {
                if (this.iotNodeActions[action.id] === undefined) {

                    var iotNodeAction = new IotNodeAction(this.context, this.pluginInfo, this.nodeConfig, action);
                    iotNodeAction.setAttrs({
                        x: startx,
                        y: this.latestActionY,
                        width: this.nodeConfig.width - 40,
                        height: 30,
                        draggable: false,
                    })
                    this.add(iotNodeAction);
                    this.iotNodeActions[action.id]=iotNodeAction;
                    this.latestActionY = this.latestActionY + this.action_step;
                    this.latestMoreHeight = this.latestMoreHeight + this.action_step;
                    
                    
                } else {

                    this.iotNodeActions[action.id].updateAction(action);
                }


            })
        }
        if (this.nodeConfig.isMuti) {
            //绘制线
            if (this.area_more_begin_point == undefined) {
                this.area_more_begin_point = new Konva.Circle({
                    x: 0,
                    y: 0,
                    radius: 5,
                    fill: '#1075FF'
                });
            }

            if (this.area_more_end_point == undefined) {
                this.area_more_end_point = new Konva.Circle({
                    x: this.width() + IotNodeDefine.anchorSpace * 2,
                    y: 0,
                    radius: 5,
                    fill: '#1075FF'
                })
            }
            if (this.area_more_left_line == undefined) {
                this.area_more_left_line = new Konva.Line({
                    points: [0, 0, 0, IotNodeDefine.NodeHeight],
                    stroke: '#D8D8D8',
                    strokeWidth: 2,
                    lineCap: 'round',
                    lineJoin: 'round',
                    draggable: false,
                })
            }
            if (this.area_more_right_line == undefined) {
                this.area_more_right_line = new Konva.Line({
                    points: [this.width() + IotNodeDefine.anchorSpace * 2, 0, this.width() + IotNodeDefine.anchorSpace * 2, IotNodeDefine.NodeHeight],
                    stroke: '#D8D8D8',
                    strokeWidth: 2,
                    lineCap: 'round',
                    lineJoin: 'round',
                    draggable: false,
                });
            }
            if (this.area_more_horizontal_line == undefined) {
                this.area_more_horizontal_line = new Konva.Line({
                    points: [0, IotNodeDefine.NodeHeight, this.width() + IotNodeDefine.anchorSpace * 2, IotNodeDefine.NodeHeight],
                    stroke: '#D8D8D8',
                    strokeWidth: 2,
                    lineCap: 'round',
                    lineJoin: 'round',
                    draggable: false,
                });
            }
            if (this.area_more_rect == undefined) {
                this.area_more_rect = new Konva.Rect({
                    x: 0,
                    y: 0,
                    width: this.nodeConfig.width - 40,
                    height: 30,
                    fill: '#FFFFFF',
                    stroke: '#000000',
                    strokeWidth: 1,
                    dash: [2, 1, 0.01, 2],
                    dashOffset: 0,
                });
                this.area_more_text = new Konva.Text({
                    x: 0,
                    y: 0,
                    text: this.nodeConfig.mutiAction,
                    fontSize: 12,
                    fill: '#333333',
                    align: 'center',
                    verticalAlign: 'middle',
                    draggable: false,
                    listening: false,
                    width: this.nodeConfig.width - 40,
                    height: 30
                })
                this.area_more_action_group = new Konva.Group({
                    x: IotNodeDefine.anchorSpace + 20,
                    y: IotNodeDefine.NodeHeight - 15,
                    width: this.nodeConfig.width - 40,
                    height: 30,
                    draggable: false,
                    listening: true,
                })
                this.area_more_imageObj = new Image();
                this.area_more_imageObj.onload = function () {
                    this.area_more_image = new Konva.Image({
                        x: 20,
                        y: 7,
                        image: this.area_more_imageObj,
                        width: 16,
                        height: 16,
                        draggable: false,
                    });
                    this.area_more_imageObj.src = '/resources/svg/add.svg';
                    this.area_more_action_group.add(this.area_more_image);
                }.bind(this);
                this.area_more_action_group.add(this.area_more_rect);
                this.area_more_action_group.add(this.area_more_text);
                this.area_more_action_group.on('pointermove', function () {
                    this.area_more_rect.setAttrs(
                        {
                            fill: '#F5F5F5'
                        }
                    );
                    document.body.style.cursor = 'pointer'
                }.bind(this));
                this.area_more_action_group.on('pointerout', function () {
                    this.area_more_rect.setAttrs(
                        {
                            fill: '#FFFFFF'
                        }
                    );
                    document.body.style.cursor = 'default'
                }.bind(this));
                this.area_more_action_group.on('click', function (e) {
                    this.message = {
                        id: uuidv4(),
                        type: this.nodeConfig.nodeType,
                        value:'',
                        text:''
                    }
                    this.context.emit('IotMoreActionClick', this.message);
                }.bind(this));
                this.area_more_group = new Konva.Group({
                    x: -IotNodeDefine.anchorSpace,
                    y: IotNodeDefine.NodeHeight / 2,
                    width: this.nodeConfig.width,
                    height: this.nodeConfig.height,
                    draggable: false,
                    listening: true,
                })
                this.area_more_group.add(this.area_more_left_line);
                this.area_more_group.add(this.area_more_right_line);
                this.area_more_group.add(this.area_more_horizontal_line);
                this.area_more_group.add(this.area_more_action_group);
                this.area_more_group.add(this.area_more_begin_point);
                this.area_more_group.add(this.area_more_end_point);
                this.add(this.area_more_group);

            } else {
                
                this.area_more_action_group.setAttrs({
                    y: this.latestMoreHeight-15
                })
                this.area_more_left_line.setAttrs({
                    points: [0, 0, 0, this.latestMoreHeight ]
                })
                this.area_more_right_line.setAttrs({
                    points: [this.width() + IotNodeDefine.anchorSpace * 2, 0, this.width() + IotNodeDefine.anchorSpace * 2, this.latestMoreHeight ]
                })
                this.area_more_horizontal_line.setAttrs({
                    points: [0, this.latestMoreHeight , this.width() + IotNodeDefine.anchorSpace * 2, this.latestMoreHeight ]
                })
                this.area_body_rect.setAttrs({
                    height: this.latestMoreHeight
                })
            }


        }

    }

}