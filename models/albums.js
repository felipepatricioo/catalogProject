const { Sequelize, DataTypes } = require('sequelize');
const database = require('./database');

const albums = database.sequelize.define("albums", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    album_name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    artist_name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    release_date:{
        type: Sequelize.DATE,
        allowNull: true,
    },
    album_cover:{
        type: Sequelize.STRING,
        allowNull: false,
    }
},{
    freezeTableName: true,
    timestamps: false, 
    createdAt: false,
    updatedAt: false,
})

module.exports = albums;