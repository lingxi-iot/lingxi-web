import Konva from "konva"
import { SceneConfig } from "./common/config.ts";
import { DefaultValues } from "./common/const.ts";
import mitt, { Emitter } from "mitt"
import { RenderEvents } from "./common/event.ts";
import * as Handlers from "./handler/index.ts";
import { Handler } from "./common/handler.ts";
import { GraphType, LinkDrawPair, Render } from "./common/render.ts";
import * as Helpers from "./helper"
import {SelectionTool,AttractTool, LinkTool, AssetTool, ImportExportTool, CopyTool, PositionTool} from "./tools"
import { AssetType } from "./common/enums.ts";
import _ from 'lodash-es'
import { getCurrentInstance } from "vue";
import { IotNode, IotNodeType } from "./plugin/iot/iotnode.ts";

export class RenderContext {
  
  bgSize: number=20;
  debug: any;
 
  public config: SceneConfig
  public stage: Konva.Stage
  public background: Konva.Layer
  public frontCover: Konva.Layer
  public scene: Konva.Layer
  public rulerSize: number

  public selectionTool: SelectionTool
  public attractTool: AttractTool
  public assetTool: AssetTool
  public linkTool: LinkTool
  public importExportTool: ImportExportTool
  public copyTool: CopyTool
  public positionTool:PositionTool
  
  
  history: string[] = []
  historyIndex = -1

  
  public draws: { [index: string]: Render & Handler } = {}
  // 事件处理
  handlers: { [index: string]: Handler } = {}
  protected emitter: Emitter<RenderEvents> = mitt()
  public on: Emitter<RenderEvents>['on']
  public off: Emitter<RenderEvents>['off']
  public emit: Emitter<RenderEvents>['emit'];
  
  public pointSize = 6;
  // 画图类型
  public graphType: GraphType 

  // 多选器层
  groupTransformer: Konva.Group = new Konva.Group()

  // 多选器
  transformer: Konva.Transformer = new Konva.Transformer({
    shouldOverdrawWholeArea: true,
    borderDash: [4, 4],
    padding: 1,
    rotationSnaps: [0, 45, 90, 135, 180, 225, 270, 315, 360]
  })

  // 选择框
  selectRect: Konva.Rect = new Konva.Rect({
    id: 'selectRect',
    fill: 'rgba(0,0,255,0.1)',
    visible: false
  })



  constructor(stageEle: HTMLDivElement, config: SceneConfig) {

    this.on = this.emitter.on.bind(this.emitter)
    this.off = this.emitter.off.bind(this.emitter)
    this.emit = this.emitter.emit.bind(this.emitter)
    var instance=getCurrentInstance();
    if (instance){
      instance.appContext.config.globalProperties.$eventbus = this.emitter;
      instance.appContext.config.globalProperties.$context = this;
    }


    this.handlers[Handlers.ZoomHandler.name] = new Handlers.ZoomHandler(this)
    this.handlers[Handlers.DragHandler.name] = new Handlers.DragHandler(this)
    this.handlers[Handlers.KeyMoveHandler.name] = new Handlers.KeyMoveHandler(this)
    //this.handlers[Handlers.SelectionHandler.name] = new Handlers.SelectionHandler(this)
    this.handlers[Handlers.OutsideHandler.name] = new Handlers.OutsideHandler(this)
    this.handlers[Handlers.ShutcutHandler.name] = new Handlers.ShutcutHandler(this)
    this.handlers[Handlers.GraphHandler.name] = new Handlers.GraphHandler(this)

    // 选择工具
    this.selectionTool = new SelectionTool(this);
    // 磁贴工具
    this.attractTool = new AttractTool(this);
    // 对齐工具
    this.linkTool = new LinkTool(this)
    // 素材工具
    this.assetTool = new AssetTool(this)
    //导入导出工具
    this.importExportTool = new ImportExportTool(this)
    // 复制工具
    this.copyTool = new CopyTool(this)

    this.positionTool=new PositionTool(this);
    

    this.config = config;
    if (config.showRuler) {
      this.rulerSize = DefaultValues.RULER_SIZE;
    } else {
      this.rulerSize = 0;
    }
    
    this.stage = new Konva.Stage({
      container: stageEle,
      x: this.rulerSize,
      y: this.rulerSize,
      width: config.width,
      height: config.height,
      draggable: config.draggable,
    });
    this.background = new Konva.Layer({
      id: 'background',
    });
    this.frontCover = new Konva.Layer({
      id: 'frontCover',
    });
    // 辅助层 - 顶层
    this.groupTransformer.add(this.transformer)
    this.groupTransformer.add(this.selectRect)
    this.frontCover.add(this.groupTransformer)
    
    this.scene = new Konva.Layer({
      id: 'scene',
      x: 0,
      y: 0,

    });
    /*
    const src = '/dns-svgrepo-com.svg';
    Konva.Image.fromURL(src, (imageNode) => {
      imageNode.setAttrs({
        x: 100,
        y: 100,
        width: 200,
        height: 200,
        draggable: false,
      })
      var rect = new Konva.Rect({
        x: 100,
        y: 100,
        width: 200,
        height: 200,
        fill: '#EEEEEE',
        stroke: '#000000',
        strokeWidth: 1,
  
        draggable: false
      })
      const group1 = new Konva.Group({
        name: 'asset',
        assetType: AssetType.Image,
        draggable: true
      })
      group1.add(rect)
      group1.add(imageNode)
      group1.draggable(true)

      this.scene.add(group1);
      
    })

*/ 
   
    var iotNode=new IotNode(this,{
      name: 'iotDevice',
      description:'物理设备',
       icon: 'icon',
       type: 'iotNode',
       version: '1.0.0',
    },{
      id: 'UUID',
      height: 100,
      width: 250,
      x: 200,
      y: 200,
      action: '选择接入方式',
      nodeType: IotNodeType.Device,
      isBegin: true,
      isEnd: true,
      isMuti: true,
    });
    this.stage.add(this.background);
    this.stage.add(this.scene);
    this.stage.add(this.frontCover);
    iotNode.draw();


    this.draws[Helpers.Ruler.name] = new Helpers.Ruler(this, this.frontCover, { size: this.rulerSize })
    this.draws[Helpers.Ruler.name].init();
    this.draws[Helpers.Ruler.name].draw();


    this.draws[Helpers.BgGround.name] = new Helpers.BgGround(this, this.background, { size: this.bgSize })
    this.draws[Helpers.BgGround.name].init();
    this.draws[Helpers.BgGround.name].draw();

    this.draws[Helpers.Graph.name] = new Helpers.Graph(this, this.frontCover, { })
    this.draws[Helpers.Graph.name].init();
    this.draws[Helpers.Graph.name].draw();

    this.draws[Helpers.RefLine.name] = new Helpers.RefLine(this, this.frontCover, { padding: this.rulerSize })
    this.draws[Helpers.RefLine.name].init();
    this.draws[Helpers.RefLine.name].draw();
    
    this.draws[Helpers.Attract.name] = new Helpers.Attract(this, this.frontCover, { size: this.pointSize })
    this.draws[Helpers.Attract.name].init();
    this.draws[Helpers.Attract.name].draw();

    this.draws[Helpers.Link.name] = new Helpers.Link(this, this.frontCover, { size: this.pointSize })
    this.draws[Helpers.Link.name].init();
    this.draws[Helpers.Link.name].draw();


    this.eventBind();
  }
  
   resize(width: number, height: number): void {
    this.stage.width(width);
    this.stage.height(height);

    this.redraw();
  }
 
    redraw(drawNames?: string[]): void {

     // debugger
    const all = [
      Helpers.Ruler.name,
      Helpers.BgGround.name,
      Helpers.Graph.name,
      Helpers.RefLine.name,
      Helpers.Attract.name,
      Helpers.Link.name
      
    ]
    if (Array.isArray(drawNames)) {
      // 选择性 draw 也要保持顺序
      for (const name of all) {
        if (drawNames.includes(name)) {
          this.draws[name].draw()
        }
      }
    } else {
      for (const name of all) {
        this.draws[name].draw()
      }
    }
  }

  // 获取 stage 状态
  getStageState() {
    return {
      width: this.stage.width() - this.rulerSize,
      height: this.stage.height() - this.rulerSize,
      scale: this.stage.scaleX(),
      x: this.stage.x(),
      y: this.stage.y()
    }
  }

  // 相对大小（基于 stage，且无视 scale）
  toStageValue(boardPos: number) {
    return boardPos / this.stage.scaleX()
  }
  // 事件绑定
  eventBind() {
    for (const event of [
      'mousedown',
      'mouseup',
      'mousemove',
      'wheel',
      'contextmenu',
      'pointerclick'
    ]) {
      this.stage.on(event, (e) => {
        e?.evt?.preventDefault()

        for (const k in this.draws) {
          this.draws[k].handlers?.stage?.[event]?.(e)
        }

        for (const k in this.handlers) {
          this.handlers[k].handlers?.stage?.[event]?.(e)
        }
      })
    }

    const container = this.stage.container()
    container.tabIndex = 1
    container.focus()
    for (const event of [
      'mouseenter',
      'dragenter',
      'mousemove',
      'mouseout',
      'dragenter',
      'dragover',
      'drop',
      'keydown',
      'keyup'
    ]) {
      container.addEventListener(event, (e) => {
        e?.preventDefault()

        if (['mouseenter', 'dragenter'].includes(event)) {
          // 激活 dom 事件
          this.stage.container().focus()
        }

        for (const k in this.draws) {
          this.draws[k].handlers?.dom?.[event]?.(e)
        }

        for (const k in this.handlers) {
          this.handlers[k].handlers?.dom?.[event]?.(e)
        }
      })
    }

    for (const event of [
      'mousedown',
      'transformstart',
      'transform',
      'transformend',
      'dragstart',
      'dragmove',
      'dragend',
      'mousemove',
      'mouseleave'
    ]) {
      this.transformer.on(event, (e) => {
        e?.evt?.preventDefault()

        for (const k in this.draws) {
          this.draws[k].handlers?.transformer?.[event]?.(e)
        }

        for (const k in this.handlers) {
          this.handlers[k].handlers?.transformer?.[event]?.(e)
        }
      })
    }

    this.handlers[Handlers.SelectionHandler.name]?.transformerConfig?.anchorDragBoundFunc &&
      this.transformer.anchorDragBoundFunc(
        this.handlers[Handlers.SelectionHandler.name].transformerConfig!.anchorDragBoundFunc!
      )
  }
   // 改变画图类型
   changeGraphType(type?: GraphType) {
    this.graphType = type
    this.emit('graph-type-change', this.graphType)
  }
  
  // 绝对大小（基于可视区域像素）
  toBoardValue(stagePos: number) {
    return stagePos * this.stage.scaleX()
  }
  // 忽略非素材
  ignore(node: Konva.Node) {
    // 素材有各自根 group
    const isGroup = node instanceof Konva.Group
    return !isGroup || this.ignoreSelect(node) || this.ignoreDraw(node) || this.ignoreLink(node)
  }

  // 忽略 选择时 辅助元素
  ignoreSelect(node: Konva.Node) {
    return node.id() === 'selectRect' || node.id() === 'hoverRect'
  }

  // 忽略各 draw 的根 group
  ignoreDraw(node: Konva.Node) {
    return (
      node.name() === Helpers.BgGround.name ||
      node.name() === Helpers.Ruler.name ||
      node.name() === Helpers.Graph.name ||
      node.name() === Helpers.RefLine.name ||
      node.name() === Helpers.Link.name
    )
  }

  // 忽略各 draw 的根 group
  ignoreLink(node: Konva.Node) {
    return (
      node.name() === 'link-anchor' ||
      node.name() === 'linking-line' ||
      node.name() === 'link-point' ||
      node.name() === 'link-line' ||
      node.name() === 'link-manual-point'
    )
  }
  
  // 移除元素
  remove(nodes: Konva.Node[]) {

    for (const node of nodes) {
      if (node instanceof Konva.Transformer) {
        // 移除已选择的节点
        this.remove(this.selectionTool.selectingNodes)
      } else {
        // 移除相关联系线信息
        const groupId = node.id()

        for (const rn of this.scene.getChildren()) {
          if (rn.id() !== groupId && Array.isArray(rn.attrs.points)) {
            for (const point of rn.attrs.points) {
              if (Array.isArray(point.pairs)) {
                // 移除拐点记录
                if (rn.attrs.manualPointsMap) {
                  point.pairs
                    .filter(
                      (pair: LinkDrawPair) =>
                        pair.from.groupId === groupId || pair.to.groupId === groupId
                    )
                    .forEach((pair: LinkDrawPair) => {
                      rn.attrs.manualPointsMap[pair.id] = undefined
                    })
                }

                // 连接线信息
                point.pairs = point.pairs.filter(
                  (pair: LinkDrawPair) =>
                    pair.from.groupId !== groupId && pair.to.groupId !== groupId
                )
              }
            }

            rn.setAttr('points', rn.attrs.points)
          }
        }

        // 移除未选择的节点
        node.destroy()
      }
    }

    if (nodes.length > 0) {
      // 清除选择
      this.selectionTool.selectingClear()

      // 更新历史
      this.updateHistory()

      // 重绘
      this.redraw()
    }
  }

  prevHistory() {
    const record = this.history[this.historyIndex - 1]
    if (record) {
      this.importExportTool.restore(record, true)
      this.historyIndex--

      // 历史变化事件
      this.emit('history-change', {
        records: _.clone(this.history),
        index: this.historyIndex
      })
    }
  }

  nextHistory() {
    const record = this.history[this.historyIndex + 1]
    if (record) {
      this.importExportTool.restore(record, true)
      this.historyIndex++
      // 历史变化事件
      this.emit('history-change', {
        records: _.clone(this.history),
        index: this.historyIndex
      })
    }
  }

  updateHistory() {
    this.history.splice(this.historyIndex + 1)
    this.history.push(this.importExportTool.save())
    this.historyIndex = this.history.length - 1
    // 历史变化事件
    this.emit('history-change', {
      records: _.clone(this.history),
      index: this.historyIndex
    })
  }
}