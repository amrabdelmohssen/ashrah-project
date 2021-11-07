// let x = 0;
// document.getElementById("list").onclick = function () {
//   x = document.getElementById("list").selectedIndex;
//   if (x == 1) {
//     document.getElementById("spc").type = "text";
//   } else {
//     document.getElementById("spc").type = "hidden";
//   }
// };
var name = $("#name").val();
var pwd = $("#pswd").val();

function validateName(name) {
  //var nameRule = new RegExp();
  var nameRule = /^[a-zA-Z\s]{3,20}(?:[a-zA-z]{3})$/gim;
  if (nameRule.test(name)) return true;
  else {
    var nameError = new Error(
      "Name not Valid, Name should be letters only & at least 3 "
    );
    throw nameError;
  }
}

function validateEmail(email) {
  var emailRule = /^[a-zA-Z0-9\.]{1,}\@[a-zA-Z0-9]{2,}\.[a-zA-Z]{2,}$/gim;
  if (emailRule.test(email)) return true;
  else throw new Error("Email not Valid");
}

function validatePassword(password) {
  if (
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/gm.test(
      password
    )
  )
    return true;
  else throw new Error("Password must containt A, *, 0 at least 8 Char");
}

function validatePhone(phone) {
  if (/^(010|011|012|015)[0-9]{8}$/.test(phone)) return true;
  else throw new Error("phone must be 11 number start with (010|011|012|015)");
}

// function Save() {
//   var name = $("#name").val();
//   var email = $("#email").val();
// var job = $("#Job").val();
//   var pwd = $("#pswd").val();
//   var userkind = $("#list").find(":selected").text();
//   var radioValue = $("input[name='gender']:checked").val();
//   var spc = $("#spc").val();
//   var mobile = $("#mob").val();

//   console.log(userkind + radioValue);
//   // ,
//   //     emailK: email,
//   // pwdK:pwd,
//   // specialization: spc,
//   // mobile:mob
//   var STData = {
//     nameK: name,
//     psd: pwd,
//     emailK: email,
//     mobileNum: mobile,
//     kind: userkind,
//     gender: radioValue,
//   };
//   var TechData = {
//     nameK: name,
//     psd: pwd,
//     emailK: email,
//     mobileNum: mobile,
//     kind: userkind,
//     special: spc,
//     gender: radioValue,
//   };
//   if (userkind == "teacher") {
//     // console.log("Iam Teacher");

//     $.ajax({
//       url: "https://conquerer-5410e.firebaseio.com/tachers.json",
//       method: "POST",
//       data: JSON.stringify(TechData),
//       dataType: "JSON",
//       contentType: "application/json; charset-utf-8",
//       accepts: "application/json",
//       success: function (TechData) {
//         console.log("Done", TechData);
//       },
//       error: function () {
//         console.log("Fail");
//       },
//     });
//   } else if (userkind == "student") {
//     // console.log("hahahahaha");
//     $.ajax({
//       url: "https://conquerer-5410e.firebaseio.com/Students.json",
//       method: "POST",
//       data: JSON.stringify(STData),
//       dataType: "JSON",
//       contentType: "application/json; charset-utf-8",
//       accepts: "application/json",
//       success: function (STData) {
//         console.log("Done", STData);
//       },
//       error: function () {
//         console.log("Fail");
//       },
//     });
//   }
// }

//get data
function Show() {
  var userkind = $("#list").find(":selected").text();
  var name = $("#name").val();
  var pwd = $("#pswd").val();
  let data = new Date();

  if (userkind == "teacher") {
    $.ajax({
      url: "https://conquerer-5410e.firebaseio.com/tachers.json",
      method: "GET",
      contentType: "application/json; charset-utf-8",
      success: function (TechData) {
        console.log("TechData Get", TechData);
        // $("#TechData > tbody").empty();
        for (const std in TechData) {
          console.log(TechData[std].nameK);
          if (name == TechData[std].nameK && pwd === TechData[std].psd) {
            var row = `<tr>
                            <td>${TechData[std].nameK}</td>
                            <td>${TechData[std].psd}</td>
                            </tr>`;
            $("#data").append(row);
            document.cookie = `nameK = ${TechData[std].nameK} `;
            console.log(document.cookie);
            window.location.replace(
              "http://127.0.0.1:5500/teacher-page.html"
            );
          }
        }
      },
      error: function () {
        console.log("Fail Geting Data");
      },
    });
  } else if (userkind == "student") {
    $.ajax({
      url: "https://conquerer-5410e.firebaseio.com/Students.json",
      method: "GET",
      contentType: "application/json; charset-utf-8",
      success: function (STData) {
        // console.log("TechData Get", STData);
        // $("#TechData > tbody").empty();
        for (const std in STData) {
          console.log(
            name == STData[std].nameK && pwd === STData[std].psd,
            "ttttttttt"
          );
          if (email == STData[std].emailk && pwd === STData[std].psd) {
            console.log("yyyyyyyyyyyyyyyyy", STData[std].nameK);
            var row = `<tr>
                            <td>${STData[std].nameK}</td>
                            <td>${STData[std].psd}</td>
                            </tr>`;
            $("#data").append(row);
            document.cookie = `nameK = ${STData[std].nameK} `;
            console.log(document.cookie);
            window.location.replace(
              "http://127.0.0.1:5500/index-home-without-login.html"
            );
          
        }
      }
      },
      error: function () {
        console.log("Fail Geting Data");
      },
    });
  }
}
// <td>${data[std].studentEmail}</td>
// <td>${data[std].job}</td>
// <td>${data[std].Image}</td>
