export default function Button({onClick, text, className}:any) {
    return <button
    onClick={onClick}
    className={`font-medium bg-gray-800 px-5 py-3 text-gray-200 rounded-sm shadow-lg ${className}`}
  >
    {text}
  </button>
};
