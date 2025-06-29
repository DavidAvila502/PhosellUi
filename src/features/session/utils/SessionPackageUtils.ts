export const splitBenefits = (benefits: string): string[] => {
   let splitedBenefits: string[] = benefits.split("-");
   splitedBenefits = splitedBenefits.slice(1);
   return splitedBenefits;
};
