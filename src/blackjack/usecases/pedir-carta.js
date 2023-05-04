
/**
 * Pedir Carta
 * @param {Array<String>} deckT Tiene un arreglo de String
 * @returns {String} Retorna un carta del deck
 */
export const pedirCarta = (deck)=>{

    if (!deck || deck.length === 0) {
        throw 'No hay cartas en el deck (Baraja)';
    }

    const carta = deck.pop();
    console.log(carta);
    return carta
    // return deck.pop();
}