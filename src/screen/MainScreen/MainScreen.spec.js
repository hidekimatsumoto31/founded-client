import React from 'react'
import MainScreen from './MainScreen'
import { shallow } from 'enzyme'

describe('MainScreen', function () {
  it('Should render MainScreen"', function () {
    // given
    const element = <MainScreen>My MainScreen</MainScreen>

    // when
    const component = shallow(element)

    // then
    expect(component.exists).toBeTruthy()
  })
})
