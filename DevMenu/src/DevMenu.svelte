<script>

  let eventLog = [];
  let eventlogtext = "";
  let optionState = "none";
  document.body.addEventListener("kissu-api-event" , function(event) {
    console.log("kissu-api-event", event);
    const eventData = event.detail;
    if (eventData && eventData.signal == "developer-menu-state") {
      if( eventData.state == true ) {
        optionState = "block"
      } else {
        optionState = "none";
      }
    }
    const timestamp = new Date().toLocaleTimeString();
    eventLog.push(`${timestamp}: ${JSON.stringify(eventData)}`);
    const textarea = document.getElementById("startup-window-textarea");
    textarea.value = eventLog.join("\n");
    textarea.scrollTop = textarea.scrollHeight; // Auto-scroll to the bottom
  });
</script>

<div id="developer-window" class="window-cover" style="display: {optionState};">
  <div class="object-window startup-window react-draggable" style="width: 910px; height: 300px; top: 206px; left: 245px;">
    <div class="" id="startup-window-handle" style="cursor:initial;">
      <svg class="svg-icon close-window-icon startup-close-icon" on:click={
        ()=> {
          console.log("close window clicked");
          optionState = "none";
        }
      }>
        <title>close window</title><use href="/styles/fa/svgs/regular.svg#rectangle-xmark"></use>
      </svg>
      <span class="frame-title">Dev Console</span>
    </div>
    <div class="startup-window-contents">
      <textarea style="width: 904px ; height:192px" id="startup-window-textarea" readonly bind:value={eventlogtext} ></textarea>
      <div>This menu tracks the events kissu fires on page activity. Ask for documention in /b/ if you want to use this info for scripts. 
        For example, this window was made in Svelte to interact with the site but is not part of the major bundle.<br/>
        Listen for custom events on 'kissu-api-event'</div>
    </div>
  </div>
</div>

<style>

</style>
