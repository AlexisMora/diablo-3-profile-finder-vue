<template>
  <div class="home">
    <HomeTitle/>
    <HomeForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeForm from './HomeForm'
import HomeTitle from './HomeTitle'
export default {
  name: 'Home',
  components: {
    HomeTitle, HomeForm
  }
}
</script>
