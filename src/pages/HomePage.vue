<template>
  <q-page padding>

    <carousel
      :scrollPerPage="scrollPerPage"
      :autoplay="autoplay"
      :navigationEnabled="navigationEnabled"
      :perPageCustom="perPageCustom"
      :paginationActiveColor="paginationActiveColor"
      :paginationColor="paginationColor"
      :paginationSize="paginationSize"
      :autoplayTimeout="autoplayTimeout"
      :autoplayHoverPause="autoplayHoverPause"
      :centerMode="centerMode"
    >
      <slide
        v-for="image in images"
        :key="image.id"
        v-on:slideclick="onSlideClick(image)"
        >
        <transition appear name="fade">
          <img
            :src="image.url"
            class="carousel-slide-image"
          />
        </transition>
      </slide>
    </carousel>
  </q-page>
</template>

<script>

import { Carousel, Slide } from 'vue-carousel'
import {createNamespacedHelpers} from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('gallery')

export default {
  name: 'HomePage',

  components: {
    Carousel,
    Slide
  },

  mounted () {
    this.loadImagesList()
  },

  data () {
    return {
      scrollPerPage: false,
      autoplay: false,
      navigationEnabled: true,
      paginationSize: 20,
      paginationColor: '#bdbdbd',
      paginationActiveColor: '#027be3',
      perPageCustom: [
        [480, 1],
        [1120, 2],
        [1640, 3]
      ],
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      centerMode: true
    }
  },

  methods: {

    onSlideClick (image) {
      window.open(image.url)
    },

    onImageLoaded (event) {
      event.currentTarget.style({
        'opacity': 1
      })
    },

    ...mapActions([ 'loadImagesList' ])

  },

  computed: {
    ...mapState([ 'images' ])
  }
}
</script>

<style>
  .VueCarousel-slide {
    position: relative;
    color: #fff;
    text-align: center;
  }

  .fade-enter-active {
    transition: opacity 1s ease;
  }
  .fade-leave-active {
    transition: opacity 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-enter, .slide-fade-leave-to {
    opacity: 0;
  }

  .carousel-slide-image {
    cursor: pointer;
  }

</style>
