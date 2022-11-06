let user = {
  userName: "",
  userAge: 0,
  gender: "",
};
document.getElementById("submitButton").onclick = function () {
  user.userName = document.getElementById("nameText").value;
  user.userAge = document.getElementById("age").value;
  user.gender = document.forms[0];
  let i;

  for (i = 0; i < user.gender.length; i++) {
    if (user.gender[i].checked) {
      user.gender = user.gender[i].value;
    }
  }
};
console.log(user);
