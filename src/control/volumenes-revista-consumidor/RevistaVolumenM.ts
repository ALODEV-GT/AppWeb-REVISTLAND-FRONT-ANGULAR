import { ComentarioM } from '../interacciones/ComentarioM';
import { VolumenM } from '../publicarRevista/VolumenM';

export class RevistaVolumenM {
    public get idRevista(): number {
        return this._idRevista;
    }
    public set idRevista(value: number) {
        this._idRevista = value;
    }
    public get idPublicacion(): number {
        return this._idPublicacion;
    }
    public set idPublicacion(value: number) {
        this._idPublicacion = value;
    }
    public get comentarios(): ComentarioM[] {
        return this._comentarios;
    }
    public set comentarios(value: ComentarioM[]) {
        this._comentarios = value;
    }
    public get numMeGustas(): number {
        return this._numMeGustas;
    }
    public set numMeGustas(value: number) {
        this._numMeGustas = value;
    }
    public get numComentarios(): number {
        return this._numComentarios;
    }
    public set numComentarios(value: number) {
        this._numComentarios = value;
    }
    public get volumenes(): VolumenM[] {
        return this._volumenes;
    }
    public set volumenes(value: VolumenM[]) {
        this._volumenes = value;
    }
    public get nombreRevista(): string {
        return this._nombreRevista;
    }
    public set nombreRevista(value: string) {
        this._nombreRevista = value;
    }
    constructor(
        private _idPublicacion: number,
        private _nombreRevista: string,
        private _volumenes: VolumenM[],
        private _numComentarios: number,
        private _numMeGustas: number,
        private _comentarios: ComentarioM[],
        private _idRevista: number
    ) { }

}