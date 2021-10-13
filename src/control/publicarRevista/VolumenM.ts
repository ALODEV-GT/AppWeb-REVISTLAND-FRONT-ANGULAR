export class VolumenM{
    public get idArchivo(): number {
        return this._idArchivo;
    }
    public set idArchivo(value: number) {
        this._idArchivo = value;
    }
    public get fechaPublicacion(): string {
        return this._fechaPublicacion;
    }
    public set fechaPublicacion(value: string) {
        this._fechaPublicacion = value;
    }
    public get nombreVolumen(): string {
        return this._nombreVolumen;
    }
    public set nombreVolumen(value: string) {
        this._nombreVolumen = value;
    }
    public get idRevista(): number {
        return this._idRevista;
    }
    public set idRevista(value: number) {
        this._idRevista = value;
    }
    public get idVolumen(): number {
        return this._idVolumen;
    }
    public set idVolumen(value: number) {
        this._idVolumen = value;
    }
    constructor(
        private _idVolumen: number,
        private _idRevista: number,
        private _nombreVolumen: string,
        private _fechaPublicacion: string,
        private _idArchivo: number
    ){}
}