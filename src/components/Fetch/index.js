import BansheeFetch from './src/Fetch'

BansheeFetch.install = function (Vue) {
  Vue.component(BansheeFetch.name, BansheeFetch)
}

export default BansheeFetch
