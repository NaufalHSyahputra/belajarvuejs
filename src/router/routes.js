function page(path) {
  return () =>
    import(/* webpackChunkName: '' */ `@/views/${path}`).then(
      m => m.default || m
    );
}

export default [
  {
    path: "/",
    name: "Home",
    component: page("Home.vue")
  },
  {
    path: "/data",
    name: "Data",
    component: page("Data.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: page("Login.vue")
  }
];
