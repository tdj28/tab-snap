// Saves options to localStorage.
function save_options() {
  var select = document.getElementById("output1");
  var output1 = select.children[select.selectedIndex].value;
  localStorage["output_choice1"] = output1;

  var select = document.getElementById("output2");
  var output2 = select.children[select.selectedIndex].value;
  localStorage["output_choice2"] = output2;

  

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

function save_options2() {
 
  var text = document.getElementById("emailadded");
  var emailadd = text.value;
  localStorage["output_emailadd"] = emailadd;
  
   // Update status to let user know options were saved.
  var status = document.getElementById("status2");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);

}
   

// Restores select box state to saved value from localStorage.
function restore_options() {
  var favorite1 = localStorage["output_choice1"];
  if (!favorite1) {
    return;
  }
  var select = document.getElementById("output1");
  for (var i = 0; i < select.children.length; i++) {
    var child = select.children[i];
    if (child.value == favorite1) {
      child.selected = "true";
      break;
    }
  }


 var favorite2 = localStorage["output_choice2"];
  if (!favorite2) {
    return;
  }
  var select = document.getElementById("output2");
  for (var i = 0; i < select.children.length; i++) {
    var child = select.children[i];
    if (child.value == favorite2) {
      child.selected = "true";
      break;
    }
  }


 
  


}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);
document.querySelector('#save2').addEventListener('click', save_options2);
