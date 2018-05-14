import Tabs from './src/Tabs'
import TabList from './src/TabList'
import Tab from './src/Tab'
import TabPanes from './src/TabPanes'
import TabPane from './src/TabPane'

Tabs.install = function (Vue) {
  Vue.component(Tabs.name, Tabs)
}

TabList.install = function (Vue) {
  Vue.component(TabList.name, TabList)
}

Tab.install = function (Vue) {
  Vue.component(Tab.name, Tab)
}

TabPanes.install = function (Vue) {
  Vue.component(TabPanes.name, TabPanes)
}

TabPane.install = function (Vue) {
  Vue.component(TabPane.name, TabPane)
}

export const BansheeTabs = Tabs
export const BansheeTabList = TabList
export const BansheeTab = Tab
export const BansheeTabPanes = TabPanes
export const BansheeTabPane = TabPane
