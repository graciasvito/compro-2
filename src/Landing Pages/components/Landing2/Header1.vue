<template>
  <div
    class="compro2-landing-header"
    :class="{ sticky: isSticky }"
    ref="header"
  >
    <div class="image-container">
      <div class="row align-center">
        <img
          src="../content/Logo Jala Bumi Perkasa.png"
          style="width: 75px"
          draggable="false"
        />
        <h2>PT. Jala Bumi Perkasa</h2>
      </div>
    </div>
    <div class="header-menu">
      <a @click="toHome">Home</a>
      <a @click="toservice">Services</a>
      <a @click="toAbout">About Us</a>
      <a @click="toPortfolio">Portfolio</a>
      <a @click="toContact">Contact</a>
    </div>
    <div></div>
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
      window.scrollTo({
        top: document.getElementById("portfolio").offsetTop,
        left: 0,
        behavior: "smooth",
      });
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
.compro2-landing-header {
  &.sticky {
    position: fixed;
    top: 10px;
    z-index: 1000;
    color: white;
    border-radius: 20px;
    box-shadow: 1px 10px 50px 0px rgba(0, 0, 0, 0.75);
    // width: 90%;
  }
}
</style>
