import BansheeErrorBoundary from './src/ErrorBoundary'

BansheeErrorBoundary.install = function (Vue) {
  Vue.component(BansheeErrorBoundary.name, BansheeErrorBoundary)
}

export default BansheeErrorBoundary
