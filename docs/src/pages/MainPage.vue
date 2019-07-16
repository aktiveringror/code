<template>
  <div>
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
      listOfImages: [],
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
      debugger;
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
