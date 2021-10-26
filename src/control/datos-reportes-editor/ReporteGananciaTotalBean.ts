import { TablaReporteGananciaTotalBean } from "./TablaReporteGananciaTotalBean";

export class ReporteGananciaTotalBean {
    public get tablas(): TablaReporteGananciaTotalBean[] {
        return this._tablas;
    }
    public set tablas(value: TablaReporteGananciaTotalBean[]) {
        this._tablas = value;
    }
    public get gananciaTotal(): number {
        return this._gananciaTotal;
    }
    public set gananciaTotal(value: number) {
        this._gananciaTotal = value;
    }
    constructor(
        private _gananciaTotal: number,
        private _tablas: TablaReporteGananciaTotalBean[]
    ) { }
}