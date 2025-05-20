const forms = [
    {
        obj: document.querySelector("#name"),
        pattern: /^[A-ZА-ЯІЇЄҐ][a-zа-яіїєґ'-]{1,49}$/u
    },
    {
        obj: document.querySelector("#message"),
        pattern: /^.{5,}$/
    },
    {
        obj: document.querySelector("#tel"),
        pattern: /^\+380\d{9}$/
    },
    {
        obj: document.querySelector("#email"),
        pattern: /^[\w.-]+@[a-zA-Z\d-]+(\.[a-zA-Z\d-]+)+$/
    }
];

const form = document.querySelector("#contact-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const spans = document.querySelectorAll("span");
    spans.forEach(span => span.classList.add("hidden"));

    let isValid = true;

    forms.forEach(({ obj, pattern }) => {
        if (!pattern.test(obj.value.trim())) {
            obj.nextElementSibling.classList.remove("hidden");
            isValid = false;
        }
    });

    if (isValid) {
        const data = {
            name: document.querySelector("#name").value.trim(),
            message: document.querySelector("#message").value.trim(),
            phone: document.querySelector("#tel").value.trim(),
            email: document.querySelector("#email").value.trim()
        };
        console.log("Form submitted successfully:", data);
    }
});

function validate(obj, pattern) {
    return pattern.test(obj.value);
}
