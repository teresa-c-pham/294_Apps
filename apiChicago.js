let api = "https://data.cityofchicago.org/resource/ygr5-vcbg.json";


// Add Button and Click Event Handler
let btn = document.createElement("button");
btn.id="search";
btn.innerText = "Search";

btn.addEventListener("click", (event) => {

  // Read input value and construct URL
  let value = document.querySelector("input#color").value;
  let url = api + "?color=" + value; 

  // Fetch URL
  fetch(url)
    .then( response => { return response.json()})
    .then( data => {
      console.log(data);

      // Output some information of each record
      data.forEach( record => {
        console.log(record);

        let car = document.createElement("h2");
        let content = document.createElement("p");

        car.innerText = record.plate + ", " + record.make;
        content.innerText = "Inventory Number: " + record.inventory_number + "\n" + record.towed_to_address + ", " + record.state;

        content.append(car);
        document.body.append(content);
      })
    })
  })

document.body.append(btn);