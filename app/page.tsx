"use client";
import Button from "@/components/Tags/Button";
import TablaPrestamos from "@/components/containers/prestamos/TablaPrestamos";
import NuevoPrestamosModal from "@/components/modals/NuevoPrestamosModal";
import { servicioObtenerPrestamos } from "@/services/prestamos/pretamos.servicios";
import { useEffect, useState } from "react";
const loadingEnums ={
  LOADING: "LOADING",
  UNVALIDATE: "UNVALIDATE",
  LOADED: "LOADED"
}
export default function Home() {
  const [nuevoPrestamoModal, setNuevoPrestamoModal] = useState(false)
  const [prestamos, setPrestamos] = useState([])
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
      setLoading(loadingEnums.LOADED)
    })
  },[])
  return (
    <main className="min-h-screen w-full p-5 z-50">
      {/** Header */}
      <div className="flex justify-between items-center w-full border-b p-2">
        <h1 className="text-2xl font-semibold">Prestamos</h1>
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
