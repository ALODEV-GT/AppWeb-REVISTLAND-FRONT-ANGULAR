import { DatosRevista } from "../datos-reportes-comunes/DatosRevista";
import { RegistroGanancia } from "../datos-reportes-comunes/RegistroGanancia";

export class TablaReporteGananciaTotalBean {
    public get registrosGanancias(): RegistroGanancia[] {
        return this._registrosGanancias;
    }
    public set registrosGanancias(value: RegistroGanancia[]) {
        this._registrosGanancias = value;
    }
    public get gananciaTotal(): number {
        return this._gananciaTotal;
    }
    public set gananciaTotal(value: number) {
        this._gananciaTotal = value;
    }
    public get datosRevista(): DatosRevista {
        return this._datosRevista;
    }
    public set datosRevista(value: DatosRevista) {
        this._datosRevista = value;
    }
    constructor(
        private _datosRevista: DatosRevista,
        private _gananciaTotal: number,
        private _registrosGanancias: RegistroGanancia[]
    ) { }
}