<template>
    <h1>Inscription  {{label}} </h1>
</template>

<script>
export default {
      name: 'Register',
      data() {
          return {label:"vuejs"}
      },
      beforeMount:function(){
          console.log(this.$data)
      }
}
</script>