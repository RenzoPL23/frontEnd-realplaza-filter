

interface ITipoProducto {
    tipoProductoID: number,
    nombre: string
}
export interface IProducto {
    productoID: number,
    nombre: string,
    codigoProducto: string,
    stock: number,
    imagen: string,
    descripcion: string,
    precio: number,
    tipoProducto: ITipoProducto
}