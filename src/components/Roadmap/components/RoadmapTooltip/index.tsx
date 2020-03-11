import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { getDayPlural } from '@csssr/gpn-utils/lib/pluralization'
import { isDefined } from '@csssr/gpn-utils/lib/type-guards'
import { Text } from '@gpn-design/uikit'
import classnames from 'classnames'
import { reverse } from 'lodash'

import { ColorGroups } from '@/dashboard/types'
import { themeColorLight } from '@/utils/theme'
import { daysDiff, formatDate, getEndOfDay, getStartOfDay } from '@/utils/time'

import { Item } from '../..'

import css from './index.css'

type Props = {
  colorGroups: ColorGroups
  direction?: 'top' | 'bottom'
  plan: Item
  fact?: Item
  forecast?: Item
  left: number
  top?: number
  bottom?: number
}

const MAX_LENGTH_COMMENT = 280
const CLEAN_COMMENT = 'Комментария нет'

const stopEventHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
  event.stopPropagation()

const getDayText = (start: number, end: number) =>
  getDayPlural(daysDiff(getStartOfDay(start), getEndOfDay(end)))

const DateText: React.FC<{ label: string; startDate: number; endDate: number }> = ({
  label,
  startDate,
  endDate,
}) => (
  <>
    <Text tag="span" size="xs" view="primary">
      <span className={css.label}>{label}: </span>
      {formatDate(startDate)} – {formatDate(endDate)}{' '}
    </Text>
    <Text tag="span" size="xs" view="primary" weight="bold">
      ({getDayText(startDate, endDate)})
    </Text>
  </>
)

const renderDates = ({
  color,
  plan,
  fact,
  forecast,
}: {
  color: string
  plan: Item
  fact?: Item
  forecast?: Item
}) => (
  <>
    <div className={css.dateBlock}>
      <span className={classnames(css.circle, css.isPlan)} style={{ background: color }} />
      <DateText label="План" startDate={plan.startDate} endDate={plan.endDate} />
    </div>
    {fact && (
      <div className={css.dateBlock}>
        <span className={css.circle} style={{ background: color }} />
        <DateText label="Факт" startDate={fact.startDate} endDate={fact.endDate} />
      </div>
    )}
    {forecast && (
      <div className={css.dateBlock}>
        <span className={classnames(css.circle, css.isForecast)} style={{ background: color }} />
        <DateText label="Прогноз" startDate={forecast.startDate} endDate={forecast.endDate} />
      </div>
    )}
  </>
)

const renderComment = (comment: string) => {
  const text = comment.substr(0, MAX_LENGTH_COMMENT)

  return (
    <>
      <Text tag="div" size="xs" transform="uppercase" weight="bold" spacing="xs" view="primary">
        Комментарий:
      </Text>
      <Text tag="span" size="xs" view="primary">
        {text}
        {comment.length > MAX_LENGTH_COMMENT ? '...' : ''}
      </Text>
    </>
  )
}

export const RoadmapTooltip: React.FC<Props> = ({
  fact,
  plan,
  forecast,
  colorGroups,
  direction = 'top',
  left,
  top,
  bottom,
}) => {
  const [activeSection, changeActiveSection] = useState('')
  const isActiveDates = activeSection === 'dates'
  const isActiveComment = activeSection === 'comment'
  const isOpened = isActiveDates || isActiveComment
  const { groupName } = plan
  const comment = fact?.comment || forecast?.comment || CLEAN_COMMENT
  const content = [
    isOpened ? (
      <div
        onClick={stopEventHandler}
        key="content"
        className={classnames(css.content, isActiveDates && css.dates)}
      >
        {isActiveComment
          ? renderComment(comment)
          : renderDates({ color: colorGroups[groupName], fact, plan, forecast })}
      </div>
    ) : null,
    <div key="buttons" className={css.buttons}>
      <div
        className={classnames(css.button, css.dates, isActiveDates && css.active)}
        onClick={event => {
          stopEventHandler(event)
          changeActiveSection('dates')
        }}
      />
      <div
        className={classnames(css.button, css.comment, isActiveComment && css.active)}
        onClick={event => {
          stopEventHandler(event)
          changeActiveSection('comment')
        }}
      />
    </div>,
  ] as const

  if (!isDefined(top) && !isDefined(bottom)) {
    return null
  }

  return ReactDOM.createPortal(
    <div
      className={classnames(themeColorLight, css.main, isOpened && css.opened, css[direction])}
      style={{ left, top, bottom }}
    >
      {direction === 'top' ? content : reverse(content)}
    </div>,
    window.document.body
  )
}
