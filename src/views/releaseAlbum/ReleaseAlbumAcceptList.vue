<template>
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
                <th scope="col">Accept</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in releaseAlbums" v-bind:key="item.id" >
                    <th scope="row">{{item.id}}</th>
                    <td>
                        <a :href="'/releases/' + item.id">{{item.masterAlbum.title}}</a>
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
                    <td>
                        <select class="form-control" v-model="item.accept" @change="onChange(item.id, $event)">
                            <option :value='true'>Yes</option>
                            <option :value='false'>No</option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
</template>

<script>
export default {
    data() {
        return {
            releaseAlbums: [],
        }
    },

    watch: {
        releaseAlbums(){
            console.log(this.releaseAlbums);
        },
    },

    async created() {
        const released = await this.$axios.get('http://localhost:8080/releases/isAccept?accept=false');
        this.releaseAlbums = released.data.data; 
    },

    methods: {
        async onChange(key, event) {
            console.log(key)
            console.log(event.target.value)
            const released = await this.$axios.get('http://localhost:8080/releases/accept/'+key+'?accept='+event.target.value);
            released
            this.$router.go();

        }
    },

}
</script>

<style>

</style>