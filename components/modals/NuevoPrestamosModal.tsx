import { useState } from "react";
import Button from "../Tags/Button";
import InputWithLabel from "../Tags/InputWithLabel";
import ModalContainer from "./ModalContainer";
import { servicioAgregarNuevoPrestamo } from "@/services/prestamos/pretamos.servicios";
const initialValues = {
  nombreCliente: "",
  monto: null,
  tasaMV: 10,
};
export default function NuevoPrestamosModal({ onClose }: any) {
  const [data, setData] = useState(initialValues);
  const handleInputChange = (e: any) => {
    const target = e.target;
    setData({
      ...data,
      [target.name]: target.value,
    });
  };
  const handleRealizarPrestamo = (e: any) => {
    e.preventDefault();
    servicioAgregarNuevoPrestamo({
      nombreCliente: data.nombreCliente,
      monto: data.monto,
      tasaMV: data.tasaMV,
    });
  };
  return (
    <ModalContainer onClose={onClose}>
      <form
        onSubmit={(e) => handleRealizarPrestamo(e)}
        className="bg-white w-[600px] px-7 pb-10 pt-5 shadow-xl border"
      >
        <h2 className="text-2xl font-medium mb-10 text-center">
          Realizar nuevo prestamo
        </h2>
        <InputWithLabel
          required
          label="Nombre"
          placeholder="Ingrese su nombre"
          name="nombreCliente"
          value={data.nombreCliente}
          onChange={handleInputChange}
        />
        <br />
        <InputWithLabel
          required
          label="Monto a prestar"
          placeholder="Ingrese el monto"
          type="number"
          name="monto"
          value={data.monto}
          onChange={handleInputChange}
        />
        <br />
        <InputWithLabel
          required
          label="Tasa MV (%)"
          placeholder="Ingrese la tasa MV"
          type="number"
          name="tasaMV"
          value={data.tasaMV}
          onChange={handleInputChange}
        />
        <br />
        <Button text="Realizar prestamo" className="w-full" />
      </form>
    </ModalContainer>
  );
}
