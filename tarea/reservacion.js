export default class Reservacion {
    constructor(_tablenumHab, _tableInfo){
        this._tablenumHab = this._tablenumHab;
        this._tableInfo = _tableInfo;

        this._numHab = 0;
    }

    addHabitaciones(Habitacion) {
        let row = this._tablenumHab.insertRow(-1);
        let cellName = row.insertCell(0);
        let cellEmail = row.insertCell(1);
        let cellTipoHab = row.insertCell(2);
        let cellFechaRe = row.insertCell(3);
        let cellFechaSa = row.insertCell(4);

        cellName.innerHTML = Habitacion.name;
        cellEmail.innerHTML = Habitacion.email;
        cellTipoHab.innerHTML = Habitacion.tipoHab
        cellFechaRe.innerHTML = Habitacion.fechaRe
        cellFechaSa.innerHTML = Habitacion.fechaSa


        this._numHab++;

        this._tableInfo.rows[0].cells[1].innerHTML = this._numHab;

    }
}