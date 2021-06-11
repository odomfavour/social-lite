<template>
  <div>
      
      <div class="side-bar">
            <div class="hl-top">
                <div class="hl-logo text-center">
                    <a href="#hero-section" class="brand">
                        <b-icon icon="diamond"></b-icon>
                    </a>
                </div>
            </div>
            <ul class="nav nav-menu py-5">
                <li class="w-100 text-center" id="v-step-0">
                    <nuxt-link to="/"><b-icon icon="house-fill" font-scale="2"></b-icon>
                    </nuxt-link> 
                </li>
                <li class="w-100 text-center" id="v-step-1">
                    <nuxt-link to="">
                        <b-icon icon="people-fill" font-scale="2"></b-icon>
                    </nuxt-link> 
                </li>
                <li class="w-100 text-center" id="v-step-3">
                    <nuxt-link to=""><b-icon icon="bell-fill" font-scale="2"></b-icon>
                    </nuxt-link> 
                </li>
                <li class="w-100 text-center">
                    <nuxt-link to=""><b-icon icon="chat-square-text-fill" font-scale="2"></b-icon>
                    </nuxt-link> 
                </li>
                <li class="w-100 text-center">
                    <nuxt-link to=""><b-icon icon="person" font-scale="2"></b-icon>
                    </nuxt-link> 
                </li>
                <li class="w-100 text-center" @click.prevent="onLogout">
                    <nuxt-link to="#"> <b-icon icon="arrow-left-circle-fill" font-scale="2"></b-icon>
                    </nuxt-link> 
                </li>
            </ul>
        </div>
  </div>
</template>

<script>
export default {
    methods: {
         async onLogout () {
            await this.$apolloHelpers.onLogout()
            await this.$router.push('/login');
        },
    }
}
</script>
   
<style scoped>
     .side-bar {
        width: 80px;
        position: fixed;
        bottom: 0;
        top: 0;
        background: #0c0c14;
        border-right: 1px solid rgba(11, 11, 19, 0.1);
       
     }

     @media(max-width: 700px) {
         .side-bar {
            max-height: 400px;
            overflow-x: hidden;
            overflow-y: scroll;
            display: none;
         }

     }

     .brand i {
         font-size: 30px;
     }

    .nav-menu .b-icon {
         color: #fff;
        line-height: 40px;
     }

     i:hover {
         color: #ff9301;
     }

     li {
         border-bottom: 1px solid rgba(255, 255, 255, 0.1);
         padding: 16px 0;
     }

      .active i {
         color: #ff9301 !important;
     }

     .hl-top a {
        background: #ff9301;
        color: #fff;
        font-weight: 600;
        text-decoration: none;
        font-size: 40px;
        height: 80px;
        width: 80px;
        line-height: 80px;
        display: inline-block;
        vertical-align: top;
        text-align: center;
     }
</style>

<style>
    .v-tour .v-step {
             background: #fff !important;
             color: #000 !important;
     }

    /* .v-tour .v-step::before {
            display: block;
            position: absolute;
            left: 22px;
            width: 0;
            height: 0;
            border: inset 14px;
     } */

    .v-step__button {
        color: #000 !important;
        background: #fff !important;
        border: 1px solid #000!important;
        
    }

    .v-step__header {
        background: #15079F !important;
        padding: 10px;
        color: #fff;
    }

    .v-step__content {
        padding: 10px;
    }

    .v-step .v-step__arrow--dark {
        border-color: #fff;
    }
</style>