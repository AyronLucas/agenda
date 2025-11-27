import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { UpdateAtendimento } from "../../api/atendimentos";
import './styles.css'
import { toast } from "react-toastify";

export default function PageUpdateAtendimento() {
    const navigate = useNavigate()
    const [atedimento, setAtendimento] = useState({
        dia: '',
    hora: '',
    valor: '',
    concluido: true
    })
    const location = useLocation()
    const { atedimento: prevAtendimento } = location.state

    const handleChange = (e) => {
        const { id, value } = e.target;
        setCliente({
            ...atedimento,
            [id]: value
        })
    }

    const handleReset = (e) => {
        e.preventDefault()
        setAtendimento({ ...prevAtendimento, valor: '' })
    }

    
    const handleSave = async (e) => {
        e.preventDefault()
        const response = await UpdateAtendimento(prevAtendimento.id, atedimento)

        if (response.status === 200) {
            navigate('/atendimentos')
            toast("Usuário alterado com sucesso")
        } else {
            toast("Erro ao criar Usuário")
            console.log(response)
        }
    }

    // Adicionado
    useEffect(() => {
        setAtendimento({ ...prevAtendimento, valor: '' })
    }, [])

    return (
        <div className="form">
            <form>
                <div>
                    <label>dia: </label>
                    <input type="text" name="dia" id='dia' value={atedimento.dia} onChange={handleChange} />
                </div>
                <div>
                    <label>hora: </label>
                    <input type="text" name="hora" id='hora' value={atedimento.hora} onChange={handleChange} />
                </div>
                <div>
                    <label>valor: </label>
                    <input type="text" name="valor" id='valor' value={atedimento.valor} onChange={handleChange} />
                </div>
                <div className="actions">
                    <button
                        type="reset"
                        onClick={handleReset}
                    >Limpar</button>
                    <button
                        type="submit"
                        onClick={handleSave}
                    >Enviar</button>
                </div>
            </form>
        </div>
    )
}