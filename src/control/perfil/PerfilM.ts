import { CategoriaM } from './CategoriaM';
import { EtiquetaM } from './EtiquetaM';
import { FotoM } from './FotoM';
export class PerfilM {

    constructor(
        private _descripcion: string,
        private _hobbies: string,
        private _gustos: string,
        private _categorias: CategoriaM[],
        private _etiquetas: EtiquetaM[],
        private _foto: FotoM
    ) { }

    public get foto(): FotoM {
        return this._foto;
    }
    public set foto(value: FotoM) {
        this._foto = value;
    }
    public get etiquetas(): EtiquetaM[] {
        return this._etiquetas;
    }
    public set etiquetas(value: EtiquetaM[]) {
        this._etiquetas = value;
    }
    public get categorias(): CategoriaM[] {
        return this._categorias;
    }
    public set categorias(value: CategoriaM[]) {
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