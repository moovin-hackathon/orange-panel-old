<template>
  <div class="row pt-5 d-flex justify-content-center">

    <div class="col-md-3">

      <step-list>
        <step-item title="Personalizar Questões">
          <form-group label="Ano">
            <b-form-select v-model="year" class="mb-3">
              <option :value="null">Selecione o ano</option>
              <option v-for="year in years" :value="year">{{ year }}</option>
            </b-form-select>
          </form-group>

          <form-group label="Disciplinas" v-show="show">
            <b-form-select v-model="subject" class="mb-3">
              <option :value="null">Selecione a disciplina</option>
              <option v-for="subject in subjects" :value="subject">{{ subject }}</option>
            </b-form-select>
          </form-group>

          <form-group label="Quantidade de questões">
            <b-form-input class="mb-3" v-model="questionsQuantity" type="number" max="90"  placeholder="máximo 90"></b-form-input>
          </form-group>

          <form-group label="Duração">
            <b-form-input class="mb-3" v-model="duration" type="number" max="5"  placeholder="máximo 5h"></b-form-input>
          </form-group>

          <button class="btn btn-primary center" type="button" @click="personalize()">Personalizar</button>
        </step-item>
      </step-list>
    </div>
  </div>
</template>

<script>
import api from '@/api'
import StepList from '@/components/steps/List'
import StepItem from '@/components/steps/Item'
import FormGroup from '@/components/template/FormGroup'

export default {
  data: () => ({
    show: false,
    year: null,
    years: [],
    subject: null,
    subjects: [],
    questionsQuantity: null,
    duration: null
  }),
  async mounted () {
    try {
      this.years = await api.getYears()
    } catch (e) {
      alert(e)
    }
  },
  methods: {
    personalize () {
     if (this.year !== null && this.subject !== null && this.questionsQuantity !== null && this.duration !== null) {
       this.$router.push('/Quiz')
       return false
     }
     return alert('Complete todos os campos antes de prosseguir!')
    }
  },
  watch: {
    async year () {
      this.show = true

      try {
        this.subjects = await api.getSubjects(this.year)
      } catch (e) {

      }
    }
  },
  components: {
    StepList,
    StepItem,
    FormGroup
  }
}
</script>

<style scoped>

</style>
