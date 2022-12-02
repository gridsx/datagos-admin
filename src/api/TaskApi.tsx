import api, { HttpResult } from "./Api";


export interface InstanceInfo {
    id: number
    state: number
    position: string
    dumpConfig: string
    created: Date
    updated: Date
    host: string
    port: number
    username: string
    password: string
}


export const getInstances = async (params: any) => {
    return await api.get<HttpResult<InstanceInfo[]>>('/tasks', { params: params });
}
