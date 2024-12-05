<template>
  <div class="compro2-portfolio" id="portfolio">
    <h1>Our <span>Projects</span></h1>
    <div class="project-card-container">
      <div
        v-for="(item, index) of portfolioList"
        :key="index"
        class="card-portfolio"
        @click="clickProject(item.id)"
      >
        <img :src="item.image" alt="image" />

        <h2>{{ item.user }}</h2>
        <p>{{ item.title }}</p>
        <div class="button">View Project</div>
      </div>
    </div>
  </div>
</template>

<script>
import dokumen1 from "../content/dokumen1.png";
import dokumen2 from "../content/dokumen2.png";
import dokumen3 from "../content/dokumen3.png";

export default {
  data() {
    return {
      portfolioList: [
        {
          image: dokumen1,
          title: "Internal Tank (Blasting & Coating)",
          user: "PT. Sungai Budi Group",
          id: "blasting-sbd",
        },
        {
          image: dokumen2,
          title: "Blasting Turbine",
          user: "PLTU Bukit Asam",
          id: "blasting-pltu_ptba",
        },
        {
          image: dokumen3,
          title: " Internal Tank ( Blasting Coating )",
          user: "PT. Subang",
          id: "blasting-subang",
        },
      ],
    };
  },
  methods: {
    clickProject(id) {
      localStorage.setItem("portfolioList", JSON.stringify(this.cardPortfolio));
      window.location.href = `/portfolio/${id}`;
      localStorage.setItem("portfolioId", id);
    },
  },
};
</script>
