import { useEffect } from 'react'

import { mount } from 'enzyme'

import { clearUniqueNamesList, useUniqueNameGenerator } from '../uniq-name-hook'

const TestHook: React.FC<{
  initialNames?: readonly string[]
}> = ({ initialNames }) => {
  const { getUniqueName, removeName } = useUniqueNameGenerator(initialNames)
  const name = getUniqueName('TEST')

  useEffect(() => () => removeName(name))

  return <>{name}</>
}

describe('useUniqueNameGenerator', () => {
  afterEach(clearUniqueNamesList)

  it('generates unique name', () => {
    const wrapper = mount(<TestHook />)
    expect(wrapper).toHaveText('TEST_0')

    const wrapper2 = mount(<TestHook />)
    expect(wrapper2).toHaveText('TEST_1')
  })

  it('respects initial names list', () => {
    const wrapper = mount(<TestHook initialNames={['TEST_0', 'TEST_1', 'TEST_3']} />)
    expect(wrapper).toHaveText('TEST_2')

    const wrapper2 = mount(<TestHook initialNames={['TEST_4']} />)
    expect(wrapper2).toHaveText('TEST_5')
  })

  it('removes name from the list', () => {
    const wrapper = mount(<TestHook />)
    expect(wrapper).toHaveText('TEST_0')

    wrapper.unmount()

    const wrapper2 = mount(<TestHook />)
    expect(wrapper2).toHaveText('TEST_0')
  })
})