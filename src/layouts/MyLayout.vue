<template>
  <q-layout view="hHh LpR fff">
    <q-layout-header>
      <q-toolbar color="primary">

        <q-toolbar-title>
          Softext Test App
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>

        <q-btn glossy color="primary" icon="home" label="Home" aria-label="Home" @click.native="openURL('/')">
          <q-tooltip>show home page</q-tooltip>
        </q-btn>
        <q-btn glossy color="primary" label="About Us" aria-label="About Us" @click.native="openURL('about')">
          <q-tooltip>short story about our company</q-tooltip>
        </q-btn>
        <q-btn glossy color="primary" icon="mail" label="Contact Us" aria-label="Contact Us" @click.native="openURL('contact')">
          <q-tooltip>write to us!</q-tooltip>
        </q-btn>

      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <router-view >
      </router-view>
    </q-page-container>

    <!--<q-layout-footer color="primary">-->
    <!--<q-toolbar-title>-->
    <!--Mapper-->
    <!--</q-toolbar-title>-->
    <!--</q-layout-footer>-->

  </q-layout>
</template>

<script>

import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
