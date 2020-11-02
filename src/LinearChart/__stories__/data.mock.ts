export const gridConfigSimple = {
  x: {
    labels: 'bottom',
    labelTicks: 1,
    gridTicks: 10,
    guide: true,
    withPaddings: false,
  },
  y: {
    labels: 'left',
    labelTicks: 1,
    gridTicks: 3,
    guide: true,
    withPaddings: false,
  },
} as const

export const gridConfigFormat = {
  x: {
    labels: 'bottom',
    labelTicks: 3,
    gridTicks: 10,
    guide: true,
    withPaddings: false,
  },
  y: {
    labels: 'left',
    labelTicks: 1,
    gridTicks: 3,
    guide: true,
    withPaddings: false,
  },
} as const

export const gridConfigLabel = {
  x: {
    labels: 'top',
    labelTicks: 1,
    gridTicks: 10,
    guide: true,
    withPaddings: false,
  },
  y: {
    labels: 'right',
    labelTicks: 1,
    gridTicks: 3,
    guide: true,
    withPaddings: false,
  },
} as const

export const linesSimple = [
  {
    values: [
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 0 },
      { x: 5, y: 3 },
      { x: 7, y: 1 },
      { x: 9, y: 3 },
    ],
    dots: true,
    lineName: 'Красивая зеленая линия',
    withGradient: true,
    color: 'var(--color-bg-success)',
  },
] as const

export const linesFormat = [
  {
    values: [
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 0 },
      { x: 5, y: 3 },
      { x: 7, y: 1 },
      { x: 9, y: 3 },
    ],
    dots: true,
    lineName: 'Красивая зеленая линия',
    withGradient: true,
    color: 'var(--color-bg-success)',
  },
] as const

export const linesNull = [
  {
    values: [
      {
        x: 0,
        y: null,
      },
      {
        x: 1,
        y: 1,
      },
      {
        x: 2,
        y: 0,
      },
      {
        x: 3,
        y: null,
      },
      {
        x: 4,
        y: null,
      },
      {
        x: 5,
        y: 3,
      },
      {
        x: 6,
        y: null,
      },
      {
        x: 7,
        y: 1,
      },
      {
        x: 8,
        y: 2,
      },
      {
        x: 9,
        y: null,
      },
    ],
    dots: true,
    lineName: 'Северный бур',
    withGradient: true,
    color: 'var(--color-bg-success)',
  },
] as const

export const linesBoundaries = [
  {
    values: [
      {
        x: 0,
        y: null,
      },
      {
        x: 1,
        y: -10,
      },
      {
        x: 2,
        y: 30,
      },
      {
        x: 3,
        y: 5,
      },
      {
        x: 4,
        y: 25,
      },
      {
        x: 5,
        y: -30,
      },
      {
        x: 6,
        y: 25,
      },
      {
        x: 7,
        y: null,
      },
    ],
    dots: true,
    lineName: 'Южное месторождение',
    color: '#3B4D5B',
  },
  {
    values: [
      {
        x: 0,
        y: null,
      },
      {
        x: 1,
        y: 50,
      },
      {
        x: 2,
        y: -45,
      },
      {
        x: 3,
        y: 35,
      },
      {
        x: 4,
        y: 35,
      },
      {
        x: 5,
        y: -10,
      },
      {
        x: 6,
        y: 10,
      },
      {
        x: 7,
        y: null,
      },
    ],
    dots: true,
    lineName: 'Северный бур',
    color: 'var(--color-bg-success)',
    withBoundaries: true,
  },
] as const

export const boundaries = [
  {
    value: [-25, -35],
    color: 'var(--color-bg-caution)',
  },
  {
    value: [-35, -51],
    color: 'var(--color-bg-alert)',
  },
  {
    value: [35, 51],
    color: 'var(--color-bg-alert)',
  },
  {
    value: [25, 35],
    color: 'var(--color-bg-caution)',
  },
  {
    value: [25, -25],
    color: 'var(--color-bg-success)',
  },
] as const

export const threshold = {
  max: {
    values: [
      {
        x: 1604651388343,
        y: 6,
      },
      {
        x: 1604737788343,
        y: 6,
      },
      {
        x: 1604824188343,
        y: 6,
      },
      {
        x: 1604910588343,
        y: 6,
      },
      {
        x: 1604996988343,
        y: 6,
      },
      {
        x: 1605083388343,
        y: 6,
      },
      {
        x: 1605169788343,
        y: 6,
      },
      {
        x: 1605256188343,
        y: 6,
      },
      {
        x: 1605342588343,
        y: 6,
      },
      {
        x: 1605428988343,
        y: 6,
      },
      {
        x: 1605515388343,
        y: 6,
      },
      {
        x: 1605601788343,
        y: 6,
      },
      {
        x: 1605688188343,
        y: 6,
      },
      {
        x: 1605774588343,
        y: 6,
      },
      {
        x: 1605860988343,
        y: 6,
      },
      {
        x: 1605947388343,
        y: 6,
      },
      {
        x: 1606033788343,
        y: 6,
      },
      {
        x: 1606120188343,
        y: 6,
      },
      {
        x: 1606206588343,
        y: 6,
      },
      {
        x: 1606292988343,
        y: 6,
      },
      {
        x: 1606379388343,
        y: 6,
      },
      {
        x: 1606465788343,
        y: 6,
      },
      {
        x: 1606552188343,
        y: 6,
      },
      {
        x: 1606638588343,
        y: 6,
      },
      {
        x: 1606724988343,
        y: 6,
      },
      {
        x: 1606811388343,
        y: 6,
      },
      {
        x: 1606897788343,
        y: 6,
      },
      {
        x: 1606984188343,
        y: 6,
      },
      {
        x: 1607070588343,
        y: 6,
      },
      {
        x: 1607156988343,
        y: 6,
      },
      {
        x: 1607243388343,
        y: 6,
      },
      {
        x: 1607329788343,
        y: 6,
      },
      {
        x: 1607416188343,
        y: 6,
      },
      {
        x: 1607502588343,
        y: 6,
      },
      {
        x: 1607588988343,
        y: 6,
      },
      {
        x: 1607675388343,
        y: 6,
      },
      {
        x: 1607761788343,
        y: 6,
      },
      {
        x: 1607848188343,
        y: 6,
      },
      {
        x: 1607934588343,
        y: 6,
      },
      {
        x: 1608020988343,
        y: 6,
      },
      {
        x: 1608107388343,
        y: 6,
      },
      {
        x: 1608193788343,
        y: 6,
      },
      {
        x: 1608280188343,
        y: 6,
      },
      {
        x: 1608366588343,
        y: 6,
      },
      {
        x: 1608452988343,
        y: 6,
      },
      {
        x: 1608539388343,
        y: 6,
      },
      {
        x: 1608625788343,
        y: 6,
      },
      {
        x: 1608712188343,
        y: 6,
      },
      {
        x: 1608798588343,
        y: 6,
      },
      {
        x: 1608884988343,
        y: 6,
      },
      {
        x: 1608971388343,
        y: 6,
      },
    ],
  },
  min: {
    values: [
      {
        x: 1604651388343,
        y: 1,
      },
      {
        x: 1604737788343,
        y: 1,
      },
      {
        x: 1604824188343,
        y: 1,
      },
      {
        x: 1604910588343,
        y: 1,
      },
      {
        x: 1604996988343,
        y: 1,
      },
      {
        x: 1605083388343,
        y: 1,
      },
      {
        x: 1605169788343,
        y: 1,
      },
      {
        x: 1605256188343,
        y: 1,
      },
      {
        x: 1605342588343,
        y: 1,
      },
      {
        x: 1605428988343,
        y: 1,
      },
      {
        x: 1605515388343,
        y: 1,
      },
      {
        x: 1605601788343,
        y: 1,
      },
      {
        x: 1605688188343,
        y: 1,
      },
      {
        x: 1605774588343,
        y: 1,
      },
      {
        x: 1605860988343,
        y: 1,
      },
      {
        x: 1605947388343,
        y: 1,
      },
      {
        x: 1606033788343,
        y: 1,
      },
      {
        x: 1606120188343,
        y: 1,
      },
      {
        x: 1606206588343,
        y: 1,
      },
      {
        x: 1606292988343,
        y: 1,
      },
      {
        x: 1606379388343,
        y: 1,
      },
      {
        x: 1606465788343,
        y: 1,
      },
      {
        x: 1606552188343,
        y: 1,
      },
      {
        x: 1606638588343,
        y: 1,
      },
      {
        x: 1606724988343,
        y: 1,
      },
      {
        x: 1606811388343,
        y: 1,
      },
      {
        x: 1606897788343,
        y: 1,
      },
      {
        x: 1606984188343,
        y: 1,
      },
      {
        x: 1607070588343,
        y: 1,
      },
      {
        x: 1607156988343,
        y: 1,
      },
      {
        x: 1607243388343,
        y: 1,
      },
      {
        x: 1607329788343,
        y: 1,
      },
      {
        x: 1607416188343,
        y: 1,
      },
      {
        x: 1607502588343,
        y: 1,
      },
      {
        x: 1607588988343,
        y: 1,
      },
      {
        x: 1607675388343,
        y: 1,
      },
      {
        x: 1607761788343,
        y: 1,
      },
      {
        x: 1607848188343,
        y: 1,
      },
      {
        x: 1607934588343,
        y: 1,
      },
      {
        x: 1608020988343,
        y: 1,
      },
      {
        x: 1608107388343,
        y: 1,
      },
      {
        x: 1608193788343,
        y: 1,
      },
      {
        x: 1608280188343,
        y: 1,
      },
      {
        x: 1608366588343,
        y: 1,
      },
      {
        x: 1608452988343,
        y: 1,
      },
      {
        x: 1608539388343,
        y: 1,
      },
      {
        x: 1608625788343,
        y: 1,
      },
      {
        x: 1608712188343,
        y: 1,
      },
      {
        x: 1608798588343,
        y: 1,
      },
      {
        x: 1608884988343,
        y: 1,
      },
      {
        x: 1608971388343,
        y: 1,
      },
    ],
  },
} as const

export const linesThreshold = [
  {
    values: [
      {
        x: 1604651388343,
        y: 1,
      },
      {
        x: 1604737788343,
        y: 4,
      },
      {
        x: 1604824188343,
        y: 0,
      },
      {
        x: 1604910588343,
        y: 3,
      },
      {
        x: 1604996988343,
        y: 0,
      },
      {
        x: 1605083388343,
        y: 1,
      },
      {
        x: 1605169788343,
        y: 7,
      },
      {
        x: 1605256188343,
        y: 3,
      },
      {
        x: 1605342588343,
        y: 6,
      },
      {
        x: 1605428988343,
        y: -2,
      },
      {
        x: 1605515388343,
        y: -2,
      },
      {
        x: 1605601788343,
        y: 7,
      },
      {
        x: 1605688188343,
        y: 2,
      },
      {
        x: 1605774588343,
        y: 1,
      },
      {
        x: 1605860988343,
        y: 5,
      },
      {
        x: 1605947388343,
        y: -1,
      },
      {
        x: 1606033788343,
        y: 6,
      },
      {
        x: 1606120188343,
        y: 3,
      },
      {
        x: 1606206588343,
        y: 4,
      },
      {
        x: 1606292988343,
        y: 7,
      },
      {
        x: 1606379388343,
        y: 4,
      },
      {
        x: 1606465788343,
        y: 6,
      },
      {
        x: 1606552188343,
        y: 4,
      },
      {
        x: 1606638588343,
        y: 7,
      },
      {
        x: 1606724988343,
        y: 6,
      },
      {
        x: 1606811388343,
        y: -1,
      },
      {
        x: 1606897788343,
        y: 6,
      },
      {
        x: 1606984188343,
        y: 2,
      },
      {
        x: 1607070588343,
        y: 2,
      },
      {
        x: 1607156988343,
        y: 5,
      },
      {
        x: 1607243388343,
        y: -2,
      },
      {
        x: 1607329788343,
        y: 2,
      },
      {
        x: 1607416188343,
        y: 0,
      },
      {
        x: 1607502588343,
        y: 1,
      },
      {
        x: 1607588988343,
        y: 2,
      },
      {
        x: 1607675388343,
        y: 0,
      },
      {
        x: 1607761788343,
        y: 6,
      },
      {
        x: 1607848188343,
        y: 0,
      },
      {
        x: 1607934588343,
        y: 0,
      },
      {
        x: 1608020988343,
        y: 7,
      },
      {
        x: 1608107388343,
        y: 6,
      },
      {
        x: 1608193788343,
        y: 1,
      },
      {
        x: 1608280188343,
        y: -2,
      },
      {
        x: 1608366588343,
        y: 6,
      },
      {
        x: 1608452988343,
        y: 3,
      },
      {
        x: 1608539388343,
        y: 5,
      },
      {
        x: 1608625788343,
        y: 6,
      },
      {
        x: 1608712188343,
        y: 4,
      },
      {
        x: 1608798588343,
        y: 0,
      },
      {
        x: 1608884988343,
        y: 6,
      },
    ],
    dots: true,
    lineName: 'Северный бур',
    withGradient: true,
    color: 'var(--color-bg-success)',
  },
  {
    values: [
      {
        x: 1604651388343,
        y: 3,
      },
      {
        x: 1604737788343,
        y: 2,
      },
      {
        x: 1604824188343,
        y: 6,
      },
      {
        x: 1604910588343,
        y: 3,
      },
      {
        x: 1604996988343,
        y: 3,
      },
      {
        x: 1605083388343,
        y: -1,
      },
      {
        x: 1605169788343,
        y: 2,
      },
      {
        x: 1605256188343,
        y: 7,
      },
      {
        x: 1605342588343,
        y: 0,
      },
      {
        x: 1605428988343,
        y: 7,
      },
      {
        x: 1605515388343,
        y: 3,
      },
      {
        x: 1605601788343,
        y: 3,
      },
      {
        x: 1605688188343,
        y: 0,
      },
      {
        x: 1605774588343,
        y: 6,
      },
      {
        x: 1605860988343,
        y: 6,
      },
      {
        x: 1605947388343,
        y: 4,
      },
      {
        x: 1606033788343,
        y: 4,
      },
      {
        x: 1606120188343,
        y: 7,
      },
      {
        x: 1606206588343,
        y: 2,
      },
      {
        x: 1606292988343,
        y: 4,
      },
      {
        x: 1606379388343,
        y: 3,
      },
      {
        x: 1606465788343,
        y: 0,
      },
      {
        x: 1606552188343,
        y: 5,
      },
      {
        x: 1606638588343,
        y: -1,
      },
      {
        x: 1606724988343,
        y: 2,
      },
      {
        x: 1606811388343,
        y: 0,
      },
      {
        x: 1606897788343,
        y: -2,
      },
      {
        x: 1606984188343,
        y: 5,
      },
      {
        x: 1607070588343,
        y: 5,
      },
      {
        x: 1607156988343,
        y: 2,
      },
      {
        x: 1607243388343,
        y: 7,
      },
      {
        x: 1607329788343,
        y: -1,
      },
      {
        x: 1607416188343,
        y: 7,
      },
      {
        x: 1607502588343,
        y: -1,
      },
      {
        x: 1607588988343,
        y: 2,
      },
      {
        x: 1607675388343,
        y: 4,
      },
      {
        x: 1607761788343,
        y: 3,
      },
      {
        x: 1607848188343,
        y: -2,
      },
      {
        x: 1607934588343,
        y: 4,
      },
      {
        x: 1608020988343,
        y: 3,
      },
      {
        x: 1608107388343,
        y: 3,
      },
      {
        x: 1608193788343,
        y: 2,
      },
      {
        x: 1608280188343,
        y: -1,
      },
      {
        x: 1608366588343,
        y: -2,
      },
      {
        x: 1608452988343,
        y: 4,
      },
      {
        x: 1608539388343,
        y: 7,
      },
      {
        x: 1608625788343,
        y: 4,
      },
      {
        x: 1608712188343,
        y: 3,
      },
      {
        x: 1608798588343,
        y: 2,
      },
      {
        x: 1608884988343,
        y: 4,
      },
      {
        x: 1608971388343,
        y: 4,
      },
    ],
    lineName: 'Южное месторождение',
    color: 'var(--color-bg-normal)',
  },
] as const
