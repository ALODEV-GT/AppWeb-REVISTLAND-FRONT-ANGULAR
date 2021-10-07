export class UsuarioM {
    public get idTipoCuenta(): number {
        return this._idTipoCuenta;
    }
    public set idTipoCuenta(value: number) {
        this._idTipoCuenta = value;
    }
    public get contrasena(): string {
        return this._contrasena;
    }
    public set contrasena(value: string) {
        this._contrasena = value;
    }
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    constructor(
        private _nombre: string,
        private _contrasena: string,
        private _idTipoCuenta: number,
    ) { }
    
}