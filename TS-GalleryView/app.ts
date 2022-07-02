let s = 0;  
displaySlides(s);  

function nextSlide(n?:any) {  
    displaySlides(s =s + n);  4
}  

function currentSlide(n:number) {  
    displaySlides(s = n);  
}  

function displaySlides(n:number) {  
    let i: number;  
    let im: any= document.getElementById('img1');
    let im1: any= document.getElementById('img2');
    let im2: any= document.getElementById('img3');
    let im3:any= document.getElementById('img4');
    let im4:any= document.getElementById('img5');
    let im5:any= document.getElementById('img6');
    let im6:any= document.getElementById('img7');
    let im7:any= document.getElementById('img8');
    let im8:any= document.getElementById('img9');
    let im9:any= document.getElementById('img10');
    let im10:any= document.getElementById('img11');


    //desc
    let info1=document.getElementById('desc1');
    let info2=document.getElementById('desc2');
    let info3=document.getElementById('desc3');
    let info4=document.getElementById('desc4');
    let info5=document.getElementById('desc5');
    let info6=document.getElementById('desc6');
    let info7=document.getElementById('desc7');
    let info8=document.getElementById('desc8');
    let info9=document.getElementById('desc9');
    let info10=document.getElementById('desc10');
    let info11=document.getElementById('desc11');

    fetch("./employee.json")
        .then(response => {
            return response.json();
        })

        .then(data => {

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
    info1.innerHTML=`
    <h4>Employee Name : ${data.employees[0].name} </h4>
        <h4>Designation : ${data.employees[0].designation} </h4>
         <h4>YearOfExperience : ${data.employees[0].yearofexperience} </h4>
         <h4>Project : ${data.employees[0].project} </h4>`;

         info2.innerHTML=`
    <h4>Employee Name : ${data.employees[1].name} </h4>
        <h4>Designation : ${data.employees[1].designation} </h4>
         <h4>YearOfExperience : ${data.employees[1].yearofexperience} </h4>
         <h4>Project : ${data.employees[1].project} </h4>`;

         info3.innerHTML=`
    <h4>Employee Name : ${data.employees[2].name} </h4>
        <h4>Designation : ${data.employees[2].designation} </h4>
         <h4>YearOfExperience : ${data.employees[2].yearofexperience} </h4>
         <h4>Project : ${data.employees[2].project} </h4>`;

         info4.innerHTML=`
    <h4>Employee Name : ${data.employees[3].name} </h4>
        <h4>Designation : ${data.employees[3].designation} </h4>
         <h4>YearOfExperience : ${data.employees[3].yearofexperience} </h4>
         <h4>Project : ${data.employees[3].project} </h4>`;

         info5.innerHTML=`
    <h4>Employee Name : ${data.employees[4].name} </h4>
        <h4>Designation : ${data.employees[4].designation} </h4>
         <h4>YearOfExperience : ${data.employees[4].yearofexperience} </h4>
         <h4>Project : ${data.employees[4].project} </h4>`;

         info6.innerHTML=`
    <h4>Employee Name : ${data.employees[5].name} </h4>
        <h4>Designation : ${data.employees[5].designation} </h4>
         <h4>YearOfExperience : ${data.employees[5].yearofexperience} </h4>
         <h4>Project : ${data.employees[5].project} </h4>`;

         info7.innerHTML=`
    <h4>Employee Name : ${data.employees[6].name} </h4>
        <h4>Designation : ${data.employees[6].designation} </h4>
         <h4>YearOfExperience : ${data.employees[6].yearofexperience} </h4>
         <h4>Project : ${data.employees[6].project} </h4>`;

         info8.innerHTML=`
    <h4>Employee Name : ${data.employees[7].name} </h4>
        <h4>Designation : ${data.employees[7].designation} </h4>
         <h4>YearOfExperience : ${data.employees[7].yearofexperience} </h4>
         <h4>Project : ${data.employees[7].project} </h4>`;

         info9.innerHTML=`
    <h4>Employee Name : ${data.employees[8].name} </h4>
        <h4>Designation : ${data.employees[8].designation} </h4>
         <h4>YearOfExperience : ${data.employees[8].yearofexperience} </h4>
         <h4>Project : ${data.employees[8].project} </h4>`;

         info10.innerHTML=`
    <h4>Employee Name : ${data.employees[9].name} </h4>
        <h4>Designation : ${data.employees[9].designation} </h4>
         <h4>YearOfExperience : ${data.employees[9].yearofexperience} </h4>
         <h4>Project : ${data.employees[9].project} </h4>`;

         info11.innerHTML=`
    <h4>Employee Name : ${data.employees[10].name} </h4>
        <h4>Designation : ${data.employees[10].designation} </h4>
         <h4>YearOfExperience : ${data.employees[10].yearofexperience} </h4>
         <h4>Project : ${data.employees[10].project} </h4>`;
} );



    var slides = document.getElementsByClassName('slideShow') as HTMLCollectionOf<HTMLElement>;  
    if (n > slides.length)
     { 
         s = 1 
    }  
    if (n < 1) { 
        s = slides.length 
    }  
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }  
   slides[s - 1].style.display = "block";  



}