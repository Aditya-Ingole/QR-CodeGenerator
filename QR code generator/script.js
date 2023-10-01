const wrapper = document.querySelector(".wrapper"),
qrInput =  wrapper.querySelector(".form input"),
generateBtn =  wrapper.querySelector(".form button"),
qrImg =  wrapper.querySelector(".qr-code img");


generateBtn.addEventListener("click" , ()=> {
    let qrValue = qrInput.value;
    if(!qrValue) return; // if the input is empty then return from here. 
    generateBtn.innerText = "Generatting QR Code...";
    // console.log(qrValue);   
    // geting a OR code  of user enterd value using qrserver.
    // api and passing the api retured img scr ti qrImg .
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener("load",() => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
})


qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        wrapper.classList.remove("active");
    }
})