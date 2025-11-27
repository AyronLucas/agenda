import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { CreateAtendimento } from "../../api/atendimentos";
import './styles.css'
import { toast } from "react-toastify";

const INITIAL_STATE = {
    dia: '',
    hora: '',
    valor: '',
    concluido: true
}

export default function PageCreateAtendimento() {
    const navigate = useNavigate()
    const [atendimento, setAtendimento] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const { id, value } = e.target;
        setCliente({
            ...atendimento,
            [id]: value
        })
    }

    const handleReset = (e) => {
        e.preventDefault()
        setAtendimento(INITIAL_STATE)
    }

    const handleSave = async (e) => {
        e.preventDefault()
        const response = await CreateAtendimento(atendimento)

        if (response.status === 201) {
            toast("Atendimento criado com sucesso")
            navigate('/atendimentos')
        } else {
            toast("Erro ao criar Atendimento")
            console.log(response)
        }
    }

    return (
        <div className="form">
            <form>
                <div>
                    <label>Dia: </label>
                    <input type="text" name="dia" id='dia' value={atendimento.dia} onChange={handleChange} />
                </div>
                <div>
                    <label>hora: </label>
                    <input type="text" name="hora" id='hora' value={atendimento.hora} onChange={handleChange} />
                </div>
                <div>
                    <label>valor: </label>
                    <input type="text" name="valor" id='valor' value={atendimento.valor} onChange={handleChange} />
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