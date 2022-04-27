const btn = document.querySelector("#button");
const togglePassword = document.querySelector("#pwd");

btn.addEventListener("click", function () {
  if (togglePassword.type === "password") {
    togglePassword.type = "text";
    btn.innerText = "Hide Password";
  } else {
    togglePassword.type = "password";
    btn.innerText = "Show Password";
  }
});
