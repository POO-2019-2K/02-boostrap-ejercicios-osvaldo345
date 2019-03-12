export default class Reservacion {
    constructor(tableReservacion, tableInfo){
        this._tableReservacion = tableReservacion;
        this._tableInfo = tableInfo;

        this._numHab = 0;
    }

    addReservacion(cliente) {
        let row = this._tableReservacion.insertRow(-1);
        let cellName = row.insertCell(0);
        let cellEmail = row.insertCell(1);
        let cellTipoHab = row.insertCell(2);
        let cellFechaRe = row.insertCell(3);
        let cellFechaSa = row.insertCell(4);

        cellName.innerHTML = cliente.name;
        cellEmail.innerHTML = cliente.email;
        cellTipoHab.innerHTML = cliente.tipoHab;
        cellFechaRe.innerHTML = cliente.getFechaReAsString();
        cellFechaSa.innerHTML = cliente.getFechaSaAsString();


        this._numHab++;
    

        this._tableInfo.rows[1].cells[1].innerHTML = this._numHab;

    }
}