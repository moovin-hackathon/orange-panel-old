import axios from 'axios'
import Router from '@/router'

const instance = axios.create({
  baseURL: process.env.API_URL
})

export default instance
