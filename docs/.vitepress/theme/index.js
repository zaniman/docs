import DefaultTheme from 'vitepress/theme'
import NavBar from './NavBar.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  components: {
    VPNavBar: NavBar
  }
}
