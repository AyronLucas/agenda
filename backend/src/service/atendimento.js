import Atendimento from '../model/atendimento.js'


class ServiceAtendimento {

    async FindAll() {
        return Atendimento.findAll()
    }

    async FindOne(id) {
        if (!id) {
            throw new Error("Favor informar o ID")
        }
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

    
}

export default new ServiceAtendimento()