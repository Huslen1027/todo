const root = document.getElementById("root");
function ProvideTag(tagName, tagClass, TagId) {
  const tag = document.createElement(`${tagName}`);
  if (tagClass != "" && tagClass != undefined) {
    tag.setAttribute("class", `${tagClass}`);
  }
  if (TagId != "" && TagId != undefined) {
    tag.setAttribute("id", `${TagId}`);
  }
  return tag;
}
//function duusjin
let boardName = [
  {
    title: "Todo",
    arr: [
      //{
      //  title: "task1"
      //   description: "desc",
      //   priority: "medium",
      //   level: 1,v
      //}
    ],
  },
  {
    title: "Inprogress",
    arr: [],
  },
  {
    title: "Stuck",
    arr: [],
  },
  {
    title: "Done",
    arr: [],
  },
];
let priority = ["low", "medium", "high"];
//new container
const container = ProvideTag("div", "container");
//add new boards
const boards = ProvideTag("div", "boards");
const backdrop = ProvideTag("div", "backdrop");
const away = ProvideTag("div", "away");
const modal = ProvideTag("div", "modal");
root.appendChild(container);
root.appendChild(backdrop);
container.appendChild(boards);
backdrop.appendChild(away);
backdrop.appendChild(modal);

away.addEventListener("click", () => {
  backdrop.style.display = "none";
  titleInput.value = "";
  descInput.value = "";
  priorityInput.value = "";
  statusInput.value = "";
});
//create new form
const form = ProvideTag("form");

//add new form head
const formHead = ProvideTag("h1");
formHead.innerText = "Add task";
form.appendChild(formHead);
//title input
const formTitlediv = ProvideTag("div");
const titleLabel = ProvideTag("label");
titleLabel.setAttribute("for", "title");
titleLabel.innerText = "Title";
const titleInput = ProvideTag("input", "title", "title");
formTitlediv.appendChild(titleLabel);
formTitlediv.appendChild(titleInput);
//description
const descDiv = ProvideTag("div");
const descLabel = ProvideTag("label");
descLabel.innerText = "Desciption";
descLabel.setAttribute("for", "description");
const descInput = ProvideTag("textarea", "description");
descDiv.appendChild(descLabel);
descDiv.appendChild(descInput);
//status
const statusDiv = ProvideTag("div");
const statusTitle = ProvideTag("label");
statusTitle.innerText = "Status";
statusTitle.setAttribute("for", "statusTitle");
statusDiv.appendChild(statusTitle);
const statusInput = ProvideTag("select", "desciption", "description");
statusInput.value = "";
let count = 0;
for (let i = 0; i < boardName.length; i++) {
  const statusOption = ProvideTag("option");
  statusOption.setAttribute("value", i);
  statusOption.innerText = boardName[i].title;
  count++;
  statusInput.appendChild(statusOption);
}
statusDiv.appendChild(statusInput);
//priority

const priorityDiv = ProvideTag("div");
const priorityTitle = ProvideTag("label");
priorityTitle.innerText = "Priority";
priorityDiv.appendChild(priorityTitle);
priorityTitle.setAttribute("for", "Priority");
const priorityInput = ProvideTag("select", "desciption", "description");
priorityInput.value = "";

for (let p = 0; p < priority.length; p++) {
  const priorityOption = ProvideTag("option");
  priorityOption.setAttribute("value", p);
  priorityOption.innerText = priority[p];
  priorityInput.appendChild(priorityOption);
}
priorityDiv.appendChild(priorityInput);
form.appendChild(formTitlediv);
form.appendChild(descDiv);
form.appendChild(statusDiv);
form.appendChild(priorityDiv);

const addButton = ProvideTag("button ", "addButton");
addButton.setAttribute("type", "submit");
addButton.innerText = "Add task";
form.appendChild(addButton);
modal.appendChild(form);
//add task event
addButton.addEventListener("click", addlist);
function renderStatus() {
  statusDiv.innerHTML = "";
  statusInput.innerHTML = "";
  for (let i = 0; i < boardName.length; i++) {
    const statusOption = ProvideTag("div");
    statusOption.setAttribute("value", i);
    statusOption.innerText = boardName[i].title;
    count++;
    statusInput.appendChild(statusOption);
  }
  statusDiv.appendChild(statusInput);
}
function addlist(element) {
  element.preventdefault();
}
