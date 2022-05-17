const path ="../assests/"
const images = [
    "badebro_st_oeksoe",
    "bjerg_trekking",
    "frosne_baade",
    "frossen_vandfald",
    "hav_agaete",
    "ishav_lgstr",
    "istralandia",
    "katedral_las_palmas",
    "snefald_rold_skov",
    "rold_skov",
    "rubjerg_knude_fyr",
    "main_sqare_krakow",
    "solnedgang_istrien",
]

const fileexstention = ".jpg"
const gallery = document.querySelector('#gallery')  
const picShow = document.querySelector('#bigPic')
const imgTag = document.querySelector('#imgTag')
const backBtn = document.querySelector('#backBtn')
const h1 = document.querySelector('#title')
function makeGallery() {
    for(let item of images) {
 const img = document.createElement("img");
 img.src = path + item + fileexstention;
 //img.setAttribute('')
 img.setAttribute('onclick', 'bigPic()');
 img.setAttribute('onmouseover', `h1.innerText = "${item}"`)
 img.style.width = "100%";
 gallery.appendChild(img);
  }
}
  
  function bigPic(){
    const img = document.createElement("img");
    picShow.innerHTML = `<img src="${path}${h1.innerText}${fileexstention}">`
gallery.style.display = "none"
backBtn.style.display = "block"
picShow.style.display = "block"

}
function back() {
    gallery.style.display = "block"
    gallery.style.display = "grid"

    backBtn.style.display = "none"
    picShow.style.display = "none"
    
}