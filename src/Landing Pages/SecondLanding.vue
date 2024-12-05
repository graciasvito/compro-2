<template>
  <div>
    <Header1 />
    <Frontpage />
    <ServiceArea />
    <Profile />
    <SertificateArea />
    <PortfolioArea />
    <Footer1 />
  </div>
</template>

<script>
import Header1 from "./components/Landing1/Header1.vue";
import Frontpage from "./components/Landing2/Frontpage.vue";
import Profile from "./components/Landing2/ProfileArea.vue";
import ServiceArea from "./components/Landing2/ServiceArea.vue";
import SertificateArea from "./components/Landing2/SertificateArea.vue";
import Footer1 from "./components/Landing2/Footer1.vue";
import PortfolioArea from "./components/Landing2/PortfolioArea.vue";

export default {
  components: {
    Header1,
    Frontpage,
    Profile,
    ServiceArea,
    SertificateArea,
    Footer1,
    PortfolioArea,
  },
};
</script>
