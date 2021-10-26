export class RegistroComentario {
    public get fechaComentario(): string {
        return this._fechaComentario;
    }
    public set fechaComentario(value: string) {
        this._fechaComentario = value;
    }
    public get comentario(): string {
        return this._comentario;
    }
    public set comentario(value: string) {
        this._comentario = value;
    }
    public get nombreUsuario(): string {
        return this._nombreUsuario;
    }
    public set nombreUsuario(value: string) {
        this._nombreUsuario = value;
    }
    constructor(
        private _nombreUsuario: string,
        private _comentario: string,
        private _fechaComentario: string,
    ) { }
}