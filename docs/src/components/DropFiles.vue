<template>
  <div>
    <vue-dropzone class="dropZone"
      ref="myVueDropzone"
      id="dropzone"
      @vdropzone-success="vsuccess"
      @vdropzone-queue-complete="vqueueComplete"
      @vdropzone-error="verror"
      @vdropzone-removed-file="vremoved"
      @vdropzone-total-upload-progress="vprogress"
      @vdropzone-mounted="vmounted"
      :options="dropzoneOptions"
      :duplicateCheck="true"
    ></vue-dropzone>
  </div>
</template>

<script>
import vue2Dropzone  from "../../../dist/vue2Dropzone.js";
export default {
  name: "DropFiles",
  data() {
    return {
      image:
        "http://www.vivo.colostate.edu/hbooks/pathphys/digestion/liver/recirc.png",
      ok: true,
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 10,
        headers: { "My-Awesome-Header": "header value" },
        addRemoveLinks: true
      },
      fileAdded: false,
      filesAdded: false,
      success: false,
      error: false,
      removedFile: false,
      sending: false,
      uploadProgress: false,
      progress: false,
      myProgress: 0,
      isMounted: false,
      queueComplete: false,
      listOfImages: [],
      htmlData: undefined,
      countOnAllFiles: 0,
      numberOfFilesBeenLoaded: 0
    };
  },
  components: {
    vueDropzone: vue2Dropzone 
  },
  methods: {
    vsuccess(file, response) {
      if (file.type === "image/jpeg") {
        this.countOnAllFiles++;
        var reader = new FileReader();
        reader.addEventListener("loadend", (event, name) => {
          this.listOfImages.push(event.target.result);
          this.numberOfFilesBeenLoaded++;
        });
        reader.readAsDataURL(file, file.name);
      } else if (file.type === "text/html") {
        this.countOnAllFiles++;
        var reader = new FileReader();
        reader.addEventListener("loadend", event => {
          var parser = new DOMParser();
          var htmlDoc = parser.parseFromString(
            event.target.result,
            "text/html"
          );
          this.htmlData = htmlDoc;
          this.numberOfFilesBeenLoaded++;
        });
        reader.readAsText(file);
      }
      this.success = true;
      // window.toastr.success('', 'Event : vdropzone-success')
    },
    vqueueComplete(file, xhr, formData) {
      this.queueComplete = true;
      // window.toastr.success('', 'Event : vdropzone-queue-complete')
    },

    verror(file) {
      this.error = true;
      // window.toastr.error(file.upload.filename, 'Event : vdropzone-error - ' + file.status)
    },
    vremoved(file, xhr, error) {
      this.removedFile = true;
      // window.toastr.warning('', 'Event : vdropzone-removedFile')
    },
    vprogress(totalProgress, totalBytes, totalBytesSent) {
      this.progress = true;
      this.myProgress = Math.floor(totalProgress);
      // window.toastr.success('', 'Event : vdropzone-sending')
    },
    vmounted() {
      this.isMounted = true;
    }
  },
  watch: {
    numberOfFilesBeenLoaded: function(newVal, oldVal) {
      if (
        newVal === this.countOnAllFiles &&
        this.listOfImages.length > 0 &&
        this.htmlData
      ) {
        this.$emit("filesAdded", this.listOfImages, this.htmlData);
        this.htmlData = "";
      }
    }
  }
};
</script>

<style scoped>
.dropZone{
  width: 500px;
  height: 500px;
  border-style: solid;
}
.active {
  color: #78cb5b;
}
.inactive {
  color: #fff000;
}
.fa.fa-circle:before {
  content: "\25C9";
  /*color: #000;*/
}
th {
  text-align: center;
}
td:nth-child(1) {
  text-align: center;
}
td:nth-child(3) {
  text-align: center;
}
td:nth-child(2) {
  padding-left: 40px;
}
.event-active {
  font-weight: bold;
  color: #78cb5b;
  text-transform: uppercase;
  letter-spacing: 1.2px;
}
</style>
