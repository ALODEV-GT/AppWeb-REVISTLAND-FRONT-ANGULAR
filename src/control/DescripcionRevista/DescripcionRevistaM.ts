export class DescripcionRevistaM {
    public get descripcionRevista(): string {
        return this._descripcionRevista;
    }
    public set descripcionRevista(value: string) {
        this._descripcionRevista = value;
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
    public get nombreRevista(): string {
        return this._nombreRevista;
    }
    public set nombreRevista(value: string) {
        this._nombreRevista = value;
    }
    public get idRevista(): number {
        return this._idRevista;
    }
    public set idRevista(value: number) {
        this._idRevista = value;
    }

    constructor(
        private _idRevista: number,
        private _nombreRevista: string,
        private _categorias: string[],
        private _etiquetas: string[],
        private _autor: string,
        private _precioMensual: number,
        private _precioAnual: number,
        private _descripcionRevista: string
    ) {}


}