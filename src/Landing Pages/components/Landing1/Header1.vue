<template>
  <div class="compro-landing-header" :class="{ sticky: isSticky }" ref="header">
    <vs-navbar class="nabarx" text-color="rgba(255,255,255,.6)">
      <div slot="title">
        <vs-navbar-title>
          <div class="row align-center">
            <img
              src="../content/Logo Jala Bumi Perkasa.png"
              style="width: 50px"
              @click="toHome"
            />
            <h2>PT. Jala Bumi Perkasa</h2>
          </div>
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="0">
        <a href="/#home" @click="toHome">Home</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="/#about" @click="toAbout">About Us</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="/#service" @click="toservice">Services</a>
      </vs-navbar-item>
      <vs-navbar-item index="3">
        <a @click="toPortfolio">Portfolio</a>
      </vs-navbar-item>
      <vs-navbar-item index="4">
        <a href="/#contact" @click="toContact">Contact</a>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSticky: false, // Tracks if the header is sticky
      stickyOffset: 0, // Offset to determine when to stick the header
    };
  },
  methods: {
    handleScroll() {
      const scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;
      this.isSticky = scrollPosition > this.stickyOffset;
    },
    toHome() {
      window.scrollTo({
        top: document.getElementById("home").offsetTop,
        left: 0,
        behavior: "smooth",
      });
    },
    toservice() {
      window.scrollTo({
        top: document.getElementById("service").offsetTop,
        left: 0,
        behavior: "smooth",
      });
    },
    toAbout() {
      window.scrollTo({
        top: document.getElementById("about").offsetTop,
        left: 0,
        behavior: "smooth",
      });
    },
    toPortfolio() {
      window.location.href = "/portfolio";
      // window.scrollTo({
      //   top: document.getElementById("portfolio").offsetTop,
      //   left: 0,
      //   behavior: "smooth",
      // });
    },
    toContact() {
      window.scrollTo({
        top: document.getElementById("contact").offsetTop,
        left: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    const header = this.$refs.header;
    if (header) {
      this.stickyOffset = header.offsetTop;
    }

    // Attach the scroll event listener
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    // Remove the scroll event listener
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
.compro-landing-header {
  &.sticky {
    position: fixed;
    top: 10px;
    z-index: 1000;
    border-radius: 20px;
    box-shadow: 1px 10px 50px 0px rgba(0, 0, 0, 0.75);
  }
}
</style>
