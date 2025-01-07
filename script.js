var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-links")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");
}
var sidemenu = document.getElementById("sidemenu");
var isMenuOpen = false; // Track menu state

function openmenu() {
   sidemenu.style.right = "0";
   isMenuOpen = true; // Set menu state to open
}

function closemenu() {
   sidemenu.style.right = "-200px";
   isMenuOpen = false; // Set menu state to closed
}

// Close menu when clicking anywhere outside it
document.addEventListener("click", function (event) {
   // Check if menu is open and click is outside the menu
   if (
       isMenuOpen &&
       !sidemenu.contains(event.target) && // Click not on the menu
       !event.target.classList.contains("fa-bars") // Click not on the menu icon
   ) {
       closemenu();
   }
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbwGK0kKewEhV7qiYBUGuCIp2ZppxK537g5PccsQSAnXIQbElx8JR3UuYEngwI-oGNkTiw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => { msg.innerHTML = "Message sent Successfully"
   setTimeout(function(){
       msg.innerHTML = ""
   },5000)
   form.reset()
})

.catch(error => console.error('Error!', error.message))
})