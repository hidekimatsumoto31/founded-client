import React from 'react'
import AnimalFilterButtons from './AnimalFilterButtons'
import sinon from 'sinon'

import { shallow, mount } from 'enzyme'

describe('AnimalFilterButtons', function () {
  it('Should render AnimalFilterButtons"', function () {
    // given
    const fetchAnimals = sinon.spy()
    const resetAnimals = sinon.spy()
    const element = <AnimalFilterButtons fetchAnimals={fetchAnimals} resetAnimals={resetAnimals} />

    // when
    shallow(element)

    // then
    expect(fetchAnimals.called).toBeTruthy()
  })

  it('Should call resetAnimals AnimalFilterButtons"', function () {
    // given
    const fetchAnimals = sinon.spy()
    const resetAnimals = sinon.spy()
    const element = <AnimalFilterButtons fetchAnimals={fetchAnimals} resetAnimals={resetAnimals} />

    // when
    const component = mount(element)

    component.find('Button').at(1).simulate('click')

    // then
    expect(resetAnimals.called).toBeTruthy()
  })

  it('Should call fetchAnimals AnimalFilterButtons"', function () {
    // given
    const fetchAnimals = sinon.spy()
    const resetAnimals = sinon.spy()
    const element = <AnimalFilterButtons fetchAnimals={fetchAnimals} resetAnimals={resetAnimals} />

    // when
    const component = mount(element)

    component.find('Button').at(2).simulate('click')

    // then
    expect(fetchAnimals.calledTwice).toBeTruthy()
  })
})
