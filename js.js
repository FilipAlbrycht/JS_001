class Tabelka {
    constructor() {
        this.klasa = document.querySelector('.klasa')          //odniesienie i wybór klasy
        fetch('https://jsonplaceholder.typicode.com/albums')      //wybranie API
            .then(odpowiedz => {
                return odpowiedz.json()     //konw na .json

            })
            .then(wynik => {
                this.draw(wynik);
            })
    }


//wyrzucanie danych do html


    draw(inf) {
        let szablon = '';

        inf.forEach(album => {
            szablon += `
<div>
<table class="table table-hover">
   
      <tr>
        <td>${album.userId}</td>
        <td>${album.id}</td>
        <td>${album.title}</td>
        </tr>
    
  </table>
</div>
        `;

        })

        this.klasa.insertAdjacentHTML('afterbegin', szablon);
    }


}


const abc = new Tabelka();