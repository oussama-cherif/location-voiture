import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CarList.css'

const CarList = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/cars')
            .then(response => {
                console.log(response.data.cars)
                setCars(response.data.cars);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <>
        <h2>List of Cars</h2>
        { cars.map(car => (
            <div key={car._id}>
                <p>Marque: {car.marque}</p>
                <p>Modèle: {car.modele}</p>
                <p>Numéro de série: {car.numSerie}</p>
                <p>Couleur: {car.couleur}</p>
                <p>Plaque d’immatriculation: {car.matricule}</p>
                <p>Nombre de kilomètres: {car.km}</p>
            </div>
        ))}
        </>
    );
}

export default CarList;