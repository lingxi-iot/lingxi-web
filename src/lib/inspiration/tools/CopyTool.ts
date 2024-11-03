import _ from 'lodash-es'
import { nanoid } from 'nanoid'
import Konva from 'konva'
import * as Helpers from '../helper'
import { RenderContext } from '../context'
import { ManualPointsMap } from '../common/render'


export class CopyTool {
  static readonly name = 'CopyTool'

  private context: RenderContext
  constructor(context: RenderContext) {
    this.context = context
  }

  // 复制暂存
  pasteCache: Konva.Node[] = []
  // 粘贴次数（用于定义新节点的偏移距离）
  pasteCount = 1

  // 复制
  pasteStart() {
    this.pasteCache = this.context.selectionTool.selectingNodes.map((o) => {
      const copy = o.clone()
      // 恢复透明度、可交互
      copy.setAttrs({
        listening: true,
        opacity: copy.attrs.lastOpacity ?? 1
      })
      // 清空状态
      copy.setAttrs({
        nodeMousedownPos: undefined,
        lastOpacity: undefined,
        lastZIndex: undefined,
        selectingZIndex: undefined,
        selected: false
      })
      return copy
    })
    this.pasteCount = 1
  }

  // 粘贴
  pasteEnd() {
    if (this.pasteCache.length > 0) {
      this.context.selectionTool.selectingClear()
      this.copy(this.pasteCache)
      this.pasteCount++
    }
  }

  // 刷新 id、事件
  nodesIdCover(nodes: Konva.Node[]) {
    let deepAssets = [...nodes]
    const idMap = new Map()

    while (deepAssets.length > 0) {
      const asset = deepAssets.shift()
      if (asset) {
        if (Array.isArray(asset.attrs.points)) {
          for (const point of asset.attrs.points) {
            if (Array.isArray(point.pairs)) {
              for (const pair of point.pairs) {
                if (!idMap.has(pair.id)) {
                  idMap.set(pair.id, 'pr:' + nanoid())
                }

                if (pair.from.groupId && !idMap.has(pair.from.groupId)) {
                  idMap.set(pair.from.groupId, 'g:' + nanoid())
                }

                if (pair.to.groupId && !idMap.has(pair.to.groupId)) {
                  idMap.set(pair.to.groupId, 'g:' + nanoid())
                }

                if (pair.from.pointId && !idMap.has(pair.from.pointId)) {
                  idMap.set(pair.from.pointId, 'p:' + nanoid())
                }

                if (pair.to.pointId && !idMap.has(pair.to.pointId)) {
                  idMap.set(pair.to.pointId, 'p:' + nanoid())
                }
              }
            }

            if (point.id) {
              if (!idMap.has(point.id)) {
                idMap.set(point.id, 'p:' + nanoid())
              }
            }

            if (point.groupId) {
              if (!idMap.has(point.groupId)) {
                idMap.set(point.groupId, 'g:' + nanoid())
              }
            }
          }
        }

        if (Array.isArray(asset.attrs.anchors)) {
          for (const anchor of asset.attrs.anchors) {
            if (anchor.groupId && !idMap.has(anchor.groupId)) {
              idMap.set(anchor.groupId, 'g:' + nanoid())
            }
          }
        }

        if (asset.id()) {
          if (!idMap.has(asset.id())) {
            idMap.set(asset.id(), 'n:' + nanoid())
          }
        }

        if (asset instanceof Konva.Group && Array.isArray(asset.children)) {
          deepAssets.push(...asset.children)
        }
      }
    }

    deepAssets = [...nodes]

    while (deepAssets.length > 0) {
      const asset = deepAssets.shift()
      if (asset) {
        if (idMap.has(asset.id())) {
          asset.id(idMap.get(asset.id()))
        }

        if (Array.isArray(asset.attrs.points)) {
          asset.attrs.points = _.cloneDeep(asset.attrs.points ?? [])

          for (const point of asset.attrs.points) {
            if (Array.isArray(point.pairs)) {
              for (const pair of point.pairs) {
                pair.id = idMap.get(pair.id)

                if (idMap.has(pair.from.groupId)) {
                  pair.from.groupId = idMap.get(pair.from.groupId)
                }
                if (idMap.has(pair.to.groupId)) {
                  pair.to.groupId = idMap.get(pair.to.groupId)
                }
                if (idMap.has(pair.from.pointId)) {
                  pair.from.pointId = idMap.get(pair.from.pointId)
                }
                if (idMap.has(pair.to.pointId)) {
                  pair.to.pointId = idMap.get(pair.to.pointId)
                }
              }
            }

            if (idMap.has(point.id)) {
              if (asset instanceof Konva.Group) {
                const anchor = asset.findOne(`#${point.id}`)
                anchor?.id(idMap.get(point.id))
              }

              point.id = idMap.get(point.id)
              point.visible = false
            }

            if (idMap.has(point.groupId)) {
              point.groupId = idMap.get(point.groupId)
            }
          }
        }

        if (Array.isArray(asset.attrs.anchors)) {
          asset.attrs.anchors = _.cloneDeep(asset.attrs.anchors ?? [])

          for (const anchor of asset.attrs.anchors) {
            if (idMap.has(anchor.groupId)) {
              anchor.groupId = idMap.get(anchor.groupId)
            }
          }
        }

        if (asset instanceof Konva.Group && Array.isArray(asset.children)) {
          deepAssets.push(...asset.children)
        }
      }
    }

    for (const node of nodes) {
      if (node instanceof Konva.Group) {
        node.off('mouseenter')
        node.on('mouseenter', () => {
          // 显示 连接点
          this.context.linkTool.pointsVisible(true, node)
        })
        node.off('mouseleave')
        node.on('mouseleave', () => {
          // 隐藏 连接点
          this.context.linkTool.pointsVisible(false, node)

          // 隐藏 hover 框
          node.findOne('#hoverRect')?.visible(false)
        })

        // 使新节点产生偏移
        node.setAttrs({
          x: node.x() + this.context.toStageValue(this.context.bgSize) * this.pasteCount,
          y: node.y() + this.context.toStageValue(this.context.bgSize) * this.pasteCount
        })

        // 拐点也需要偏移
        if (node.attrs.manualPointsMap) {
          const manualPointsMap = {} as ManualPointsMap

          // 替换 pairId
          for (const pairId in node.attrs.manualPointsMap) {
            manualPointsMap[idMap.get(pairId)] = node.attrs.manualPointsMap[pairId]
          }

          for (const pairId in manualPointsMap) {
            const manualPoints = manualPointsMap[pairId]
            if (Array.isArray(manualPoints)) {
              manualPointsMap[pairId] = manualPoints.map((o) => ({
                x: o.x + this.context.toStageValue(this.context.bgSize) * this.pasteCount,
                y: o.y + this.context.toStageValue(this.context.bgSize) * this.pasteCount
              }))
            }
          }

          node.setAttr('manualPointsMap', manualPointsMap)
        }
      }
    }
  }

  /**
   * 复制粘贴
   * @param nodes 节点数组
   * @param skip 跳过检查
   * @returns 复制的元素
   */
  copy(nodes: Konva.Node[]) {
    const clones: Konva.Group[] = []

    for (const node of nodes) {
      if (node instanceof Konva.Transformer) {
        // 复制已选择
        const backup = [...this.context.selectionTool.selectingNodes]
        this.context.selectionTool.selectingClear()
        this.copy(backup)

        return
      } else {
        // 复制未选择（先记录，后处理）
        clones.push(node.clone())
      }
    }

    // 刷新 id、事件
    this.nodesIdCover(clones)

    // 插入新节点
    this.context.scene.add(...clones)
    // 选中复制内容
    this.context.selectionTool.select(clones)

    // 更新历史
    this.context.updateHistory()

    // 重绘
    this.context.redraw([
      Helpers.Graph.name,
      Helpers.Link.name,
      Helpers.Attract.name,
      Helpers.Ruler.name,
    ])
  }
}
