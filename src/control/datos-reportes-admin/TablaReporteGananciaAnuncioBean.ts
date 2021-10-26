import { RegistroGananciaAnuncio } from "./RegistroGananciaAnuncio";

export class TablaReporteGananciaAnuncioBean {
    public get registros(): RegistroGananciaAnuncio[] {
        return this._registros;
    }
    public set registros(value: RegistroGananciaAnuncio[]) {
        this._registros = value;
    }
    public get numAnuncios(): number {
        return this._numAnuncios;
    }
    public set numAnuncios(value: number) {
        this._numAnuncios = value;
    }
    public get gananciaTotal(): number {
        return this._gananciaTotal;
    }
    public set gananciaTotal(value: number) {
        this._gananciaTotal = value;
    }
    public get nombreAnunciante(): string {
        return this._nombreAnunciante;
    }
    public set nombreAnunciante(value: string) {
        this._nombreAnunciante = value;
    }
    constructor(
        private _nombreAnunciante: string,
        private _gananciaTotal: number,
        private _numAnuncios: number,
        private _registros: RegistroGananciaAnuncio[]
    ) { }
}