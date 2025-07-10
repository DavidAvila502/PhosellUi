import React from "react";

export interface TropixFieldProps
   extends React.InputHTMLAttributes<HTMLInputElement> {
   textLabel?: string;
   width?: string;
   isthereError?: string | null;
}

const TropixField: React.FC<TropixFieldProps> = ({
   id,
   textLabel,
   width = "w-full",
   required = false,
   isthereError,

   className: extraClassName,
   style: extraStyle,
   ...restProps
}) => {
   const defaultClasses =
      "input w-full p-4 text-xl bg-gray-50 transition-all duration-200 focus:outline-none focus:border-blue-400 focus:bg-white";
   const mergedClassName = `${defaultClasses} ${extraClassName || ""}`.trim();

   return (
      <div className={`flex flex-col ${width}`}>
         {textLabel && (
            <label htmlFor={id} className="flex mb-1">
               <span className="text-lg text-gray-500">{textLabel}</span>
               {required && <span className="ml-1 text-red-500">*</span>}
            </label>
         )}

         <input
            id={id}
            name={id}
            required={required}
            className={mergedClassName}
            style={extraStyle}
            {...restProps}
         />
         <p className="text-red-400">{isthereError ? isthereError : ""}</p>
      </div>
   );
};

export default TropixField;
