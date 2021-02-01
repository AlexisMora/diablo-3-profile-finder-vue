<template>
    <div class="search-form my-5">
        <v-row>
            <v-col cols="12" md="8" offset-md="2">
                <!--Form here -->
                <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="onSubmit" >
                    <!-- Group 1 (text input) -->
                    <v-text-field
                        dark
                        v-model="form.battleTag"
                        label="Battletag"
                        placeholder="Alexisms26#2514"
                        required>
                    </v-text-field>

                    <!-- Group 2 (region selector) -->
                    <v-select
                    id="input-region"
                    dark
                    v-model="form.region"
                    :items="regions"
                    item-text="text"
                    label="Region"
                    required>
                    </v-select>
                    <v-btn
                        color="primary"
                        class="mr-4"
                        @click="submit">
                        Submit
                    </v-btn>

                </v-form>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import { regions } from '@/utils/regions'
export default {
  name: 'HomeForm',
  data () {
    return {
      form: {
        battletag: '',
        region: 'eu'
      }
    }
  },
  computed: {
    regions () {
      return regions.map(region => ({ value: region, text: region.toUpperCase() }))
    }
  },
  methods: {
    onSubmit () {
      const { region, battleTag } = this.form
      this.$router.push({ name: 'Profile', params: { region, battleTag: battleTag.replace('#', '-') } })
    }
  }
}
</script>
