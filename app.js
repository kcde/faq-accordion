const showBtns = document.querySelectorAll(".show-btn")
const showButton = document.querySelector(".show-btn")

showBtns.forEach(showBtn => {
    
    showBtn.addEventListener("click", (e)=>{
        showBtns.forEach(btn => {
            btn.parentElement.parentElement.classList.remove('show')
        })

        e.target.parentElement.parentElement.classList.add("show")
        
    })

})