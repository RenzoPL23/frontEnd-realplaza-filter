import React from "react";

interface pagination {
  pagination: Number[];
  currentPage: Number;
  updateDate: boolean;
  setCurrentPage: (value: React.SetStateAction<Number>) => void;
  setUpdateData: (value: React.SetStateAction<boolean>) => void;
}

export const Pagination:React.FC<pagination> = (props) => {
  return (
    <>
      <ul>
        {props.pagination.map((numero, key) => (
          <li
            key={key}
            className={props.currentPage === numero ? "link active" : "link"}
            onClick={(e) => {
              let pagina = Number(e.currentTarget.attributes[1].value);
              props.setCurrentPage(pagina);
              props.setUpdateData(!props.updateDate);
            }}
            value={String(numero)}
          >
            {String(numero)}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Pagination;
