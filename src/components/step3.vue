<template>
  <form class="inputs" @submit.prevent="submit">
    <label class="input_label" for="type">Тип документа*</label>
    <select class="input"  id="type" :class="{ 'hasError': $v.documentType.$error }"  v-model="documentType">
      <option value="" selected disabled hidden>Не выбрано</option>
      <option value="passport">Паспорт</option>
      <option value="BC">Свидетельство о рождении</option>
      <option value="driversLicense">Вод. удостоверение</option>
    </select>
    <input type="text" class="input" placeholder="Серия">
    <input type="number" class="input" placeholder="Номер">
    <input type="text" class="input" placeholder="Кем выдан">
    <input class="input" :class="{ 'hasError': $v.dateOfIssue.$error }" v-model="dateOfIssue" type="text" onfocus="(this.type = 'date')"  placeholder="Дата выдачи*">

    <button  type="submit" class="step_btn">Создать</button>

  </form>
</template>



<script>
import { required} from "vuelidate/lib/validators";

export default {
  name: "step3",
  data: () => {
    return {
      documentType:"",
      dateOfIssue:""
    }
  },
  validations: {
    documentType:{
      required,
    },
    dateOfIssue: {
      required,
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