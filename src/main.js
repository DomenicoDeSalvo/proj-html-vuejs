import { createApp } from 'vue'
import App from './App.vue'

//BOOTSTRAP
import "bootstrap/dist/css/bootstrap.css";

//FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {faBook} from '@fortawesome/free-solid-svg-icons'
import {faAmazon} from '@fortawesome/free-brands-svg-icons'
import {faApple} from '@fortawesome/free-brands-svg-icons'



library.add(faArrowLeft, faArrowRight, faBook, faAmazon, faApple)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

import "bootstrap/dist/js/bootstrap.js";
