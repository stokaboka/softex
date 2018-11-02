const sendMessage = ({ commit }, message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      commit('setMessage', message)
      resolve()
    }, 1000)
  })
}

export {sendMessage}
