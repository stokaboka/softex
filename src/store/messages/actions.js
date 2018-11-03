const sendMessage = ({ commit }, message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      commit('setName', message.name)
      commit('setPhone', message.phone)
      commit('setMessage', message.message)
      resolve()
    }, 1000)
  })
}

export {sendMessage}
