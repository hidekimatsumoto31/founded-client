import React from 'react'
import { storiesOf } from '@storybook/react'

import CarouselCard from './CarouselCard'

storiesOf('CarouselCard', module)
  .add('default', () => (
    <div style={{ height: '600px', width: '300px' }}>
      <CarouselCard imageUrl="https://founded.media/hiring/photos/cats/14157413946_fea785b4d6_k.jpg" />
    </div>
  ))
