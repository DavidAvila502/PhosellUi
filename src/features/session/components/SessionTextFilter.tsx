interface SessionTextFilterProps {
   value: string;
   setValue: (param: string) => void;
}

const SessionTextFilter = ({ value, setValue }: SessionTextFilterProps) => {
   return (
      <input
         value={value}
         onChange={(e) => setValue(e.target.value)}
         className="border-1 border-blue-500 rounded-[10px] p-2
                           w-full outline-none mb-[10px] text-gray-500"
         placeholder="Nombre, ubicación, paquete, teléfono"
      ></input>
   );
};

export default SessionTextFilter;
