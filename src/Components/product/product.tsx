import { IProducto } from "./../../Interfaces/Producto";

export const Producto: React.FC<IProducto> = (item) => {
  return (
    <div className="Card">
      <img src={item.imagen} alt="img" />
      <div className="card-header">
        <div className="card-title">{item.nombre}</div>
        <div className="card-price"> S/. {item.precio}</div>
      </div>
      <div className="content">{item.descripcion}</div>
      <div className="content footer">
        stock: <b> {item.stock}</b>
      </div>
    </div>
  );
};

export default Producto;
