<template>
  <div>
    <Vue3Sign
      :canvas-width="700"
      :canvas-height="350"
      @on-done="done"
    />
  </div>
</template>
<script>
export default {
  name: "baseSign",
  setup() {
    const done = (img) => {
      console.log(img)
    }
    return {
      done
    }
  }
};
</script>
