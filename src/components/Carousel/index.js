import Carousel from './src/Carousel'
import Slide from './src/CarouselSlide'

Carousel.install = function (Vue) {
  Vue.component(Carousel.name, Carousel)
}

Slide.install = function (Vue) {
  Vue.component(Slide.name, Slide)
}

export const BansheeCarousel = Carousel
export const BansheeCarouselSlide = Slide
