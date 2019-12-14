<template>
    <div>
        <input 
          v-bind:type="inputType"
          v-bind:value="inputValue"
          v-bind:placeholder="inputPlaceholder" 
          v-bind:v-model="inputName" 
          v-on:input="updateValue($event.target.value)"
          />
        
    </div>
</template>
<script>
import { vueBus } from '../main';

export default {
    name:"MyInput",
    props:['inputType','inputValue','inputPlaceholder','inputName'],
    created(){
        //this.$refs.myInput.focus();
        vueBus.$emit('initFormik',this.inputName)
    },
    directives: { focus },
    methods: {
      updateValue: function (value) {
         this.inputValue = value
         vueBus.$emit('toFormik',{'property':this.inputName,'value': value})
      }
    }
}

</script>