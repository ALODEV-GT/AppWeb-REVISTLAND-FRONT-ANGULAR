export class SuscripcionM {
    public get nombreUsuario(): string | undefined {
        return this._nombreUsuario;
    }
    public set nombreUsuario(value: string | undefined) {
        this._nombreUsuario = value;
    }
    public get vigente(): number {
        return this._vigente;
    }
    public set vigente(value: number) {
        this._vigente = value;
    }
    public get cuotaPorServicio(): number {
        return this._cuotaPorServicio;
    }
    public set cuotaPorServicio(value: number) {
        this._cuotaPorServicio = value;
    }
    public get gananciaEditor(): number {
        return this._gananciaEditor;
    }
    public set gananciaEditor(value: number) {
        this._gananciaEditor = value;
    }
    public get costoTotal(): number {
        return this._costoTotal;
    }
    public set costoTotal(value: number) {
        this._costoTotal = value;
    }    
    public get fechaFinalizacion(): string {
        return this._fechaFinalizacion;
    }
    public set fechaFinalizacion(value: string) {
        this._fechaFinalizacion = value;
    }
    public get fechaSuscripcion(): string {
        return this._fechaSuscripcion;
    }
    public set fechaSuscripcion(value: string) {
        this._fechaSuscripcion = value;
    }
    public get idRevista(): number {
        return this._idRevista;
    }
    public set idRevista(value: number) {
        this._idRevista = value;
    }
    public get idTipoPago(): number {
        return this._idTipoPago;
    }
    public set idTipoPago(value: number) {
        this._idTipoPago = value;
    }
    constructor(
        private _idTipoPago: number,
        private _idRevista: number,
        private _fechaSuscripcion: string,
        private _fechaFinalizacion: string,
        private _nombreUsuario: string | undefined,
        private _costoTotal: number,
        private _gananciaEditor: number,
        private _cuotaPorServicio: number,
        private _vigente: number
    ) { }
}