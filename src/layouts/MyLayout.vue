<template>
  <q-layout view="hHh LpR fff">
    <q-layout-header>
      <q-toolbar color="primary">

        <q-toolbar-title>
          Softext Test App
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>

        <q-btn-group>

          <q-btn glossy color="primary" icon="home" label="Home" aria-label="Home" to="/">
            <q-tooltip>show home page</q-tooltip>
          </q-btn>

          <q-btn glossy color="primary" icon="help_outline" label="About Us" aria-label="About Us" to="/about">
            <q-tooltip>short story about our company</q-tooltip>
          </q-btn>

          <q-btn glossy color="primary" icon="mail" label="Contact Us" aria-label="Contact Us" to="/contact">
            <q-tooltip>write to us!</q-tooltip>
          </q-btn>

        </q-btn-group>

      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <transition name="router-anim">
        <router-view />
      </transition>
    </q-page-container>

  </q-layout>
</template>

<script>

export default {
  name: 'MyLayout',

  beforeCreate () {
    this.$store.commit('messages/initialiseStore')
  },

  data () {
    return {
    }
  },

  methods: {
  }

}
</script>

<style>

  .router-anim-enter-active {
    animation: coming 1s;
    animation-delay: .5s;
    opacity: 0;
  }
  .router-anim-leave-active {
    animation: going 1s;
  }

  @keyframes going {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50px);
      opacity: 0;
    }
  }
  @keyframes coming {
    from {
      transform: translateX(-50px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

</style>
