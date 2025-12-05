import { Sequelize } from 'sequelize'

class Database {
    constructor() {
        this.init()
    }

    init() {
        // .env - dotenv
        this.db = new Sequelize({
            database: 'agenda_4sd7',
            host: 'dpg-d4pm89euk2gs73f844cg-a',
            username: 'agenda_4sd7_user',
            password: 'SvMDcFJAm95YApRKl0C9MuTuoZskARrL',
            dialect: 'postgres'
        })
    }
}

export default new Database()