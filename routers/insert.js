module.exports = async function (db) {
	console.log('Begin insert');
    await db.sequelize.sync({force: true});
    return Promise.all([
    	db.Fleet.create({
            name: "Fleet #1"
        }),
        db.Fleet.create({
            name: "Fleet #2"
        }),
        db.Fleet.create({
            name: "Fleet #3"
        })
    ]);
};