import api from "./api"

export const GetClientes = async () => {
    const response = await api.get('/api/v1/clientes')

    if(response.status !== 200){
        return []
    }

    return response.data.clientes
}

export const CreateCliente = async (cliente) => {
   const response = await api.post('/api/v1/cliente', cliente)

   return response
}

export const UpdateCliente = async (id, cliente) => {
    const response = await api.put(`/api/v1/cliente/${id}`, cliente)

    return response
}

export const DeleteCliente = async (id) => {
    const response = await api.delete(`/api/v1/cliente/${id}`)

    return response
}

export const LoginCliente = async (email, senha) => {
    const response = await api.post('/api/v1/login', { email, senha })

   return response
}