export class RecomendacionM {
    public get fechaPublicacion(): string {
        return this._fechaPublicacion;
    }
    public set fechaPublicacion(value: string) {
        this._fechaPublicacion = value;
    }
    public get idRevista(): number {
        return this._idRevista;
    }
    public set idRevista(value: number) {
        this._idRevista = value;
    } 
    public get numLike(): number {
        return this._numLike;
    }
    public set numLike(value: number) {
        this._numLike = value;
    }
    public get numComentarios(): number {
        return this._numComentarios;
    }
    public set numComentarios(value: number) {
        this._numComentarios = value;
    }
    public get precioAnual(): number {
        return this._precioAnual;
    }
    public set precioAnual(value: number) {
        this._precioAnual = value;
    }
    public get precioMensual(): number {
        return this._precioMensual;
    }
    public set precioMensual(value: number) {
        this._precioMensual = value;
    }
    public get autor(): string {
        return this._autor;
    }
    public set autor(value: string) {
        this._autor = value;
    }
    public get nombreRevista(): string {
        return this._nombreRevista;
    }
    public set nombreRevista(value: string) {
        this._nombreRevista = value;
    }

    constructor(
        private _idRevista: number,
        private _nombreRevista: string,
        private _autor: string,
        private _precioMensual: number,
        private _precioAnual: number,
        private _numComentarios: number,
        private _numLike: number,
        private _fechaPublicacion: string
    ) { }
}