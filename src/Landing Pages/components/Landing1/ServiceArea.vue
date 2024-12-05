<template>
  <div class="compro-service">
    <div class="row text-box">
      <div class="left-box">
        <div class="box-container">
          <div
            v-for="(item, index) of services"
            :key="index"
            class="box-service"
            :class="item.id"
          >
            <img :src="item.icon" alt="" />
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
          <!-- <div class="box-service box1">div</div>
          <div class="box-service box2">Hallo</div>
          <div class="box-service box3">Hallo</div>
          <div class="box-service box4">Hallo</div> -->
        </div>
      </div>
      <div class="right-box">
        <p>what we offer</p>
        <h1>
          Providing solutions for diverse construction challenges, PT. Jala Bumi
          Perkasa specializes in general contracting, project management, and
          civil engineering, ensuring quality and client satisfaction in every
          project.
        </h1>
      </div>
    </div>
  </div>

  <!-- 375F90 -->
</template>

<script>
import consultation from "../content/consultation.png";
import maintenance from "../content/maintenance.png";

export default {
  data() {
    return {
      services: [
        {
          icon: consultation,
          title: "Coating & Blasting (Corrosion Control)",
          id: "box1",
          desc: "We provide corrosion control through surface preparation and protective coatings to enhance asset durability.",
        },
        {
          icon: maintenance,
          id: "box2",
          title: "Machine Isolation of Industry",
          desc: "Our machine isolation services ensure safe maintenance by effectively disconnecting equipment from energy sources.",
        },
        {
          icon: consultation,
          id: "box3",
          title: "Maintenance Service",
          desc: "We offer comprehensive maintenance to optimize performance and minimize downtime for industrial systems.",
        },
        {
          icon: maintenance,
          id: "box4",
          title: "Consultation Service",
          desc: "Our consultation services deliver expert advice and tailored solutions to address specific industrial challenges and improve operational efficiency.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.compro-service {
  .text-box {
    // background-image: url("../content/seamless-pattern.png");
    // background-size: cover;
    // background-blend-mode: lighten;
  }
}
</style>
