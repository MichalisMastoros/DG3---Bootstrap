let counter = 1;

function opmerkingen(){

  if (document.getElementById("name").value.length == 0 || document.getElementById('comment').value.length == 0) {
    document.getElementById("alert").style.display = "block";
  } else {
    document.getElementById("media"+counter+"Name").innerHTML = document.getElementById("name").value;
    document.getElementById("media"+counter+"Comment").innerHTML = document.getElementById("comment").value;
    document.getElementById("media"+counter).style.display = "block";
    document.getElementById("alert").style.display = "none";
    counter += 1;
    if (counter == 6) {
      counter = 1;
    }
  }
}
