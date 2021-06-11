<template>
  <div>
    <sidebar/>
    <main>
         <nuxt/>
         <!-- <v-tour name="myTour" :steps="steps"></v-tour> -->
    </main> 
    
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
export default {
  components: { Sidebar },
  data () {
      return {
        labels: {
          // buttonSkip:"SKiiIP",
          // buttonPrevious: "PREVIOUS",
          // buttonNext: "NEXT",
          // buttonStop: "FINISH",
        },
        steps: [
          {
            target: '#v-step-0',  // We're using document.querySelector() under the hood
            header: {
              title: 'Welcome to a tour of your Dashboard',
            },
            content: `Your dashboard has a side bar that contains various actions that you can take. Click on any of these depending on what action you are interested in. `,
            params: {
              placement: 'right' // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
            }
          },
          {
            header: {
              title: 'Your profile',
            },
            target: '#v-step-1',
            content: 'An awesome plugin made with Vue.js!',
            params: {
              placement: 'right' // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
            }
          },
          {
            header: {
                title: 'Online Consultation',
            },
            target: '#v-step-4',
            content: 'Try it, you\'ll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.',
            params: {
              placement: 'right' // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
            }
          },
          {
            header: {
                title: 'Online Consultation',
            },
            target: '#v-step-3',
            content: 'Try it, you\'ll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.',
            params: {
              placement: 'right' // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
            }
          }
        ]
      }
    },
    mounted: function () {
      // this.$tours['myTour'].options.labels.buttonSkip = 'End Tour'
      // this.$tours['myTour'].start()
    }

}
</script>

<style scoped>

 main {
        padding-left:80px;
        background: #f4f2f2;;
        color: #000;
        min-height: 100vh;
    }

    @media(max-width: 700px) {
         .side-bar {
            max-height: 400px;
            overflow-x: hidden;
            overflow-y: scroll;
            display: none;
         }

         main {
             padding-left: 0;
         }
         
     }
</style>
