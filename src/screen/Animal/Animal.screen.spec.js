import React from 'react'
import Animal from './Animal.screen.js'
import { shallow } from 'enzyme'

describe('Animal', function () {
  it('Should render Animal"', function () {
    // given
    const element = <Animal />

    // when
    const component = shallow(element)

    // then
    expect(component.exists).toBeTruthy()
  })
})
