export class RegistroGananciaAnuncio {
    public get ganancia(): number {
        return this._ganancia;
    }
    public set ganancia(value: number) {
        this._ganancia = value;
    }
    public get numDias(): number {
        return this._numDias;
    }
    public set numDias(value: number) {
        this._numDias = value;
    }
    public get precioPorDia(): number {
        return this._precioPorDia;
    }
    public set precioPorDia(value: number) {
        this._precioPorDia = value;
    }
    public get tipoAnuncio(): string {
        return this._tipoAnuncio;
    }
    public set tipoAnuncio(value: string) {
        this._tipoAnuncio = value;
    }
    public get fichaCompra(): string {
        return this._fichaCompra;
    }
    public set fichaCompra(value: string) {
        this._fichaCompra = value;
    }
    constructor(
        private _fichaCompra: string,
        private _tipoAnuncio: string,
        private _precioPorDia: number,
        private _numDias: number,
        private _ganancia: number
    ) { }
}