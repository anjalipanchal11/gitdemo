//alert("Hi");

window.onload = function () {
    "use strict";
    var formHandle = document.forms[0];
    var inputName = document.forms[0].f_Name;
    var inputPwd = document.forms[0].f_pwd;
    var displayName = document.getElementById("myName");
    var displayPwd = document.getElementById("mypassword");
    var display = document.getElementById("displayValue");
    display.style.display = "none";
    function processForm() {
        if (inputName.value === "" || inputName.value === null) {
            inputName.focus();
            inputName.style.background = "red";
            return false;
        }
        if (inputPwd.value === "" || inputPwd.value === null) {
            inputPwd.focus();
            inputPwd.style.background = "red";
            return false;
        }
        if (inputPwd.value !== "" && inputName.value !== "") {
            display.style.display = "block";
            displayName.innerHTML = inputName.value;
            displayPwd.innerHTML = inputPwd.value;
        }
        return false;
    }
    formHandle.onsubmit = processForm;
};