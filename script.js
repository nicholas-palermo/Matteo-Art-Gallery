function makeCurrent(sectionID) {

    for(let i = 1; i < 7; i++) {
        let section = document.querySelector(`#dot${i}`);
        console.log(section.classList);
        section.classList.remove('current');
        console.log(section.classList);
    }

    let section = document.querySelector(`#dot${sectionID}`);
    console.log(section.classList);
    section.classList.add('current');
}

window.addEventListener('scroll', function() {
	var element = document.querySelector('#home-section1');
	var position = element.getBoundingClientRect();

	// checking whether fully visible
	if(position.top >= 0 && position.bottom <= window.innerHeight + (window.innerHeight/2)) {
		for(let i = 1; i < 7; i++) {
            let section = document.querySelector(`#dot${i}`);
            section.classList.remove('current');
        }
        let section = document.querySelector('#dot1');
        section.classList.add('current');
	}
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#home-section2');
	var position = element.getBoundingClientRect();

	// checking whether fully visible
	if(position.top >= 0 && position.bottom <= window.innerHeight + (window.innerHeight/2)) {
		for(let i = 1; i < 7; i++) {
            let section = document.querySelector(`#dot${i}`);
            section.classList.remove('current');
        }
        let section = document.querySelector('#dot2');
        section.classList.add('current');
	}
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#home-section3');
	var position = element.getBoundingClientRect();

	// checking whether fully visible
	if(position.top >= 0 && position.bottom <= window.innerHeight + (window.innerHeight/2)) {
		for(let i = 1; i < 7; i++) {
            let section = document.querySelector(`#dot${i}`);
            section.classList.remove('current');
        }
        let section = document.querySelector('#dot3');
        section.classList.add('current');
	}
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#home-section4');
	var position = element.getBoundingClientRect();

	// checking whether fully visible
	if(position.top >= 0 && position.bottom <= window.innerHeight + (window.innerHeight/2)) {
		for(let i = 1; i < 7; i++) {
            let section = document.querySelector(`#dot${i}`);
            section.classList.remove('current');
        }
        let section = document.querySelector('#dot4');
        section.classList.add('current');
	}
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#home-section5');
	var position = element.getBoundingClientRect();

	// checking whether fully visible
	if(position.top >= 0 && position.bottom <= window.innerHeight + (window.innerHeight/2)) {
		for(let i = 1; i < 7; i++) {
            let section = document.querySelector(`#dot${i}`);
            section.classList.remove('current');
        }
        let section = document.querySelector('#dot5');
        section.classList.add('current');
	}
});

window.addEventListener('scroll', function() {
	var element = document.querySelector('#home-section6');
	var position = element.getBoundingClientRect();

	// checking whether fully visible
	if(position.top >= 0 && position.bottom <= window.innerHeight + (window.innerHeight/2)) {
		for(let i = 1; i < 7; i++) {
            let section = document.querySelector(`#dot${i}`);
            section.classList.remove('current');
        }
        let section = document.querySelector('#dot6');
        section.classList.add('current');
	}
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
function clickArt(art) {
    var img = art;
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

function selectArticle(selection) {
   console.log(selection.id);
    var oldOption = document.querySelector(".selected-option");
    oldOption.classList.remove("selected-option");
    oldOption.style.backgroundColor = "transparent";
    oldOption.style.border = "none";
    
    selection.classList.add("selected-option");
    selection.style.backgroundColor = "orange";
    selection.style.border = "solid orange 1px"
    selection.style.borderRadius = "5px"

    var oldArticle = document.querySelector(".selected-article");
    oldArticle.classList.remove("selected-article");
    oldArticle.style.display = "none";

    var newArticle = document.getElementById(selection.id+`-article`);
    newArticle.classList.add("selected-article");
    newArticle.style.display = "flex";
}