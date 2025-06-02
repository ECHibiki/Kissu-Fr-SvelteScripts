import { mount } from 'svelte'
import './app.css'
import App from './DevMenu.svelte'

const devapp = mount(App, {
  target: document.getElementById('dev-container') as Element,
})

export default devapp
