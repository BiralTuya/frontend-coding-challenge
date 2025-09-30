
import "@testing-library/jest-dom"
import React from "react"
import { render, screen } from "@testing-library/react"

import Stepper from "../../../components/stepper/stepper"

const mockSteps = [
    { title: "Service" },
    { title: "Termin" },
    { title: "Fahrzeug" },
    { title: "Kontakt" },
]

describe("Stepper Component", () => {
    test("should render all step titles", () => {
        render(
            <Stepper
                currentStep={0}
                steps={mockSteps}
                totalSteps={mockSteps.length}
            />
        )

        mockSteps.forEach((step) => {
            expect(screen.getByText(step.title)).toBeInTheDocument()
        })
    })

    test("should correctly identify the active step", () => {
        const currentStepIndex = 1
        render(
            <Stepper
                currentStep={currentStepIndex}
                steps={mockSteps}
                totalSteps={mockSteps.length}
            />
        )

        const activeStep = screen.getByText(currentStepIndex + 1)
        expect(activeStep).toHaveAttribute("aria-current", "step")

        const inactiveStep = screen.getByText(currentStepIndex + 2)
        expect(inactiveStep).not.toHaveAttribute("aria-current", "step")
    })

    test("should have the first step as active by default", () => {
        render(
            <Stepper
                currentStep={0}
                steps={mockSteps}
                totalSteps={mockSteps.length}
            />
        )

        const firstStep = screen.getByText("1")
        expect(firstStep).toHaveAttribute("aria-current", "step")
    })
})
