import Image from "next/image";

export default function Sidebar() {
    return  <div className='w-[300px] bg-[#D9D7DE] border-r p-5 flex flex-col justify-between'>
    <Image src="/logo.svg" width={100} height={100} alt='logo' className='mx-auto'/>
   <div>
    <button className='flex items-center my-4'>
    <Image src="/logo.svg" width={48} height={48} alt='logo' className='mr-3'/>
    <span className='font-medium'>Prestamos</span>
    </button>

    <button className='flex items-center my-4'>
    <Image src="/logo.svg" width={48} height={48} alt='logo' className='mr-3'/>
    <span className='font-medium'>En mora</span>
    </button>

    <button className='flex items-center my-4'>
    <Image src="/logo.svg" width={48} height={48} alt='logo' className='mr-3'/>
    <span className='font-medium'>Clientes</span>
    </button>

    <button className='flex items-center my-4'>
    <Image src="/logo.svg" width={48} height={48} alt='logo' className='mr-3'/>
    <span className='font-medium'>Estadisticas</span>
    </button>
   </div>
   <div className='drop-shadow flex items-center'>
   <button>
   <Image src="/logo.svg" width={48} height={48} alt='logo' className='mr-3'/>
   </button>
    <span className='font-medium'>Breiner Lopez</span>
   </div>
  </div>
};
