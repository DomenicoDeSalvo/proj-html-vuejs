import { createApp } from 'vue'
import App from './App.vue'

//BOOTSTRAP
import "bootstrap/dist/css/bootstrap.css";

//FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {faCartShopping as cart} from '@fortawesome/free-solid-svg-icons'

library.add(cart)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

import "bootstrap/dist/js/bootstrap.js";
