function control(){
  const address = document.getElementById("address").value;
  const naam = document.getElementById("naam").value;
  const hasNumber = /\d/;
  const hasLetters = /^[a-zA-Z]+$/;

  // Checking for address validity and changing styles
  if (address.split(" ").length >= 2 && hasNumber.test(address)) {
    console.log("valid address");
    document.getElementById('addressAlert').style.display = "block";
    document.getElementById('addressAlert').innerHTML = 'Correct <strong>Address</strong> input<span class="close" id="addressAlertButton">&times</span>';
    document.getElementById('addressAlert').classList.remove("alert-danger");
    document.getElementById('addressAlert').classList.add('alert-success');
  } else {
    document.getElementById("addressAlert").style.display = "block";
    document.getElementById("addressAlert").innerHTML = 'Wrong <strong>Address</strong> input<span class="close" id="addressAlertButton">&times</span>';
    document.getElementById("addressAlert").classList.remove("alert-success");
    document.getElementById("addressAlert").classList.add("alert-danger");
  }



  // Checking for name validity and changing styles
  if (naam.split(" ").length == 1 && hasLetters.test(naam)){
    console.log("valid name");
    document.getElementById('naamAlert').style.display = "block";
    document.getElementById('naamAlert').innerHTML = 'Correct <strong>Name</strong> input <span class="close" id="naamAlertButton">&times</span>';
    document.getElementById('naamAlert').classList.remove("alert-danger");
    document.getElementById('naamAlert').classList.add('alert-success');
  } else {
    document.getElementById('naamAlert').style.display = "block";
    document.getElementById('naamAlert').innerHTML = 'Wrong <strong>Name</strong> input <span class="close" id="naamAlertButton">&times</span>';
    document.getElementById('naamAlert').classList.remove("alert-success");
    document.getElementById('naamAlert').classList.add('alert-danger');
  }

  // Event listeners for alerts
  document.getElementById("addressAlertButton").addEventListener("click",function(){
    document.getElementById("addressAlert").style.display = "none";
  });
  // Event listeners for alerts
  document.getElementById("naamAlertButton").addEventListener("click",function(){
    document.getElementById("naamAlert").style.display = "none";
  });

}
