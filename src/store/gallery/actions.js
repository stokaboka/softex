import axios from 'axios'

const loadImagesList = ({ commit }) => {
  return axios.get('statics/api/images.json')
    .then(response => {
      commit('setImages', response.data)
      commit('setResult', 'OK')
    })
    .catch(error => {
      commit('setError', error)
    })
}

export {loadImagesList}
