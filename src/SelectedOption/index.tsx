import React from 'react'

import { IconClose, Text } from '@gpn-design/uikit'

import css from './index.css'

type Props = {
  name: string
  onRemove: () => void
}

export const SelectedOption: React.FC<Props> = ({ name, onRemove }) => (
  <div className={css.main}>
    <Text tag="p" size="xs" weight="regular" className={css.label}>
      {name}
    </Text>
    <button
      title="Удалить"
      onClick={event => {
        event.stopPropagation()
        onRemove()
      }}
      className={css.buttonCross}
      type="button"
    >
      <IconClose className={css.icon} size="xs" />
    </button>
  </div>
)