<template>
  <div>
    <Header1 />
    <Frontpage />
    <Profile />
    <ServiceArea />
    <SertificateArea />
    <Footer1 />
  </div>
</template>

<script>
import Header1 from "./components/Landing1/Header1.vue";
import Frontpage from "./components/Landing1/Frontpage.vue";
import Profile from "./components/Landing1/ProfileArea.vue";
import ServiceArea from "./components/Landing1/ServiceArea.vue";
import SertificateArea from "./components/Landing1/SertificateArea.vue";
import Footer1 from "./components/Landing1/Footer1.vue";

export default {
  components: {
    Header1,
    Frontpage,
    Profile,
    ServiceArea,
    SertificateArea,
    Footer1,
  },
};
</script>
