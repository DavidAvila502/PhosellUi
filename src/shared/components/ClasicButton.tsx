interface ClasicButtonProps {
   text: string;
   type: "submit" | "button";
   style?: string;
   isLoading?: boolean;
   color?: string;
   func?: (param?: any) => any;
}

const ClasicButton = ({
   text,
   style,
   color,
   isLoading,
   func,
   type,
}: ClasicButtonProps) => {
   let defaultStyles: string = "cursor-pointer text-white py-[9px]";

   function getColor() {
      if (isLoading) {
         return "bg-gray-500";
      }

      if (color) {
         return color;
      }

      return "bg-green-500";
   }

   return (
      <input
         onClick={
            func && !isLoading && type == "button" ? () => func() : undefined
         }
         type={type}
         value={text}
         className={`${defaultStyles} ${style} ${getColor()}`}
      />
   );
};
export default ClasicButton;
