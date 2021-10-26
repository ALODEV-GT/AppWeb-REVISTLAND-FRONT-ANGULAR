import { DatosRevista } from "../datos-reportes-comunes/DatosRevista";
import { RegistroSuscripcion } from "../datos-reportes-comunes/RegistroSuscripcion";

export class ReportePopularesBean {
    public get suscripciones(): RegistroSuscripcion[] {
        return this._suscripciones;
    }
    public set suscripciones(value: RegistroSuscripcion[]) {
        this._suscripciones = value;
    }
    public get numSuscripciones(): number {
        return this._numSuscripciones;
    }
    public set numSuscripciones(value: number) {
        this._numSuscripciones = value;
    }
    public get datosRevista(): DatosRevista {
        return this._datosRevista;
    }
    public set datosRevista(value: DatosRevista) {
        this._datosRevista = value;
    }
    constructor(
        private _datosRevista: DatosRevista,
        private _numSuscripciones: number,
        private _suscripciones: RegistroSuscripcion[]
    ) { }
}