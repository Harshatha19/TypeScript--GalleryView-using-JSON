var s = 1;
displaySlides(s);
function nextSlide(n) {
    displaySlides(s = s + n);
}
function currentSlide(n) {
    displaySlides(s = n);
}
function displaySlides(n) {
    var i;
    var im = document.getElementById('img1');
    var im1 = document.getElementById('img2');
    var im2 = document.getElementById('img3');
    var im3 = document.getElementById('img4');
    var im4 = document.getElementById('img5');
    var im5 = document.getElementById('img6');
    var im6 = document.getElementById('img7');
    var im7 = document.getElementById('img8');
    var im8 = document.getElementById('img9');
    var im9 = document.getElementById('img10');
    var im10 = document.getElementById('img11');
    //desc
    var info1 = document.getElementById('desc1');
    var info2 = document.getElementById('desc2');
    var info3 = document.getElementById('desc3');
    var info4 = document.getElementById('desc4');
    var info5 = document.getElementById('desc5');
    var info6 = document.getElementById('desc6');
    var info7 = document.getElementById('desc7');
    var info8 = document.getElementById('desc8');
    var info9 = document.getElementById('desc9');
    var info10 = document.getElementById('desc10');
    var info11 = document.getElementById('desc11');
    fetch("./employee.json")
        .then(function (response) {
        return response.json();
    })
        .then(function (data) {
        im.src = data.employees[0].image;
        im1.src = data.employees[1].image;
        im2.src = data.employees[2].image;
        im3.src = data.employees[3].image;
        im4.src = data.employees[4].image;
        im5.src = data.employees[5].image;
        im6.src = data.employees[6].image;
        im7.src = data.employees[7].image;
        im8.src = data.employees[8].image;
        im9.src = data.employees[9].image;
        im10.src = data.employees[10].image;
        //for Description display
        info1.innerHTML = "\n    <h4>Employee Name : ".concat(data.employees[0].name, " </h4>\n        <h4>Designation : ").concat(data.employees[0].designation, " </h4>\n         <h4>YearOfExperience : ").concat(data.employees[0].yearofexperience, " </h4>\n         <h4>Project : ").concat(data.employees[0].project, " </h4>");
        info2.innerHTML = "\n    <h4>Employee Name : ".concat(data.employees[1].name, " </h4>\n        <h4>Designation : ").concat(data.employees[1].designation, " </h4>\n         <h4>YearOfExperience : ").concat(data.employees[1].yearofexperience, " </h4>\n         <h4>Project : ").concat(data.employees[1].project, " </h4>");
        info3.innerHTML = "\n    <h4>Employee Name : ".concat(data.employees[2].name, " </h4>\n        <h4>Designation : ").concat(data.employees[2].designation, " </h4>\n         <h4>YearOfExperience : ").concat(data.employees[2].yearofexperience, " </h4>\n         <h4>Project : ").concat(data.employees[2].project, " </h4>");
        info4.innerHTML = "\n    <h4>Employee Name : ".concat(data.employees[3].name, " </h4>\n        <h4>Designation : ").concat(data.employees[3].designation, " </h4>\n         <h4>YearOfExperience : ").concat(data.employees[3].yearofexperience, " </h4>\n         <h4>Project : ").concat(data.employees[3].project, " </h4>");
        info5.innerHTML = "\n    <h4>Employee Name : ".concat(data.employees[4].name, " </h4>\n        <h4>Designation : ").concat(data.employees[4].designation, " </h4>\n         <h4>YearOfExperience : ").concat(data.employees[4].yearofexperience, " </h4>\n         <h4>Project : ").concat(data.employees[4].project, " </h4>");
        info6.innerHTML = "\n    <h4>Employee Name : ".concat(data.employees[5].name, " </h4>\n        <h4>Designation : ").concat(data.employees[5].designation, " </h4>\n         <h4>YearOfExperience : ").concat(data.employees[5].yearofexperience, " </h4>\n         <h4>Project : ").concat(data.employees[5].project, " </h4>");
        info7.innerHTML = "\n    <h4>Employee Name : ".concat(data.employees[6].name, " </h4>\n        <h4>Designation : ").concat(data.employees[6].designation, " </h4>\n         <h4>YearOfExperience : ").concat(data.employees[6].yearofexperience, " </h4>\n         <h4>Project : ").concat(data.employees[6].project, " </h4>");
        info8.innerHTML = "\n    <h4>Employee Name : ".concat(data.employees[7].name, " </h4>\n        <h4>Designation : ").concat(data.employees[7].designation, " </h4>\n         <h4>YearOfExperience : ").concat(data.employees[7].yearofexperience, " </h4>\n         <h4>Project : ").concat(data.employees[7].project, " </h4>");
        info9.innerHTML = "\n    <h4>Employee Name : ".concat(data.employees[8].name, " </h4>\n        <h4>Designation : ").concat(data.employees[8].designation, " </h4>\n         <h4>YearOfExperience : ").concat(data.employees[8].yearofexperience, " </h4>\n         <h4>Project : ").concat(data.employees[8].project, " </h4>");
        info10.innerHTML = "\n    <h4>Employee Name : ".concat(data.employees[9].name, " </h4>\n        <h4>Designation : ").concat(data.employees[9].designation, " </h4>\n         <h4>YearOfExperience : ").concat(data.employees[9].yearofexperience, " </h4>\n         <h4>Project : ").concat(data.employees[9].project, " </h4>");
        info11.innerHTML = "\n    <h4>Employee Name : ".concat(data.employees[10].name, " </h4>\n        <h4>Designation : ").concat(data.employees[10].designation, " </h4>\n         <h4>YearOfExperience : ").concat(data.employees[10].yearofexperience, " </h4>\n         <h4>Project : ").concat(data.employees[10].project, " </h4>");
    });
    var slides = document.getElementsByClassName('slideShow');
    if (n > slides.length) {
        s = 1;
    }
    if (n < 1) {
        s = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[s - 1].style.display = "block";
}
