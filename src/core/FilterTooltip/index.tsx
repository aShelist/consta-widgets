import { useRef } from 'react'

import { useClickOutside } from '@csssr/gpn-utils/lib/use-click-outside'
import { IconFunnel } from '@gpn-design/uikit/IconFunnel'
import { Text } from '@gpn-design/uikit/Text'
import classnames from 'classnames'

import { useTooltipReposition } from '@/common/utils/tooltips'
import { Tooltip } from '@/Tooltip'

import css from './index.css'

type Values = readonly string[]

type Props = {
  options: ReadonlyArray<{
    value: Values[number]
    label: string
  }>
  values: Values
  field: string
  isOpened: boolean
  onChange: (field: string, values: Values) => void
  onToggle: () => void
  className?: string
}

export const FilterTooltip: React.FC<Props> = ({
  field,
  isOpened,
  options,
  values,
  className,
  onChange,
  onToggle,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useClickOutside({
    isActive: isOpened,
    ignoreClicksInsideRefs: [buttonRef, tooltipRef, menuRef],
    handler: onToggle,
  })

  useTooltipReposition({
    isVisible: isOpened,
    anchorRef: buttonRef,
    onRequestReposition: onToggle,
  })

  return (
    <>
      <button
        type="button"
        ref={buttonRef}
        className={classnames(css.button, isOpened && css.isOpened, className)}
        onClick={onToggle}
      >
        <IconFunnel size="xs" className={css.iconFilter} />
      </button>
      <Tooltip
        isContentHoverable
        isVisible={isOpened}
        className={css.tooltip}
        anchorRef={buttonRef}
        possibleDirections={['downRight', 'downLeft']}
        direction="downRight"
        withArrow={false}
        ref={tooltipRef}
      >
        <Text as="div" size="xs" view="primary" className={css.title}>
          Фильтровать по условию
        </Text>
        <select
          className={css.select}
          value={[...values]}
          multiple
          onChange={e => {
            onChange(
              field,
              Array.from(e.target.selectedOptions).map(option => option.value)
            )
          }}
        >
          {options.map(option => (
            <option
              key={option.value}
              className={css.option}
              value={option.value}
              title={option.label}
            >
              {option.label}
            </option>
          ))}
        </select>
      </Tooltip>
    </>
  )
}
