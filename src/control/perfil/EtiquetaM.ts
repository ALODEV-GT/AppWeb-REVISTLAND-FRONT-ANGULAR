export class EtiquetaM {

    constructor(
        private _nombre: string
    ) { }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

}