import { useRef } from 'react'
import renderer from 'react-test-renderer'

import { useComponentSize } from '../use-component-size'

const Component = () => {
  const ref = useRef(null)
  const { width, height } = useComponentSize(ref)

  return <div ref={ref} style={{ width, height }} />
}

describe('useComponentSize', () => {
  it('возвращает размеры для элемента, если рефа еще нет', () => {
    const input = renderer.create(<Component />)

    expect(input.toJSON()?.props.style.width).toEqual(0)
    expect(input.toJSON()?.props.style.height).toEqual(0)
  })
})