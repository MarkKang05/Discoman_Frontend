<template>
    <div>

<div class="my-3 ">
        <div style="float:left;">
            <div v-if="masterAlbumDetail.images">
                <img class="object-cover h-60 w-60 mx-3 rounded" :src="require('@/../../../image/masters/'+masterAlbumDetail.images)"/>
            </div>
            <h1 v-else>no Image</h1>
        </div>
        <div>
            <p>{{masterAlbumDetail.title}}({{releaseAlbumDetail.format}})</p>
            <p>{{releaseAlbumDetail.catalogue}}</p>
            <p>{{releaseAlbumDetail.released}}</p>
            <a :href="'/labels/' + releaseAlbumDetail.label.id">
                {{releaseAlbumDetail.label.name}}
            </a>
        </div>
</div>

        <div class="my-10">
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">duration</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in masterAlbumDetail.musics" v-bind:key="item.id" >
                    <th scope="row">{{item.id}}</th>
                    <td>{{item.name}}</td>
                    <td>{{item.duration}}</td>
                </tr>
            </tbody>
        </table>
        </div>




        <div class="bg-red-600 bg-opacity-50">
            <h1 class="text-black">Released Album List!!</h1>

            <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Title(Format)</th>
                <th scope="col">Label</th>
                <th scope="col">Cat#</th>
                <th scope="col">Country</th>
                <th scope="col">Year</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in otherReleaseAlbum" v-bind:key="item.id" >
                    <th scope="row">{{item.id}}</th>
                    <td>
                        <a :href="'/releases/' + item.id">{{masterAlbumDetail.title}}</a>
                        ({{item.format}})
                    </td>
                    <td>
                        <a :href="'/labels/' + item.label.id">
                            {{item.label.name}}
                        </a>
                    </td>
                    <td>{{item.catalogue}}</td>
                    <td>{{item.country}}</td>
                    <td>{{item.released}}</td>
                </tr>
            </tbody>
        </table>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            releaseAlbumDetail: {},
            masterAlbumDetail: {},
            otherReleaseAlbum: []
        }
    },

    async created() {
        var vm = this;
        const albumDetail = await this.$axios.get('http://localhost:8080/releases/'+vm.$route.params.id);
        vm.releaseAlbumDetail=albumDetail.data.data

        const mAlbum = await this.$axios.get('http://localhost:8080/masters/'+vm.releaseAlbumDetail.masterAlbum.id);
        vm.masterAlbumDetail = mAlbum.data.data;

        const released = await this.$axios.get('http://localhost:8080/releases/findByMAlbumId/'+vm.releaseAlbumDetail.masterAlbum.id);
        vm.otherReleaseAlbum = released.data.data;

    },

}
</script>

<style>

</style>