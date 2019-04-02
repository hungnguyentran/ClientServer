function validateUser(){
  //Get UserName
  var username = $('#username').val();
  //document.getElementsByName("username")[0].value;

  //Get Password
  var password = $('#password').val();
  //document.getElementsByName("password")[0].value;

  //Validateion
  $.get("/validateUser?username="+usernam+"&password="+password,function(data){
  alert(data);
});

}