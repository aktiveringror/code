<template>
  <div>
    <h1>loll</h1>
    <Report v-if="uploaded" :listOfImages="listOfImages" :htmlData="htmlData" />
    <DropFiles v-else @filesAdded="onFilesAdded" />
  </div>
</template>

<script>
import DropFiles from "../components/DropFiles.vue";
import Report from "../components/Report.vue";
export default {
  data() {
    return {
      listOfImages: new Map(),
      htmlData: undefined,
      uploaded: false
    };
  },
  components: {
    DropFiles,
    Report
  },
  methods: {
    onFilesAdded(listOfImages, htmlData) {
      this.listOfImages = listOfImages;
      this.htmlData = htmlData;
      this.uploaded = true;
    }
  },
  watch: {}
};
</script>

<style scoped>
</style>
