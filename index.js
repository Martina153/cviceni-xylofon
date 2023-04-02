/*const kameny = document.querySelectorAll('.kamen');
kameny.forEach(button => {
  button.addEventListener('click', () => {
    const changeText = button.textContent;
    document.querySelector('h1').textContent = changeText;
    const nota = button.dataset.note;
    const zvuk = new Audio(`tony/${nota}.mp3`);
    zvuk.play();
  });
})*/

//Přidej posluchač události `keydown` na celou stránku.
//Pokud vlastnost `code` vzniklé události začíná na 
//`Digit`, ulož si do proměnné následující číslo. Například z `Digit4` si ulož `4`.
 document.addEventListener('keydown', (event) =>{
    //začíná na řetězec "Digit"?
    if (event.code.startsWith('Digit')) {
    //odstraňuje prvních pět znaků, 
      const keyNum = Number(event.code.slice(5));
      const kameny = document.querySelectorAll('.kamen');
    //Pokud je číslo větší nebo rovno jedné a menší nebo rovno počtu kamenů
    //přehraj tón na příslušném kamenu. 
      if (keyNum >= 1 && keyNum <= kameny.length) {
        //vrátí prvek pole s indexem o jedna menším než hodnota proměnné, indexovanie od nuly
        const pressedButton = kameny[keyNum - 1];
        const nota = pressedButton.dataset.note;
        const zvuk = new Audio(`tony/${nota}.mp3`);
        zvuk.play();
        document.querySelector('h1').textContent = pressedButton.textContent;
      }
    }
  });