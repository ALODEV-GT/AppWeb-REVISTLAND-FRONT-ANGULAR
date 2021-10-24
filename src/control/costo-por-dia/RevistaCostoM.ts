export class RevistaCostoM {
    public get idCostoPorDia(): number {
        return this._idCostoPorDia;
    }
    public set idCostoPorDia(value: number) {
        this._idCostoPorDia = value;
    }
    public get costo(): number {
        return this._costo;
    }
    public set costo(value: number) {
        this._costo = value;
    }
    public get editor(): string {
        return this._editor;
    }
    public set editor(value: string) {
        this._editor = value;
    }
    public get nombreRevista(): string {
        return this._nombreRevista;
    }
    public set nombreRevista(value: string) {
        this._nombreRevista = value;
    }
    public get fechaPublicacion(): string {
        return this._fechaPublicacion;
    }
    public set fechaPublicacion(value: string) {
        this._fechaPublicacion = value;
    }
    constructor(
        private _fechaPublicacion: string,
        private _nombreRevista: string,
        private _editor: string,
        private _costo: number,
        private _idCostoPorDia: number
    ) { }
}