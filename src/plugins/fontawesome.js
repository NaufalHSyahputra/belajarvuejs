import Vue from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { } from '@fortawesome/fontawesome-free-regular'

import {
  faUser,
  faLock,
  faSignOutAlt,
  faCog
} from "@fortawesome/free-solid-svg-icons";

import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

library.add(faUser, faLock, faSignOutAlt, faCog, faFacebook, faTwitter);

Vue.component("fa", FontAwesomeIcon);
