import Input from "./../Shared/Input";
import IFiltro from "./../../Interfaces/Filtro";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import React from "react";

interface InputProps {
  handleSubmit: UseFormHandleSubmit<IFiltro>;
  register: UseFormRegister<IFiltro>;
  onSubmitFC: (data: IFiltro) => void;
  LimpiarFiltros: () => void;
  resetValue: boolean;
}

export const Filtro: React.FC<InputProps> = (props) => {
  return (
    <form onSubmit={props.handleSubmit(props.onSubmitFC)}>
      <div>
        <select className="select-box" {...props.register("tipoFiltro")}>
          <option value="D">Mayor a menor precio</option>
          <option value="A">Menor a mayor precio</option>
        </select>
      </div>
      <div>
        <Input
          label="precioInicial"
          title="Minimo"
          register={props.register}
          placeholder="Precio minimo"
          value={0}
          resetValue={props.resetValue}
        />
        <br />
        <Input
          label="precioFinal"
          title="Maximo"
          register={props.register}
          placeholder="Precio maximo"
          value={300}
          resetValue={props.resetValue}
        />
      </div>
      <div className="row">
        <button className="btn green" type="submit">Buscar</button>
        <button className="btn blue" onClick={() => props.LimpiarFiltros()}>limpiar</button>
      </div>
    </form>
  );
};
