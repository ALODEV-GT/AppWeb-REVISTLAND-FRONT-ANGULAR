export class ComentarioM{
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
        private _comentario: string
    ){}
}