const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")]

//returns int for step (no steps active returns -1, otherwise returns index of step)
let currentStep = formSteps.findIndex(step => {
    return step.classList.contains("active")
})



if(currentStep < 0) {
    currentStep = 0;
    formSteps[currentStep].classList.add("active")
}
