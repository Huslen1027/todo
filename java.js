const root = document.getElementById("root");

const container = document.createElement("div");
container.setAttribute("class", "container");
root.appendChild(container);

const boards = document.createElement("div");
boards.setAttribute("class", "boards");
container.appendChild(boards);

const boardtitle = [
  { title: "To do", id: "To do" },
  { title: "In progress", id: "In progress" },
  { title: "Stuck", id: "Stuck" },
  { title: "Done", id: "Done" },
];

const priority = [{ id: "low" }, { id: "medium" }, { id: "high" }];

function boardsF() {
  boardtitle.map((title) => {
    const board = document.createElement("div");
    board.setAttribute("class", "board");
    boards.appendChild(board);

    const boardHeader = document.createElement("div");
    boardHeader.setAttribute("class", "header");
    board.appendChild(boardHeader);
    boardHeader.innerText = title.title;

    const count = document.createElement("span");
    count.setAttribute("class", "count");
    count.innerText = "0";
    boardHeader.appendChild(count);

    const cards = document.createElement("div");
    cards.setAttribute("class", "cards");
    cards.setAttribute("driaggable", "cards");
    board.appendChild(cards);

    const card = document.createElement("div");
    card.setAttribute("class", "card");
    cards.appendChild(card);

    const addBtn = document.createElement("div");
    addBtn.setAttribute("class", "addBtn");
    board.appendChild(addBtn);

    const addI = document.createElement("i");
    addI.setAttribute("class", "addI");
    addBtn.appendChild(addI);
    addI.innerText = "+";

    const addCard = document.createElement("div");
    addCard.innerText = "Add card";
    addBtn.appendChild(addCard);

    const over = document.createElement("div");
    over.setAttribute("class", "over");
    card.appendChild(over);

    addBtn.addEventListener("click", () => {
      (backdrop.style.display = "flex"), (modal.style.display = "flex");
    });
  });
}

boardsF();
// Modal window HTML creation

const backdrop = document.createElement("div");
backdrop.setAttribute("class", "backdrop");
root.appendChild(backdrop);

const modal = document.createElement("div");
modal.setAttribute("class", "modal");
backdrop.appendChild(modal);

const modalContent = document.createElement("div");
modalContent.setAttribute("class", "modalContent");
modal.appendChild(modalContent);

const addTask = document.createElement("h1");
addTask.innerText = "Add Task";
addTask.setAttribute("class", "addTask");
modalContent.appendChild(addTask);

const titleDiv = document.createElement("div");
modalContent.appendChild(titleDiv);

const titleLabel = document.createElement("label");
titleLabel.innerText = "Title";
titleDiv.appendChild(titleLabel);

const titleInput = document.createElement("input");
titleInput.setAttribute("class", "titleInput");
titleDiv.appendChild(titleInput);

const titleP = document.createElement("p");
titleP.innerText = "Бөглөнө үү";
titleP.setAttribute("class", "titleP");
titleDiv.appendChild(titleP);

const desp = document.createElement("div");
desp.setAttribute("class", "div");
modalContent.appendChild(desp);

const despLabel = document.createElement("label");
despLabel.innerText = "Description";
despLabel.setAttribute("class", "despLabel");
desp.appendChild(despLabel);

const despInput = document.createElement("input");

despInput.setAttribute("class", "despInput");
desp.appendChild(despInput);

const despP = document.createElement("p");
despP.innerText = "Бөглөнө үү";
despP.setAttribute("class", "despP");
desp.appendChild(despP);

const statusDiv = document.createElement("div");
statusDiv.setAttribute("class", "div");
modalContent.appendChild(statusDiv);

const statusLabel = document.createElement("label");
statusLabel.innerText = "status";
statusLabel.setAttribute("class", "statusLabel");
statusDiv.appendChild(statusLabel);

const statusSelect = document.createElement("select");
statusSelect.setAttribute("class", "statusSelect");
statusDiv.appendChild(statusSelect);

boardtitle.map((e) => {
  const option = document.createElement("option");
  option.setAttribute("value", e.id);
  option.innerText = e.title;
  statusSelect.appendChild(option);
});

const priorityDiv = document.createElement("div");
modalContent.appendChild(priorityDiv);

const prioLabel = document.createElement("label");
prioLabel.innerText = "Priority";
prioLabel.setAttribute("class", "prioLabel");
priorityDiv.appendChild(prioLabel);

const prioritySelect = document.createElement("select");
prioritySelect.setAttribute("class", "prioritySelect");
priorityDiv.appendChild(prioritySelect);

priority.map((e) => {
  const option = document.createElement("option");
  option.setAttribute("value", e.id);
  option.innerText = e.id;
  prioritySelect.appendChild(option);
});

const addTaskBtn = document.createElement("button");
addTaskBtn.setAttribute("type", "button");
addTaskBtn.setAttribute("class", "addTaskBtn");
addTaskBtn.innerText = "Add Task";
modalContent.appendChild(addTaskBtn);

window.onclick = function (event) {
  if (event.target == backdrop) {
    backdrop.style.display = "none";
  }
};

let myArray1 = [];
let myArray2 = [];
let myArray3 = [];
let myArray4 = [];

function addNewTask() {
  // receive information from modalContent
  let tempObject = {
    Title: titleInput.value,
    Description: despInput.value,
    priority: prioritySelect.value,
  };
  myArray1.push(tempObject);

  // HTML deeree array dotorh medeellee array.map ashiglaad gargaj ireh
  myArray1.map((e) => {
    console.log(myArray1);
    const cardd = document.createElement("div");
    cardd.setAttribute("class", "cardd");
    card.appendChild(cardd);
    const done = document.createElement("button");
    done.setAttribute("class", "done");
    cardd.appendChild(done);

    const img = document.createElement("img");
    img.setAttribute(
      "src",
      `https://cdn.iconscout.com/icon/free/png-256/free-tick-3391765-2825740.png`
    );
    img.setAttribute("class", "img");
    done.appendChild(img);
    const details = document.createElement("div");
    details.setAttribute("class", "details");
    cardd.appendChild(details);

    const detailsH4 = document.createElement("h4");
    detailsH4.setAttribute("class", "h4");
    detailsH4.innerText = e.Title;
    details.appendChild(detailsH4);

    const detailsP = document.createElement("p");
    detailsP.setAttribute("class", "detailsP");
    details.appendChild(detailsP);
    detailsP.innerText = e.Description;

    const priority = document.createElement("div");
    priority.setAttribute("class", "Priority");
    details.appendChild(priority);
    priority.innerText = e.priority;

    const actions = document.createElement("div");
    actions.setAttribute("class", "actions");
    cardd.appendChild(actions);

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "deleteBtn");
    actions.appendChild(deleteBtn);

    const edit = document.createElement("button");
    edit.setAttribute("class", "edit");
    actions.appendChild(edit);

    const editI = document.createElement("img");
    editI.setAttribute(
      "src",
      `https://cdn-icons-png.flaticon.com/512/1827/1827933.png`
    );
    editI.setAttribute("class", "editI");
    edit.appendChild(editI);
  });
}

addTaskBtn.addEventListener("click", addNewTask);
