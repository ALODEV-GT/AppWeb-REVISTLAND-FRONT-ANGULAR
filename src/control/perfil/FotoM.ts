export class FotoM {

    constructor(
        private _nombre: string,
        private _contenido: string
    ) { }

    public get contenido(): string {
        return this._contenido;
    }

    public set contenido(value: string) {
        this._contenido = value;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = value;
    }

}