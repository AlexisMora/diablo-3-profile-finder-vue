<template>
  <div>
    <v-row
      justify="start"
      no-gutters
      >
      <v-btn :to="{name:'Home'}">Home</v-btn>
      <v-btn :to="{name:'About'}">About</v-btn>
      <v-btn href="https://github.com/AlexisMora/diablo-3-profile-finder-vue" >Github</v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'FootLinks'
}
</script>
