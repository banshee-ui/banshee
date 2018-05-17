import Expandable from './src/Expandable'
import ExpandableItem from './src/ExpandableItem'
import ExpandableTitle from './src/ExpandableTitle'
import ExpandableBody from './src/ExpandableBody'

Expandable.install = function (Vue) {
  Vue.component(Expandable.name, Expandable)
}

ExpandableItem.install = function (Vue) {
  Vue.component(ExpandableItem.name, ExpandableItem)
}

ExpandableTitle.install = function (Vue) {
  Vue.component(ExpandableTitle.name, ExpandableTitle)
}

ExpandableBody.install = function (Vue) {
  Vue.component(ExpandableBody.name, ExpandableBody)
}

export const BansheeExpandable = Expandable
export const BansheeExpandableItem = ExpandableItem
export const BansheeExpandableTitle = ExpandableTitle
export const BansheeExpandableBody = ExpandableBody
