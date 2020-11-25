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

//!Add skill 

let skilladd = document.getElementById('skill-addon-0');
let skillCount = 0;
skilladd.addEventListener('click', function () {
  let skillId = document.getElementById('skills-0');
  let html = skillId.childNodes[1];
  let cln = html.cloneNode(true);
  cln.childNodes[5].childNodes[1].setAttribute('onclick', 'removeSkills(id)');
  cln.childNodes[5].childNodes[1].attributes.item(1).value = "skill-addon-" + skillCount;//?skill-addon-0:intially
  cln.childNodes[3].value = "";
  // console.log(cln.childNodes[3]);
  cln.childNodes[5].childNodes[1].childNodes[0].attributes.item(0).value = "fa fa-minus-square btn btn-danger";
  skillId.appendChild(cln);
  skillCount++;

});

// !ADD PROJECT DETAILS & EXTRA CARRICULAR ACTIVITY
let iconAddProject = document.getElementById("icon-addProject");
let projectDetails = document.getElementById("project-details");
let iconExtraCarricular = document.getElementById("icon-extra-activity");
let extraCarricularRoot = document.getElementById("extra-carricular");

let addProjectCounter = 0;
iconAddProject.onclick = () => addProjectFieldName(projectDetails, iconAddProject);
iconExtraCarricular.onclick = () => addProjectFieldName(extraCarricularRoot, iconExtraCarricular);

function addProjectFieldName(root, iconObj) {
  addProjectCounter++;
  iconId = iconObj.id;
  let projectDetailsChild = root.children[0];
  let cln = projectDetailsChild.cloneNode(true);
  cln.id = `project-details-child-${addProjectCounter}`;
  cln.children[2].children[0].id = `${iconId}-${addProjectCounter}`;
  cln.children[1].value = "";
  cln.children[3].value = "";
  cln.children[5].value = "";
  cln.children[6].children[0].children[0].attributes[0].value = "fa fa-minus-square btn btn-danger"
  cln.children[6].children[0].children[0].setAttribute("onclick", "deleteProjectAndExtraCarr(id)");
  cln.children[6].children[0].children[0].id = `${iconObj.id}-${addProjectCounter}`;

  // cln.children[1].children[0].value="";
  // cln.children[2].children[0].value="";
  // console.log(iconObj.id);
  root.append(cln);
}

//!ADD Achievement and task
// let iconAchievementTask = document.getElementById("icon-achievement-task-0");
let taskfieldCount = 0;
function AddAchievementField(buttonId) {
  taskfieldCount++;

  let buttonObj = document.getElementById(buttonId);
  parentNodeId = buttonObj.parentNode.parentNode.parentNode.id;
  // console.log(buttonObj.parentNode.parentNode.parentNode.id);
  let achievements = document.getElementById(parentNodeId);
  let cln = achievements.children[0].cloneNode(true);

  cln.id = `achievement-task-${taskfieldCount}`;//update clone root tag id
  cln.children[1].value = "";
  cln.children[2].children[0].id = `icon-achievement-task-${Math.floor(Math.random() * 100)}`;
  cln.children[2].children[0].setAttribute("onclick", "removeSkills(id)");
  cln.children[2].children[0].childNodes[0].attributes.item(0).value = "fa fa-minus-square btn btn-danger";
  // console.log(cln);
  achievements.appendChild(cln);

}
// iconAchievementTask.addEventListener("click", function () {

// });
//!Add main achievements
let iconAddMainAchievement = document.getElementById("icon-add-achievements");
let achivementAndTaskCounter = 0;
iconAddMainAchievement.addEventListener("click", function () {
  let mainAchievements = document.getElementById("achievements");
  let htmlAchievement = '';
  let addNewHtmlAchievement = '';

  htmlAchievement = mainAchievements.innerHTML;
  addNewHtmlAchievement = `<div id="main-achievements-0">
  <br>
  <div class="input-group">
      <div class="input-group-prepend">
          <span class="input-group-text working-history co" id="">Designation</span>
      </div>
      <input class="form-control" type="text" name="" placeholder="Type Name..."
          aria-label="Recipient's " aria-describedby="my-addon">

      <div class="input-group-prepend">
          <span class="input-group-text working-history" id="">Year</span>
      </div>
      <input class="form-control" type="month" name="" placeholder="Recipient's text"
          aria-label="Recipient's " aria-describedby="my-addon">
      <div class="input-group-prepend">
          <span class="input-group-text working-history" id="">To</span>
      </div>
      <input class="form-control" type="month" name="" placeholder="Recipient's text"
          aria-label="Recipient's " aria-describedby="">
  </div>
  <div class="input-group">
      <div class="input-group-prepend">
          <span class="input-group-text working-history co" id="">Organization Name</span>
      </div>
      <input class="form-control " type="text" name="" placeholder="Type Name..."
          aria-label="Recipient's " aria-describedby="my-addon">
  </div>
  <div id="achievements-0-${achivementAndTaskCounter}">
      <div class="input-group" id="achievement-task-0">
          <div class="input-group-prepend">
              <span class="input-group-text working-history co" id="">Achievements & Tasks</span>
          </div>
          <input class="form-control " type="text" name="" placeholder="Type Name..."
              aria-label="Recipient's " aria-describedby="my-addon">
          <div class="input-group-prepend">
              <span class="input-group-text working-history" id=icon-achievement-task-0-${achivementAndTaskCounter}" onclick="AddAchievementField(id)"><i
                      class="fa fa-plus btn btn-primary" aria-hidden="true"></i></span>
          </div>
      </div>
  </div>
  <!-- location section-->
  <div class="input-group">
      <div class="input-group-prepend">
          <span class="input-group-text working-history co" id="">Location</span>
      </div>
      <input class="form-control " type="text" name="" placeholder="Type Name..."
          aria-label="Recipient's " aria-describedby="my-addon">
  </div>
</div>`;
  achivementAndTaskCounter++;
  mainAchievements.innerHTML = htmlAchievement + '<br>' + addNewHtmlAchievement;

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
    // console.log(iconHeadPersDets.attributes);
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

//!working history add-on button
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


//!remove skills field
function removeSkills(id) {
  element = document.getElementById(id).parentNode.parentNode.parentNode;
  // console.log(element.children);
  for (let i = 1; i < element.children.length; i++) {
    if ((element.children[i].children[2].children[0].id) == id) {
      // console.log(element.children[i]);
      element.children[i].remove();
    }
  }
}

//!delete projectName Field

function deleteProjectAndExtraCarr(iconButtonId) {

  let rootElement = document.getElementById(iconButtonId).parentNode.parentNode;
  let rootElementId = rootElement.id;//remember this id for deleting Node

  let rootElementParent = rootElement.parentNode;
  // console.log(rootElementParent.children[1].id, rootElementId);
  for (let i = 1; i < rootElementParent.children.length; i++) {
    if ((rootElementParent.children[i].id) == rootElementId) {
      rootElementParent.children[i].remove();
    }

  }
}


//!Use multi-tag input in language field 
[].forEach.call(document.getElementsByClassName('tags-input'), function (el) {
  let hiddenInput = document.createElement('input'),
    mainInput = document.createElement('input'),
    tags = [];

  hiddenInput.setAttribute('type', 'hidden');
  hiddenInput.setAttribute('name', el.getAttribute('data-name'));

  mainInput.setAttribute('type', 'text');
  mainInput.classList.add('main-input');
  mainInput.addEventListener('input', function () {
    let enteredTags = mainInput.value.split(',');
    if (enteredTags.length > 1) {
      enteredTags.forEach(function (t) {
        let filteredTag = filterTag(t);
        if (filteredTag.length > 0)
          addTag(filteredTag);
      });
      mainInput.value = '';
    }
  });

  mainInput.addEventListener('keydown', function (e) {
    let keyCode = e.which || e.keyCode;
    if (keyCode === 8 && mainInput.value.length === 0 && tags.length > 0) {
      removeTag(tags.length - 1);
    }
  });

  el.appendChild(mainInput);
  el.appendChild(hiddenInput);

  /*     addTag('english'); */

  function addTag(text) {
    let tag = {
      text: text,
      element: document.createElement('span'),
    };

    tag.element.classList.add('tag');
    tag.element.textContent = tag.text;

    let closeBtn = document.createElement('span');
    closeBtn.classList.add('close');
    closeBtn.addEventListener('click', function () {
      removeTag(tags.indexOf(tag));
    });
    tag.element.appendChild(closeBtn);

    tags.push(tag);

    el.insertBefore(tag.element, mainInput);

    refreshTags();
  }

  function removeTag(index) {
    let tag = tags[index];
    tags.splice(index, 1);
    el.removeChild(tag.element);
    refreshTags();
  }

  function refreshTags() {
    let tagsList = [];
    tags.forEach(function (t) {
      tagsList.push(t.text);
    });
    hiddenInput.value = tagsList.join(',');
  }

  function filterTag(tag) {
    return tag.replace(/[^\w -]/g, '').trim().replace(/\W+/g, '-');
  }
});

// * validation start from here

let firstName = document.getElementById("firstName");
let middleName = document.getElementById("middleName");
let lastName = document.getElementById("lastName");
// $('#failure').hide();
// $('#success').hide();
let userName = {
  validFirstName: false,
  validMiddleName: false,
  validLastName: false
};
firstName.onblur = () => nameValidation(firstName);
middleName.onblur = () => nameValidation(middleName);
lastName.onblur = () => nameValidation(lastName);

function nameValidation(element) {
  let regex = /([a-zA-Z]){2,10}/;
  let str = element.value;
  let result = regex.test(str);//?return type of test():Boolean
  // console.log(result);

  if (element.id == "firstName") {

    if (result) {
      element.classList.remove("is-invalid");
      userName.validFirstName = true;
    } else {
      element.classList.add("is-invalid");
      userName.validFirstName = false;
    }
  }
  if (element.id == "middleName") {
    if (result) {
      element.classList.remove("is-invalid");
      userName.validMiddleName = true;
    } else {
      element.classList.add("is-invalid");
      userName.validMiddleName = false;
    }
  } else {
    if (result) {
      element.classList.remove("is-invalid");
      userName.validLastName = true;
    } else {
      element.classList.add("is-invalid");
      userName.validLastName = false;
    }

  }

}

//!Email validation
let email = document.getElementById("email");
let validEmail = false;

email.addEventListener('blur', () => {
  let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value;
  let result = regex.test(str);//?return type :Boolean
  let emailFeedback = document.getElementById("email-feedback");
  let alertMsg = '';
  if (str == "") {
    alertMsg = `<b>Email is empty kindly fillout it!</b>`;
    email.classList.add('is-invalid');
    validEmail = false;
  } else {
    if (result) {
      email.classList.remove('is-invalid');
      validEmail = true;
    } else {
      alertMsg = `<b>Email is not valid</b>`;
      email.classList.add('is-invalid');
      validEmail = false;
    }
  }
  emailFeedback.innerHTML = alertMsg;

});

//!Mobile validation
let mobile = document.getElementById("mobile");
let validMobile = false;

mobile.addEventListener('blur', () => {
  let mobileFeedback = document.getElementById('mobile-feedback');
  let regex = /([0-9]{10})/;
  let str = mobile.value;
  let result = regex.test(str);
  let alertMsg;

  if (str == "") {
    alertMsg = `<b>mobile is empty kindly fillout it!</b>`;
    mobile.classList.add('is-invalid');
    validEmail = false;
  } else {
    if (result) {
      mobile.classList.remove('is-invalid');
      validEmail = true;
    } else {
      alertMsg = `<b>mobile is not valid</b>`;
      mobile.classList.add('is-invalid');
      validEmail = false;
    }
  }
  mobileFeedback.innerHTML = alertMsg;
});
//!Adress validate
let address = document.getElementById('address');
let addressFeedback = document.getElementById('address-feedback');
let city = document.getElementById('inputCity');
let cityFeedback = document.getElementById('city-feedback');
let validAdress = false;
let validCity = false;
address.onblur = () => emptyFilledValidate(address, addressFeedback);
city.onblur = () => emptyFilledValidate(city, cityFeedback);
function emptyFilledValidate(fieldBody, alertelement) {
  let str = fieldBody.value;
  let addressFeedback = document.getElementById(alertelement);
  let alertMsg;
  if (str == "") {
    alertMsg = `<b>${fieldBody.id} is empty kindly fillout it!</b>`;
    fieldBody.classList.add('is-invalid');
    validAdress = false;
    validCity = false;
  }
  else {
    validAdress = true;
    validCity = true;
    fieldBody.classList.remove('is-invalid');
  }
  alertelement.innerHTML = alertMsg;

}

