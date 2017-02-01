import Main from '../components/Main'
import About from '../components/About'

export default [
  { path: '/', component: Main },
  { path: '/ola/:name', component: Main },
  { path: '/about', component: About }
]
