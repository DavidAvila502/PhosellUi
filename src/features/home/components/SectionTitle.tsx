interface SectionTitleProps {
   text: string;
   textColor?: string;
}

const SectionTitle = ({ text, textColor }: SectionTitleProps) => {
   const finalTextColor = textColor ? textColor : "text-blue-400";

   return (
      <p
         className={`text-center font-bold text-4xl mt-[20px] ${finalTextColor}`}
      >
         {text}
      </p>
   );
};

export default SectionTitle;
