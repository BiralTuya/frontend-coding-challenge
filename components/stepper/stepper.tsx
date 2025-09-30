interface StepperProps {
    currentStep: number
    totalSteps: number
    steps: Step[]
}

interface Step {
    title: string
}

export default function Stepper({ currentStep, steps }: StepperProps) {
    return (
        <div className="flex justify-between items-center w-full">
            {steps.map((step, index) => (
                <div key={step.title} className="text-center">
                    <p className="text-sm font-medium">{step.title}</p>
                </div>
            ))}
        </div>
    )
}
