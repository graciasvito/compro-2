<template>
  <div class="compro2-service" id="service">
    <div class="row text-box">
      <div class="left-box">
        <div class="box-container">
          <div
            v-for="(item, index) of services"
            :key="index"
            class="box-service"
            :class="item.id"
          >
            <div class="title-container">
              <div class="img-container">
                <img :src="item.icon" alt="" draggable="false" />
              </div>
              <h3>{{ item.title }}</h3>
            </div>

            <p>{{ item.desc }}</p>
          </div>
        </div>
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
        {
          icon: consultation,
          title: "Coating & Blasting (Corrosion Control)",
          id: "box1",
          desc: "We provide corrosion control through surface preparation and protective coatings to enhance asset durability.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.compro2-service {
  background-image: url("../content/ampera.jpeg");
  background-size: cover;
  .text-box {
    // background-image: url("../content/seamless-pattern.png");
    // background-size: cover;
    // background-blend-mode: lighten;
  }
}
</style>
