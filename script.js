const forms = [
    {
        obj: document.querySelector("#name"),
        pattern: /^[A-ZА-Я][a-zа-я'-]{1,49}$/
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

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const spans = document.querySelectorAll('span');
    spans.forEach(span => span.classList.add('hidden'));

    let isValid = true;
    forms.forEach(({ obj, pattern }) => {
        if (!validate(obj, pattern)) {
            obj.nextElementSibling.classList.remove('hidden');
            isValid = false;
        }
    });

    if (isValid) {
        const data = {
            name: forms[0].obj.value,
            message: forms[1].obj.value,
            phone: forms[2].obj.value,
            email: forms[3].obj.value
        };
        console.log("Form data submitted:", data);
    }
});

function validate(obj, pattern) {
    return pattern.test(obj.value);
}
