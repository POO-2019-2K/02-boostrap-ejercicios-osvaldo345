export default class Reservaciones {
    constructor(name, email, tipoHab, fechaRe, fechaSa) {
        this._name =  name.toUpperCase();
        this._email = email;
        this._tipoHab = tipoHab;
        this._fechaRe = fechaRe;
        this._fechaSa = fechaSa;
    }

    get name(){
        return this._name;
    }

    get email(){
        return this._email;
    }

    getFechaReAsString(){
        let d = this._fechaRe.getDate()+ "/" + this._fechaRe.getMonth() + "/" + this._fechaRe.getFullYear();
        return d;
    }

    get fechaRe (){
        return this._fechaRe;
    }

    getFechaSaAsString(){
        let b = this._fechaSa.getDate()+ "/" + this._fechaSa.getMonth() + "/" + this._fechaSa.getFullYear();
        return b;
    }

    get fechaSa (){
        return this._fechaSa;
    }
}