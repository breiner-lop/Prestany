import Button from "@/components/Tags/Button";
import { convertNumberToCurrency } from "@/utils/convertNumberToCurrency";
import { useState, useMemo, useEffect } from "react";
const columns =[
    {
        type: "string",
        field: "item",
        nombreColumna: "Item"
    },
    {
        type: "string",
        field: "nombreCliente",
        nombreColumna: "Nombre"
    },
    {
        type: "number",
        field: "monto",
        nombreColumna: "Monto"
    },
    {
        type: "number",
        field: "montoIntereses",
        nombreColumna: "Monto intereses"
    },
    {
        type: "number",
        field: "montoTotal",
        nombreColumna: "Monto total"
    },
    {
        type: "string",
        field: "tasaMV",
        nombreColumna: "Tasa MV (%)"
    },
    {
        type: "number",
        field: "montoRestante",
        nombreColumna: "Monto restante"
    },
    {
        type: "string",
        field: "options",
        nombreColumna: "Opciones"
    }
]
const TablaPrestamos = ({data, numerOfItems=0}:any) => {
    console.log("ffhbddhf")
  const [rowsLimit] = useState(10);
  const [rowsToShow, setRowsToShow] = useState([]);
  const [customPagination, setCustomPagination] = useState([]);
  const [totalPage] = useState(
    Math.ceil(data?.length / rowsLimit)
  );
  const [currentPage, setCurrentPage] = useState(0);
  const nextPage = () => {
    const startIndex = rowsLimit * (currentPage + 1);
    const endIndex = startIndex + rowsLimit;
    const newArray = data.slice(startIndex, endIndex);
    setRowsToShow(newArray);
    setCurrentPage(currentPage + 1);
  };
  const changePage = (value:any) => {
    const startIndex = value * rowsLimit;
    const endIndex = startIndex + rowsLimit;
    const newArray = data.slice(startIndex, endIndex);
    setRowsToShow(newArray);
    setCurrentPage(value);
  };
  const previousPage = () => {
    const startIndex = (currentPage - 1) * rowsLimit;
    const endIndex = startIndex + rowsLimit;
    const newArray = data.slice(startIndex, endIndex);
    setRowsToShow(newArray);
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(0);
    }
  };
  const  deleteLab =(id:any)=>{
    console.log("delete")
  }
  const cellRenderer = ({field, value, type, index}:any)=>{
    const optionsComponent = <div className="flex gap-2 items-center">
    <Button
     text="Abonar"
      className=" bg-gray-800 hover:bg-gray-900 text-white"
    />
    <Button
    onClick={()=>deleteLab(20)}
      text="Delete"
      className=" bg-red-500 hover:bg-red-600"
    />
  </div>
if(field === "item"){
    return index + 1
}
else if (field === "options"){
    return optionsComponent
}
else{
    const valueToReturn = type === "number" ? convertNumberToCurrency(Number(value)) : value
    return valueToReturn
}
  }
  useMemo(() => {
    //@ts-ignore
    setCustomPagination(Array(Math.ceil(data?.length / rowsLimit)).fill("null"));
  }, [data]);
  useEffect(()=>{
    setRowsToShow(data.slice(0, rowsLimit))
  },[numerOfItems])
  return (
      <div className="w-full">
        <div className="w-full min-h-[70vh] overflow-x-scroll md:overflow-auto  max-w-7xl 2xl:max-w-none mt-2">
          <table className="table-auto overflow-scroll md:overflow-auto w-full text-left font-inter border ">
            <thead className="rounded-lg text-base text-white font-semibold w-full">
              <tr className="bg-[#222E3A]/[6%]">
                {
                    columns.map((columna)=>{
                        return <th className="py-3 px-3 text-[#212B36] sm:text-base font-bold whitespace-nowrap">
                       {columna.nombreColumna}
                      </th>
                    })
                }
              </tr>
            </thead>
            <tbody>
              { data.length ?
              rowsToShow?.map((item: any, index:number) => (
                <tr className="border-b">
                    {
                        columns.map((columna)=>{
                            return <th className="py-3 px-3 text-[#212B36] sm:text-base font-medium whitespace-nowrap">
                                
                           {
                            cellRenderer({field: columna.field, value: item[columna.field], type: columna.type, index})
                           }
                          </th>
                        })
                    }
                </tr>
                
              )):
              <div className="">
                <p className="text-lg font-medium">No hay prestamos aun</p>
              </div>
            }
            </tbody>
          </table>
        </div>
        <div className="w-full  flex justify-center sm:justify-between flex-col sm:flex-row gap-5 mt-1.5 px-1 items-center">
          <div className="text-lg">
            Showing {currentPage == 0 ? 1 : currentPage * rowsLimit + 1} to{" "}
            {currentPage == totalPage - 1
              ? data?.length
              : (currentPage + 1) * rowsLimit}{" "}
            of {data?.length} entries
          </div>
          <div className="flex">
            <ul
              className="flex justify-center items-center gap-x-[10px] z-30"
              role="navigation"
              aria-label="Pagination"
            >
              <li
                className={` prev-btn flex items-center justify-center w-[36px] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB] disabled] ${
                  currentPage == 0
                    ? "bg-[#cccccc] pointer-events-none"
                    : " cursor-pointer"
                }
  `}
                onClick={previousPage}
              >
                <img src="https://www.tailwindtap.com/assets/travelagency-admin/leftarrow.svg" />
              </li>
              {customPagination?.map((data, index) => (
                <li
                  className={`flex items-center justify-center w-[36px] rounded-[6px] h-[34px] border-[1px] border-solid border-[2px] bg-[#FFFFFF] cursor-pointer ${
                    currentPage == index
                      ? "text-blue-600  border-sky-500"
                      : "border-[#E4E4EB] "
                  }`}
                  onClick={() => changePage(index)}
                  key={index}
                >
                  {index + 1}
                </li>
              ))}
              <li
                className={`flex items-center justify-center w-[36px] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB] ${
                  currentPage == totalPage - 1
                    ? "bg-[#cccccc] pointer-events-none"
                    : " cursor-pointer"
                }`}
                onClick={nextPage}
              >
                <img src="https://www.tailwindtap.com/assets/travelagency-admin/rightarrow.svg" />
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};
export default TablaPrestamos;
