export class Carga{
    idCarga?: number;
    codigo: string;
    peso: string;
    caracteristicas: string;

    constructor(codigo: string, peso: string, caracteristicas: string) {
        this.codigo = codigo;
        this.peso = peso;
        this.caracteristicas = caracteristicas;
    }
}
