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
        <div className="flex items-center justify-center">
            {steps.map((step, index) => {
                const isCompleted = index < currentStep
                const isActive = index === currentStep

                const circleClasses = `w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
                    ${isActive || isCompleted ? "bg-blue-600 text-white" : ""}
                    ${
                        !isActive && !isCompleted
                            ? "bg-gray-200 text-gray-500"
                            : ""
                    }
                `

                const textClasses = `w-20 mt-2 text-sm font-semibold text-center
                    ${
                        isActive || isCompleted
                            ? "text-gray-700"
                            : "text-gray-400"
                    }
                `

                const lineClasses = `w-16 border-t-4 transition-colors duration-500 h-7 -ml-6 -mr-6
                    ${isCompleted ? "border-blue-600" : "border-gray-200"}
                `

                return (
                    <div key={step.title} className="flex items-center">
                        <div className="flex flex-col items-center">
                            <div className={circleClasses}>{index + 1}</div>
                            <p className={textClasses}>{step.title}</p>
                        </div>

                        {index < steps.length - 1 && (
                            <div className={lineClasses}></div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}
