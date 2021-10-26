import { DatosRevista } from "../datos-reportes-comunes/DatosRevista";
import { RegistroMeGusta } from "../datos-reportes-comunes/RegistroMeGusta";

export class ReporteRevistaMasGustadaBean {
    public get meGustas(): RegistroMeGusta[] {
        return this._meGustas;
    }
    public set meGustas(value: RegistroMeGusta[]) {
        this._meGustas = value;
    }
    public get numMeGustas(): number {
        return this._numMeGustas;
    }
    public set numMeGustas(value: number) {
        this._numMeGustas = value;
    }
    public get datosRevista(): DatosRevista {
        return this._datosRevista;
    }
    public set datosRevista(value: DatosRevista) {
        this._datosRevista = value;
    }
    constructor(
        private _datosRevista: DatosRevista,
        private _numMeGustas: number,
        private _meGustas: RegistroMeGusta[]
    ) { }
}