export class PublicacionM {
    public get nombreUsuario(): string | undefined {
        return this._nombreUsuario;
    }
    public set nombreUsuario(value: string | undefined) {
        this._nombreUsuario = value;
    }
    public get idRevista(): number {
        return this._idRevista;
    }
    public set idRevista(value: number) {
        this._idRevista = value;
    }
    public get fechaPublicacion(): string {
        return this._fechaPublicacion;
    }
    public set fechaPublicacion(value: string) {
        this._fechaPublicacion = value;
    }
    public get idPublicacion(): number {
        return this._idPublicacion;
    }
    public set idPublicacion(value: number) {
        this._idPublicacion = value;
    }
    constructor(
        private _idPublicacion: number,
        private _fechaPublicacion: string,
        private _idRevista: number,
        private _nombreUsuario: string | undefined
    ) { }
}