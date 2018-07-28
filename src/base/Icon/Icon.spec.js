import React from 'react'
import Icon from './Icon'
import { shallow } from 'enzyme'

describe('Icon', function () {
  it('Should render Icon"', function () {
    // given
    const element = <Icon name="cat" />

    // when
    const component = shallow(element)

    // then
    expect(component.exists).toBeTruthy()
  })
})
