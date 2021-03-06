import axios from 'axios'

const sendMessage = ({ commit }, message) => {
  return axios.get('statics/api/send.json')
    .then(response => {
      commit('setMessageObj', message)
      commit('setResult', 'OK')
    })
    .catch(error => {
      commit('setError', error)
    })
}

export {sendMessage}
