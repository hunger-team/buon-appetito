// function validation() {
//   let firstName = document.getElementById("firstName").value;
//   let lastName = document.getElementById("lastName").value;
//   if (firstName == "" || lastName == "") {
//     alert("Full name must be filled out");
//   }
// }



function showAlert(message) {
    var alertBox = document.createElement('div');
    alertBox.className = 'alert';

    var messageElement = document.createElement('p');
    messageElement.textContent = message;

    var closeButton = document.createElement('button');
    closeButton.textContent = 'Close';

    closeButton.addEventListener('click', function () {
        alertBox.remove();
    });

    alertBox.appendChild(messageElement);
    alertBox.appendChild(closeButton);

    document.body.appendChild(alertBox);
}




function checkFun(e) {
    e.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    if (firstName == "" || lastName == "") {
        showAlert("Full name must be filled out");
    } else {
        let guests = document.getElementById("guests").value;
        let date = document.getElementById("date").value;
        let savedDates = localStorage.getItem('savedDates');

        if (savedDates) {
            savedDates = JSON.parse(savedDates);
            if (savedDates.includes(date)) {
                showAlert(`Sorry ${firstName}, The restaurant is fully booked on ${date}`);
            } else {
                savedDates.push(date);
                localStorage.setItem('savedDates', JSON.stringify(savedDates));
                showAlert(`Welcome ${firstName}, Your reservation on ${date} for ${guests} guests is confirmed!`);
            }
        } else {
            datesArray = [date];
            localStorage.setItem('savedDates', JSON.stringify(datesArray));
            showAlert(`Welcome ${firstName}, Your reservation on ${date} for ${guests} guests is confirmed!`);
        }
    }
}


let form = document.getElementsByTagName("form")[0];
form.addEventListener('submit', checkFun);