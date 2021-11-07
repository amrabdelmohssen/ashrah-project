function Save() {
  var txt = $("#textarea").val(); //value tex
  // var job = $("#Job").val();

  // ,
  //     emailK: email,
  // pwdK:pwd,
  // specialization: spc,
  // mobile:mob
  var postData = {
    post: txt,
  };

  // console.log("Iam Teacher");

  $.ajax({
    url: "https://conquerer-5410e.firebaseio.com/posts.json",
    method: "POST",
    data: JSON.stringify(postData),
    dataType: "JSON",
    contentType: "application/json; charset-utf-8",
    accepts: "application/json",
    success: function (postData) {
      console.log("Done", postData);
      //   Show();
    },
    error: function () {
      console.log("Fail");
    },
  });
}

function Show() {
  var name = $("#name").val();
  var pwd = $("#pswd").val();
  let data = new Date();

  $.ajax({
    url: "https://conquerer-5410e.firebaseio.com/posts.json",
    method: "GET",
    contentType: "application/json; charset-utf-8",
    success: function (postData) {
      console.log("TechData Get", postData);
      // $("#TechData > tbody").empty();
      for (const std in postData) {
        {
          var row = `

                              <div class="card text-center post">
                <div class="card-header">
                    اخر الطلبات
                </div>
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text" id='postDiv'>ي${postData[std].post}</p>
                    <a href="#" class="btn btn-primary">تصفح الطلب</a>
                </div>
                <div class="card-footer text-muted">
                    منذ يومين
                </div>
            </div>
                        `;
          $("#po").append(row);
        }
      }
    },
    error: function () {
      console.log("Fail Geting Data");
    },
  });
}
