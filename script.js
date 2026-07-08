const form = document.getElementById("contactForm");
const loading = document.getElementById("loading");
const orderBtn = document.getElementById("orderBtn");

function sanitize(text) {
  const div = document.createElement("div");
  div.innerText = text;
  return div.innerHTML;
}

orderBtn.addEventListener("click", () => {
  console.log("[Analytics] User interacted with Static HTML Shell");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputs = form.querySelectorAll("input, textarea");
  let valid = true;

  inputs.forEach(input => {
    input.classList.remove("error");

    if (input.value.trim() === "") {
      valid = false;
      input.classList.add("error");
    }

    input.value = sanitize(input.value);
  });

  if (!valid) {
    alert("Please fill all fields.");
    return;
  }

  loading.classList.remove("hidden");

  setTimeout(() => {
    loading.classList.add("hidden");

    console.log("[Analytics] User interacted with Static HTML Shell");

    alert("Form submitted successfully.");

    form.reset();
  }, 2000);
});