import { AssetInfo } from "../../lib/inspiration/common/render"


// 从 public 加载静态资源 + 自定义连接点
export const assetsModules: {
  svg: Array<AssetInfo>
  image: Array<AssetInfo>
  gif: Array<AssetInfo>
  json: Array<AssetInfo>
  more: Array<AssetInfo>
} = {
  svg: [
    {
      url: '/img/svg/ARRESTER_1.svg',
      points: [
        { x: 101, y: 1, direction: 'top' },
        { x: 101, y: 199, direction: 'bottom' }
      ]
    },
    {
      url: './img/svg/ARRESTER_2.svg',
      points: [
        { x: 101, y: 1, direction: 'top' },
        { x: 101, y: 199, direction: 'bottom' }
      ]
    },
    {
      url: './img/svg/ARRESTER_2_1.svg',
      points: [
        { x: 101, y: 1, direction: 'top' },
        { x: 101, y: 199, direction: 'bottom' }
      ]
    },
    {
      url: './img/svg/BREAKER_CLOSE.svg',
      points: [
        { x: 100, y: 1, direction: 'top' },
        { x: 100, y: 199, direction: 'bottom' }
      ]
    },
    {
      url: './img/svg/BREAKER_OPEN.svg',
      points: [
        { x: 100, y: 1, direction: 'top' },
        { x: 100, y: 199, direction: 'bottom' }
      ]
    },
    {
      url: './img/svg/CAPACITOR.svg',
      points: [
        { x: 99, y: 1, direction: 'top' },
        { x: 99, y: 199, direction: 'bottom' }
      ]
    },
    {
      url: './img/svg/CT_1.svg',
      points: [
        { x: 100, y: 1, direction: 'top' },
        { x: 100, y: 199, direction: 'bottom' }
      ]
    },
    {
      url: './img/svg/CT_2.svg',
      points: [
        { x: 100, y: 1, direction: 'top' },
        { x: 100, y: 199, direction: 'bottom' }
      ]
    },
    {
      url: './img/svg/HL.svg',
      points: [
        { x: 100, y: 1, direction: 'top' },
        { x: 100, y: 199, direction: 'bottom' }
      ]
    },
    {
      url: './img/svg/POTENTIAL_TRANSFORMER_2.svg',
      points: [
        { x: 100, y: 1, direction: 'top' },
        { x: 100, y: 199, direction: 'bottom' }
      ]
    },
    {
      url: './img/svg/POT_TRANS_3_WINDINGS.svg',
      points: [
        { x: 100, y: 1, direction: 'top' },
        { x: 70, y: 199, direction: 'bottom' },
        { x: 130, y: 199, direction: 'bottom' }
      ]
    },
    {
      url: './img/svg/PT.svg',
      points: [
        { x: 34, y: 100, direction: 'left' },
        { x: 98, y: 100, direction: 'right' }
      ]
    },
],
image: [{
  url: './img/png/1.png',
  points: [
    { x: 52, y: 2, direction: 'top' },
    { x: 52, y: 100, direction: 'bottom' },
    { x: 2, y: 51, direction: 'left' },
    { x: 101, y: 51, direction: 'right' }
  ]
},
{ url: './img/png/2.png' },
{ url: './img/jpg/big.jpg' }
],
gif:[{ url: './img/gif/5.gif', points: [{ x: 100, y: 100 }] },],
json:[{ url: './json/1.json', avatar: './json/1.png' },
  { url: './json/2.json', avatar: './json/2.png' },
  { url: './json/3.json', avatar: './json/3.png' },
  { url: './json/4.json', avatar: './json/4.png' },
  { url: './json/5.json', avatar: './json/5.png' }]

}