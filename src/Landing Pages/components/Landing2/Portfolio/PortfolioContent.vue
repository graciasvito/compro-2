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
        },
        {
          image: dokumen2,
          title: "Blasting Turbine",
          user: "PLTU Bukit Asam",
          id: "blasting-pltu_ptba",
        },
        {
          image: dokumen3,
          title: "Internal Tank ( Blasting Coating )",
          user: "PT. Subang",
          id: "blasting-subang",
        },
        {
          image: dokumen4,
          title: "Shiploader Coating",
          user: "PT. Bukit Asam Kertapati Palembang",
          id: "coating-ptba",
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
