import { useState } from "react"
import { steps } from "../components/stepper/steps"

export default function useStepper() {
    const [currentStep, setCurrentStep] = useState<number>(0)
    const totalSteps = steps.length

    function handleNextStep() {
        setCurrentStep((prev) => {
            if (prev < totalSteps - 1) {
                return prev + 1
            }
            return prev
        })
    }
	function isLastStep() {
		return currentStep === totalSteps - 1;
	}

    return { currentStep, handleNextStep, steps, totalSteps, isLastStep }
}
