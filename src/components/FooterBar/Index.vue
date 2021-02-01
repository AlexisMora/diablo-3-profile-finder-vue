
<template>
    <v-footer
      dark
      padless
    >
      <v-card class="flex" flat tile>
        <PoweredByFoot/>
        <FootLinks/>
        <MadeByFoot/>
      </v-card>

    </v-footer>
</template>
<script>
import MadeByFoot from './MadeByFoot'
import FootLinks from './FootLinks'
import PoweredByFoot from './PoweredByFoot'
export default {
  name: 'FooterBar',
  components: { FootLinks, MadeByFoot, PoweredByFoot },
  data () {}
}

</script>
