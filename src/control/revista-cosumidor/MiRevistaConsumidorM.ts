export class MiRevistaConsumidorM {
    public get idRevista(): number {
        return this._idRevista;
    }
    public set idRevista(value: number) {
        this._idRevista = value;
    }
    public get etiquetas(): string[] {
        return this._etiquetas;
    }
    public set etiquetas(value: string[]) {
        this._etiquetas = value;
    }
    public get categorias(): string[] {
        return this._categorias;
    }
    public set categorias(value: string[]) {
        this._categorias = value;
    }
    public get fechaFinalizacion(): string {
        return this._fechaFinalizacion;
    }
    public set fechaFinalizacion(value: string) {
        this._fechaFinalizacion = value;
    }
    public get fechaSuscripcion(): string {
        return this._fechaSuscripcion;
    }
    public set fechaSuscripcion(value: string) {
        this._fechaSuscripcion = value;
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
        private _nombreRevista: string,
        private _autor: string,
        private _fechaSuscripcion: string,
        private _fechaFinalizacion: string,
        private _categorias: string[],
        private _etiquetas: string[],
        private _idRevista: number
    ) { }

}