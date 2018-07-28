import React from 'react'
import { storiesOf } from '@storybook/react'

import Icon from './Icon'

storiesOf('Icon', module)
  .add('default', () => (
    <div style={{ height: '50px', width: '50px' }}>
      <Icon name="cat" />
    </div>
  ))

  .add('shark', () => (
    <div style={{ height: '50px', width: '50px' }}>
      <Icon name="shark" />
    </div>
  ))
