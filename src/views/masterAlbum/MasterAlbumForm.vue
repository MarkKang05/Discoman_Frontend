<template>
    <div>
        <h3>파일 업로드 결과: { { this.response === '' ? 'waiting' : this.response } }</h3>
        <div>
            <input type="file" ref="uploadImage" @change="onImageUpload()" required >
        </div>

        <div>
            <h5>Title</h5>
            <input v-model="title" placeholder="type title">
        </div>
        <div>
            <h5>Description</h5>
            <input v-model="description" placeholder="type title">
        </div>
        <div>
            <h5>Genre</h5>
            <input v-model="genre" placeholder="type title">
        </div>
        <div>
            <h5>Style</h5>
            <input v-model="style" placeholder="type title">
        </div>
        <button v-on:click="postForm()">Submit</button>

        <br>

    </div>


</template>
<script>
export default {
    data() {
        return {
            artists: [],
            title: '',
            description: '',
            genre: '',
            style: '',

            response: '',
            formData: null
        }
    },

    created(){
        this.getArtists()
    },

    methods: {
        getArtists: async function(){
            var vm = this;
            vm.artists = await vm.$axios.get('http://localhost:8080/artists');
        },
        // async getMusics(){
        //     var vm = this;
        //     vm.musics = await vm.$axios.get('http://localhost:8080/musics');
        // },
        postForm(){
            var vm = this;
            var res_id = null;
            vm.$axios.post('http://localhost:8080/masters', {
                title: vm.title,
                description: vm.description,
                genre: vm.genre,
                style: vm.style,
                images: "",
                artist: 1,
                musics:[5,6]
            })
            .then(response => {
                res_id = JSON.stringify(response.data.data.id)
                console.log(res_id);
                this.onImageUpload(res_id);
                this.startUpload()
            })

        },
        onImageUpload(name){
            let file = this.$refs.uploadImage.files[0];
            this.formData = new FormData();
            this.formData.append("file", file)
            this.formData.append("id", name)
        },
        startUpload(){
            var vm = this;
            vm.$axios({
                url: 'http://localhost:8080/file/upload',
                method: 'POST',
                data: this.formData,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data'
                },
            }).then(response => {
                console.log(JSON.stringify(response.data));
            })
        }

    }

    
}
</script>