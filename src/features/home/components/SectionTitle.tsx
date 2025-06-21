interface SectionTitleProps {
   text: string;
}

const SectionTitle = ({ text }: SectionTitleProps) => {
   return (
      <p className="text-blue-400 text-center font-bold text-4xl mt-[20px]">
         {text}
      </p>
   );
};

export default SectionTitle;
