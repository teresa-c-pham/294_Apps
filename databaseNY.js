class NYTimesDB {
  // Private Variables in DB
  #totalRecords = 0;
  #db;

  constructor(url) {
    this.db = new Dexie("NYTimesDB"); // Store our notes in a database
    
    this.db.version(1).stores({
      notes:
        `web_url,
        source,
        abstract,
        word_count`,
    });

    // Add records to database
    let apiNYT = url;
    fetch(apiNYT)
    .then((response) => { return response.json()})
    .then((data) => {
      // Clear current results in Div
      let div = document.getElementById("div3");
      let listEntries = document.getElementById("listDB");
      let cloneList = listEntries.cloneNode(true);

      listEntries.remove();
      const elements = div.querySelectorAll(".mdc-list-item");
      elements.forEach(element => {
        element.remove();
      });

      console.log(data);
      data.response.docs.forEach( record => {
        // console.log(div);
        
      let item = cloneList.querySelector(".mdc-list-item#query").cloneNode(true);
      let update = item.querySelector("span.mdc-list-item__text");
        let result = {web_url: record.web_url, source: record.source, abstract: record.abstract,
                      word_count: record.word_count};
        this.db.notes.add(result);

        // console.log(result);
        // Update results on screen
        update.innerHTML = update.innerHTML + "\n" + JSON.stringify(result);

        cloneList.appendChild(item);
      });
      div.appendChild(cloneList);
    });
  }
}