<template>
    <h1>
        <p><a v-bind:href="'/vote/'">Fil des sujets de vote</a></p>
        <router-view></router-view>
    </h1>
</template>


<script>
//import Axios from 'axios'
export default {
      name: 'Vote'
}
</script>