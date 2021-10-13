export class FotoM {
    public get contenido(): string | ArrayBuffer | null | undefined {
        return this._contenido;
    }
    public set contenido(value: string | ArrayBuffer | null | undefined) {
        this._contenido = value;
    }
    constructor(
        private _nombre: string,
        private _contenido: string | ArrayBuffer | null | undefined
    ) { }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

}