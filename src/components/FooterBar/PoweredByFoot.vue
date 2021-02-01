<template>
  <div class="text-center ">
        <v-card-text class="py-2 white--text text-center">
          <span><strong> Powered By </strong></span>
        </v-card-text>
                <v-card-text class="py-2 white--text text-center">
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
        </v-card-text>
  </div>
</template>

<script>
export default {
  name: 'PoweredByFoot',
  data () {
    return {
      icons: [
        {
          link: 'https://develop.battle.net/documentation/diablo-3',
          icon: 'mdi-battlenet'
        },
        {
          link: 'https://vuejs.org/',
          icon: 'mdi-vuejs'
        },
        {
          link: 'https://vuetifyjs.com/en/',
          icon: 'mdi-vuetify'
        },
        {
          link: 'https://github.com',
          icon: 'mdi-github'
        }
      ]
    }
  }
}
</script>
