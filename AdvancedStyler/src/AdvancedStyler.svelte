<div id="advanced-styler-window" class="window-cover" style="display: {optionState};">
  <div class="object-window startup-window react-draggable" style="width: 910px; height: 600px; top: 206px; left: 30%;">
    <div class="" id="startup-window-handle" style="cursor:initial;">
      <svg class="svg-icon close-window-icon startup-close-icon" on:click={()=> {
          console.log("close window clicked");
          optionState = "none";quote
        }}>
        <title>close window</title><use href="/styles/fa/svgs/regular.svg#rectangle-xmark"></use>
      </svg>
      <span class="frame-title">Onne-Chan Inspired Styler</span>
    </div>
    <div class="startup-window-contents">

      <div style="display:grid;
      grid-template-columns: 1fr 1fr 1fr; 
      grid-template-rows; 1fr 1fr ; gap: 10px; padding: 10px;">
        
        <div>
          <label for="theme-name">Theme Name:</label>
          <input id="theme-name" type="color" />
        </div>
        <div>
          <label for="author-name">Author Name:</label>
          <input id="author-name" type="color" />
        </div>
        <div>
          <label for="author-notes">Author Notes:</label>
          <input id="author-notes" type="color" />
        </div>
        
        <div>
          <label for="name-color">Name Color:</label>
          <input id="name-color" type="color" />
        </div>
        <div>
          <label for="sage-color">Sage Color:</label>
          <input id="sage-color" type="color" />
        </div>
        <div>
          <label for="post-details-text">Post Details Text:</label>
          <input id="post-details-text" type="color" />
        </div>

        
        <div>
          <label for="body-text">Body Text:</label>
          <input id="body-text" type="color" />
        </div>
        <div>
          <label for="clickable-text">Clickable Text:</label>
          <input id="post-details-text" type="color" />
        </div>
        <div>
          <label for="quote-text">Quote Text:</label>
          <input id="quote-text" type="color" />
        </div>

        <div>
          <label for="yen-text">Yen Text:</label>
          <input id="yen-text" type="color" />
        </div>
        <div>
          <label for="post-background">Post Background:</label>
          <input id="cite-text" type="color" />
        </div>

      </div>
      
      <button on:click={() => {
        writeStyles();
        applyStyles();
      }}>Save+Apply</button>
      <button on:click={() => {
        resetStyles();
      }}>Reset</button>
    </div>
  </div>
</div>

<style>

</style>

<script>

  function setDefaultStyles(){
    // read from the window to fill each item
  }
  function setStoredStyles(){
    // fill each item with the stored styles
    let styles = localStorage.getItem("advancedStyles");
  }
  function writeStyles(){
    let themeName = document.getElementById("theme-name").value;
    let authorName = document.getElementById("author-name").value;
    let authorNotes = document.getElementById("author-notes").value;
    let nameColor = document.getElementById("name-color").value;
    let sageColor = document.getElementById("sage-color").value;
    let postDetailsText = document.getElementById("post-details-text").value;
    let bodyText = document.getElementById("body-text").value;
    let clickableText = document.getElementById("clickable-text").value;
    let postBackground = document.getElementById("post-background").value;
    let quoteText = document.getElementById("quote-text").value;
    let styles = `
      :root {
        --theme-name: ${themeName};
        --author-name: ${authorName};
        --author-notes: ${authorNotes};
        --name-color: ${nameColor};
        --sage-color: ${sageColor};
        --post-details-text: ${postDetailsText};
        --body-text: ${bodyText};
        --clickable-text: ${clickableText};
        --post-background: ${postBackground};
        --quote-text: ${quoteText};
      }
    `;
    localStorage.setItem("advancedStyles", styles);
  }
  function applyStyles(){
    const newStyle = document.createElement("style")
    newStyle.textContent = localStorage.getItem("advancedStyles");
    newStyle.id = "advanced-styles";
    const existingStyle = document.getElementById("advanced-styles");
    if (existingStyle) {
      existingStyle.remove();
    }
    document.head.appendChild(newStyle);
    console.log("Styles applied"  , newStyle);
  }
  function resetStyles(){
    localStorage.removeItem("advancedStyles");
    const existingStyle = document.getElementById("advanced-styles");
    if (existingStyle) {
      existingStyle.remove();
    }
    console.log("Styles reset");
  }


  let optionState = "none";
  
  document.body.addEventListener("kissu-api-event" , function(event) {
    const eventData = event.detail;
    if (eventData && eventData.signal == "advanced-styler-menu-state") {
      if( eventData.state == true ) {
        optionState = "block"
      } else {
        optionState = "none";
      }
    }

    if (eventData && eventData.signal == "stylesheet-changed") {
      console.log("Style changed event received");
      // when a new style is selected change the values to default , then unset if there is a set style
      setDefaultStyles();
      setStoredStyles();
    }

  });

  setDefaultStyles();
  setStoredStyles();
  applyStyles();

</script>