 // Instantiate MDC Drawer
  const listEl = document.querySelector('.mdc-drawer');
  // const listE2 = document.querySelector('.mdc-drawer .mdc-list .mdc-list-item');
  const drawer = mdc.drawer.MDCDrawer.attachTo(listEl);

  // Instantiate MDC Top App Bar
  const topAppBarEl = document.querySelector('.mdc-top-app-bar');
  const topAppBar = new mdc.topAppBar.MDCTopAppBar.attachTo(topAppBarEl);

  // Starting Screen
  document.querySelector("#div1").style.display = "block";
  
  const mainContentEl = document.querySelector('.main-content');
  topAppBar.setScrollTarget(mainContentEl);
  topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
  });

  // Add Event Handler for Each item on drawer list
  const listE2 = document.querySelectorAll(".mdc-drawer .mdc-list .mdc-list-item");
  listE2.forEach(entry => {
    // console.log(entry.id);
    entry.addEventListener('click', (event) => {
      
      // Update Screen + Hide Other Screens
    if (event.target.id == 'first' || event.target.id == 'pg1' || event.target.id == 'text1') {
      // Hide All Screens
      document.querySelectorAll("div.screen").forEach( screen => screen.style.display = "none");
      
      console.log(event.target.id);
      document.querySelector("#div1").style.display = "block";
    } else if (event.target.id == 'second' || event.target.id == 'pg2' || event.target.id == 'text2') {
      // Hide All Screens
      document.querySelectorAll("div.screen").forEach( screen => screen.style.display = "none");
      
      console.log(event.target.id);
      document.querySelector("#div2").style.display = "block";
    } else if (event.target.id == 'third' || event.target.id == 'pg3' || event.target.id == 'text3') {
      // Hide All Screens
      document.querySelectorAll("div.screen").forEach( screen => screen.style.display = "none");
      
      console.log(event.target.id);
      document.querySelector("#div3").style.display = "block";
    } else if (event.target.id == 'fourth' || event.target.id == 'pg4' || event.target.id == 'text4') {
      // Hide All Screens
      document.querySelectorAll("div.screen").forEach( screen => screen.style.display = "none");
      
      console.log(event.target.id);
      document.querySelector("#div4").style.display = "block";
    }
      // Else no changes

    // Close the Drawer after button click
    drawer.open = false;
    });
  });


