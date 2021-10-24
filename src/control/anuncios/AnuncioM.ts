export class AnuncioM {
    public get idAnuncio(): number | undefined {
        return this._idAnuncio;
    }
    public set idAnuncio(value: number | undefined) {
        this._idAnuncio = value;
    }
    public get idLinkVideo(): number | undefined {
        return this._idLinkVideo;
    }
    public set idLinkVideo(value: number | undefined) {
        this._idLinkVideo = value;
    }
    public get idArchivo(): number | undefined {
        return this._idArchivo;
    }
    public set idArchivo(value: number | undefined) {
        this._idArchivo = value;
    }
    public get idTextoAnuncio(): number | undefined {
        return this._idTextoAnuncio;
    }
    public set idTextoAnuncio(value: number | undefined) {
        this._idTextoAnuncio = value;
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
    public get cantidadDias(): number {
        return this._cantidadDias;
    }
    public set cantidadDias(value: number) {
        this._cantidadDias = value;
    }
    public get fechaCompra(): string {
        return this._fechaCompra;
    }
    public set fechaCompra(value: string) {
        this._fechaCompra = value;
    }
    public get nombreAnunciante(): string {
        return this._nombreAnunciante;
    }
    public set nombreAnunciante(value: string) {
        this._nombreAnunciante = value;
    }
    public get idTipoAnuncio(): number {
        return this._idTipoAnuncio;
    }
    public set idTipoAnuncio(value: number) {
        this._idTipoAnuncio = value;
    }

    constructor(
        private _idTipoAnuncio: number,
        private _nombreAnunciante: string,
        private _fechaCompra: string,
        private _cantidadDias: number,
        private _categorias: string[],
        private _etiquetas: string[],
        private _idTextoAnuncio?: number | undefined,
        private _idArchivo?: number | undefined,
        private _idLinkVideo?: number | undefined,
        private _idAnuncio?: number | undefined
    ) { }

}