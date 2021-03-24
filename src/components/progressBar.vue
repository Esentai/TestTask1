<template>
  <ol class="progress">
    <li :class="{ 'is-active': currentStep === 1, 'is-complete': currentStep > 1}"  data-step="1">
      Личные данные
    </li>
    <li :class="{ 'is-active': currentStep === 2, 'is-complete': currentStep > 2}"   data-step="2">
      Адрес
    </li>
    <li :class="{ 'is-active': currentStep === 3, 'is-complete': currentStep > 3}"   data-step="3" class=" progress__last">
      Паспорт
    </li>
  </ol>
</template>

<script>
export default {
  name: "progressBar",
  props: ['currentStep']
}
</script>

<style lang="sass" scoped>
  @import "../assets/progressBar"
</style>