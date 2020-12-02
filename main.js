let addAcademic = document.getElementById("addAcademic");
let acdemicDetails = document.getElementById("acedmic-details");
let iconHeadPersDets = document.getElementById("Heading-personal-details")
  .childNodes[1].childNodes[1];
let personalDetails = document.getElementById("personal-details");
let workingHistoryBody = document.getElementById("working-history");
let careerObjectiveBody = document.getElementById("career-objective");

// console.log(iconHeadPersDets);
iconHeadPersDets.style.display = "none";
(function () {
  acdemicDetails.style.display = "none";
  workingHistoryBody.style.display = "none";
  careerObjectiveBody.style.display = "none";
})(); //IIFE

//!ADD ACADEMIC DETAILS
addAcademic.addEventListener("click", function () {
  let html = "";
  if (
    addAcademic.getAttribute("flag") == "minusButton" ||
    addAcademic.getAttribute("flag") == null
  ) {
    //event for plus button
    acdemicDetails.style.display = "block";
    addAcademic.attributes.item(0).value =
      "fa fa-minus-circle fa-2x text-danger btn";
    addAcademic.setAttribute("flag", "plusButton");
    iconHeadPersDets.style.display = "block"; //personal Heading icon
    personalDetails.style.display = "none";
  } else {
    //event for minus button
    acdemicDetails.style.display = "none";
    addAcademic.attributes.item(0).value =
      "fa fa-plus-circle fa-2x text-primary btn";
    addAcademic.setAttribute("flag", "minusButton");
    iconHeadPersDets.style.display = "none";
    personalDetails.style.display = "block";
  }
});

//!Add skill

let skilladd = document.getElementById("skill-addon-0");
let skillCount = 0;
skilladd.addEventListener("click", function () {
  let skillId = document.getElementById("skills-0");
  let html = skillId.childNodes[1];
  let cln = html.cloneNode(true);
  let fieldObj;
  let feedbackObj;
  skillCount++;

  let skillFieldId = cln.children[1].id.slice(0, 11); //skill-field
  let skillFieldIdNew = `${skillFieldId}-${skillCount}`;
  let skillFieldIdFeedback = `${skillFieldId}-${skillCount}-feedback`;
  cln.children[1].id = skillFieldIdNew;
  cln.children[3].id = skillFieldIdFeedback;
  cln.childNodes[5].childNodes[1].setAttribute("onclick", "removeSkills(id)");
  cln.childNodes[5].childNodes[1].attributes.item(1).value =
    "skill-addon-" + skillCount; //?skill-addon-0:intially
  cln.childNodes[3].value = "";
  cln.childNodes[5].childNodes[1].childNodes[0].attributes.item(0).value =
    "fa fa-minus-square btn btn-danger";
  console.log(cln.children[3].id);
  console.log(cln.children[1].id);
  skillId.appendChild(cln);
  fieldObj = document.getElementById(skillFieldIdNew);
  feedbackObj = document.getElementById(skillFieldIdFeedback);
  fieldObj.onblur = () => emptyFilledValidate(fieldObj, feedbackObj);
});

// !ADD PROJECT DETAILS & EXTRA CARRICULAR ACTIVITY
let iconAddProject = document.getElementById("icon-addProject");
let projectDetails = document.getElementById("project-details");
let iconExtraCarricular = document.getElementById("icon-extra-activity");
let extraCarricularRoot = document.getElementById("extra-carricular");

let addProjectCounter = 0;
iconAddProject.onclick = () =>
  addProjectFieldName(projectDetails, iconAddProject);
iconExtraCarricular.onclick = () =>
  addProjectFieldName(extraCarricularRoot, iconExtraCarricular);

function addProjectFieldName(root, iconObj) {
  addProjectCounter++;
  iconId = iconObj.id;
  let projectDetailsChild = root.children[0];
  let cln = projectDetailsChild.cloneNode(true);
  let projectNameFiedId = projectDetailsChild.children[1].id; //project field Id of origin field which is mention in html
  let newProjectNameFieldId = projectNameFiedId.slice(0, 12);
  let projectNameFeedback = projectDetailsChild.children[7];
  let originalMonthsYearFirstField = document.getElementById(
    projectDetailsChild.children[3].id
  ); //months first field of months
  let originalMonthsYearSecondField = document.getElementById(
    projectDetailsChild.children[5].id
  ); //months first field of months
  let clnMonthYearFirstField = cln.children[3];
  let clnMonthYearFirstFieldFeedback = cln.children[8];
  let clnMonthYearSecondField = cln.children[5];
  let clnMonthYearSecondFieldFeedback = cln.children[9];
  let clnFeedback;
  let clnTextField;
  cln.id = `project-details-child-${addProjectCounter}`;
  cln.children[2].children[0].id = `${iconId}-${addProjectCounter}`;

  // ? project field name & feedback field
  cln.children[1].id = `${newProjectNameFieldId}-${addProjectCounter}`;
  cln.children[7].id = `${newProjectNameFieldId}-${addProjectCounter}-feedback`;

  //?project first field of year & feedback field
  clnMonthYearFirstField.id = `${originalMonthsYearFirstField.id.slice(
    0,
    17
  )}-${addProjectCounter}`; //month's first field => clon
  clnMonthYearFirstFieldFeedback.id = `${originalMonthsYearFirstField.id.slice(
    0,
    17
  )}-${addProjectCounter}-feedback`; //month's first field => clon

  //?project second field of year & feedback field
  clnMonthYearSecondField.id = `${originalMonthsYearSecondField.id.slice(
    0,
    19
  )}-${addProjectCounter}`; //month's second field => clone
  clnMonthYearSecondFieldFeedback.id = `${originalMonthsYearSecondField.id.slice(
    0,
    19
  )}-${addProjectCounter}-feedback`; //month's second field => clone

  //?set null value into new generated text of project name and months
  cln.children[1].value = "";
  cln.children[3].value = "";
  cln.children[5].value = "";
  //?set icon field id & event fire and class
  cln.children[6].children[0].children[0].attributes[0].value =
    "fa fa-minus-square btn btn-danger";
  cln.children[6].children[0].children[0].setAttribute(
    "onclick",
    "deleteProjectAndExtraCarr(id)"
  );
  cln.children[6].children[0].children[0].id = `${iconObj.id}-${addProjectCounter}`;

  // console.log(cln.children[3]);
  // console.log(cln.children[8].id + " ", cln.children[9].id);
  root.append(cln);
  clnFeedback = document.getElementById(cln.children[7].id); //load the feedback object of clone
  clnTextField = document.getElementById(cln.children[1].id);

  clnTextField.onblur = () => emptyFilledValidate(clnTextField, clnFeedback);
  clnMonthYearFirstField.onblur = () =>
    emptyFilledValidate(clnMonthYearFirstField, clnMonthYearFirstFieldFeedback);
  clnMonthYearSecondField.onblur = () =>
    emptyFilledValidate(
      clnMonthYearSecondField,
      clnMonthYearSecondFieldFeedback
    );
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
  // let clnFeedback=achievements.children[3].cloneNode(true);

  cln.id = `achievement-task-${taskfieldCount}`; //update clone root tag id
  cln.children[1].value = "";
  cln.children[1].id=`achievementTaskField-${taskfieldCount}`;//?achievement and task field id
  cln.children[3].id=`achievementTaskField-${taskfieldCount}-feedback`;//?achievement and task feedback id
  console.log(cln.children[3]);
  cln.children[2].children[0].id = `icon-achievement-task-${Math.floor(
    Math.random() * 100
  )}`;
  cln.children[2].children[0].setAttribute("onclick", "removeSkills(id)");
  cln.children[2].children[0].childNodes[0].attributes.item(0).value =
    "fa fa-minus-square btn btn-danger";
  // console.log(cln);
  achievements.appendChild(cln);
  achievementAndTaskField=cln.children[1];
  achievementAndTaskFieldFeedback=cln.children[3];
  achievementAndTaskField.onblur=()=>emptyFilledValidate(achievementAndTaskField,achievementAndTaskFieldFeedback);
  
}

//!Add main achievements
let iconAddMainAchievement = document.getElementById("icon-add-achievements");
let achivementAndTaskCounter = 0;
iconAddMainAchievement.addEventListener("click", function () {
  let mainAchievements = document.getElementById("achievements");
  let htmlAchievement = "";
  let addNewHtmlAchievement = "";
  achivementAndTaskCounter++;
  htmlAchievement = mainAchievements.innerHTML;
  //todo: insert id to each feedback class for input-text field Field
  addNewHtmlAchievement = `<div id="main-achievements-${achivementAndTaskCounter}">
  <br>
  <div class="input-group">
      <div class="input-group-prepend">
          <span class="input-group-text working-history co" id="">Designation</span>
      </div>
      <input class="form-control" type="text" name="" id="designField-${achivementAndTaskCounter}" placeholder="Type Name..."
          aria-label="Recipient's " aria-describedby="my-addon">

      <div class="input-group-prepend">
          <span class="input-group-text working-history" id="">Year</span>
      </div>
      <input class="form-control" type="month" name="" id="designField-month-${achivementAndTaskCounter}" placeholder="Recipient's text"
          aria-label="Recipient's " aria-describedby="my-addon">
      <div class="input-group-prepend">
          <span class="input-group-text working-history" id="">To</span>
      </div>
      <input class="form-control" type="month" name="" id="designField-month-0-${achivementAndTaskCounter}" placeholder="Recipient's text"
          aria-label="Recipient's " aria-describedby="">
          <small id="designField-${achivementAndTaskCounter}-feedback" class="form-text  invalid-feedback text-danger"></small>
          <small id="designField-month-${achivementAndTaskCounter}-feedback" class="form-text  invalid-feedback text-danger"></small>
          <small id="designField-month-0-${achivementAndTaskCounter}-feedback" class="form-text  invalid-feedback text-danger"></small>
  </div>
  
  <div class="input-group">
      <div class="input-group-prepend">
          <span class="input-group-text working-history co" id="">Organization Name</span>
      </div>
      <input class="form-control " type="text" id="organization-name-${achivementAndTaskCounter}" name="" placeholder="Type Name..."
          aria-label="Recipient's " aria-describedby="my-addon">
          <small id="organization-name-${achivementAndTaskCounter}-feedback"
                            class="form-text  invalid-feedback text-danger"></small>
  </div>
  
  <div id="achievements-0-${achivementAndTaskCounter}">
      <div class="input-group" id="achievement-task-0">
          <div class="input-group-prepend">
              <span class="input-group-text working-history co" id="">Achievements & Tasks</span>
          </div>
          <input class="form-control " type="text" name="" id="achievementTaskField-${achivementAndTaskCounter}" placeholder="Type Name..."
              aria-label="Recipient's " aria-describedby="my-addon">
          <div class="input-group-prepend">
              <span class="input-group-text working-history" id="icon-achievement-task-0-${achivementAndTaskCounter}" onclick="AddAchievementField(id)"><i
                      class="fa fa-plus btn btn-primary" aria-hidden="true"></i></span>
          </div>
          <small id="achievementTaskField-${achivementAndTaskCounter}-feedback" class="form-text  invalid-feedback text-danger"></small>
          </div>
  </div>
  <!-- location section-->
  <div class="input-group">
      <div class="input-group-prepend">
          <span class="input-group-text working-history co" id="">Location</span>
      </div>
      <input class="form-control " type="text" name="" id="location-${achivementAndTaskCounter}"  placeholder="Type Name..."
          aria-label="Recipient's " aria-describedby="my-addon">
          <small id="location-${achivementAndTaskCounter}-feedback" class="form-text  invalid-feedback text-danger"></small>
  </div>
</div>`;

  mainAchievements.innerHTML = htmlAchievement + "<br>" + addNewHtmlAchievement;
  // console.log(mainAchievements);
  let designFieldId = `designField-${achivementAndTaskCounter}`;
  let designField = document.getElementById(designFieldId);
  let designFieldMonthFirstId = `designField-month-${achivementAndTaskCounter}`;
  let designFieldMonthFirst = document.getElementById(designFieldMonthFirstId);
  let designFieldMothSecondId = `designField-month-0-${achivementAndTaskCounter}`;
  let designFieldMothSecond = document.getElementById(designFieldMothSecondId);
  let organizationNameId = `organization-name-${achivementAndTaskCounter}`;
  let organizationName = document.getElementById(organizationNameId);
  let achievementTaskFieldId = `achievementTaskField-${achivementAndTaskCounter}`;
  let achievementTaskField = document.getElementById(achievementTaskFieldId);
  let locationId = `location-${achivementAndTaskCounter}`;
  let location = document.getElementById(locationId);
  //invalid-feedback-alert
  let designFieldFeedbackId = `${designFieldId}-feedback`;
  // console.log(designFieldFeedbackId);
  let designFieldFeedback = document.getElementById(designFieldFeedbackId);
  // console.log(designFieldFeedback);
  let designFieldMonthFirstFeedbackId = `${designFieldMonthFirstId}-feedback`;
  let designFieldMonthFirstFeedback = document.getElementById(
    designFieldMonthFirstFeedbackId
  );
  let designFieldMothSecondFeedbackId = `${designFieldMothSecondId}-feedback`;
  let designFieldMothSecondFeedback = document.getElementById(
    designFieldMothSecondFeedbackId
  );
  let organizationNameFeedbackId = `${organizationNameId}-feedback`;
  let organizationNameFeedback = document.getElementById(
    organizationNameFeedbackId
  );
  let achievementTaskFieldFeedbackId = `${achievementTaskFieldId}-feedback`;
  let achievementTaskFieldFeedback = document.getElementById(
    achievementTaskFieldFeedbackId
  );
  let locationFeedbackId = `${locationId}-feedback`;
  let locationFeedback = document.getElementById(locationFeedbackId);
  // event fire on blur

  designField.onblur = () =>
    emptyFilledValidate(designField, designFieldFeedback);
  designFieldMonthFirst.onblur = () =>
    emptyFilledValidate(designFieldMonthFirst, designFieldMonthFirstFeedback);
  designFieldMothSecond.onblur = () =>
    emptyFilledValidate(designFieldMothSecond, designFieldMothSecondFeedback);
  organizationName.onblur = () =>
    emptyFilledValidate(organizationName, organizationNameFeedback);
  achievementTaskField.onblur = () =>
    emptyFilledValidate(achievementTaskField, achievementTaskFieldFeedback);
  location.onblur = () => emptyFilledValidate(location, locationFeedback);
});

//!personal Details Icon EventListener
let personalDetailsHeadIcon = document.getElementById(
  "icon-Heading-personal-details"
);
personalDetailsHeadIcon.addEventListener("click", function () {
  if (
    personalDetailsHeadIcon.getAttribute("flag") == null ||
    personalDetailsHeadIcon.getAttribute("flag") == "plus-button"
  ) {
    personalDetails.style.display = "block";
    // console.log(iconHeadPersDets.attributes);
    iconHeadPersDets.attributes.item(0).value =
      "fa fa-minus-circle fa-2x text-danger btn";
    personalDetailsHeadIcon.setAttribute("flag", "minus-button");
  } else {
    personalDetails.style.display = "none";
    // console.log(iconHeadPersDets.attributes);
    iconHeadPersDets.attributes.item(0).value =
      "fa fa-plus-circle fa-2x text-primary btn";
    personalDetailsHeadIcon.setAttribute("flag", "plus-button");
  }
});

//! Input name of states into to inputState object
let inputState = document.getElementById("inputState");

(function () {
  let state = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];

  // console.log(inputState.childNodes);
  let html = "<option selected>Choose...</option>";

  state.forEach(function (element, index) {
    html += `<option>${index + 1}  ${element}</option><br>`;
  });
  inputState.innerHTML = html;
  // console.log(inputState.innerHTML);
})();

//!working history add-on button
let workingHistoryAddon = document.getElementById("working-history-addon");
workingHistoryAddon.addEventListener("click", function () {
  let workingHistoryBody = document.getElementById("working-history");
  if (
    workingHistoryAddon.getAttribute("flag") == null ||
    workingHistoryAddon.getAttribute("flag") == "minusButton"
  ) {
    //condition for plus button
    workingHistoryBody.style.display = "block";
    workingHistoryAddon.setAttribute("flag", "plusButton");
    workingHistoryAddon.attributes.item(0).value =
      "fa fa-minus-circle fa-2x text-danger btn";
  } else {
    //condition for minus button
    workingHistoryBody.style.display = "none";
    workingHistoryAddon.setAttribute("flag", "minusButton");
    workingHistoryAddon.attributes.item(0).value =
      "fa fa-plus-circle fa-2x text-primary btn";
    //  console.log(workingHistoryAddon.attributes);
  }
});

let iconCarrerObjective = document.getElementById("icon-Career-Objective");
iconCarrerObjective.addEventListener("click", function () {
  if (
    iconCarrerObjective.getAttribute("flag") == null ||
    iconCarrerObjective.getAttribute("flag") == "minusButton"
  ) {
    //condition for plus button
    careerObjectiveBody.style.display = "block";
    iconCarrerObjective.setAttribute("flag", "plusButton");
    iconCarrerObjective.attributes.item(0).value =
      "fa fa-minus-circle fa-2x text-danger btn";
  } else {
    //condition for minus button
    careerObjectiveBody.style.display = "none";
    iconCarrerObjective.setAttribute("flag", "minusButton");
    iconCarrerObjective.attributes.item(0).value =
      "fa fa-plus-circle fa-2x text-primary btn";
    //  console.log(workingHistoryAddon.attributes);
  }
});

//!remove skills field
function removeSkills(id) {
  element = document.getElementById(id).parentNode.parentNode.parentNode;
  // console.log(element.children);
  // console.log(element);
  for (let i = 1; i < element.children.length; i++) {
    try {
      if (element.children[i].children[2].children[0].id == id) {
        // console.log(element.children[i]);
        element.children[i].remove();
      }
    } catch (error) {}
  }
}

//!delete projectName Field

function deleteProjectAndExtraCarr(iconButtonId) {
  let rootElement = document.getElementById(iconButtonId).parentNode.parentNode;
  let rootElementId = rootElement.id; //remember this id for deleting Node

  let rootElementParent = rootElement.parentNode;
  // console.log(rootElementParent.children[1].id, rootElementId);
  for (let i = 1; i < rootElementParent.children.length; i++) {
    if (rootElementParent.children[i].id == rootElementId) {
      rootElementParent.children[i].remove();
    }
  }
}

//!Use multi-tag input in language field
[].forEach.call(document.getElementsByClassName("tags-input"), function (el) {
  let hiddenInput = document.createElement("input"),
    mainInput = document.createElement("input"),
    tags = [];

  hiddenInput.setAttribute("type", "hidden");
  hiddenInput.setAttribute("name", el.getAttribute("data-name"));

  mainInput.setAttribute("type", "text");
  mainInput.classList.add("main-input");
  mainInput.addEventListener("input", function () {
    let enteredTags = mainInput.value.split(",");
    if (enteredTags.length > 1) {
      enteredTags.forEach(function (t) {
        let filteredTag = filterTag(t);
        if (filteredTag.length > 0) addTag(filteredTag);
      });
      mainInput.value = "";
    }
  });

  mainInput.addEventListener("keydown", function (e) {
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
      element: document.createElement("span"),
    };

    tag.element.classList.add("tag");
    tag.element.textContent = tag.text;

    let closeBtn = document.createElement("span");
    closeBtn.classList.add("close");
    closeBtn.addEventListener("click", function () {
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
    hiddenInput.value = tagsList.join(",");
  }

  function filterTag(tag) {
    return tag
      .replace(/[^\w -]/g, "")
      .trim()
      .replace(/\W+/g, "-");
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
  validLastName: false,
};
firstName.onblur = () => nameValidation(firstName);
middleName.onblur = () => nameValidation(middleName);
lastName.onblur = () => nameValidation(lastName);

function nameValidation(element) {
  let nameFeedback = document.getElementById("name-feedback");
  let regex = /([a-zA-Z]){2,10}/;
  let str = element.value;
  let result = regex.test(str); //?return type of test():Boolean
  let alertMsg = `<b>*Person's Name must be alphabet / empty field not allowed!</b>`;
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
  nameFeedback.innerHTML = alertMsg;
}

//!Email validation
let email = document.getElementById("email");
let validEmail = false;

email.addEventListener("blur", () => {
  let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value;
  let result = regex.test(str); //?return type :Boolean
  let emailFeedback = document.getElementById("email-feedback");
  let alertMsg = "";
  if (str == "") {
    alertMsg = `<b>Email is empty kindly fillout it!</b>`;
    email.classList.add("is-invalid");
    validEmail = false;
  } else {
    if (result) {
      email.classList.remove("is-invalid");
      validEmail = true;
    } else {
      alertMsg = `<b>Email is not valid</b>`;
      email.classList.add("is-invalid");
      validEmail = false;
    }
  }
  emailFeedback.innerHTML = alertMsg;
});

//!Mobile validation
let mobile = document.getElementById("mobile");
let validMobile = false;

mobile.addEventListener("blur", () => {
  let mobileFeedback = document.getElementById("mobile-feedback");
  let regex = /^([0-9]{10})$/;
  let str = mobile.value;
  let result = regex.test(str);
  let alertMsg;

  if (str == "") {
    alertMsg = `<b>mobile is empty kindly fillout it!</b>`;
    mobile.classList.add("is-invalid");
    validEmail = false;
  } else {
    if (result) {
      mobile.classList.remove("is-invalid");
      validEmail = true;
    } else {
      alertMsg = `<b>mobile is not valid</b>`;
      mobile.classList.add("is-invalid");
      validEmail = false;
    }
  }
  mobileFeedback.innerHTML = alertMsg;
});
//!validate empty  field
let address = document.getElementById("address");
let city = document.getElementById("inputCity");
let hInstituteName = document.getElementById("Highschool-Institute-Name");
let iInstituteName = document.getElementById("Intermediate-Institute-name");
let gInstituteName = document.getElementById("graduation-institute-name");
let skillField1 = document.getElementById("skill-field-0");
let projectName = document.getElementById("project-name-0");
let extracarriculamField1 = document.getElementById("extracarri-0");
let designField = document.getElementById("designField-0");
let designationFieldMonthFirst = document.getElementById("designField-month-0");
let designationFieldMonthSecond = document.getElementById(
  "designField-month-0-0"
);
let organizationName = document.getElementById("organization-name-0");
let achievementField = document.getElementById("achievementTaskField-0");
let locationField = document.getElementById("location-0");

//all feedbacks fields
let addressFeedback = document.getElementById("address-feedback");
let cityFeedback = document.getElementById("city-feedback");
let hInstituteNameFeedback = document.getElementById("hInstitueName-feedback");
let iInstituteNameFeedback = document.getElementById(
  "intermediate-institute-feedback"
);
let gInstituteNameFeedback = document.getElementById(
  "graduation-institution-feedback"
);
let skillFieldFeedback1 = document.getElementById("skill-field-0-feedback");
let projectNameFeedback = document.getElementById("project-name-0-feedback");
let extracarriculamFeedback = document.getElementById("extracarri-0-feedback");
let designFieldFeedback = document.getElementById("designField-0-feedback");
let designationFieldMonthFirstFeedback = document.getElementById(
  "designField-month-0-feedback"
);
let designationFieldMonthSecondFeedback = document.getElementById(
  "designField-month-0-0-feedback"
);
let organizationNameFeedback = document.getElementById(
  "organization-name-0-feedback"
);
let achievementFieldFeedback = document.getElementById(
  "achievementTaskField-0-feedback"
);
let locationFieldFeedback = document.getElementById("location-0-feedback");

//all validation flag in reference of Institute Name
let validateHInstituteName = false;
let validAdress = false;
let validCity = false;
let validProjectName = false;
//event fire on blur
address.onblur = () => emptyFilledValidate(address, addressFeedback);
city.onblur = () => emptyFilledValidate(city, cityFeedback);
hInstituteName.onblur = () =>
  emptyFilledValidate(hInstituteName, hInstituteNameFeedback);
iInstituteName.onblur = () =>
  emptyFilledValidate(iInstituteName, iInstituteNameFeedback);
gInstituteName.onblur = () =>
  emptyFilledValidate(gInstituteName, gInstituteNameFeedback);
skillField1.onblur = () =>
  emptyFilledValidate(skillField1, skillFieldFeedback1);
projectName.onblur = () =>
  emptyFilledValidate(projectName, projectNameFeedback);
extracarriculamField1.onblur = () =>
  emptyFilledValidate(extracarriculamField1, extracarriculamFeedback);
designField.onblur = () =>
  emptyFilledValidate(designField, designFieldFeedback);
designationFieldMonthFirst.onblur = () =>
  emptyFilledValidate(
    designationFieldMonthFirst,
    designationFieldMonthFirstFeedback
  );
designationFieldMonthSecond.onblur = () =>
  emptyFilledValidate(
    designationFieldMonthFirst,
    designationFieldMonthSecondFeedback
  );
organizationName.onblur = () =>
  emptyFilledValidate(organizationName, organizationNameFeedback);
achievementField.onblur = () =>
  emptyFilledValidate(achievementField, achievementFieldFeedback);
locationField.onblur = () =>
  emptyFilledValidate(locationField, locationFieldFeedback);
//common function to validate all blank field
function emptyFilledValidate(fieldBody, alertelement) {
  //?argument list => first:input-text-field $ second : invalid feedback body
  let str = fieldBody.value;
  let addressFeedback = document.getElementById(alertelement);
  let alertMsg;
  if (str == "") {
    alertMsg = `<b>*${fieldBody.id} is empty kindly fillout it!</b>`;
    fieldBody.classList.add("is-invalid");
    validAdress = false;
    validCity = false;
  } else {
    validAdress = true;
    validCity = true;
    fieldBody.classList.remove("is-invalid");
  }
  alertelement.innerHTML = alertMsg;
}
//!validate marks
let highMarksField = document.getElementById("hMarks");
let iMarksField = document.getElementById("iMarks");
let gMarksField = document.getElementById("gMarks");
let highMarksFeedback = document.getElementById("hMarks-feedback");
let iMarksFeedback = document.getElementById("iMarks-feedback");
let gMarksFeedback = document.getElementById("gMarks-feedback");
highMarksField.onblur = () => validateMarks(highMarksField, highMarksFeedback);
iMarksField.onblur = () => validateMarks(iMarksField, iMarksFeedback);
gMarksField.onblur = () => validateMarks(gMarksField, gMarksFeedback);

function validateMarks(element, marksFeedback) {
  let str = element.value;
  let feedbackField = marksFeedback;
  let regex = /^([0-9]{2})\.([0-9]{2})$/;
  let result = regex.test(str);
  let alertMsg = "";

  if (result) {
    element.classList.remove("is-invalid");
  } else {
    element.classList.add("is-invalid");
    alertMsg = `*<b>Marks should be in format[00.00]!!</b>`;
  }
  marksFeedback.innerHTML = alertMsg;
}
//!validate months and year
let highSchoolYear = document.getElementById("highschool-year");
let highSchoolYearFeedback = document.getElementById("highchool-year-feedback");
let intermediateYear = document.getElementById("intermediate-year");
let intermediateYearFeedback = document.getElementById(
  "intermediate-year-feedback"
);
let graduationYear = document.getElementById("graduation-year");
let graduationYearFeedback = document.getElementById(
  "graduation-year-feedback"
);
let projectNameYearFirst = document.getElementById("project-name-year-0");
let projectNameYearFirstFeedback = document.getElementById(
  "project-name-year-0-feedback"
);
let projectNameYearSecond = document.getElementById("project-name-year-0-0");
let projectNameYearSecondFeedback = document.getElementById(
  "project-name-year-0-0-feedback"
);
let extracarriculamYearField1 = document.getElementById("extracarri-month-0");
let extracarriculamYearField1Feedback = document.getElementById(
  "extracarri-month-0-feedback"
);
let extracarriculamYearField2 = document.getElementById("extracarri-month-0-0");
let extracarriculamYearField2Feedback = document.getElementById(
  "extracarri-month-0-0-feedback"
);

// console.log(highSchoolYear,highSchoolYearFeedback);
highSchoolYear.onblur = () =>
  dateValidator(highSchoolYear, highSchoolYearFeedback);
intermediateYear.onblur = () =>
  dateValidator(intermediateYear, intermediateYearFeedback);
graduationYear.onblur = () =>
  dateValidator(graduationYear, graduationYearFeedback);
projectNameYearFirst.onblur = () =>
  dateValidator(projectNameYearFirst, projectNameYearFirstFeedback);
projectNameYearSecond.onblur = () =>
  dateValidator(projectNameYearSecond, projectNameYearSecondFeedback);
extracarriculamYearField1.onblur = () =>
  dateValidator(extracarriculamYearField1, extracarriculamYearField1Feedback);
extracarriculamYearField2.onblur = () =>
  dateValidator(extracarriculamYearField2, extracarriculamYearField2Feedback);

function dateValidator(fieldBody, feedbackBody) {
  let regex = /^([1-2])([0-9]{2})\-[0-9]/; //date format
  let str = fieldBody.value;
  let result = regex.test(str); //?return type :Boolean
  // console.log(result);
  let alertMsg;
  if (str == "") {
    alertMsg = `<b>*${fieldBody.id} is missing!!</b>`;
    fieldBody.classList.add("is-invalid");
  } else {
    if (result) {
      fieldBody.classList.remove("is-invalid");
    } else {
      fieldBody.classList.add("is-invalid");
      alertMsg = `*<b>Date format is not valid it should be smaller <=2020</b>`;
    }
  }
  feedbackBody.innerHTML = alertMsg;
}
