import { FotoM } from './FotoM';
export class PerfilM {
    
    constructor(
        private _nombreUsuario: string,
        private _descripcion: string,
        private _hobbies: string,
        private _gustos: string,
        private _categorias: string[],
        private _etiquetas: string[],
        private _foto: FotoM
    ) { }

    public get nombreUsuario(): string {
        return this._nombreUsuario;
    }
    public set nombreUsuario(value: string) {
        this._nombreUsuario = value;
    }
    public get foto(): FotoM {
        return this._foto;
    }
    public set foto(value: FotoM) {
        this._foto = value;
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
    public get gustos(): string {
        return this._gustos;
    }
    public set gustos(value: string) {
        this._gustos = value;
    }
    public get hobbies(): string {
        return this._hobbies;
    }
    public set hobbies(value: string) {
        this._hobbies = value;
    }
    public get descripcion(): string {
        return this._descripcion;
    }
    public set descripcion(value: string) {
        this._descripcion = value;
    }
    
}