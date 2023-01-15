const Car = require('../models/Car');

exports.addCar = (req, res) => {
    const newCar = new Car(req.body);
    newCar.save((err, car) => {
        if(err) {
            return res.status(400).json({
                message: "Error saving car",
                error: err
            });
        }
        return res.status(200).json({
            message: "Car saved successfully",
            car: car
        });
    });
};

exports.modifyCar = (req, res) => {
    Car.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, car) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (!car) {
            return res.status(404).send({ message: 'Car not found.' });
        }
        return res.status(200).send(car);
    });
};

exports.deleteCar = (req, res) => {
    Car.findByIdAndRemove(req.params.id, (err, car) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (!car) {
            return res.status(404).send({ message: 'Car not found.' });
        }
        return res.status(200).send({ message: 'Car deleted successfully.' });
    });
};