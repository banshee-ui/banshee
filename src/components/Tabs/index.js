import Tabs from './src/Tabs'
import Tab from './src/Tab'
import TabPane from './src/TabPane'

Tabs.install = function (Vue) {
  Vue.component(Tabs.name, Tabs)
}

Tab.install = function (Vue) {
  Vue.component(Tab.name, Tab)
}

TabPane.install = function (Vue) {
  Vue.component(TabPane.name, TabPane)
}

export const BansheeTabs = Tabs
export const BansheeTab = Tab
export const BansheeTabPane = TabPane
