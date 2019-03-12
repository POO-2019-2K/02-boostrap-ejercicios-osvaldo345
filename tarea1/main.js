import Reservacion from "./reservacion.js";
import Reservaciones from "./reservaciones.js";

class Main {
    constructor() {
        this._reservacion = new Reservacion(document.querySelector("#reservacion"), document.querySelector("#info"));

        document.querySelector("#btnAdd").addEventListener("click",() => {
            let name = document.querySelector("#name").value;
            let email =document.querySelector("#email").value;
            let tipoHab =document.querySelector("#tipoHab").value;
            let sFechaRe = document.querySelector("#fechaRe").value;
            sFechaRe = sFechaRe.split('-');

        
            let fecha1 = new Date(sFechaRe[0], sFechaRe[1], sFechaRe[2]);

            let sFechaSa = document.querySelector("#fechaSa").value;
            sFechaSa = sFechaSa.split('-');

        
            let fecha2 = new Date(sFechaSa[0], sFechaSa[1], sFechaSa[2]);




            let cliente = new Reservaciones(name, email, tipoHab, fecha1, fecha2);

            this._reservacion.addReservacion(cliente);
        });
    }


}

let m = new Main(); 