import { DatosRevista } from "../datos-reportes-comunes/DatosRevista";
import { RegistroGananciaRevista } from "./RegistroGananciaRevista";

export class TablaReporteGananciaRevistaBean {
    public get registros(): RegistroGananciaRevista[] {
        return this._registros;
    }
    public set registros(value: RegistroGananciaRevista[]) {
        this._registros = value;
    }
    public get totalGanancias(): number {
        return this._totalGanancias;
    }
    public set totalGanancias(value: number) {
        this._totalGanancias = value;
    }
    public get totalCostos(): number {
        return this._totalCostos;
    }
    public set totalCostos(value: number) {
        this._totalCostos = value;
    }
    public get totalIngresos(): number {
        return this._totalIngresos;
    }
    public set totalIngresos(value: number) {
        this._totalIngresos = value;
    }
    public get numSuscriptores(): number {
        return this._numSuscriptores;
    }
    public set numSuscriptores(value: number) {
        this._numSuscriptores = value;
    }
    public get datosRevista(): DatosRevista {
        return this._datosRevista;
    }
    public set datosRevista(value: DatosRevista) {
        this._datosRevista = value;
    }
    constructor(
        private _datosRevista: DatosRevista,
        private _numSuscriptores: number,
        private _totalIngresos: number,
        private _totalCostos: number,
        private _totalGanancias: number,
        private _registros: RegistroGananciaRevista[]
    ) { }
}