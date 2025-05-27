import { mount } from 'svelte'
import App from './AdvancedStyler.svelte'

const app = mount(App, {
  target: document.getElementById('advanced-style-container') as Element,
})

export default app
