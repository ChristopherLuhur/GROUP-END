// store/index.js
import Vuex from 'vuex';

export default new Vuex.Store({
    state: {
        loggedIn: false,
        userData: {},
    },
    mutations: {
        login(state, userData) {
            state.loggedIn = true;
            state.userData = userData;
        },
        logout(state) {
            state.loggedIn = false;
            state.userData = {};
        },
    },
});
