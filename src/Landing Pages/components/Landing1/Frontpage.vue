<template>
  <div class="frontpage">
    <div class="containerz pull">
      <div class="content hero-block">
        <div class="heading-and-supporting">
          <h1 class="display-lg bold">Innovative Solutions, Lasting Quality</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // No additional data or props are needed, so these can be omitted.
};
</script>

<style lang="scss" scoped>
.frontpage {
  // margin-top: 11.5vh;
  background-image: url("../content/industries21.jpg");
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25vh 0;
  // background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}

.containerz.pull {
  width: 87.5vw;
}
.content.hero-block {
  // background-color: rgba(0, 0, 0, 0.1);

  padding: 75px 60px;
  width: 50%;
}

.heading-and-supporting {
  margin-bottom: 32px;
}

.display-lg.bold {
  font-weight: 700;
  font-size: 36px;
  text-shadow: 2px 2px #00000070;
  color: white;
}

.text-xl.secondary {
  font-size: 20px;
  color: var(--600);
  margin: 16px 0;
}

.action-wrapper {
  margin-top: 32px;

  p {
    font-weight: bold;
    color: #292929;
    font-size: 1rem;
  }
}

.action {
  display: flex;
  gap: 10px;
}

.button-download-img {
  width: 100%;
  max-width: 160px;
}

.mobile-hero-img {
  display: none;
  max-width: 100%;
}

@media screen and (max-width: 991px) {
  .hero.home {
    background-image: none;
    padding: 0;
  }

  .containerz.pull {
    flex-direction: column;
    padding: 20px;
  }

  .content.hero-block {
    width: 100%;
    padding: 56px 20px;
  }

  .action {
    flex-direction: column;
  }

  .mobile-hero-img {
    display: block;
    width: 100vw;
  }
}

@media screen and (max-width: 500px) {
  .action {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }

  .button-download-img {
    width: 100%;
    max-width: 160px;
  }
  .mobile-hero-img {
    display: block;
    img {
      width: 100vw;
    }
  }
}
</style>
