<template>
    <div>

        <b-form >
            <b-form-group
                label="ReleaseAlbum Name"
                label-for="input-1"
                description="We'll never share your email with anyone else.">
                <b-form-input
                id="albumName"
                v-model="album.title"
                placeholder="Enter name"
                required/>
            </b-form-group>

            <b-form-group
                label="description"
                label-for="input-1"
                description="We'll never share your email with anyone else.">
                <b-form-input
                id="albumName"
                v-model="album.description"
                placeholder="Enter name"
                required/>
            </b-form-group>

            <b-form-group
                label="genre"
                label-for="input-1"
                description="We'll never share your email with anyone else.">
                <b-form-input
                id="albumName"
                v-model="album.genre"
                placeholder="Enter name"
                required/>
            </b-form-group>

            <b-form-group
                label="style"
                label-for="input-1"
                description="We'll never share your email with anyone else.">
                <b-form-input
                id="albumName"
                v-model="album.style"
                placeholder="Enter name"
                required/>
            </b-form-group>
        </b-form>
        <button type="" v-on:click="postReleaseAlbum(album)" class="btn btn-dark btn-lg btn-block">Submit</button>

    </div>
  
</template>

<script>
import {sendReleaseAlbum} from "../../apis/releaseAlbum";

export default {
    data() {
        return {
            album: {
                masterAlbum: 13,
                label: 1,
                format: "15 inch",
                catalogue: "catalogue",
                country: "US",
                released: 1919
            }
        }
    },

    methods: {
        postReleaseAlbum: function(albumData){
            sendReleaseAlbum(albumData);
        }
    },

}
</script>

<style>

</style>