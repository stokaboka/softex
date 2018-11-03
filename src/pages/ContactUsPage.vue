<template>

  <q-page padding class="docs-input row justify-center">

    <form @submit.prevent="submit">

      <q-card  class="q-pa-lg card-message" >
        <q-card-title>
          Send message
          <span slot="subtitle">write to us and we will contact you</span>
        </q-card-title>

        <q-card-separator />

        <q-card-main>

          <q-field
            icon="person"
            :count="100"
            :error="$v.name.$error"
            error-label="Please enter a name no longer than 100 characters."
            helper="Enter your name"
          >
            <q-input
              v-model="name"
              @blur="$v.name.$touch"
              float-label="Name" >
            </q-input>
          </q-field>

          <q-field
            icon="phone"
            :count="14"
            :error="$v.phone.$error"
            error-label="Please enter a valid phone number."
            helper="Enter phone number"
          >
            <q-input
              v-model="phone"
              v-mask="phoneMask"
              @blur="$v.phone.$touch"
              float-label="Phone" >
            </q-input>
          </q-field>

          <q-field
            icon="message"
            :count="250"
            :error="$v.message.$error"
            error-label="Please enter a message no longer than 250 characters."
            helper="Enter massage"
          >
            <q-input
              v-model="message"
              @blur="$v.message.$touch"
              float-label="Message"
              type="textarea">
            </q-input>
          </q-field>
      </q-card-main>

        <q-card-separator />

        <q-card-actions>
          <q-btn  color="primary" label="Submit" type="submit" :disabled="submitStatus === 'PENDING'"></q-btn>
          <q-btn  label="Clear" @click="clearMessageForm" :disabled="submitStatus === 'OK'"></q-btn>

          <q-spinner-mat v-if="submitStatus === 'PENDING'" class="float-right" size="36px" color="primary"></q-spinner-mat>

        </q-card-actions>

    </q-card>

    </form>
  </q-page>
</template>

<script>

import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import {createNamespacedHelpers} from 'vuex'
import {mask} from 'vue-the-mask'
const { mapActions } = createNamespacedHelpers('messages')

export default {
  name: 'ContactUsPage',
  directives: {mask},
  data () {
    return {
      phoneMask: '# ###-###-####',
      submitStatus: null
    }
  },

  computed: {
    name: {
      get () {
        return this.$store.state.messages.name
      },
      set (value) {
        this.$store.commit('messages/setName', value)
      }
    },

    phone: {
      get () {
        return this.$store.state.messages.phone
      },
      set (value) {
        this.$store.commit('messages/setPhone', value)
      }
    },

    message: {
      get () {
        return this.$store.state.messages.message
      },
      set (value) {
        this.$store.commit('messages/setMessage', value)
      }
    }
  },

  validations: {
    name: {
      required,
      maxLength: maxLength(100)
    },

    phone: {
      required,
      minLength: minLength(14),
      maxLength: maxLength(14)
    },

    message: {
      required,
      maxLength: maxLength(250)
    }

  },

  methods: {

    ...mapActions([ 'sendMessage' ]),

    submit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
        this.showNotification('negative', 'Please fill the form correctly', '')
      } else {
        this.submitStatus = 'PENDING'
        this.sendMessage({
          name: this.name,
          phone: this.phone,
          message: this.message
        }).then(() => {
          this.submitStatus = 'OK'
          this.showNotification('blue', 'Message sent', 'Thanks for contacting')
        }).catch((e) => {
          console.log(e)
          this.submitStatus = 'ERROR'
          this.showNotification('negative', 'Network error', 'Send message lather...')
        })
      }
    },

    clearMessageForm () {
      this.name = ''
      this.phone = ''
      this.message = ''
      this.$v.$reset()
    },

    showNotification (color, message, detail) {
      this.$q.notify({ color, message, detail })
    }

  }

}
</script>

<style>
  .card-message {
    min-width: 50vw;
  }
</style>
