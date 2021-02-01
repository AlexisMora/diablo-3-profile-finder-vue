<template>
        <v-card-title class="white--text">
         <v-btn text to="/" flat>Home</v-btn>
         <v-btn text to="/About" flat>About</v-btn>
         <v-btn text href="https://github.com/AlexisMora/diablo-3-profile-finder-vue" flat>Github</v-btn>

          <v-spacer></v-spacer>

          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            dark
            icon
            :href="icon.link"
          >
            <v-icon size="24px">
              {{ icon.icon }}
            </v-icon>
          </v-btn>
        </v-card-title>
</template>

<script>
export default {
  name: 'FootLinks',
  data () {
    return {
      icons: [
        {
          link: 'https://github.com/AlexisMora',
          icon: 'mdi-github'
        },
        {
          link: 'https://twitter.com/NotoriusAlexis',
          icon: 'mdi-twitter'
        },
        {
          link: 'https://www.linkedin.com/in/alexis-mora-sanchez-355335169/',
          icon: 'mdi-linkedin'
        },
        {
          link: 'https://instagram.com/notoriousalexis',
          icon: 'mdi-instagram'
        }
      ]
    }
  }
}
</script>
