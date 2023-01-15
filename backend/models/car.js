const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    marque: {
        type: String,
        required: true
    },
    modele: {
        type: String,
        required: true
    },
    numSerie: {
        type: String,
        required: true
    },
    couleur: {
        type: String,
        required: true
    },
    matricule: {
        type: String,
        required: true
    },
    km: {
        type: Number,
        required: true
    }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;