<template>
<div>
    <h1>Dette er et emsempel</h1>
    <ul id="example-1">
        <li v-for="item in getInspectorDetails" v-bind:key="item">
            {{ item }}
        </li>
    </ul>
    <ul id="example-2">
        <li v-for="note in getNotes" v-bind:key="note">
            {{ note }}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'Report',
    props:{
        listOfImages: { type: Array, default: () => [] },
        htmlData: { type: Document, default: null },
    },
    components: {

    },
    computed:{
            getInspectorDetails(){
                let info = this.htmlData.getElementById('inspector_details');
                let details = Array.from(info.getElementsByClassName('vals')).map(element => element.innerText );
                return details;
            },
            getNotes(){
                let notesHtml = this.htmlData.getElementsByClassName('note_text');
                let notes = Array.from(notesHtml).map(element => element.innerText );
                return notes;
            },
    },
    methods: {
        
    },
    watch: {


    }
}
</script>

<style scoped>

</style>
