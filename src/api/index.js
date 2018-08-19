import axios from 'axios'
import request from '@/api/request'

export default {
  /**
   * Retorna os anos das perguntas.
   *
   * @returns {Promise<*>}
   */
  async getYears () {
    return [
      '1º Ano',
      '2º Ano',
      '3º Ano'
    ]
    // return (await request.get(`platform/api/answer/year`)).data
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
