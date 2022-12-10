let apiNY = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=GiyBc8a7fvNsNtOETglLeGSofU7QM6kG";

// Add Button and Click Event Handler
let btn = document.getElementById("entryArticle");

btn.addEventListener("click", (event) => {
  console.log(event.target.id);

  // Hide All Screens
  document.querySelectorAll("div.screen").forEach( screen => screen.style.display = "none");
  document.querySelector("#div3").style.display = "block";
  let url = apiNY;
  
  if (event.target.id == "entryArticle") {
    let value = document.querySelector("input#entry").value;
      url = url + "&fq=" + value; 
      let database = new NYTimesDB(url);
  } 
});