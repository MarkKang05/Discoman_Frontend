<template>
    <div>
        <input type="file" accept="image/*" ref="uploadImage" @change="onImageUpload()" required >
        <div>
            <h5>Artist Name</h5>
            <input v-model="name" placeholder="type title">
        </div>
        <div>
            <h5>Description</h5>
            <input v-model="description" placeholder="type title">
        </div>
        <div>
            <h5>members</h5>
            <input v-model="members" placeholder="type title">
        </div>
        <button v-on:click="postForm()">Submit</button>
    </div>


    
</template>
<script>
export default {
    data(){
        return {
            name: null,
            description: null,
            members: null,

            formData: null,
            imageData: null,
        }
    },

    methods:{

        postForm(){
            var vm = this;
            var res_id = null;
            vm.$axios.post('http://localhost:8080/artists', {
                name: vm.name,
                description: vm.description,
                members: vm.members,
            })
            .then(response => {
                res_id = JSON.stringify(response.data.data.id)
                console.log(res_id);
                this.formData.append("id", res_id)
                this.startUpload()
            })

        },

        startUpload(){
            var vm = this;
            vm.$axios({
                url: 'http://localhost:8080/artists/image',
                method: 'POST',
                data: this.formData,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data'
                },
            }).then(response => {
                console.log(JSON.stringify(response.data));
            })
        },

        onImageUpload(){
            let file = this.$refs.uploadImage.files[0];
            this.imageData = file;
            this.formData = new FormData();
            this.formData.append("file", file);
            this.isSize(this.imageData)
        },

        //정사각형 인풋만 허용
        isSize(d){
            var reader = new FileReader();

            reader.readAsDataURL(d);
            reader.onload = function (e) {

            var image = new Image();

            image.src = e.target.result;

            image.onload = function () {
                    var height = this.height;
                    var width = this.width;
                    if (height != width ) {
                        alert("Wrong Size");
                        this.$refs.uploadImage.reset()
                        this.$refs.uploadImage.value= ''
                        return false;
                    }
                    alert("Good Size");
                    return true;
                };
            };


        }
    }
    
}
</script>