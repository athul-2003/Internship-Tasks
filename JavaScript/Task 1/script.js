function validateForm() {
  let valid = true;

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("ageError").textContent = "";
  document.getElementById("mobileError").textContent = "";
  document.getElementById("successMessage").style.display = "none";

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value.trim();
  const mobile = document.getElementById("mobile").value.trim();

  // Name validation
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  }

  // Email validation
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    valid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  }

  // Age validation
  if (age === "") {
    document.getElementById("ageError").textContent = "Age is required.";
    valid = false;
  } else if (isNaN(age) || age < 1 || age > 120) {
    document.getElementById("ageError").textContent =
      "Enter a valid age (1-120).";
    valid = false;
  }

  // Mobile validation (optional)
  if (mobile && !/^\d{10}$/.test(mobile)) {
    document.getElementById("mobileError").textContent =
      "Enter a valid 10-digit mobile number.";
    valid = false;
  }

  // Show success message if valid
  if (valid) {
    document.getElementById("successMessage").style.display = "block";
  }

  return false;
}
