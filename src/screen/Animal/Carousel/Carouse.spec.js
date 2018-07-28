import React from 'react'
import Carousel from './Carousel'
import { shallow } from 'enzyme'

describe('Carousel', function () {
  it('Should render Carousel"', function () {
    // given
    const element = <Carousel />

    // when
    const component = shallow(element)

    // then
    expect(component.exists).toBeTruthy()
  })
})
