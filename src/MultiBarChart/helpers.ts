import { isDefined, isNotNil } from '@consta/widgets-utils/lib/type-guards'
import _ from 'lodash'

import { Column, Group } from './'

const defaultColumnItem = {
  total: 0,
  sections: undefined,
}

const getTransformColumn = (filter: (value: number) => boolean) => (
  column: Column | undefined | null
) => {
  if (!isNotNil(column)) {
    return defaultColumnItem
  }

  const total = _.sum(column.map(item => item.value))
  const sections = column
    .map(({ value, color }) => {
      if (!isNotNil(value) || !filter(value)) {
        return
      }

      return {
        color,
        value,
      }
    })
    .filter(isDefined)

  return sections.length > 0
    ? {
        total,
        sections,
      }
    : defaultColumnItem
}

export const transformGroupsToCommonGroups = (groups: ReadonlyArray<Group | undefined | null>) => {
  const getColumns = getTransformColumn(v => v >= 0)
  const getReversedColumns = getTransformColumn(v => v < 0)

  return groups.filter(isNotNil).map(group => {
    const columns = group.values.map(getColumns)
    const reversedColumns = group.values.map(getReversedColumns)
    const total = _.sum(_.concat(columns, reversedColumns).flatMap(column => column.total))

    return {
      name: group.groupName,
      total,
      columns,
      reversedColumns,
    }
  })
}
