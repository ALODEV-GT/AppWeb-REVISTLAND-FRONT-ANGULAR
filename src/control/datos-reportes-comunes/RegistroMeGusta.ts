export class RegistroMeGusta {
    public get fechaMeGusta(): string {
        return this._fechaMeGusta;
    }
    public set fechaMeGusta(value: string) {
        this._fechaMeGusta = value;
    }
    public get nombreUsuario(): string {
        return this._nombreUsuario;
    }
    public set nombreUsuario(value: string) {
        this._nombreUsuario = value;
    }
    constructor(
        private _nombreUsuario: string,
        private _fechaMeGusta: string
    ) { }
}