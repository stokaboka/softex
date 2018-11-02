<template>
  <q-page padding class="docs-input row justify-center">

    <form @submit.prevent="submit">

      <q-card inline  >
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
            :count="11"
            :error="$v.phone.$error"
            error-label="Please enter a valid phone number."
            helper="Enter phone number"
          >
            <q-input
              v-model="phone"
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
              type="textarea"
              :min-height="50"
              :max-height="150">
            </q-input>
          </q-field>
      </q-card-main>

        <q-card-separator />

        <q-card-actions>
          <q-btn  color="primary" label="Submit" type="submit" :disabled="submitStatus === 'PENDING'"></q-btn>
          <q-btn  label="Clear" @click="clearMessageForm" :disabled="submitStatus === 'OK'"></q-btn>
          <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
          <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
          <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
        </q-card-actions>

    </q-card>

    </form>
  </q-page>
</template>

<script>

import { required, numeric, minLength, maxLength } from 'vuelidate/lib/validators'
import {createNamespacedHelpers} from 'vuex'
const { mapActions } = createNamespacedHelpers('messages')

export default {
  name: 'ContactUsPage',
  data () {
    return {
      // name: '',
      // phone: '',
      // message: '',
      submitStatus: null
    }
  },

  computed: {
    // ...mapState(['phone', 'message']),
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
      numeric,
      minLength: minLength(11),
      maxLength: maxLength(11)
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
      } else {
        this.submitStatus = 'PENDING'
        this.sendMessage({
          name: this.name,
          phone: this.phone,
          message: this.message
        }).then(() => {
          this.submitStatus = 'OK'
        }).catch((e) => {
          console.log(e)
          this.submitStatus = 'ERROR'
        })
      }
    },

    clearMessageForm () {
      this.name = ''
      this.phone = ''
      this.message = ''
      this.$v.$reset()
    }

  }

}
</script>

<style>
</style>
