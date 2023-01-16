import React, { useState } from 'react';
import './CreateCar.css'
import axios from 'axios';

function CreateCar() {


    const [marque, setMarque] = useState('');
    const [modele, setModele] = useState('');
    const [numSerie, setNumSerie] = useState('');
    const [couleur, setCouleur] = useState('');
    const [matricule, setMatricule] = useState('');
    const [km, setKm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // create object for car model
        const data = {
            marque: marque,
            modele: modele,
            numSerie: numSerie,
            couleur: couleur,
            matricule: matricule,
            km: km
        };
        
            axios.post('http://localhost:4000/cars', data)
                .then(response => {
                    console.log(response.data);
                    // handle successful login here
                })
                .catch(error => {
                    console.log(error);
                    // handle error here
                });
        }
  return (
    <div>
        <h2 className="form-title">Ajouter une voiture</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Marque:
                <input type="text" value={marque} onChange={(e) => setMarque(e.target.value)} />
            </label>
            <label>
                Modèle:
                <input type="text" value={modele} onChange={(e) => setModele(e.target.value)} />
            </label>
            <label>
                Numéro de série:
                <input type="text" value={numSerie} onChange={(e) => setNumSerie(e.target.value)} />
            </label>
            <label>
                Couleur:
                <input type="text" value={couleur} onChange={(e) => setCouleur(e.target.value)} />
            </label>
            <label>
                Plaque d’immatriculation:
                <input type="text" value={matricule} onChange={(e) => setMatricule(e.target.value)} />
            </label>
            <label>
                Nombre de kilomètres:
                <input type="text" value={km} onChange={(e) => setKm(e.target.value)} />
            </label>
            <button type="submit">Créer</button>
        </form>
    </div>
  )
}

export default CreateCar