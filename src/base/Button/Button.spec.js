import React from 'react'
import Button from './Button'
import { shallow } from 'enzyme'

describe('Button', function () {
  it('Should render Button"', function () {
    // given
    const element = <Button>My Button</Button>

    // when
    const component = shallow(element)

    // then
    expect(component.exists).toBeTruthy()
  })
})
