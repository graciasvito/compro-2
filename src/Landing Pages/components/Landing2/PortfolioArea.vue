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

    <div class="view-more"><p @click="morePortfolio()">View More</p></div>
  </div>
</template>

<script>
import dokumen1 from "../content/dokumen1.png";
import dokumen2 from "../content/dokumen2.png";
import dokumen3 from "../content/dokumen3.png";
import sbd1 from "../content/portfolio/SBD-1.png";
import sbd2 from "../content/portfolio/SBD-2.png";
import PtbaPltu1 from "../content/portfolio/PTBA-pltu-1.png";
import PtbaPltu2 from "../content/portfolio/PTBA-pltu-2.png";
import PtbaPltu3 from "../content/portfolio/PTBA-pltu-3.png";
import Subang1 from "../content/portfolio/Subang-1.png";
import Subang2 from "../content/portfolio/Subang-2.png";
import Subang3 from "../content/portfolio/Subang-3.png";

export default {
  data() {
    return {
      portfolioList: [
        {
          image: dokumen1,
          title: "Internal Tank (Blasting & Coating)",
          user: "PT. Sungai Budi Group",
          id: "blasting-sbd",
          imgCollection: { sbd1, sbd2 },
        },
        {
          image: dokumen2,
          title: "Blasting Turbine",
          user: "PLTU Bukit Asam",
          id: "blasting-pltu_ptba",
          imgCollection: { PtbaPltu1, PtbaPltu2, PtbaPltu3 },
        },
        {
          image: dokumen3,
          title: " Internal Tank ( Blasting Coating )",
          user: "PT. Subang",
          id: "blasting-subang",
          imgCollection: { Subang1, Subang2, Subang3 },
        },
      ],
    };
  },
  methods: {
    clickProject(id) {
      localStorage.setItem("portfolioList", JSON.stringify(this.portfolioList));
      window.location.href = `/portfolio/${id}`;
      localStorage.setItem("portfolioId", id);
    },
    morePortfolio() {
      window.location.href = `/portfolio`;
    },
  },
};
</script>
