import Listbox from './src/Listbox'
import ListboxItem from './src/ListboxItem'

Listbox.install = function (Vue) {
  Vue.component(Listbox.name, Listbox)
}

ListboxItem.install = function (Vue) {
  Vue.component(ListboxItem.name, ListboxItem)
}

export const BansheeListbox = Listbox
export const BansheeListboxItem = ListboxItem
