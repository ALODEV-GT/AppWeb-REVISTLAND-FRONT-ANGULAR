export class DatosRevista {
    public get nombreEditor(): string {
        return this._nombreEditor;
    }
    public set nombreEditor(value: string) {
        this._nombreEditor = value;
    }
    public get nombreRevista(): string {
        return this._nombreRevista;
    }
    public set nombreRevista(value: string) {
        this._nombreRevista = value;
    }
    constructor(
        private _nombreRevista: string,
        private _nombreEditor: string
    ) { }
}