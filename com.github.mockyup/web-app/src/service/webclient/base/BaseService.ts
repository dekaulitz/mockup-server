import { AuthResponse, UserCardInterface } from '@/service/webclient/model/ResponseModel'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { AuthLogin } from '@/service/webclient/model/RequestModel'

export interface PageableParam {
  page: number
  size: number
  sort?: string
}

export interface BaseResponse<T = never> {
  statusCode: number
  message: string
  data?: T
  error?: any
  requestId: string,
  requestTime: number
}

export interface BaseCrudService{
  getAll<T = never>(parameter?:never): Promise<T>;

  getCount(parameter?:never): Promise<number>;

  getById<T = never>(id:string): Promise<T>;

  doPost<T = never, R = never> (t:T): Promise<R>

  doUpdate<T = never, R = never> (t:T, id:string): Promise<R>
}