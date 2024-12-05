<template>
  <div>
    <Header1 />
    <PortfolioDetail />
    <Footer1 />
  </div>
</template>

<script>
import Header1 from "./components/Landing1/Header1.vue";
import Footer1 from "./components/Landing2/Footer1.vue";
import PortfolioDetail from "./components/Landing2/Portfolio/PortfolioDetail.vue";

export default {
  components: {
    Header1,
    Footer1,
    PortfolioDetail,
  },
  data() {
    return {
      portfolioDetail: {},
    };
  },
  computed: {
    portfolio() {
      return JSON.parse(localStorage.getItem("portfolioList"));
    },
    portfolioId() {
      return localStorage.getItem("portfolioId");
    },
  },
  mounted() {
    this.getPortfolio();
  },
  methods: {
    getPortfolio() {
      //   console.log(this.portfolio);
      this.portfolioDetail = this.portfolio.find(
        (item) => item.id === this.portfolioId
      );
      console.log(this.portfolioDetail);
    },
  },
};
</script>
