const navbar = document.querySelector('.navbar') ;
const cursor = navbar.lastElementChild ;
const panorama = document.querySelector('.panorama') ;

const navbarWidth = parseFloat(
    getComputedStyle(
      navbar.firstElementChild
    ).width
) 
const sectionWidth = parseFloat(
    getComputedStyle(
      panorama.firstElementChild
    ).width
) 

navbar.addEventListener('click', function(e){
  if(e.target.tagName != "LI") return ;

  const currentActive = document.querySelector('.active') ;
  currentActive.classList.remove('active') ;

  index = e.target.dataset.index ;

  navbar.children[index].classList.add('active') ;
  cursor.style.transform = `translateX(${index * navbarWidth}px)` ;
  panorama.style.transform = `translateX(-${index * sectionWidth}px)` ;
})