<template>
  <div id="app">
    <div class="form">
      <h1 class="title">Cоздание клиента</h1>
      <progressBar :currentStep=currentStep />
      <step1 @status="stepStatus" v-if="currentStep === 1" />
      <step2 @status="stepStatus" v-if="currentStep === 2" />
      <step3 @status="stepStatus" v-if="currentStep === 3" />
      <success v-if="currentStep === 4" />
    </div>

  </div>
</template>

<script>

import progressBar from "@/components/progressBar";

import step1 from "@/components/step1";
import step2 from "@/components/step2";
import step3 from "@/components/step3";

import success from "@/components/success";

export default {
  name: 'App',
  data: () => {
    return {
      currentStep: 1,
    }
  },
  components: {
    progressBar,
    step1,
    step2,
    step3,
    success
  },
  methods: {
    stepStatus (value) {
      if (value){
        this.$data.currentStep++;
      }
    }
  }


}
</script>

<style lang="sass">
  @import "assets/style.sass"
</style>
