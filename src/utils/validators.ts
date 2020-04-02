/* istanbul ignore file */
import { isDefined, isNotNil } from '@csssr/gpn-utils/lib/type-guards'
import { flattenDeep, isEmpty, uniq } from 'lodash'

import { DataMap, DataType } from '@/dashboard'

/**
 * @return имена невалидных цветовых групп, для которых не задан цвет
 */
export const dataColorsValidator = (
  dataType: DataType,
  widgetData: DataMap[keyof DataMap] | typeof undefined
): readonly string[] => {
  switch (dataType) {
    case DataType.BarChart: {
      const { groups, colorGroups } = widgetData as DataMap[DataType.BarChart]
      const colors = Object.keys(colorGroups)

      return groups
        .map(item => {
          return item.values
            .map(({ colorGroupName }) => {
              if (!colors.includes(colorGroupName)) {
                return colorGroupName
              }
            })
            .filter(isDefined)
        })
        .flat()
    }

    case DataType.Donut: {
      const { data, colorGroups } = widgetData as DataMap[DataType.Donut]
      const colors = Object.keys(colorGroups)

      return data
        .map(({ colorGroupName }) => {
          if (!colors.includes(colorGroupName)) {
            return colorGroupName
          }
        })
        .filter(isDefined)
    }

    case DataType.Legend: {
      const { data, colorGroups } = widgetData as DataMap[DataType.Legend]
      const colors = Object.keys(colorGroups)

      return data
        .map(({ colorGroupName }) => {
          if (!colors.includes(colorGroupName)) {
            return colorGroupName
          }
        })
        .filter(isDefined)
    }

    case DataType.LinearChart: {
      const { data, colorGroups } = widgetData as DataMap[DataType.LinearChart]
      const colors = Object.keys(colorGroups)

      return data
        .map(({ colorGroupName }) => {
          if (!colors.includes(colorGroupName)) {
            return colorGroupName
          }
        })
        .filter(isDefined)
    }

    case DataType.MultiBarChart: {
      const { groups, colorGroups } = widgetData as DataMap[DataType.MultiBarChart]
      const colors = Object.keys(colorGroups)
      const colorGroupNames = uniq(
        flattenDeep<string>(groups.map(group => group.values.map(value => Object.keys(value))))
      )

      return colorGroupNames
        .map(color => {
          if (!colors.includes(color)) {
            return color
          }
        })
        .filter(isDefined)
    }

    case DataType.ProgressBar: {
      const { data, colorGroups } = widgetData as DataMap[DataType.ProgressBar]
      const colors = Object.keys(colorGroups)

      return data
        .map(({ colorGroupName }) => {
          if (!colors.includes(colorGroupName)) {
            return colorGroupName
          }
        })
        .filter(isDefined)
    }

    case DataType.TableLegend: {
      const { legendFields, colorGroups } = widgetData as DataMap[DataType.TableLegend]
      const colors = Object.keys(colorGroups)

      return legendFields
        .map(({ colorGroupName }) => {
          if (!colors.includes(colorGroupName)) {
            return colorGroupName
          }
        })
        .filter(isDefined)
    }

    case DataType.RadarChart: {
      const { colorGroups, figures } = widgetData as DataMap[DataType.RadarChart]

      return figures
        .filter(figure => !colorGroups[figure.colorGroupName])
        .map(figure => figure.colorGroupName)
    }

    default: {
      return []
    }
  }
}

export const widgetDataIsEmpty = (
  type: DataType,
  data: DataMap[keyof DataMap] | typeof undefined
) => {
  switch (type) {
    case DataType.BarChart: {
      const widgetData = data as DataMap[DataType.BarChart] | undefined
      return !widgetData || widgetData.groups.length === 0
    }
    case DataType.Donut: {
      const widgetData = data as DataMap[DataType.Donut] | undefined

      if (!widgetData) {
        return true
      }

      const sections = widgetData.data.map(item => item.sections).flat()

      if (!sections.length) {
        return true
      }

      return !sections.some(({ value }) => isNotNil(value))
    }
    case DataType.Legend: {
      const widgetData = data as DataMap[DataType.Legend] | undefined
      return !widgetData || widgetData.data.length === 0
    }
    case DataType.LinearChart: {
      const widgetData = data as DataMap[DataType.LinearChart] | undefined
      return !widgetData || widgetData.data.length === 0
    }
    case DataType.MultiBarChart: {
      const widgetData = data as DataMap[DataType.MultiBarChart] | undefined
      return !widgetData || widgetData.groups.length === 0
    }
    case DataType.ProgressBar: {
      const widgetData = data as DataMap[DataType.ProgressBar] | undefined
      return !widgetData || widgetData.data.length === 0
    }
    case DataType.RadarChart: {
      const widgetData = data as DataMap[DataType.RadarChart] | undefined
      return !widgetData || widgetData.figures.length === 0
    }
    default: {
      return isEmpty(data)
    }
  }
}
