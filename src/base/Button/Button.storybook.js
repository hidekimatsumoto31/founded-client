import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from './Button'
import Icon from '../Icon'

storiesOf('Button', module)
  .add('default', () => (
    <Button />
  ))

  .add('withIcon', () => (
    <Button>
      <div style={{ width: '35px', height: '35px' }}>
        <Icon name="cat" />
      </div>
    </Button>
  ))
