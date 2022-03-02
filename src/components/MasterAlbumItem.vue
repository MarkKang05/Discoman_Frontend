<template>

    <div>
        <label for="todo-item">id: {{album.id}}</label>
    </div> 


</template>
<script>
  export default {
      props: {
          album: {}
      }
  };
</script>