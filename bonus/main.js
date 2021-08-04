//onclick function for mode button
function ChangeMode() {
    var checkedMode = document.querySelector('input[name="modeOptions"]');
    if (!checkedMode.checked) {
      lightbg();
    }
    else {
      darkbg();
    }
}


//onclick function for submit button
function Submit() {
  //variables for name and contact details
  var name_info = document.getElementById("name").value;
  var contact_info = document.getElementById("contactnumber").value;
  var name_label = document.getElementsByClassName("control-label")[0];
  var contact_label = document.getElementsByClassName("control-label")[1];

  //condition when name and contact details are filled
  if (name_info.length && contact_info.length != 0) {
    if (!isNaN(contact_info) && contact_info.length == 12) {
      createCheck(name_label);
      createCheck(contact_label);
      showgreen();
      document.getElementById("Output").textContent = "You have successfully submitted your contact details.";
    }
    else {
      //wrong format for contact details
      createCheck(name_label);
      createTimes(contact_label);
      showred();
      document.getElementById("Output").textContent = "Error: Please check all the details before submitting.";
    }
    console.log(name_info + contact_info)
  }
  //condition when details are not completely filled
  else {
    if (name_info.length == 0 && contact_info.length > 0) {
      if (!isNaN(contact_info) && contact_info.length == 12) {
        createTimes(name_label);
        createCheck(contact_label);
        showred();
      }
      else {
        createTimes(name_label);
        createTimes(contact_label);
        showred();
      }
    }
    else if (name_info.length > 0 && contact_info.length == 0) {
      createCheck(name_label);
      createTimes(contact_label);
      showred();
    }
    else {
      createTimes(name_label);
      createTimes(contact_label);
      showred();
    }
    console.log("else dito" + name_info + contact_info)
    document.getElementById("Output").textContent = "Error: Please check all the details before submitting.";
  }
}


//creates check icon for name and contact label
function createCheck(label) {
  if (label.childElementCount > 0) {
    label.removeChild(label.childNodes[1]);
  }
  var node = document.createElement("I")
  node.className = "fas fa-check-circle";
  node.style = "color:green";
  label.appendChild(node);
}


//creates x icon for name and contact label
function createTimes(label) {
  if (label.childElementCount > 0) {
    label.removeChild(label.childNodes[1]);
  }
  var node = document.createElement("I")
  node.className = "fas fa-times-circle";
  node.style = "color:red";
  label.appendChild(node);
}


//function to change output panel bg-color when details are correct
function showgreen() {
  var o_panel_info = document.getElementById("outputpanel").classList
  if(o_panel_info.length > 1){
    o_panel_info.remove("redbg", "darkbg", "lightbg");
  }
  o_panel_info.add("greenbg");
}


//function to change output panel bg-color when details are wrong
function showred() {
  var o_panel_info = document.getElementById("outputpanel").classList
  if(o_panel_info.length > 1){
    o_panel_info.remove("greenbg", "darkbg", "lightbg");
  }
  o_panel_info.add("redbg");
}


//function to change theme to dark mode
function darkbg(){
  var panel_info = document.getElementsByClassName("panel");            //details section variable
  var btn = document.getElementById("html").classList;                  //button variable
  var o_panel_info = document.getElementById("outputpanel").classList;  //output panel variable
  var body_bg = document.getElementsByTagName("body")[0].classList;     //body variable

  panel_info[0].className = "panel darkmode darkmodetext";
  body_bg.remove("lightbg");
  body_bg.add("darkbg");
  btn.remove("lightbtn");
  btn.add("darkbtn");
  document.getElementById("moon").style.opacity = 1;
  document.getElementById("sun").style.opacity = 0;

  if((o_panel_info.length > 1 && o_panel_info[1] == "lightbg") || (o_panel_info.length == 1 && o_panel_info[0] == "panel")){
    o_panel_info.remove("redbg", "greenbg", "lightbg");
    o_panel_info.add("darkbg");
  }
}


//function to change theme to light mode
function lightbg(){
  var panel_info = document.getElementsByClassName("panel");            //details section variable
  var btn = document.getElementById("html").classList;                  //button variable
  var o_panel_info = document.getElementById("outputpanel").classList;  //output panel variable
  var body_bg = document.getElementsByTagName("body")[0].classList;     //body variable

  panel_info[0].className = "panel lightmode lightmodetext";
  body_bg.remove("darkbg");
  body_bg.add("lightbg");
  btn.remove("darkbtn");
  btn.add("lightbtn");
  document.getElementById("moon").style.opacity = 0;
  document.getElementById("sun").style.opacity = 1;

  if((o_panel_info.length > 1 && o_panel_info[1] == "darkbg") || (o_panel_info.length == 1 && o_panel_info[0] == "panel")){
    o_panel_info.remove("redbg", "greenbg", "darkbg");
    o_panel_info.add("lightbg");
  }
}