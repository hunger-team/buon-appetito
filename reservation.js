// function validation() {
//   let firstName = document.getElementById("firstName").value;
//   let lastName = document.getElementById("lastName").value;
//   if (firstName == "" || lastName == "") {
//     alert("Full name must be filled out");
//   }
// }




function checkFun(e) {
    e.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    if (firstName == "" || lastName == "") {
        alert("Full name must be filled out");
    } else {
        let guests = document.getElementById("guests").value;
        let date = document.getElementById("date").value;
        let savedDates = localStorage.getItem('savedDates');

        if (savedDates) {
            savedDates = JSON.parse(savedDates);
            if (savedDates.includes(date)) {
                alert(`Sorry ${firstName}, The restaurant is fully booked on ${date}`);
            } else {
                savedDates.push(date);
                localStorage.setItem('savedDates', JSON.stringify(savedDates));
                alert(`Welcome ${firstName}, Your reservation on ${date} for ${guests} guests is confirmed!`);
            }
        } else {
            datesArray = [date];
            localStorage.setItem('savedDates', JSON.stringify(datesArray));
            alert(`Welcome ${firstName}, Your reservation on ${date} for ${guests} guests is confirmed!`);
        }
    }
}


let form = document.getElementsByTagName("form")[0];
form.addEventListener('submit', checkFun);