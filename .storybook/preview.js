import Vue from "vue";
import Vuex from "vuex";

import "./styles.css";

export const parameters = {
    layout: "fullscreen"
};

Vue.use(Vuex);

Vue.prototype.$store = new Vuex.Store();