<template>
  <div>
    <Header1 />
    <Frontpage />
    <PortfolioContent />
    <Footer1 />
  </div>
</template>

<script>
import Header1 from "./components/Landing1/Header1.vue";
import Frontpage from "./components/Landing2/Frontpage.vue";
import PortfolioContent from "./components/Landing2/Portfolio/PortfolioContent.vue";
import Footer1 from "./components/Landing2/Footer1.vue";

export default {
  components: {
    Header1,
    Frontpage,
    PortfolioContent,
    Footer1,
  },
  mounted() {
    this.location();
  },
  methods: {
    location() {
      console.log(window.location.pathname);
    },
  },
};
</script>
