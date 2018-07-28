import React from 'react'
import CarouselCard from './CarouselCard'
import { shallow } from 'enzyme'

describe('CarouselCard', function () {
  it('Should render CarouselCard"', function () {
    // given
    const element = <CarouselCard />

    // when
    const component = shallow(element)

    // then
    expect(component.exists).toBeTruthy()
  })
})
