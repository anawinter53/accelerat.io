const multiStepForm = document.querySelector("[data-multi-step]")
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")]

//returns int for step (no steps active returns -1, otherwise returns index of step)
let currentStep = formSteps.findIndex(step => {
    return step.classList.contains("active")
})

if (currentStep < 0) {
    currentStep = 0;
    showCurrentStep()
}

multiStepForm.addEventListener("click", e => {
    e.preventDefault()

    let incrementor
    if (e.target.matches("[data-next]")) {
        incrementor = 1
    } else if (e.target.matches("[data-previous]")) {
        incrementor = -1
    } 

    console.log(currentStep)

    if(incrementor == null) return;

    const inputs = [...formSteps[currentStep].querySelectorAll('input')]
    const allValid = inputs.every(input => input.reportValidity())
    
    if (allValid) {
        currentStep += incrementor;
        showCurrentStep();
    }
})

function showCurrentStep() {
    formSteps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep)
    })
}


