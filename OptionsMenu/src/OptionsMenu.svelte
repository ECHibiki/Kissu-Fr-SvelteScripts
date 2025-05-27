<script>
    import { styleText } from "util";

  let eventLog = [];
  let eventlogtext = "";
  let optionState = "none";
  document.addEventListener("kissu-api-event" , function(event) {
    const eventData = event.detail;
    if (eventData && eventData.signal == "option-menu-state") {
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

<div class="window-cover" style="display: {optionState};" id="startup-window-cover">
  <div class="object-window startup-window react-draggable" style="width: 400px; height: 300px; left: 50px; top: 50px;">
    <div class="handle" id="startup-window-handle">
      <svg class="svg-icon close-window-icon startup-close-icon">
        <title>close window</title><use href="/styles/fa/svgs/regular.svg#rectangle-xmark"></use>
      </svg>
      <span class="frame-title">Dev Console</span>
    </div>
    <div class="startup-window-contents">
      <div>This menu tracks the events kissu fires on page activity. Ask for documention in /b/ if you want to use this info for scripts</div>
      <textarea style="width: 100%; height:100%" id="startup-window-textarea" readonly bind:value={eventlogtext} ></textarea>
    </div>
  </div>
</div>

<style>

</style>
