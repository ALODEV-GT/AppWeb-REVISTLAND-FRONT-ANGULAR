export class RegistroGananciaRevista {
    public get ganancia(): number {
        return this._ganancia;
    }
    public set ganancia(value: number) {
        this._ganancia = value;
    }
    public get costo(): number {
        return this._costo;
    }
    public set costo(value: number) {
        this._costo = value;
    }
    public get ingreso(): number {
        return this._ingreso;
    }
    public set ingreso(value: number) {
        this._ingreso = value;
    }
    public get fechaSuscripcion(): string {
        return this._fechaSuscripcion;
    }
    public set fechaSuscripcion(value: string) {
        this._fechaSuscripcion = value;
    }
    public get nombreUsuario(): string {
        return this._nombreUsuario;
    }
    public set nombreUsuario(value: string) {
        this._nombreUsuario = value;
    }
    constructor(
        private _nombreUsuario: string,
        private _fechaSuscripcion: string,
        private _ingreso: number,
        private _costo: number,
        private _ganancia: number
    ) { }
}