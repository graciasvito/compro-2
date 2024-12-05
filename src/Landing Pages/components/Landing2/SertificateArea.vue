<template>
  <div class="compro2-sertificate" ref="sertificateSection">
    <h1>Certificate</h1>
    <div class="list-container" :class="{ 'animate-images': animate }">
      <img src="../content/iso14001.png" alt="" draggable="false" />
      <img src="../content/iso9001.png" alt="" draggable="false" />
      <img src="../content/ISO45001.png" alt="" draggable="false" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animate: false, // Control animation state
    };
  },
  mounted() {
    const observerOptions = {
      root: null, // Observe within the viewport
      threshold: 0.3, // Trigger when 30% of the component is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animate = true; // Start animation
          observer.disconnect(); // Optional: Stop observing once triggered
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    observer.observe(this.$refs.sertificateSection);
  },
};
</script>
