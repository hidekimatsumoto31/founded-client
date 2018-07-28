import { configure } from '@storybook/react';

const req = require.context('../src', true, /storybook\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

console.log('loadStories', loadStories())

configure(loadStories, module);
