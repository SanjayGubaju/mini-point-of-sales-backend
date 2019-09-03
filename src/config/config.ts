import dotenv from 'dotenv';
// const dotenv = require('dotenv');

dotenv.config();

const sequelizeConfig = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mariadb',
    },
    test: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mariadb',
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mariadb',
    },
};

export default sequelizeConfig;

// module.exports = {
//     development: {
//         username: process.env.DB_USERNAME,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_DATABASE,
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT,
//         dialect: 'mariadb',
//     },
//     test: {
//         username: process.env.DB_USERNAME,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_DATABASE,
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT,
//         dialect: 'mariadb',
//     },
//     production: {
//         username: process.env.DB_USERNAME,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_DATABASE,
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT,
//         dialect: 'mariadb',
//     },
// };
