import Konva from "konva";
import { IotNode, IotNodeDefine } from "./iotnode";
import { RenderContext } from "../../context";

export class IotNodeLink extends Konva.Group {
    context: RenderContext;
    sourceNode: IotNode;
    targetNode?: IotNode;
    beginPoint: Konva.Circle | undefined;
    endPoint: Konva.Circle | undefined;
    line: Konva.Line | undefined;
    addImage: Konva.Image | undefined;
    constructor(context: RenderContext, sourceNode: IotNode, targetNode?: IotNode) {
        super();
        this.context = context
        this.sourceNode = sourceNode;
        this.targetNode = targetNode;
        this.beginPoint=new Konva.Circle({
            x: 0,
            y: 0,
            radius: 5,
            fill: '#1075FF'
        });
        this.endPoint=new Konva.Circle({
            x: 0,
            y: 0,
            radius: 5,
            fill: '#1075FF'
        });
if (!targetNode){
    var imageObjAdd = new Image();
         var that=this;
           imageObjAdd.onload = function () {

                that.addImage = new Konva.Image({
                    x: (IotNodeDefine.NodeSpace-IotNodeDefine.anchorSpace*2)/2-10,
                    y: -10,
                    image: imageObjAdd,
                    width: 20,
                    height: 20,
                    draggable: false,
                });

                that.add(that.addImage);
            };
            imageObjAdd.src = '/resources/svg/addCircle.svg';
}
        
            
            this.line = new Konva.Line({
                points: [0, 0, this.endPoint.x(), this.endPoint.y()],
                stroke: '#D8D8D8',
                strokeWidth: 1
    
            })
    
            super.add(this.line);
            super.add(this.beginPoint);
            super.add(this.endPoint);
            
            super.on('pointermove', function () {
                
                document.body.style.cursor = 'pointer'
            });
            super.on('pointerout', function () {
                
                document.body.style.cursor = 'default'
            });
    
            this.context.scene.add(this);
    }
    change(sourceNode: IotNode){
        this.sourceNode = sourceNode;
        this.redraw();
    }
    remove() {
        this.beginPoint?.destroy()
        this.endPoint?.destroy()
        this.line?.destroy()
        super.remove();
    }
    redraw() {
//debugger
        if (!this.targetNode ) {
            this.endPoint?.setAttrs({
                x: IotNodeDefine.NodeSpace-IotNodeDefine.anchorSpace*2,
            })
  
            
            this.setAttrs({
                x: this.sourceNode.x() + this.sourceNode.width() + IotNodeDefine.anchorSpace,
                y: this.sourceNode.y() + this.sourceNode.height() / 2,
                width: IotNodeDefine.NodeSpace,
                height: 40,

            })
            
            
        } else {
            this.endPoint?.setAttrs({
                x: this.targetNode.x() - this.sourceNode.x() - this.sourceNode.width() - IotNodeDefine.anchorSpace*2,
                y: this.targetNode.y() - this.sourceNode.y(),
                radius: 5,
                fill: '#1075FF'
            })
        
            
            this.setAttrs({
                x: this.sourceNode.x() + this.sourceNode.width() + IotNodeDefine.anchorSpace,
                y: this.sourceNode.y() + this.sourceNode.height() / 2,
                width: this.targetNode.x() - this.sourceNode.x(),
                height: this.targetNode.y() - this.sourceNode.y(),

            })

        }
        this.line?.setAttrs({
            points: [0, 0, this.endPoint.x(), this.endPoint.y()],
        });
        

    }

}