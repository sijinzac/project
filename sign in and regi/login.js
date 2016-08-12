function validateLogin() {
  var a = document.forms["myLogin"]["username"].value;
  var b = document.forms["myLogin"]["pwrd"].value;
  var c = localStorage.getItem(a);
  //var d = {user:"" , pass:"" };
  var  d = JSON.parse(c);

  if ((a == d["user"]) && (b == d["pass"])) {
    document.getElementById('welcomeMessage').innerHTML = "Welcome " + d["user"] + "!";
    alert(d["user"]);
    return true;
  }
  else {
    document.getElementById('welcomeMessage').innerHTML = "Invalid Log-in!";
    alert("Wrong Input");
    return false;
  }
}

// Store
//localStorage.setItem("lastname", "Smith");
// Retrieve
//document.getElementById("result").innerHTML = localStorage.getItem("lastname");

//localStorage.clear();
