import React from 'react'
import Spinner from './Spinner'
import { shallow } from 'enzyme'

describe('Spinner', function () {
  it('Should render Spinner"', function () {
    // given
    const element = <Spinner />

    // when
    const component = shallow(element)

    // then
    expect(component.exists).toBeTruthy()
  })
})
