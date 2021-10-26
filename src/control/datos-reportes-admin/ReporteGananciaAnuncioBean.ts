import { TablaReporteGananciaAnuncioBean } from "./TablaReporteGananciaAnuncioBean";

export class ReporteGananciaAnuncioBean {
    public get tablas(): TablaReporteGananciaAnuncioBean[] {
        return this._tablas;
    }
    public set tablas(value: TablaReporteGananciaAnuncioBean[]) {
        this._tablas = value;
    }
    public get gnanciaTotal(): number {
        return this._gnanciaTotal;
    }
    public set gnanciaTotal(value: number) {
        this._gnanciaTotal = value;
    }
    constructor(
        private _gnanciaTotal: number,
        private _tablas: TablaReporteGananciaAnuncioBean[]
    ) { }
}