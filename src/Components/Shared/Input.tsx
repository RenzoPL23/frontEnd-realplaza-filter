import { Path, UseFormRegister } from "react-hook-form";
import IFiltro from "./../../Interfaces/Filtro";
import { useEffect, useState } from "react";

interface InputProps {
  label: Path<IFiltro>;
  register: UseFormRegister<IFiltro>;
  title: string;
  placeholder: string;
  value: number;
  resetValue: boolean;
}

const Input = ({
  label,
  title,
  placeholder,
  value,
  register,
  resetValue,
}: InputProps) => {
  const [deafultValue, setDeafultValue] = useState<Number>(value);

  useEffect(() => {
    setDeafultValue(value);
  }, [resetValue]);

  const handleChange = (event: any) => {
    setDeafultValue(event.target.value);
  };
  return (
    <>
      <label>
        {title} <b> S/. {String(deafultValue)} </b>
      </label>
      <input
        {...register(label)}
        type="range"
        min="0"
        max="300"
        onChange={(e) => handleChange(e)}
        value={String(deafultValue)}
        step="1"
      />
    </>
  );
};

export default Input;
