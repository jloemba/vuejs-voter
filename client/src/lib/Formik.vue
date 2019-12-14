<template>
    <div>
        
        <slot name="form"></slot>
        {{parentProps.email}}
        {{parentProps.username}}
        {{parentProps.pasword}}
    </div>
</template>
<script>


export default {
    name:"Formik",
    props:{
        parentProps:{}
    },
    methods:{
        caption(){
            console.log(this)
            // Requête Axios POST (ou autre)
        },
        handleSubmit(e){
                e.preventDefault();
                console.log(" Formik component ")
                console.log(this.$props)
        }
    
    },
    beforeMounted(){
                console.log(this.parentProps)
    },
    mounted(){
                console.log(this.parentProps)
    },
    updated(){
        console.log(this.parentProps)
    },
    beforeUpdate(){
        console.log(this.parentProps)
    }
}
</script>
