import _ from 'underscore';
// import {crearDeck} from "./usecases/crear-deck";
// import {pedirCarta} from "./usecases/pedir-carta";
// import {valorCarta} from "./usecases/valor-Carta";

import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML } from "./usecases";
/**
 * 2C = two of clubs (Treboles)
 * 2D = two of Diaminds (Diamantes)
 * 2H = two of Hearts (Corazones)
 * 2S = two of Spades (ESpadas)
 */

// const  miModulo = (() => {//Es la declaracion de una funcion anonima
//   'use strict';

  let deck         = [];
  const tipos      = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

  let puntosJugador = 0,
      puntosComputadora = 0;          
  // let puntosJugadores = [];
      
  //Referencias del HTML
  const btnPedir   = document.querySelector('#btnPedir');
  const btnDetener = document.querySelector('#btnDetener');
  const btnNuevo   = document.querySelector('#btnNuevo');

  const divCartasJugador = document.querySelector('#jugador-cartas');
  const divCartasComputadora = document.querySelector('#computadora-cartas');
  const  puntosHTML = document.querySelectorAll('small');

  //Turno de la computadora


  //eventos
  btnPedir.addEventListener('click', () => {

      const carta = pedirCarta(deck);
      // const puntosJugador = acumularPuntos(carta, 0);
      puntosJugador = puntosJugador + valorCarta(carta);
      puntosHTML[0].innerText = puntosJugador;

      const imgCarta = crearCartaHTML(carta);
      divCartasJugador.append(imgCarta);

    //   crearCarta(carta, 0);
      
      if (puntosJugador > 21) {
          console.warn('Lo siento mucho perdiste');
          btnPedir.disabled=true; 
          btnDetener.disabled=true;                
          turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);            
          

      }else if (puntosJugador === 21) {
          console.warn('21, genial!');
          btnPedir.disabled=true; 
          btnDetener.disabled=true; 
          turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);                
      }

  } );
  
  // const nuevopunto = document.querySelector('#small').innerText(puntosJugador);

  // console.log(nuevopunto);

  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      btnNuevo.disabled = true;
      turnoComputadora(puntosJugador, puntosHTML[1], divCartasComputadora, deck);

  });

  btnNuevo.addEventListener('click', () =>{

    console.clear();
    deck = [];
    deck = crearDeck(tipos, especiales);

    puntosJugador = 0;
    puntosComputadora = 0;
    puntosHTML [0].innerText = 0;
    puntosHTML [1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled = false;
    btnDetener.disabled = false;

  // lo que se coloque en esta seccion sera publico
  // return {
  //     nuevoJuego: inicializarJuego
  });

// });