<template>
  <div class="loader-container">
    <p class="loader-text">
      <span class="loader-letter u">U</span>
      <span class="loader-letter i">I</span>
      <span class="loader-letter n1">N</span>
      <span class="loader-letter n2">N</span>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loader-text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader-letter {
  font-size: 36px;
  font-weight: bold;
  margin: 0 2px;
  color: #ccc;
}

.u {
  animation: color-change 2s ease-in-out 0.5s infinite;
  color: #3498db;
}

.i {
  animation: color-change 2s ease-in-out 0.5s infinite;
  color: #2ecc71;
}

.n1 {
  animation: color-change 2s ease-in-out 1s infinite;
  color: #f1c40f;
}

.n2 {
  animation: color-change 2s ease-in-out 1.5s infinite;
  color: #e74c3c;
}

@keyframes color-change {
  0% {
    color: #ccc;
  }
  50% {
    color: inherit;
  }
  100% {
    color: #ccc;
  }
}
</style>
