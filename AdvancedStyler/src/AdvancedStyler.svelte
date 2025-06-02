<style>
  .advanced-style-option  {
    display: inline-grid;
    grid-template-columns: 160px 118px;
    grid-template-rows: 25px;
  }
  .advanced-color-selector {
    display: inline;
    height: 24px;
    border:unset;
  }
  .advanced-theme-text {
    height: 19px;
  }
</style>

<div id="advanced-styler-window" class="window-cover" style="display: {optionState}; z-index: 1000000; position: fixed;">
  <div class="object-window startup-window react-draggable" style="width: 910px; height: 600px; top: 50px; left: 30%;">
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
      grid-template-rows; 1fr 1fr ; gap: 10px; padding: 22px 10px;">
        
        <div class="advanced-style-option">
          <label for="theme-name">Theme Name:</label>
          <input id="theme-name" type="text" class="advanced-theme-text" />
        </div>
        <div  class="advanced-style-option">
          <label for="author-name">Author Name:</label>
          <input id="author-name" type="text"  class="advanced-theme-text" />
        </div>
        <div  class="advanced-style-option">
          <label for="author-notes">Author Notes:</label>
          <input id="author-notes" type="text" class="advanced-theme-text" />
        </div>
        
        <div  class="advanced-style-option">
          <label for="name-color">Name Color:</label>
          <input id="name-color" type="color"  class="advanced-color-selector"/>
        </div>
        <div  class="advanced-style-option">
          <label for="sage-color">Sage Color:</label>
          <input id="sage-color" type="color"  class="advanced-color-selector"/>
        </div>
        <div  class="advanced-style-option">
          <label for="email-color">Email Color:</label>
          <input id="email-color" type="color"  class="advanced-color-selector"/>
        </div>

        <div  class="advanced-style-option">
          <label for="subject-color">OP Subject Color:</label>
          <input id="subject-colo" type="color"  class="advanced-color-selector"/>
        </div>
        <div  class="advanced-style-option">
          <label for="sage-color-hover">Sage Hover Color:</label>
          <input id="sage-color-hover" type="color"  class="advanced-color-selector"/>
        </div>
        <div  class="advanced-style-option">
          <label for="email-color-hover">Email Hover Color:</label>
          <input id="sage-color-hover" type="color"  class="advanced-color-selector"/>
        </div>


        <div  class="advanced-style-option">
          <label for="post-details-text">Post Details Text:</label>
          <input id="post-details-text" type="color"  class="advanced-color-selector"/>
        </div>
        <div  class="advanced-style-option">
          <label for="body-text">Body Text:</label>
          <input id="body-text" type="color"  class="advanced-color-selector"/>
        </div>
        <div  class="advanced-style-option">
          <label for="clickable-text">Clickable Text:</label>
          <input id="post-details-text" type="color"  class="advanced-color-selector"/>
        </div>

        <div  class="advanced-style-option">
          <label for="clickable-text-hover">Clickable Text Hover:</label>
          <input id="post-details-text" type="color"  class="advanced-color-selector"/>
        </div>
        <div  class="advanced-style-option">
          <label for="quote-text">Quote Text:</label>
          <input id="quote-text" type="color"  class="advanced-color-selector"/>
        </div>
        <div  class="advanced-style-option">
          <label for="yen-text">Yen Text:</label>
          <input id="yen-text" type="color"  class="advanced-color-selector"/>
        </div>

        <div  class="advanced-style-option">
          <label for="post-background">Post Background:</label>
          <input id="post-background" type="color"  class="advanced-color-selector"/>
        </div>

      </div>
      
      <button on:click={() => {
        writeStyles();
        applyStyles(localStorage.getItem("advancedStyles"));
        document.getElementById("advanced-styler-window").style.display = "none";
      }}>Save+Apply</button>
      <button on:click={() => {
        const styles = buildStyles();
        applyStyles(styles);
      }}>Apply</button>
      <button on:click={() => {
        resetStyles();
      }}>Reset</button>
    </div>
  </div>
</div>



<script>

  function setDefaultStyles(){
    // read from the window to fill each item
  }
  function setStoredStyles(){
    // fill each item with the stored styles
    let styles = localStorage.getItem("advancedStyles");
  }
  function buildStyles(){
      let themeName = document.getElementById("theme-name").value;
    let authorName = document.getElementById("author-name").value;
    let authorNotes = document.getElementById("author-notes").value;

    let nameColor = document.getElementById("name-color").value;
    let sageColor = document.getElementById("sage-color").value;
    let sageColorHover = document.getElementById("sage-color-hover").value;

    let postDetailsText = document.getElementById("post-details-text").value;
    let bodyText = document.getElementById("body-text").value;
    let clickableText = document.getElementById("clickable-text").value;

    let clickableTextHover = document.getElementById("clickable-text-hover").value;
    let quoteText = document.getElementById("quote-text").value;
    let yenText = document.getElementById("yen-text").value;

    let postBackground = document.getElementById("post-background").value;
    let styles = `
      :root {
        --theme-name: ${themeName};
        --author-name: ${authorName};
        --author-notes: ${authorNotes};

        --name-color: ${nameColor};
        --sage-color: ${sageColor};
        --sage-color-hover: ${sageColorHover};

        --post-details-text: ${postDetailsText};
        --body-text: ${bodyText};
        --clickable-text: ${clickableText};

        --clickable-text-hover: ${clickableTextHover};
        --quote-text: ${quoteText};
        --yen-text: ${yenText};
        
        --post-background: ${postBackground};
        
      }
    `;
  }
  function writeStyles(){
    localStorage.setItem("advancedStyles", buildStyles());
  }
  function applyStyles(styleText){
    const newStyle = document.createElement("style")
    newStyle.textContent = styleText;
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