const setImages = (state, images) => {
  state.images = images
}

const setResult = (state, result) => {
  state.result = result
  state.error = ''
}

const setError = (state, error) => {
  state.result = 'error'
  state.error = error
}
export {setImages, setResult, setError}
