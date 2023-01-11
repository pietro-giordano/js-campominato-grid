/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

1. Ciclo che genera 100 celle in griglia quadrata
2. Generare insieme alla singola cella numero contenuto in ordine crescente
3. Creare evento che al click della cella cambia colore
      3.1 gestire evento in modo che al secondo click cella torna a colore precedente
      3.2 stampare in console il numero di cella cliccata
*/
const gridGame = document.getElementById('grid-game');
const play = document.getElementById('play');

play.addEventListener('click',

      function() {

            gridGame.innerHTML = '';

            for(let i = 1; i <= 100; i++) {

                  const newCell = document.createElement('div');
                  newCell.classList.add('cell');
                  newCell.innerHTML = i;
                  newCell.addEventListener('click',
                  
                        function() {

                              if (this.classList.contains('clicked')) {
                                    this.classList.remove('clicked');
                              }
                              else {
                                    this.classList.add('clicked');
                              }

                              console.log('Hai cliccato la cella numero ' + i);

                        }

                  )

                  gridGame.append(newCell);

            }

      }

)