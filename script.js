const height = document.querySelector("#height");
const heightUnit = document.querySelector("#heightUnit");

const inches = document.querySelector("#inches");
const inchField = document.querySelector("#inchField");

const weight = document.querySelector("#weight");
const weightUnit = document.querySelector("#weightUnit");

const range = document.querySelector("#range");
const show = document.querySelector("#show");
const category = document.querySelector("#category");

const find = document.querySelector("#find");
const error = document.querySelector("#error");


heightUnit.addEventListener("change", () => {

    if (heightUnit.value === "ft") {

        inchField.style.display = "block";

    } else {

        inchField.style.display = "none";
        inches.value = "";

    }

});


find.addEventListener("click", () => {

    let heightValue = parseFloat(height.value);
    let weightValue = parseFloat(weight.value);

    // Reset error
    error.textContent = "";


    if (
        isNaN(heightValue) ||
        isNaN(weightValue) ||
        heightValue <= 0 ||
        weightValue <= 0
    ) {

        error.textContent = "Please enter valid height and weight.";
        return;

    }

    let heightInMeters;


    if (heightUnit.value === "m") {

        // Already meters
        heightInMeters = heightValue;

    }

    else if (heightUnit.value === "cm") {

        // Centimeters → meters
        heightInMeters = heightValue / 100;

    }

    else if (heightUnit.value === "ft") {

        // Feet + inches → meters

        let inchValue = parseFloat(inches.value) || 0;

        if (inchValue < 0 || inchValue >= 12) {

            error.textContent =
                "Inches should be between 0 and 11.99.";

            return;

        }

        let totalInches =
            (heightValue * 12) + inchValue;

        heightInMeters =
            totalInches * 0.0254;

    }

    let weightInKg;


    if (weightUnit.value === "kg") {

        weightInKg = weightValue;

    }

    else if (weightUnit.value === "lb") {

        // Pounds → kilograms
        weightInKg = weightValue * 0.45359237;

    }


    const bmi =
        weightInKg / (heightInMeters * heightInMeters);


    const bmiValue = bmi.toFixed(2);

    show.textContent = bmiValue;

    range.value = Math.min(
        Math.max(bmi, 5),
        50
    );

    if (bmi < 18.5) {

        category.textContent = "Underweight";
        category.className = "category underweight-bg";

    }

    else if (bmi < 25) {

        category.textContent = "Normal Weight";
        category.className = "category normal-bg";

    }

    else if (bmi < 30) {

        category.textContent = "Overweight";
        category.className = "category overweight-bg";

    }

    else {

        category.textContent = "Obese";
        category.className = "category obese-bg";

    }

});

