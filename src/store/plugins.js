const localStoragePlugin = store => {
  store.subscribe((mutation, state) => {
    if (mutation.type === 'messages/setName' ||
        mutation.type === 'messages/setPhone') {
      localStorage.setItem('softex_store_messages', JSON.stringify(state.messages))
    }
  })
}

export {localStoragePlugin}
