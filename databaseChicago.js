class ChicagoDB {
  // Private Variables in DB
  #totalRecords = 0;
  #db;

  constructor(url) {
    this.db = new Dexie("ChicagoDB"); // Store our notes in a database
    
    console.log("here");
    this.db.version(2).stores({
      notes:
        `inventory_number,
        style,
        color,
        state,
        make`,
    });

    // Add records to database
    console.log("here");
    let api = url;
    fetch(api)
    .then((response) => { return response.json()})
    .then((data) => {
      data.forEach( record => {
      let item = document.querySelector(".mdc-list-item#query").cloneNode(true);
      let update = item.querySelector("span.mdc-list-item__text");
        let result = {inventory_number: record.inventory_number, style: record.style, color: record.color,
                      state: record.state, make: record.make};
        this.db.notes.add(result);

        console.log(result);
        // Update results on screen
        update.innerHTML = update.innerHTML + "\n" + JSON.stringify(result);
        let div = document.getElementById("div3");
        div.appendChild(item);
      });
    });
  }
}