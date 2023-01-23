import "./Styles/App.css";
import "./Styles/Filters.css";
import "./Styles/Pagination.css";

import IFiltro from "./Interfaces/Filtro";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useState } from "react";
import { IProducto } from "./Interfaces/Producto";
import { ListarProductos, Total_Productos } from "./Services/productos";
import { Producto } from "./Components/product/product";
import { Filtro } from "./Components/product/Filtro";
import { Pagination } from "./Components/product/Pagination";

const App = () => {
  const filtro = {} as IFiltro;
  const { register, getValues, reset, handleSubmit } = useForm({
    defaultValues: filtro,
  });

  const [productos, setProductos] = useState<IProducto[]>();
  const [updateDate, setUpdateData] = useState<boolean>(false);
  const [resetValue, setResetValue] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<Number>(1);
  const [pagination, setPagination] = useState<Number[]>([]);

  useEffect(() => {
    Total_Productos({
      PrecioInicial: Number(getValues("precioInicial")),
      PrecioFinal: Number(getValues("precioFinal")),
    }).then((response) => {
      if (response.data.status === 200) {
        const total = Math.ceil(response.data.data / 10);
        let pagiantionArray: Array<number> = [];

        for (let i: number = 0; i < total; i++) {
          pagiantionArray.push(i + 1);
        }
        setPagination(pagiantionArray);
      }
    });

    ListarProductos({
      Pagina: currentPage,
      Cantidad: 10,
      TipoFiltro: getValues("tipoFiltro"),
      PrecioInicial: Number(getValues("precioInicial")),
      PrecioFinal: Number(getValues("precioFinal")),
    }).then((response) => {
      if (response.data.status === 200) {
        setProductos(response.data.data);
      }
    });
  }, [updateDate]);

  const onSubmitFC = (data: IFiltro) => {
    setUpdateData(!updateDate);
  };
  const LimpiarFiltros = () => {
    filtro.precioInicial = 0;
    filtro.precioFinal = 300;
    filtro.tipoFiltro = "D";
    setCurrentPage(1);
    setResetValue(!resetValue);
    reset(filtro);
  };

  return (
    <div>
      <header>
        <Filtro
          handleSubmit={handleSubmit}
          register={register}
          onSubmitFC={onSubmitFC}
          LimpiarFiltros={LimpiarFiltros}
          resetValue={resetValue}
        />
      </header>
      <div className="container">
        <ul>
          <Pagination
            pagination={pagination}
            currentPage={currentPage}
            updateDate={updateDate}
            setCurrentPage={setCurrentPage}
            setUpdateData={setUpdateData}
          />
        </ul>
      </div>
      <div className="container">
        <div className="center">
          {productos !== undefined &&
            productos.map((item) => (
              <Producto key={item.productoID} {...item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;
