export class RevistaM {
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
    public get permitirSuscripciones(): number {
        return this._permitirSuscripciones;
    }
    public set permitirSuscripciones(value: number) {
        this._permitirSuscripciones = value;
    }
    public get esInteractiva(): number {
        return this._esInteractiva;
    }
    public set esInteractiva(value: number) {
        this._esInteractiva = value;
    }
    public get costoAnio(): number {
        return this._costoAnio;
    }
    public set costoAnio(value: number) {
        this._costoAnio = value;
    }
    public get costoMes(): number {
        return this._costoMes;
    }
    public set costoMes(value: number) {
        this._costoMes = value;
    }
    public get descripcion(): string {
        return this._descripcion;
    }
    public set descripcion(value: string) {
        this._descripcion = value;
    }
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    public get idRevista(): number {
        return this._idRevista;
    }
    public set idRevista(value: number) {
        this._idRevista = value;
    }

    constructor(
        private _idRevista: number,
        private _nombre: string,
        private _descripcion: string,
        private _costoMes: number,
        private _costoAnio: number,
        private _esInteractiva: number,
        private _permitirSuscripciones: number,
        private _categorias: string[],
        private _etiquetas: string[],
    ) { }
}