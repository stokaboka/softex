const setName = (state, name) => {
  state.name = name
}

const setPhone = (state, phone) => {
  state.phone = phone
}

const setMessage = (state, message) => {
  state.message = message
}

const setResult = (state, result) => {
  state.result = result
  state.error = ''
}

const setError = (state, error) => {
  state.result = 'error'
  state.error = error
}

const setMessageObj = (state, messageObj) => {
  state.name = messageObj.name
  state.phone = messageObj.phone
  state.message = messageObj.message
}

export {setName, setPhone, setMessage, setMessageObj, setResult, setError}
