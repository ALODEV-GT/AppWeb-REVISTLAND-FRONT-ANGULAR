import { TablaReporteGananciaAnuncioBean } from "./TablaReporteGananciaAnuncioBean";
import { TablaReporteGananciaRevistaBean } from "./TablaReporteGananciaRevistaBean";

export class ReporteGananciaTotalBean {
    public get registrosAnuncio(): TablaReporteGananciaAnuncioBean[] {
        return this._registrosAnuncio;
    }
    public set registrosAnuncio(value: TablaReporteGananciaAnuncioBean[]) {
        this._registrosAnuncio = value;
    }
    public get registrosRevista(): TablaReporteGananciaRevistaBean[] {
        return this._registrosRevista;
    }
    public set registrosRevista(value: TablaReporteGananciaRevistaBean[]) {
        this._registrosRevista = value;
    }
    public get gananciaTotal(): number {
        return this._gananciaTotal;
    }
    public set gananciaTotal(value: number) {
        this._gananciaTotal = value;
    }
    public get gananciaTotalAnuncios(): number {
        return this._gananciaTotalAnuncios;
    }
    public set gananciaTotalAnuncios(value: number) {
        this._gananciaTotalAnuncios = value;
    }
    public get gananciaTotalRevistas(): number {
        return this._gananciaTotalRevistas;
    }
    public set gananciaTotalRevistas(value: number) {
        this._gananciaTotalRevistas = value;
    }
    constructor(
        private _gananciaTotalRevistas: number,
        private _gananciaTotalAnuncios: number,
        private _gananciaTotal: number,
        private _registrosRevista: TablaReporteGananciaRevistaBean[],
        private _registrosAnuncio: TablaReporteGananciaAnuncioBean[]
    ) { }
}