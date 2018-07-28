import React from 'react'
import Carousel from './Carousel.js'
import { shallow, mount } from 'enzyme'

const images = [
  'https://founded.media/hiring/photos/cats/14157413946_fea785b4d6_k.jpg',
  'https://founded.media/hiring/photos/cats/14157413946_fea785b4d6_k.jpg',
  'https://founded.media/hiring/photos/cats/14157413946_fea785b4d6_k.jpg',
  'https://founded.media/hiring/photos/cats/14157413946_fea785b4d6_k.jpg',
  'https://founded.media/hiring/photos/cats/14157413946_fea785b4d6_k.jpg'
]

describe('Carousel', function () {
  it('Should render Carousel"', function () {
    // given
    const element = <Carousel />

    // when
    const component = shallow(element)

    // then
    expect(component.exists).toBeTruthy()
  })

  it('Should render Carousel images"', function () {
    // given
    const element = <Carousel images={images} />

    // when
    const component = mount(element)

    // then
    expect(component.find('CarouselCard').length).toBe(images.length)
  })

  it('Should run through images"', function () {
    // given
    const element = <Carousel images={images} />

    // when
    const component = mount(element)

    component.find('li').at(1).simulate('click')

    // then
    expect(component.state()).toEqual({ current: 1, previous: 0 })
  })

  it('Should render Carousel images"', function () {
    // given
    const element = <Carousel images={images} />

    // when
    const component = mount(element)

    component.find('li').at(1).simulate('click')
    component.find('li').at(1).simulate('click')
    component.find('li').at(0).simulate('click')

    // then
    expect(component.state()).toEqual({ current: 1, previous: 2 })
  })
})
