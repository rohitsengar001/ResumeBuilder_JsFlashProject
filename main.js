let addAcademic = document.getElementById('addAcademic');
let acdemicDetails = document.getElementById('acedmic-details');
let iconHeadPersDets = document.getElementById('Heading-personal-details').childNodes[1].childNodes[1];
let personalDetails = document.getElementById('personal-details');
let workingHistoryBody = document.getElementById('working-history');
let careerObjectiveBody = document.getElementById("career-objective");

// console.log(iconHeadPersDets);
iconHeadPersDets.style.display = "none";
(function () {
  acdemicDetails.style.display = 'none';
  workingHistoryBody.style.display = "none";
  careerObjectiveBody.style.display = "none";
})();//IIFE

//!ADD ACADEMIC DETAILS
addAcademic.addEventListener('click', function () {
  let html = "";
  if (addAcademic.getAttribute('flag') == 'minusButton' || addAcademic.getAttribute('flag') == null) {
    //event for plus button
    acdemicDetails.style.display = 'block';
    addAcademic.attributes.item(0).value = 'fa fa-minus-circle fa-2x text-danger btn';
    addAcademic.setAttribute("flag", "plusButton");
    iconHeadPersDets.style.display = "block";//personal Heading icon
    personalDetails.style.display = "none";
  } else {
    //event for minus button
    acdemicDetails.style.display = 'none';
    addAcademic.attributes.item(0).value = 'fa fa-plus-circle fa-2x text-primary btn';
    addAcademic.setAttribute("flag", "minusButton");
    iconHeadPersDets.style.display = "none";
    personalDetails.style.display = "block";

  }


});

//!skill addon eventListener
let count = 0;
let skilladd = document.getElementById('skill-addon-0');

skilladd.addEventListener('click', function () {
  let skillId = document.getElementById('skills-0');
  let html = skillId.childNodes[1];
  let cln = html.cloneNode(true);
  cln.childNodes[5].childNodes[1].setAttribute('onclick', 'removeSkills(id)');
  cln.childNodes[5].childNodes[1].attributes.item(1).value = "skill-addon-" + count;//?skill-addon-0:intially
  // console.log(cln);
  cln.childNodes[5].childNodes[1].childNodes[0].attributes.item(0).value = "fa fa-minus-square btn btn-danger";
  skillId.appendChild(cln);
  count++;

});

//!personal Details Icon EventListener
let personalDetailsHeadIcon = document.getElementById("icon-Heading-personal-details");
personalDetailsHeadIcon.addEventListener("click", function () {
  if (personalDetailsHeadIcon.getAttribute("flag") == null || personalDetailsHeadIcon.getAttribute('flag') == 'plus-button') {
    personalDetails.style.display = "block";
    // console.log(iconHeadPersDets.attributes);
    iconHeadPersDets.attributes.item(0).value = "fa fa-minus-circle fa-2x text-danger btn";
    personalDetailsHeadIcon.setAttribute('flag', 'minus-button');
  } else {
    personalDetails.style.display = "none";
    console.log(iconHeadPersDets.attributes);
    iconHeadPersDets.attributes.item(0).value = "fa fa-plus-circle fa-2x text-primary btn";
    personalDetailsHeadIcon.setAttribute('flag', 'plus-button');
  }

});

//! Input name of states into to inputState object
let inputState = document.getElementById("inputState");
(function () {
  let state = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
    "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
    "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttarakhand", "Uttar Pradesh", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli",
    "Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"];

  // console.log(inputState.childNodes);
  let html = '<option selected>Choose...</option>';

  state.forEach(function (element, index) {
    html += `<option>${index + 1}  ${element}</option><br>`;
  });
  inputState.innerHTML = html;
  // console.log(inputState.innerHTML);
})();

let workingHistoryAddon = document.getElementById("working-history-addon");
workingHistoryAddon.addEventListener('click', function () {
  let workingHistoryBody = document.getElementById('working-history');
  if (workingHistoryAddon.getAttribute("flag") == null || workingHistoryAddon.getAttribute("flag") == 'minusButton') {
    //condition for plus button
    workingHistoryBody.style.display = "block";
    workingHistoryAddon.setAttribute("flag", "plusButton");
    workingHistoryAddon.attributes.item(0).value = 'fa fa-minus-circle fa-2x text-danger btn';
  }
  else {
    //condition for minus button
    workingHistoryBody.style.display = "none";
    workingHistoryAddon.setAttribute("flag", "minusButton")
    workingHistoryAddon.attributes.item(0).value = 'fa fa-plus-circle fa-2x text-primary btn';
    //  console.log(workingHistoryAddon.attributes);

  }

});

let iconCarrerObjective = document.getElementById('icon-Career-Objective');
iconCarrerObjective.addEventListener('click', function () {

  if (iconCarrerObjective.getAttribute("flag") == null || iconCarrerObjective.getAttribute("flag") == 'minusButton') {
    //condition for plus button
    careerObjectiveBody.style.display = "block";
    iconCarrerObjective.setAttribute("flag", "plusButton");
    iconCarrerObjective.attributes.item(0).value = 'fa fa-minus-circle fa-2x text-danger btn';
  }
  else {
    //condition for minus button
    careerObjectiveBody.style.display = "none";
    iconCarrerObjective.setAttribute("flag", "minusButton")
    iconCarrerObjective.attributes.item(0).value = 'fa fa-plus-circle fa-2x text-primary btn';
    //  console.log(workingHistoryAddon.attributes);

  }
});

//!remove node/object

function removeSkills(id) {
  element = document.getElementById(id).parentNode.parentNode.parentNode;
  // console.log(element.children);
  for (let i = 1; i < element.children.length; i++) {
    if ((element.children[i].children[2].children[0].id) == id) {
      // console.log(element.children[i]);
      element.children[i].remove();

    }

  }

  // element.remove();
}




