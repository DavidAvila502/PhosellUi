interface ClassicLabelFieldProps {
   id: string;
   name: string;
   type: React.HTMLInputTypeAttribute;
   value: string | number | readonly string[] | undefined;
   textLabel: string;
   required?: boolean;
   onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
   fieldStyle?: string;
   labelStyle?: string;
}

const ClassicLabelField = ({
   id,
   name,
   type,
   value,
   onChange = undefined,
   required = false,
   fieldStyle = "",
   labelStyle = "",
   textLabel,
}: ClassicLabelFieldProps) => {
   const labelBaseStyle = "text-black text-xl";

   const fieldBaseStyle = `text-gray-500 py-[2px] pl-[5px] text-xl border-solid border-1
        border-gray-400 rounded-[5px] w-full focus:outline-none focus:border-blue-600`;

   return (
      <>
         <label htmlFor={id} className={`${labelBaseStyle} ${labelStyle}`}>
            {textLabel}:
            {required ? <span className="text-red-500">*</span> : null}
         </label>
         <input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            className={`${fieldBaseStyle} ${fieldStyle}`}
         />
      </>
   );
};

export default ClassicLabelField;
