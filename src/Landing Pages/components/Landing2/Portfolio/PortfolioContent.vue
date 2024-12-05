<template>
  <div class="compro-porto-content">
    <div
      class="card"
      v-for="(card, index) in cardPortfolio"
      :key="index"
      @click="clickProject(card.id)"
    >
      <img :src="card.image" alt="" />
      <h2>{{ card.user }}</h2>
      <p>{{ card.title }}</p>
      <div class="button">View Project</div>
    </div>
  </div>
</template>

<script>
import dokumen1 from "../../content/dokumen1.png";
import dokumen2 from "../../content/dokumen2.png";
import dokumen3 from "../../content/dokumen3.png";
import dokumen4 from "../../content/dokumen4.png";
import sbd1 from "../../content/portfolio/SBD-1.png";
import sbd2 from "../../content/portfolio/SBD-2.png";
import PtbaPltu1 from "../../content/portfolio/PTBA-pltu-1.png";
import PtbaPltu2 from "../../content/portfolio/PTBA-pltu-2.png";
import PtbaPltu3 from "../../content/portfolio/PTBA-pltu-3.png";
import Subang1 from "../../content/portfolio/Subang-1.png";
import Subang2 from "../../content/portfolio/Subang-2.png";
import Subang3 from "../../content/portfolio/Subang-3.png";
import PtbaKertapati1 from "../../content/portfolio/PTBA-kertapati-1.png";
import PtbaKertapati2 from "../../content/portfolio/PTBA-kertapati-2.png";
import PtbaKertapati3 from "../../content/portfolio/PTBA-kertapati-3.png";

export default {
  data() {
    return {
      cards: Array.from({ length: 6 }, (_, i) => i + 1), // Example cards
      cardPortfolio: [
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
          title: "Internal Tank ( Blasting Coating )",
          user: "PT. Subang",
          id: "blasting-subang",
          imgCollection: { Subang1, Subang2, Subang3 },
        },
        {
          image: dokumen4,
          title: "Shiploader Coating",
          user: "PT. Bukit Asam Kertapati Palembang",
          id: "coating-ptba",
          imgCollection: { PtbaKertapati1, PtbaKertapati2, PtbaKertapati3 },
        },
      ],
    };
  },
  methods: {
    clickProject(id) {
      // const result = this.cardPortfolio.find((item) => item.id === id);
      // console.log(result);
      localStorage.setItem("portfolioList", JSON.stringify(this.cardPortfolio));
      window.location.href = `/portfolio/${id}`;
      localStorage.setItem("portfolioId", id);
    },
  },
};
</script>

<style scoped></style>
