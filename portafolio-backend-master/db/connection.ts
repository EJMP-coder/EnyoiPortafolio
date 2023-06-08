import { Sequelize } from 'sequelize';

const db = new Sequelize('db_portafolios', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

export default db;