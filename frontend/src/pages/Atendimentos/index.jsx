import { useEffect, useState } from 'react'
import { DeleteAtendimento, GetAtendimentos } from '../../api/atendimentos'
import { Link, useNavigate } from 'react-router-dom'
import './styles.css'
import { toast } from 'react-toastify'

function Atendimentos() {
    const navigate = useNavigate()
    const [atendimentos, setAtendimentos] = useState([])

    const handleUpdate = async (atendimento) => {
        navigate('/update/atedimento', { state: { atendimento } })
    }

    const handleDelete = async (id) => {
        const response = await DeleteAtendimento(id)

        if (response.status !== 204) {
            toast("Erro ao deletar, tente novamente, mais tarde")
            return
        }

        setAtendimentos(atendimentos => atendimentos.filter(atendimento => atendimento.id !== id))
    }

    useEffect(() => {
        async function carregar() {
            const allAtendimentos = await GetAtendimentos()
            setAtendimentos(allAtendimentos)
        }
        carregar()
    }, [])

    return (
        <main>
            <div className='cliente-list'>
                <div>
                    <Link to={'/create/atendimento'}>
                        <button>Criar</button>
                    </Link>
                </div>
                <div className='cliente header' key='header'>
                    <label>dia</label>
                    <label>hora</label>
                    <label>valor</label>
                </div>
                {
                    atendimentos.length == 0
                        ? <div className='cliente'>
                            <label>Não tem atendimentos</label>
                        </div>
                        : atendimentos.map(atendimentos =>
                            <div className='cliente' key={atendimentos.id}>
                                <label>{atendimentos.dia}</label>
                                <label>{atendimentos.hora}</label>
                                <div className='actions'>
                                    <button
                                        type='button'
                                        onClick={() => handleUpdate(atendimentos)}
                                    >Alterar</button>
                                    <button
                                        type='button'
                                        onClick={() => handleDelete(atendimentos.id)}
                                    >Deletar</button>
                                </div>
                            </div>)
                }
            </div>
        </main>
    )
}

export default Atendimentos
