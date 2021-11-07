// var nameRule = /^[a-zA-Z\s]{3,20}(?:[a-zA-z]{3})$/gim;
// if (!nameRule.test($("#name").val())) {
//   var r = "Name not Valid, Name should be letters only & at least 3 ";
//   $("#nm").text(r);
// } else {
//     $("#nm").empty();

// }
//name
document.getElementById("name").onblur = () => {
  var nameRule = /^[a-zA-Z\s]{3,20}(?:[a-zA-z]{3})$/gim;
  if (nameRule.test($("#name").val())) {
    $("#nm").text(" ");
  } else {
    var nameError1 =
      "Name not Valid, Name should be letters only & at least 3 ";
    $("#nm").text(nameError1);
  }
};
document.getElementById("email").onblur = () => {
  var emailRule = /^[a-zA-Z0-9\.]{1,}\@[a-zA-Z0-9]{2,}\.[a-zA-Z]{2,}$/gim;
  if (emailRule.test($("#email").val())) {
    $("#em").text(" ");
  } else {
    var nameError2 = "Email not Valid";
    $("#em").text(nameError2);
  }
};
document.getElementById("pswd").onblur = () => {
  var emailRule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  if (emailRule.test($("#pswd").val())) {
    $("#ps").text(" ");
  } else {
    var nameError = "Password must containt A, *, 0 at least 8 Char";
    $("#ps").text(nameError);
  }
};

document.getElementById("spc").onblur = () => {
  var nameRule = /^[a-zA-Z\s]{3,20}(?:[a-zA-z])$/gim;
  console.log(typeof nameRule.test($("#spc").val()));
  if (!nameRule.test($("#spc").val())) {
    console.log(nameRule.test($("#spc").val()));

    $("#sp").text(" ");
  } else {
    var nameError =
      "specialization not Valid, Name should be letters only & at least 3 ";
    $("#sp").text(nameError);
  }
};

document.getElementById("mob").onblur = () => {
  var nameRule = /^(010|011|012|015)[0-9]{8}$/;
  if (nameRule.test($("#mob").val())) {
    $("#mb").text(" ");
  } else {
    var nameError = "phone must be 11 number start with (010|011|012|015) ";
    $("#mb").text(nameError);
  }
};

//
let x = 0;
document.getElementById("list").onclick = function () {
  x = document.getElementById("list").selectedIndex;
  if (x == 1) {
    document.getElementById("spc").type = "text";
  } else {
    document.getElementById("spc").type = "hidden";
  }
};

function Save() {
  var name = $("#name").val();
  var email = $("#email").val();
  // var job = $("#Job").val();
  var pwd = $("#pswd").val();
  var userkind = $("#list").find(":selected").text();
  var radioValue = $("input[name='gender']:checked").val();
  var spc = $("#spc").val();
  var mobile = $("#mob").val();

  console.log(userkind + radioValue);
  // ,
  //     emailK: email,
  // pwdK:pwd,
  // specialization: spc,
  // mobile:mob
  var STData = {
    nameK: name,
    psd: pwd,
    emailK: email,
    mobileNum: mobile,
    kind: userkind,
    gender: radioValue,
  };
  var TechData = {
    nameK: name,
    psd: pwd,
    emailK: email,
    mobileNum: mobile,
    kind: userkind,
    special: spc,
    gender: radioValue,
  };
  if (userkind == "teacher") {
    // console.log("Iam Teacher");

    $.ajax({
      url: "https://conquerer-5410e.firebaseio.com/tachers.json",
      method: "POST",
      data: JSON.stringify(TechData),
      dataType: "JSON",
      contentType: "application/json; charset-utf-8",
      accepts: "application/json",
      success: function (TechData) {
        console.log("Done", TechData);
      },
      error: function () {
        console.log("Fail");
      },
    });
  } else if (userkind == "student") {
    // console.log("hahahahaha");
    $.ajax({
      url: "https://conquerer-5410e.firebaseio.com/Students.json",
      method: "POST",
      data: JSON.stringify(STData),
      dataType: "JSON",
      contentType: "application/json; charset-utf-8",
      accepts: "application/json",
      success: function (STData) {
        window.location.href = "http://127.0.0.1:5500/login.html";

        console.log("Done", STData);
      },
      error: function () {
        console.log("Fail");
      },
    });
  }
}

//create passed data as jason object
// $.ajax({
//   url: "https://conquerer-5410e.firebaseio.com/Students.json",
//   method: "POST",
//   data: JSON.stringify(data),
//   dataType: "JSON",
//   contentType: "application/json; charset-utf-8",
//   accepts: "application/json",
//   success: function (data) {
//     console.log("Done", data);
//   },
//   error: function () {
//     console.log("Fail");
//   },
// });
