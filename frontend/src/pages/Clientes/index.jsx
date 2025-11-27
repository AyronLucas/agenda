import { useEffect, useState } from 'react'
import { DeleteCliente, GetClientes } from '../../api/clientes'
import { Link, useNavigate } from 'react-router-dom'
import './styles.css'
import { toast } from 'react-toastify'

function Clientes() {
    const navigate = useNavigate()
    const [clientes, setClientes] = useState([])

    const handleUpdate = async (cliente) => {
        navigate('/update/cliente', { state: { cliente } })
    }

    const handleDelete = async (id) => {
        const response = await DeleteCliente(id)

        if (response.status !== 204) {
            toast("Erro ao deletar, tente novamente, mais tarde")
            return
        }

        setClientes(clientes => clientes.filter(cliente => cliente.id !== id))
    }

    useEffect(() => {
        async function carregar() {
            const allClientes = await GetClientes()
            setClientes(allClientes)
        }
        carregar()
    }, [])

    return (
        <main>
            <div className='cliente-list'>
                <div>
                    <Link to={'/create/cliente'}>
                        <button>Criar</button>
                    </Link>
                </div>
                <div className='cliente header' key='header'>
                    <label>Nome</label>
                    <label>Email</label>
                    <label>Ações</label>
                </div>
                {
                    clientes.length == 0
                        ? <div className='cliente'>
                            <label>Não tem cliente</label>
                        </div>
                        : clientes.map(cliente =>
                            <div className='cliente' key={cliente.id}>
                                <label>{cliente.nome}</label>
                                <label>{cliente.email}</label>
                                <div className='actions'>
                                    <button
                                        type='button'
                                        onClick={() => handleUpdate(cliente)}
                                    >Alterar</button>
                                    <button
                                        type='button'
                                        onClick={() => handleDelete(cliente.id)}
                                    >Deletar</button>
                                </div>
                            </div>)
                }
            </div>
        </main>
    )
}

export default Clientes
