import { DatosRevista } from "../datos-reportes-comunes/DatosRevista";
import { RegistroComentario } from "../datos-reportes-comunes/RegistroComentario";

export class ReporteComentariosBean {
    public get comentarios(): RegistroComentario[] {
        return this._comentarios;
    }
    public set comentarios(value: RegistroComentario[]) {
        this._comentarios = value;
    }
    public get numComentarios(): number {
        return this._numComentarios;
    }
    public set numComentarios(value: number) {
        this._numComentarios = value;
    }
    public get datosRevista(): DatosRevista {
        return this._datosRevista;
    }
    public set datosRevista(value: DatosRevista) {
        this._datosRevista = value;
    }
    constructor(
        private _datosRevista: DatosRevista,
        private _numComentarios: number,
        private _comentarios: RegistroComentario[]
    ) { }
}