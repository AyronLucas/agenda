import api from "./api"

export const GetAtendimentos = async () => {
    const response = await api.get('/api/v1/atendimentos')

    if(response.status !== 200){
        return []
    }

    return response.data.atendimentos
}

export const CreateAtendimento = async (atendimento) => {
   const response = await api.post('/api/v1/atendimento', atendimento)

   return response
}

export const UpdateAtendimento = async (id, atendimento) => {
    const response = await api.put(`/api/v1/atendimento/${id}`, atendimento)

    return response
}

export const DeleteAtendimento = async (id) => {
    const response = await api.delete(`/api/v1/atendimento/${id}`)

    return response
}
