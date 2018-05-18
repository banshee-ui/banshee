import BansheeStorage from './src/Storage'

BansheeStorage.install = function (Vue) {
  Vue.component(BansheeStorage.name, BansheeStorage)
}

export default BansheeStorage
