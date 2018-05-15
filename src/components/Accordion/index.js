import Accordion from './src/Accordion'
import AccordionItem from './src/AccordionItem'
import AccordionTitle from './src/AccordionTitle'
import AccordionBody from './src/AccordionBody'

Accordion.install = function (Vue) {
  Vue.component(Accordion.name, Accordion)
}

AccordionItem.install = function (Vue) {
  Vue.component(AccordionItem.name, AccordionItem)
}

AccordionTitle.install = function (Vue) {
  Vue.component(AccordionTitle.name, AccordionTitle)
}

AccordionBody.install = function (Vue) {
  Vue.component(AccordionBody.name, AccordionBody)
}

export const BansheeAccordion = Accordion
export const BansheeAccordionItem = AccordionItem
export const BansheeAccordionTitle = AccordionTitle
export const BansheeAccordionBody = AccordionBody
