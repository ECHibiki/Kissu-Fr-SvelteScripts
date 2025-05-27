import { mount } from 'svelte'
import './app.css'
import App from './OptionsMenu.svelte'

const app = mount(App, {
  target: document.getElementById('options-tester') as Element,
})

export default app
