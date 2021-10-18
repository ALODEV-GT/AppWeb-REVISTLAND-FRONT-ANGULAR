export class PermitirM {
    public get idPublicacion(): number {
        return this._idPublicacion;
    }
    public set idPublicacion(value: number) {
        this._idPublicacion = value;
    }
    public get permitir(): boolean {
        return this._permitir;
    }
    public set permitir(value: boolean) {
        this._permitir = value;
    }
    public get idRevista(): number {
        return this._idRevista;
    }
    public set idRevista(value: number) {
        this._idRevista = value;
    }
    constructor(
        private _idRevista: number,
        private _permitir: boolean,
        private _idPublicacion: number,
    ) { }
}