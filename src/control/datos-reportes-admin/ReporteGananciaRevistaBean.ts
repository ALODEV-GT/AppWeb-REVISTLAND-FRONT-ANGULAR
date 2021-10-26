import { TablaReporteGananciaRevistaBean } from './TablaReporteGananciaRevistaBean';
export class ReporteGananciaRevistaBean {
    public get tabla(): TablaReporteGananciaRevistaBean[] {
        return this._tabla;
    }
    public set tabla(value: TablaReporteGananciaRevistaBean[]) {
        this._tabla = value;
    }
    public get gananciaTotal(): number {
        return this._gananciaTotal;
    }
    public set gananciaTotal(value: number) {
        this._gananciaTotal = value;
    }
    public get costoTotal(): number {
        return this._costoTotal;
    }
    public set costoTotal(value: number) {
        this._costoTotal = value;
    }
    public get ingresoTotal(): number {
        return this._ingresoTotal;
    }
    public set ingresoTotal(value: number) {
        this._ingresoTotal = value;
    }
    constructor(
        private _ingresoTotal: number,
        private _costoTotal: number,
        private _gananciaTotal: number,
        private _tabla: TablaReporteGananciaRevistaBean[]
    ) { }
}