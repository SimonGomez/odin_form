function validateForm() {
    let password = document.forms["myform"]["password"].value;
    let confirm_password = document.forms["myform"]["confirm_password"].value;
    if (password != confirm_password) {
      alert("Password is not matching");
      return false;
    }
  }