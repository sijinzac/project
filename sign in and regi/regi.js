function validateReg() {
  var a = document.forms["myReg"]["username"].value;
  var b = document.forms["myReg"]["pwrd"].value;
  var person = {user: a, pass: b};
  alert(a);
  //  alert("Successfully Registered");
    localStorage.setItem(person.user, JSON.stringify(person));
    return true;
}
