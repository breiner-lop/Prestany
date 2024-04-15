export default function ModalContainer({children, onClose}:any) {
    return <div className="fixed bg-black/70 w-screen h-screen z-50 top-0 left-0 right-0 bottom-0">
        <button onClick={onClose} className="bg-white w-40 h-12 font-medium shadow-md right-5 top-5 absolute">Cancelar</button>
        <div className="flex justify-center items-center h-full">
        {children}
        </div>
    </div>
};
