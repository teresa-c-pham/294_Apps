let api = "https://data.cityofchicago.org/resource/ygr5-vcbg.json";


// Add Button and Click Event Handler
let btns = document.querySelectorAll("button");

btns.forEach( btn => { btn.addEventListener("click", (event) => {
  console.log(event.target.id);
  
  // Hide All Screens
  document.querySelectorAll("div.screen").forEach( screen => screen.style.display = "none");
  document.querySelector("#div3").style.display = "block";
  let url = api;
  if (event.target.id == "colorVehicle") {
    let value = document.querySelector("input#color").value;
      url = api + "?color=" + value; 
      let database = new ChicagoDB(url);
  } else if (event.target.id == "styleVehicle") {
    let value = document.querySelector("input#style").value;
      url = api + "?style=" + value; 
      let database = new ChicagoDB(url);
  } else if (event.target.id == "stateVehicle") {
    let value = document.querySelector("input#state").value;
      url = api + "?state=" + value; 
      let database = new ChicagoDB(url);
  } else if (event.target.id == "makeVehicle") {
    let value = document.querySelector("input#make").value;
      url = api + "?make=" + value; 
      let database = new ChicagoDB(url);
  }


  });
});