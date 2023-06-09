<template>
  <div class="py-32 bg-red-200 h-screen">
    <p ref="textElement" :class="{ 'scale-in': showText }">Example Text</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showText: false,
    };
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver(this.handleIntersection, options);
    observer.observe(this.$refs.textElement);
  },
  methods: {
    handleIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.showText = true;
        } else {
          this.showText = false;
        }
      });
    },
  },
};
</script>

<style>
.scale-in {
  transform: scale(0);
  animation-name: scaleIn;
  animation-duration: 1s;
  animation-fill-mode: both, forwards, none;
}

@keyframes scaleIn {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
</style>

