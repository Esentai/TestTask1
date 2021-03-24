<template>
  <form class="inputs" @submit.prevent="submit">
    <input class="input" type="number" placeholder="Индекс">
    <input class="input" type="text" placeholder="Страна">
    <input class="input" type="text" placeholder="Область">
    <input class="input" :class="{ 'hasError': $v.city.$error }" v-model="city" type="text" placeholder="Город*">
    <input class="input" type="text" placeholder="Улица">
    <input class="input" type="text" placeholder="Дом">

    <button  type="submit" class="step_btn">Следующий шаг</button>

  </form>
</template>



<script>
import { required,minLength} from "vuelidate/lib/validators";

export default {
  name: "step2",
  data: () => {
    return {
      city:""
    }
  },
  validations: {
    city: {
      required,
      min: minLength(2)
    },
  },
  methods:{
    submit() {
      this.$v.$touch();
      if(this.$v.$error) return
      this.$emit('status', true)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../assets/steps.sass"
</style>