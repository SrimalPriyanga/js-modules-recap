import getSessions, * as otherAll from "./sessionRepository.js";

function render() {
  var list = document.querySelector("#sessions");
  if (!list) return;
  list.innerHTML = otherAll.sessionTemplate(data.listItems);
}

var data = {
  listItems: [],
};

getSessions().then((sessions) => {
  console.log("promises!");
  data.listItems = sessions;
  render();
});
