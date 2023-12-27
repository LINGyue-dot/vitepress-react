import React from 'react';
// import '@shoelace-style/shoelace/dist/components/button/button.js'; // Working
import { SlButton } from '@shoelace-style/shoelace/dist/react';
// const SlButton = React.lazy(() =>
//   import('@shoelace-style/shoelace/dist/react/button/index.js')
// );
import '@shoelace-style/shoelace/dist/themes/light.css';

export default function Counter() {
  return <SlButton variant="danger">Button</SlButton>;
  // return <sl-button variant="danger">Hello</sl-button>; // Working
}
