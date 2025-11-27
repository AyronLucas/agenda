import Atendimento from '../model/atendimento.js'
import jwt from 'jsonwebtoken'

const JWT_SEGREDO = "M3uS3gr3d0"
const SALT = 10 // 12

class ServiceAtendimento {

    async FindAll() {
        return Atendimento.findAll()
    }

    async FindOne(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }

        // preciso procurar um usuario no banco
        const atendimento = await Atendimento.findByPk(id)

        if (!atendimento) {
            throw new Error(`Atendimento ${id} não encontrado`)
        }

        return atendimento
    }

    async Create(dia, hora, valor, concluido) {
        if (!dia || !hora || !valor) {
            throw new Error("favor preencher todos os campos")
        }

        await Atendimento.create({
            dia,
            hora,
            valor,
            concluido
        })
    }

    async Update(id, dia, hora) {
        const oldAtendimento = await Atendimento.findByPk(id)
    }

    async Delete(id) {
        const oldAtendimento = await Atendimento.findByPk(id)

        oldAtendimento.destroy()
    }

    async Login(dia, hora) {
        if(!dia || !hora) {
            throw new Error("Dia ou hora inválidos.")
        }

        const atendimento = await Atendimento.findOne({ where: { dia } })

        if (
            !atendimento
        ) {
            throw new Error("Dia ou Hora inválidos.")
        }

        return jwt.sign(
            { id: atendimento.id, dia: atendimento.nome},
            JWT_SEGREDO,
            { expiresIn: 60 * 60 }
        )
    }
}

export default new ServiceAtendimento()