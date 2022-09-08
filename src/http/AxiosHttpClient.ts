import { AxiosInstance } from 'axios'

export type HttpClientResponse<T> = [ null, T ] | [Error | any ]

export interface HttpClient {
    get<T = unknown>(path: string): Promise<HttpClientResponse<T>>
    post<T = unknown>(path: string, body: any): Promise<HttpClientResponse<T>>
    // put<T = unknown>(path: string): Promise<HttpClientResponse<T>>
    // patch<T = unknown>(path: string): Promise<HttpClientResponse<T>>
    // delete<T = unknown>(path: string): Promise<HttpClientResponse<T>>
}

export class AxiosHttpClient implements HttpClient {
    private axiosInstance: AxiosInstance

    constructor(axiosIstance: AxiosInstance) {
        this.axiosInstance = axiosIstance
    }

    async get<T = unknown>(path: string): Promise<HttpClientResponse<T>> {
        try {
            const { data } = await this.axiosInstance(path)
            return [ null, data]
        } catch(error) {
            return [error]
        }
    }

    async post<T = unknown>(path: string, body: any): Promise<HttpClientResponse<T>> {
        try {
            const { data } = await this.axiosInstance.post(path, body)
            return [ null, data]
        } catch(error) {
            return [error]
        }
    }
}