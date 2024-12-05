<template>
  <div class="compro2-portfolio-detail">
    <div class="main-title">
      <div class="description">
        <h1>{{ portfolioDetail.user }}</h1>
        <p>{{ portfolioDetail.title }}</p>
      </div>
      <div
        class="main-image"
        :style="{ backgroundImage: `url(${portfolioDetail.image})` }"
      ></div>
    </div>

    <div class="gallery">
        <h1>Gallery</h1>
      <div class="img-container">
        <img
          :src="src"
          :alt="key"
          draggable="false"
          v-for="(src, key) in portfolioDetail.imgCollection"
          :key="key"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
