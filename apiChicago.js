let api = "https://data.cityofchicago.org/resource/ygr5-vcbg.json";


// Add Button and Click Event Handler
let btns = document.querySelectorAll("button");

btns.forEach( btn => { btn.addEventListener("click", (event) => {
  console.log(event.target.id);
  
  // Hide All Screens
  document.querySelectorAll("div.screen").forEach( screen => screen.style.display = "none");
  document.querySelector("#div3").style.display = "block";

  if (event.target.id == "colorVehicle") {
    let value = document.querySelector("input#color").value;
      let url = api + "?color=" + value; 
      
      let database = new ChicagoDB(url);
  }
  });
});