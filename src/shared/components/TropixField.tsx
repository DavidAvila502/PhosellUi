interface TropixFieldProps {
   id: string;
   textLabel?: string;
   type: React.HTMLInputTypeAttribute | undefined;
   value: string;
   onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
   width?: string;
   required?: boolean;
   placeHolder?: string;
}

const TropixField = ({
   id,
   textLabel,
   type,
   value,
   onChange = undefined,
   width,
   required = false,
   placeHolder,
}: TropixFieldProps) => {
   const finalWidth = width ? width : "w-[100%]";

   return (
      <div className={`flex flex-col ${finalWidth}`}>
         {textLabel && (
            <label htmlFor={id}>
               <span className="text-[18px] mb-[5px] text-gray-500">
                  {textLabel}
               </span>
               {required && <span className="text-red-400 font-bold"> *</span>}
            </label>
         )}

         <input
            id={id}
            name={id}
            type={type}
            value={value}
            placeholder={placeHolder}
            onChange={onChange}
            required={required}
            className="input w-full focus:outline-none text-xl 
               focus:border-blue-400 bg-gray-50 focus:bg-white p-5 
               transition-all duration-200"
         />
      </div>
   );
};

export default TropixField;
