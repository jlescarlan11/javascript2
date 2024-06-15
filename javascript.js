let userName = prompt("Whose there?", "");

if (userName === "Admin") {
  let password = prompt("What's the password?", "");

  if (password === "TheMaster") {
    alert("Welcomee");
  } else if (password === "" || password === null) {
    alert("Cancelled");
  } else {
    alert("Wrong Password");
  }
} else if (userName === "" || userName === null) {
  alert("Cancelled");
} else {
  alert("I don't know you");
}
