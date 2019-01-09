'use strict';

//----------Navigational Hide/Show functions----------
//Show landing page
function showLandingPage() {
    $('#welcome-container').show();
    $('#login-form-container').hide();
    $('#signup-form-container').hide();
    $('#all-plants-page').hide();
    $('#new-plant-page').hide();
    $('#individual-plant-page').hide();
    $('#edit-plant-page').hide();
    $('#water-plant-page').hide();
    console.log('showLandingPage ran');
}

//Show login page
function showLoginPage() {
    $('#welcome-container').hide();
    $('#login-form-container').show();
    $('#signup-form-container').hide();
    $('#all-plants-page').hide();
    $('#new-plant-page').hide();
    $('#individual-plant-page').hide();
    $('#edit-plant-page').hide();
    $('#water-plant-page').hide();
    console.log('showLoginPage ran');
}

//Show sign-up page
function showSignupPage() {
    $('#welcome-container').hide();
    $('#signup-form-container').show();
    $('#login-form-container').hide();
    $('#all-plants-page').hide();
    $('#new-plant-page').hide();
    $('#individual-plant-page').hide();
    $('#edit-plant-page').hide();
    $('#water-plant-page').hide();
    console.log('showSignupPage ran');
}

//Show all plants page
function showAllPlantsPage() {
    $('#welcome-container').hide();
    $('#signup-form-container').hide();
    $('#login-form-container').hide();
    $('#all-plants-page').show();
    $('#new-plant-page').hide();
    $('#individual-plant-page').hide();
    $('#edit-plant-page').hide();
    $('#water-plant-page').hide();
    console.log('showAllPlantsPage ran');
}

//Show new plant page
function showNewPlantPage() {
    $('#welcome-container').hide();
    $('#signup-form-container').hide();
    $('#login-form-container').hide();
    $('#all-plants-page').hide();
    $('#new-plant-page').show();
    $('#individual-plant-page').hide();
    $('#edit-plant-page').hide();
    $('#water-plant-page').hide();
    console.log('showNewPlantPage ran');
}

//Show individual plant page
function showIndividualPlantPage() {
    $('#welcome-container').hide();
    $('#signup-form-container').hide();
    $('#login-form-container').hide();
    $('#all-plants-page').hide();
    $('#new-plant-page').hide();
    $('#individual-plant-page').show();
    $('#edit-plant-page').hide();
    $('#water-plant-page').hide();
    console.log('showIndividualPlantPage ran');
}

//Show edit plant page
function showEditPlantPage() {
    $('#welcome-container').hide();
    $('#signup-form-container').hide();
    $('#login-form-container').hide();
    $('#all-plants-page').hide();
    $('#new-plant-page').hide();
    $('#individual-plant-page').hide();
    $('#edit-plant-page').show();
    $('#water-plant-page').hide();
    console.log('showEditPlantPage ran');
}

//Show water plant page
function showWaterPlantPage() {
    $('#welcome-container').hide();
    $('#signup-form-container').hide();
    $('#login-form-container').hide();
    $('#all-plants-page').hide();
    $('#new-plant-page').hide();
    $('#individual-plant-page').hide();
    $('#edit-plant-page').hide();
    $('#water-plant-page').show();
    console.log('showWaterPlantPage ran');
}

//----------API Request Functions----------

//POST Login Form
function postLoginForm(url, username, password) {
    const loginData = {
        username: username,
        password: password
    }

    return fetch(url {
        method: 'POST',
        body: loginData
    })
    .then(response => response.json())

}

//POST New User Signup
function postSignupForm(url)

//Handle header logo clicks
$('#header-logo').click(event => {
    event.preventDefault();
    showAllPlantsPage();
});

//----------Water Plant Page----------

//Handle save new watering button
$('#new-water-save').click(event => {
    event.preventDefault();
    showIndividualPlantPage();
});

//----------Edit Plant Page----------

//Handle delete plant button
$('#delete-plant').click(event => {
    event.preventDefault();
    showAllPlantsPage();
});

//Handle save edits button
$('#edit-plant-save').click(event => {
    event.preventDefault();
    showIndividualPlantPage();
});

//Back to individual plant page
$('.back-indivPlant').click(event => {
    event.preventDefault();
    showIndividualPlantPage();
});

//----------Individual Plant Page----------

//Handle add watering date button
$('#add-water-button').click(event => {
    event.preventDefault();
    showWaterPlantPage();
})

//Handle edit plant button
$('#individual-plant-edit').click(event => {
    event.preventDefault();
    showEditPlantPage();
});

//----------New Plant Page----------

//Save new plant --> all plants page
$('#new-plant-save').click(event => {
    event.preventDefault();
    showAllPlantsPage();
});

//Handle back button
$('.back-allPlants').click(event => {
    event.preventDefault();
    showAllPlantsPage();
});

//----------All Plants Page----------

//Handle individual plant clicks
$('ul').on('click', 'li', event => {
    event.preventDefault();
    showIndividualPlantPage();
});

//Handle add new plant button
$('#add-plant-button').click(event => {
    event.preventDefault();
    showNewPlantPage();
});

//----------Landing Page----------

//Handle back button
$('.landing-back').click(event => {
    event.preventDefault();
    showLandingPage();
});

//Handle signup 
$('#signup-save').click(event => {
    event.preventDefault();
    showAllPlantsPage();
});

//Handle login 
$('#login-save').click(event => {
    event.preventDefault();

    const username = $('#usernameInput').val();
    const password = $('#userPwInput').val();

    if (username == "") {
        alert('Please enter your user name');
    } else if (password =="") {
        alert('Please enter your password');
    }
    else {
        postLoginForm('/users/login', username, password)
            .then(data => console.log(data))
            .then(showAllPlantsPage());
            .catch(error => console.error(error));
    }
});

//Handle Log In click 
$('#login-button').click(event => {
    event.preventDefault();
    showLoginPage();
});

//Handle Sign Up click
$('#signup-button').click(event => {
    event.preventDefault();
    showSignupPage();
});

//--------Doc Ready-------

//Document ready function
$(document).ready(function() {
    $('#all-plants-page').hide();
    $('#new-plant-page').hide();
    $('#individual-plant-page').hide();
    $('#edit-plant-page').hide();
    $('#water-plant-page').hide();
});