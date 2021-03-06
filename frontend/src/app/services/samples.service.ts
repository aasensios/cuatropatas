import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Sample } from '../models/sample'
import { Observable } from 'rxjs'
import { API } from './api.constants'

@Injectable()
export class SamplesService {
  constructor(private http: HttpClient) {}

  getSamples(): Observable<any> {
    const url = `${API.API_URL}/samples`
    const accessToken = localStorage.getItem('access_token')
    const options = API.getAuthOptions(accessToken)
    return this.http.get<any>(url, options)
  }

  getSample(barcode: string): Observable<any> {
    const url = `${API.API_URL}/samples/${barcode}`
    const accessToken = localStorage.getItem('access_token')
    const options = API.getAuthOptions(accessToken)
    return this.http.get<Sample>(url, options)
  }

  create(sample: Sample): Observable<any> {
    const url = `${API.API_URL}/samples`
    const body = sample
    const accessToken = localStorage.getItem('access_token')
    const options = API.getAuthOptions(accessToken)
    return this.http.post<Sample>(url, body, options)
  }

  update(sample: Sample): Observable<any> {
    const url = `${API.API_URL}/samples/${sample.id}`
    const body = sample
    const accessToken = localStorage.getItem('access_token')
    const options = API.getAuthOptions(accessToken)
    return this.http.put<Sample>(url, body, options)
  }

  delete(sample: Sample): Observable<any> {
    const url = `${API.API_URL}/samples/${sample.id}`
    const accessToken = localStorage.getItem('access_token')
    const options = API.getAuthOptions(accessToken)
    return this.http.delete<any>(url, options)
  }
}
