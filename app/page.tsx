"use client";
import Button from "@/components/Tags/Button";
import TablaPrestamos from "@/components/containers/prestamos/TablaPrestamos";
import NuevoPrestamosModal from "@/components/modals/NuevoPrestamosModal";
import { servicioObtenerPrestamos } from "@/services/prestamos/pretamos.servicios";
import { convertNumberToCurrency } from "@/utils/convertNumberToCurrency";
import { useEffect, useState } from "react";
const loadingEnums ={
  LOADING: "LOADING",
  UNVALIDATE: "UNVALIDATE",
  LOADED: "LOADED"
}
export default function Home() {
  const [nuevoPrestamoModal, setNuevoPrestamoModal] = useState(false)
  const [prestamos, setPrestamos] = useState([])
  const [gananciasPendientes, setGananciasPendientes] = useState(0)
  const [capitalPendiente, setCapitalPendiente] = useState(0)
  const [loading, setLoading] = useState(loadingEnums.UNVALIDATE)

  const handleNuevoPrestamo = ()=>{
    setNuevoPrestamoModal(true)
  }
  const handleCloseNuevoPrestamo = ()=>{
    setNuevoPrestamoModal(false)
  }
  useEffect(()=>{
    setLoading(loadingEnums.LOADING)
    servicioObtenerPrestamos().then((res:any)=>{
      setPrestamos(res)
      const newGanancias = res.map((item:any)=> item.montoIntereses).reduce((a:Number, b:Number) => Number(a) + Number(b), 0)
      const newCapital = res.map((item:any)=> item.monto).reduce((a:Number, b:Number) => Number(a) + Number(b), 0);
      console.log(newGanancias, newCapital)
      setGananciasPendientes(newGanancias)
      setCapitalPendiente(newCapital)
      setLoading(loadingEnums.LOADED)
    })
  },[])
  return (
    <main className="min-h-screen w-full p-5 pt-0 z-50">
      {/** Header */}
      <div className="flex justify-between items-center w-full border-b p-2">
        <h1 className="text-2xl font-semibold">Prestamos</h1>
        <div className="flex gap-5">
          <p className="font-medium">Capital pendiente: <strong>{convertNumberToCurrency(capitalPendiente)}</strong></p>
          <p className="font-medium">Ganacias pendientes: <strong>{convertNumberToCurrency(gananciasPendientes)}</strong></p>
        </div>
        <Button onClick={()=>handleNuevoPrestamo()} text="Nuevo prestamo" />
      </div>
      {/** Table */}
      <div>
     { loading === loadingEnums.LOADED && <TablaPrestamos data={prestamos} numerOfItems={1} />}
      </div>
      { nuevoPrestamoModal && <NuevoPrestamosModal onClose={handleCloseNuevoPrestamo} /> }
    </main>
  );
}
