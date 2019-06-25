<template>
<div>
    <h1>Demo</h1>
    <img :src="image" />
    <p>Below you can see Vue2-Dropzone in action.</p>
    <vue-dropzone ref="myVueDropzone" id="dropzone"
      @vdropzone-file-added="vfileAdded"
      @vdropzone-success="vsuccess"
      @vdropzone-error="verror"
      @vdropzone-removed-file="vremoved"
      @vdropzone-sending="vsending"
      @vdropzone-total-upload-progress="vprogress"
      @vdropzone-mounted="vmounted"
      :options="dropzoneOptions"
      :duplicateCheck="true">
    </vue-dropzone>

    <h3>Events</h3>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Event</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr :class="{ 'event-active' : isMounted }">
          <td>1</td>
          <td>vdropzone-mounted()</td>
          <td>
            <i class="fa fa-circle" :class="{ 'active' : isMounted }"></i>
          </td>
        </tr>
        <tr class="" :class="{ 'event-active' : fileAdded }">
          <td>2</td>
          <td>vdropzone-file-added(
            <code>file</code>)</td>
          <td>
            <i class="fa fa-circle" :class="{ 'active' : fileAdded }"></i>
          </td>
        </tr>
        <tr :class="{ 'event-active' : filesAdded }">
          <td>3</td>
          <td>vdropzone-files-added(
            <code>file</code>)</td>
          <td>
            <i class="fa fa-circle" :class="{ 'active' : filesAdded }"></i>
          </td>
        </tr>
        <tr :class="{ 'event-active' : success }">
          <td>4</td>
          <td>vdropzone-success(
            <code>file, response</code>)</td>
          <td>
            <i class="fa fa-circle" :class="{ 'active' : success }"></i>
          </td>
        </tr>
        <tr :class="{ 'event-active' : error }">
          <td>5</td>
          <td>vdropzone-error(
            <code>file</code>)</td>
          <td>
            <i class="fa fa-circle" :class="{ 'active' : error }"></i>
          </td>
        </tr>
        <tr :class="{ 'event-active' : removedFile }">
          <td>6</td>
          <td>vdropzone-removed-file(
            <code>file, error, xhr</code>)</td>
          <td>
            <i class="fa fa-circle" :class="{ 'active' : removedFile }"></i>
          </td>
        </tr>
        <tr :class="{ 'event-active' : sending }">
          <td>7</td>
          <td>vdropzone-sending(
            <code>file, xhr, formData</code>)</td>
          <td>
            <i class="fa fa-circle" :class="{ 'active' : sending }"></i>
          </td>
        </tr>
        <tr :class="{ 'event-active' : progress }">
          <td>11</td>
          <td>vdropzone-total-upload-progress(
            <code>totaluploadprogress, totalBytes, totalBytesSent</code>)</td>
          <td>
            <i class="fa fa-circle" :class="{ 'active' : progress }"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import vueDropzone from 'vue2-dropzone';
export default {
  data() {
    return {
      image: 'http://www.vivo.colostate.edu/hbooks/pathphys/digestion/liver/recirc.png',
      ok: true,
      dropzoneOptions: {
        url: 'null',
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
    }
  },
  components: {
    vueDropzone,
  },
  methods: {
    vsuccess(file, response) {
      debugger;
      var reader = new FileReader();
      reader.addEventListener("loadend", (event) => {
          this.image = event.target.result;
      });
      //reader.readAsText(file);
      reader.readAsDataURL(file);
      this.success = true
      // window.toastr.success('', 'Event : vdropzone-success')
    },
    vfileAdded(file) {
      this.fileAdded = true
      // window.toastr.info('', 'Event : vdropzone-file-added')
    },
    vfilesAdded(file) {
      this.filesAdded = true
      // window.toastr.info('', 'Event : vdropzone-files-added')
    },    
    verror(file) {
      this.error = true
      // window.toastr.error(file.upload.filename, 'Event : vdropzone-error - ' + file.status)
    },
    vremoved(file, xhr, error) {
      this.removedFile = true
      // window.toastr.warning('', 'Event : vdropzone-removedFile')
    },
    vsending(file, xhr, formData) {
      this.sending = true
      // window.toastr.warning('', 'Event : vdropzone-sending')
    },
    vprogress(totalProgress, totalBytes, totalBytesSent) {
      this.progress = true
      this.myProgress = Math.floor(totalProgress)
      // window.toastr.success('', 'Event : vdropzone-sending')
    },
    vmounted() {
      this.isMounted = true
    },
  },
  watch: {
    fileAdded() {
      let that = this
      setTimeout(function() {
        that.fileAdded = false
      }, 2000)
    },
    filesAdded() {
      let that = this
      setTimeout(function() {
        that.filesAdded = false
      }, 2000)
    },
    success() {
      let that = this
      setTimeout(function() {
        that.success = false
      }, 2000)
    },
    error() {
      let that = this
      setTimeout(function() {
        that.error = false
      }, 2000)
    },
    removedFile() {
      let that = this
      setTimeout(function() {
        that.removedFile = false
      }, 2000)
    },
    sending() {
      let that = this
      setTimeout(function() {
        that.sending = false
      }, 2000)
    },
    progress() {
      let that = this
      setTimeout(function() {
        that.progress = false
      }, 2000)
    },
    isMounted() {
      let that = this
      setTimeout(function() {
        that.isMounted = false
      }, 2000)
    },
    dDrop() {
      let that = this
      setTimeout(function() {
        that.dDrop = false
      }, 2000)
    },
  }
}
</script>

<style scoped>
.active {
  color: #78CB5B;
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
  color: #78CB5B;
  text-transform: uppercase;
  letter-spacing: 1.2px;
}
</style>
