import { useStepsScrollSpy } from "../hooks/useStepsScrollSpy";

interface StepsIndicatorProps {
   stepList: string[];
}

const StepsIndicator = ({ stepList }: StepsIndicatorProps) => {
   const { allActiveSteps } = useStepsScrollSpy({
      containerSelector: "#register-reserve-body",
      stepSelector: ".step-section",
      threshold: 0.6,
      stepList: stepList,
   });

   return (
      <ul className="steps text-xl">
         {stepList.map((step, index) => (
            <li
               key={index}
               className={`step text-white ${
                  allActiveSteps.includes(step) ? "step-primary" : ""
               }`}
            >
               {step}
            </li>
         ))}
      </ul>
   );
};

export default StepsIndicator;
