<template>
  <div class="display">
      <div class="image-holder d-md-block d-none">
      </div>
      <div class="form-holder px-3">
          
          <main>
              <h3 class="text-center mt-5 font-weight-bold text-primary"><nuxt-link to="/">Social-Lite</nuxt-link></h3>
            <nuxt/>
        </main>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

    .display {
        width: 100%;
        display: flex;
        height: 100vh;
    }
    .image-holder {
        width: 55%;
        background: url('/friends.jpg') no-repeat;
        background-size: cover;
    }

    .form-holder {
        width: 45%;
    }

    @media(max-width: 900px) {
        .form-holder {
        width: 100%;
    }
    }

</style>