<template>
  <q-page padding>
    <q-toggle class="q-ma-md" v-model="autoplay" color="primary" label="Autoplay"/>
    <carousel
      padding
      :scrollPerPage="scrollPerPage"
      :autoplay="autoplay"
      :navigationEnabled="navigationEnabled"
      :perPageCustom="perPageCustom"
      :paginationActiveColor="paginationActiveColor"
      :paginationColor="paginationColor"
      :paginationSize="paginationSize"
      :autoplayTimeout="autoplayTimeout"
      :autoplayHoverPause="autoplayHoverPause"
    >
      <slide v-for="image in images" :key="image.id">
        <a :href="image.url" target="_blank">
          <img :src="image.url"/>
        </a>
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
      autoplayHoverPause: true
    }
  },

  methods: {
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
</style>
