import * as React from 'react'

import { Layout, layouts, Size, sizes, Stats } from '@/components/Stats'
import { WidgetSettingsSelect } from '@/components/WidgetSettingsSelect'
import { DataMap, DataType } from '@/dashboard'
import { widgetIdsByType } from '@/utils/widgets-list'
import { createWidget, WidgetContentProps } from '@/utils/WidgetFactory'

const dataType = DataType.Stats
type Data = DataMap[typeof dataType]

export const topTypes = ['label', 'sublabel'] as const
export type TopTypes = typeof topTypes[number]

export const positionNames = ['right', 'bottom'] as const
export type PositionNames = typeof positionNames[number]

type Params = {
  size: Size
  layout: Layout
}

export const defaultParams: Params = {
  size: 'xs',
  layout: 'full',
}

export const StatsWidgetContent: React.FC<WidgetContentProps<Data, Params>> = ({
  data,
  params,
}) => <Stats {...data} {...params} />

export const StatsWidget = createWidget<Data, Params>({
  id: widgetIdsByType.StatsWidget,
  name: 'Статы',
  defaultParams,
  dataType,
  Content: StatsWidgetContent,
  renderSettings(params, onChangeParam) {
    return (
      <>
        <WidgetSettingsSelect
          name="Размер"
          value={params.size}
          onChange={value => onChangeParam('size', value)}
          values={sizes.map(i => ({ value: i, name: i }))}
        />
        <WidgetSettingsSelect
          name="Расположение элементов"
          value={params.layout}
          onChange={value => onChangeParam('layout', value)}
          values={layouts.map(i => ({ value: i, name: i }))}
        />
      </>
    )
  },
})
