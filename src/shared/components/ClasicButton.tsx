interface ClasicButtonProps {
   text: string;
   type: "submit" | "button";
   style?: string;
   isLoading?: boolean;
   color?: string;
   func?: (param?: any) => any;
}
const ClasicButton: React.FC<ClasicButtonProps> = ({
   text,
   style = "",
   color,
   isLoading = false,
   func,
   type = "button",
}) => {
   const base =
      "flex items-center justify-center gap-2 px-4 py-2 text-white rounded";

   const bgColor = isLoading ? "bg-gray-500" : color ? color : "bg-green-500";

   return (
      <button
         type={type}
         onClick={!isLoading && func ? func : undefined}
         disabled={isLoading}
         className={`${base} ${bgColor} ${style}`}
      >
         {isLoading && (
            <span className="loading loading-spinner loading-sm text-white"></span>
         )}

         <span>{isLoading ? "Cargando..." : text}</span>
      </button>
   );
};
export default ClasicButton;
