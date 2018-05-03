import BansheeDraggable from './src/Drag'
import BansheeDroppable from './src/Drop'

BansheeDraggable.install = function (Vue) {
  Vue.component(BansheeDraggable.name, BansheeDraggable)
}

BansheeDroppable.install = function (Vue) {
  Vue.component(BansheeDroppable.name, BansheeDroppable)
}

export const BansheeDrag = BansheeDraggable
export const BansheeDrop = BansheeDroppable
