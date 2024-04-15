import { database } from "@/utils/firebase";
import { ref, child, push, update, get } from "firebase/database";

interface Prestamos {
    nombreCliente: string,
    monto: any,
    tasaMV: any
}
export const servicioAgregarNuevoPrestamo = ({nombreCliente, monto, tasaMV} : Prestamos)=>{

    const montoIntereses = ( monto * tasaMV) / 100
    const montoTotal = Number(monto) + Number(montoIntereses)

  // A post entry.
   const postData = {
    nombreCliente,
    monto,
    tasaMV,
    montoIntereses,
    montoTotal,
    montoRestante: montoTotal,
    fechaCreacion: new Date(),
  };

  // Get a key for a new Post.
  const newPostKey = push(child(ref(database), 'prestamos')).key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = <any>{};
  updates['/prestamos/' + newPostKey] = postData;

  return update(ref(database), updates); 


}


export const servicioObtenerPrestamos =async()=>{
    const res = await get(ref(database, "prestamos"));
    if (res.exists()) {
      var allData: any = [];
      res.forEach((data) => {
        allData.push(data.val());
      });
      return allData
    }
    else{
        return []
    }
}