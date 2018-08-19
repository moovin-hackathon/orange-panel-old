import axios from 'axios'
import request from '@/api/request'

export default {
  /**
   * Retorna os anos das perguntas.
   *
   * @returns {Promise<*>}
   */
  async getYears () {
    return (await request.get(`/years`)).data
  },
  /**
   * Retorna as disciplinas das perguntas.
   *
   * @returns {Promise<*>}
   */
  async getSubjects (year) {
    return [
      'Matemática',
      'Português',
      'História'
    ]
    // return (await request.get(`platform/api/answer/subject`)).data
  }
}
