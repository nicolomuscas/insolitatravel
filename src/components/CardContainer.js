import React, { useContext } from "react";
import { ContextAPI } from "../context/ContextAPI";
import Card from "./Card";

function CardContainer() {
    // <h1>oggi e' {moment().format("dddd")}

    const resultsAPI = useContext(ContextAPI);
    //prendo tutte le righe
    const rows = resultsAPI.rows;

    const places = [];

    // aggiornato 2
    rows.forEach((row) => {
        let lastArrayElement = places.length - 1;

        if (
            places.length > 0 &&
            places[lastArrayElement][0].places[0].name === row.places[0].name
        ) {
            // aggiungo all'array di quella localita' la row contenente i dati della seconda o successiva giornata
            places[lastArrayElement].push(row);
        } else {
            // altrimenti siamo in una nuova localita' rispetto al giorno prima
            // e creo un nuovo array per la nuova localita' e lo inserisco alla fine
            places.push([row]);
        }
    });

    console.log(places);

    return (
        <div id="tappe">
            {places.map((place) => {
                return <Card place={place} />;
            })}
        </div>
    );
}
export default CardContainer;
