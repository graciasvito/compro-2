/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
    {
      path: "",
      component: () => import("@/layouts/full-page/FullPage.vue"),
      children: [
        // =============================================================================
        // PAGES
        // =============================================================================
        // {
        //   path: "/landing",
        //   name: "landing",
        //   component: () => import("@/views/views/index.vue"),
        // },

        {
          path: "/",
          name: "companyprofile-2",
          component: () => import("@/Landing Pages/SecondLanding.vue"),
        },
        {
          path: "/portfolio",
          name: "portfolio",
          component: () => import("@/Landing Pages/PortfolioPage.vue"),
        },
        {
          path: "/portfolio/:id",
          name: "portfolioById",
          component: () => import("@/Landing Pages/SecondPortfolioDetail.vue"),
        },

        // {
        //   path: "/2",
        //   name: "companyprofile-2",
        //   component: () => import("@/Landing Pages/SecondLanding.vue"),
        // },
      ],
    },

    // Redirect to 404 page, if no match found
    {
      path: "*",
      redirect: "/pages/error-404",
    },
  ],
});

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById("loading-bg");
  if (appLoading) {
    appLoading.style.display = "none";
  }
});

export default router;
