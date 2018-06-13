import * as BansheeComponents from './components'

const Banshee = {
  install (Vue) {
    Object.values(BansheeComponents).forEach(component => {
      Vue.use(component)
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Banshee)
}

export default Banshee
