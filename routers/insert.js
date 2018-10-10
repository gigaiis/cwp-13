module.exports = async function (db) {
    await db.sequelize.sync({force: true});
    return Promise.all([]);
};