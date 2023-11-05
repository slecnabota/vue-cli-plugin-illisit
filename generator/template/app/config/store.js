export default {
    app: {
      state: {
        test: {},
      },
      mutations: {
        setTest(state, value) {
          state.test = value
        },
      },
      namespaced: true,
    },
  }
  