const maincontainer = document.querySelector(".main-container");
const thankyoucontainer = document.querySelector(".thank-you-container");
const submitbtn = document.getElementById("submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".rate-btn");

submitbtn.addEventListener("click", () => {
    thankyoucontainer.classList.remove("hidden")
    maincontainer.style.display = "none";
})
rates.forEach((rate) => {
    rate.addEventListener("click", () =>{
        rating.innerHTML = rate.innerHTML;
    })
})