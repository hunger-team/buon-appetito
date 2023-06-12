let arr = [];

function EmployeeInformation(fullName, img, icon) {
    this.fullName = fullName;
    this.img = img;
    this.icon = icon

    arr.push(this);
}

EmployeeInformation.prototype.renderInformation = function () {
    let div = document.createElement("div");
    const founderImage = document.createElement("img");
    founderImage.src = this.img;
    div.appendChild(founderImage);

    const founderName = document.createElement("p");
    founderName.textContent = `${this.fullName}`;
    div.appendChild(founderName);


    const founderInstagram = document.createElement("a");
    founderInstagram.href = this.icon;
    founderInstagram.classList = "fa fa-instagram"
    div.appendChild(founderInstagram);

    const founderLinkedin = document.createElement("a");
    founderLinkedin.href = this.icon;
    founderLinkedin.classList = "fa fa-linkedin-square"
    div.appendChild(founderLinkedin);

    return div;
};



const emp1 = new EmployeeInformation("Lana Abbas", "./images/about-us/founders/lanaAbbas.jpeg", "https://instagram.com/");
const emp2 = new EmployeeInformation("Raghad Narmouq", "./images/about-us/founders/raghadNarmouq.jpg", "https://instagram.com/");
const emp3 = new EmployeeInformation("Balqis Abu-Hummam", "./images/about-us/founders/balqisAbu-Hummam1.jpeg", "https://instagram.com/");
const emp4 = new EmployeeInformation("Ahmad Alsoub", "./images/about-us/founders/ahmadAlsoub.jpg", "https://instagram.com/");
const emp5 = new EmployeeInformation("Osama Yaseen", "./images/about-us/founders/osamaYaseen.jpg", "https://instagram.com/");
const emp6 = new EmployeeInformation("Muhye Aldeen", "./images/about-us/founders/muhyeAldeen.jpg", "https://instagram.com/");

let divv = document.getElementById("founders");
for (let i = 0; i < arr.length; i++) {
    let div = arr[i].renderInformation();
    divv.appendChild(div);
}

