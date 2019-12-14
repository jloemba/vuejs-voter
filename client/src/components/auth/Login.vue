<template>
    <div>
          <h1> Formulaire Formik</h1>

            <Formik ref="child" :parentProps="$props" @interface="parentData = $props;"  >
            <form slot="form" @submit="handleSubmit" >
                  <input
                  type="text"
                  value=""
                  placeholder="username"
                  v-model="username"
                  />

                  <input
                  type="email"
                  value=""
                  placeholder="email"
                  v-model="email"
                  />

                  <input
                  type="password"
                  value=""
                  placeholder="password"
                  v-model="password"
                  />

                  <input type="submit" value="Submit">
            </form>
             </Formik>

    </div>
</template>

<script>

import Formik from '../../lib/Formik'

export default {
    name:"Login",
    props:{
            password:String,
            username:String,
            email:String,
    },
    components:{Formik},
     methods:{
        handleSubmit(e){
                e.preventDefault();
                console.log(" Login component ")
                //this.$refs.child.$props.parentProps = this.$props
                //console.log(this.$props)
                console.log(this.$refs.child.$props)

        }
    
    }
}
</script>