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
        }),
        db.Vehicle.create({
            name: "Car #1",
            fleetId: 1
        }),
        db.Vehicle.create({
            name: "Car #2",
            fleetId: 1
        }),
        db.Vehicle.create({
            name: "Car #3",
            fleetId: 2
        }),
    ]);
};