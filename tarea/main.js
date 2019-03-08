import Reservaciones from "./reservaciones";
import Reservacion from "./reservacion";

class Main {
    constructor() {
        this._numHab = new Reservacion(document.querySelector("#numHab"), document.querySelector("#info"));

        document.querySelector("#btnAdd").addEventListener("click",() => {
            let name = document.querySelector("#name").value;
            let email =document.querySelector("#email").value;
            let tipoHab = document.querySelector("#tipoHab").value;
            let fechaRe = document.querySelector("#fechaRe").value;
            let fechaSa = document.querySelector("#fechaSa").value;
           

        
            




            let Habitacion = new Reservaciones(name, email, tipoHab, fechaRe, fechaSa);

            this._numHab.addHabitaciones(Habitacion);
        });
    }


}

let m = new Main(); 