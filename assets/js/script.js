var sidemenu = new Vue({
    el: "#sidemenu",
    data: {
      navOpen: true,
    },
    methods: {
      toggleNav: function () {
        this.navOpen = !this.navOpen;
      },
    },
  });