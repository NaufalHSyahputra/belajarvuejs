import Vue from "vue";
import SideBar from "./SideBar";
import Footer from "./Footer";
import Header from "./Header/Header.vue";
import Messages from "./Header/Messages.vue";
import Notifications from "./Header/Notifications.vue";

// Components that are registered globaly.
[SideBar, Footer, Header, Messages, Notifications].forEach(Component => {
  Vue.component(Component.name, Component);
});
