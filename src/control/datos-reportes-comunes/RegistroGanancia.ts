export class RegistroGanancia {
    public get ganancia(): number {
        return this._ganancia;
    }
    public set ganancia(value: number) {
        this._ganancia = value;
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
        private _ganancia: number,
    ) { }
}