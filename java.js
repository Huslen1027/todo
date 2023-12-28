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
    // cards.appendChild(card);

    const done = document.createElement("button");
    done.setAttribute("class", "done");
    card.appendChild(done);

    const img = document.createElement("img");
    img.setAttribute(
      "src",
      `https://cdn.iconscout.com/icon/free/png-256/free-tick-3391765-2825740.png`
    );
    img.setAttribute("class", "img");
    done.appendChild(img);
    const details = document.createElement("div");
    details.setAttribute("class", "details");
    card.appendChild(details);

    // const detailsH4 = document.createElement("h4");
    // detailsH4.setAttribute("class", "h4");
    // details.appendChild(detailsH4);

    // const detailsP = document.createElement("p");
    // detailsP.setAttribute("class", "detailsP");
    // details.appendChild(detailsP);
    // detailsP.innerText = "";

    const priority = document.createElement("div");
    priority.setAttribute("class", "priority");
    details.appendChild(priority);

    const actions = document.createElement("div");
    actions.setAttribute("class", "actions");
    card.appendChild(actions);

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "actionBtn");
    actions.appendChild(deleteBtn);

    const deleteI = document.createElement("i");
    deleteBtn.appendChild(deleteI);

    const edit = document.createElement("button");
    edit.setAttribute("class", "edit");
    actions.appendChild(edit);

    const editI = document.createElement("i");
    edit.appendChild(editI);

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

const backdrop = document.createElement("div");
backdrop.setAttribute("class", "backdrop");
root.appendChild(backdrop);

// const away = document.createElement("div");
// away.setAttribute("class", "away");
// backdrop.appendChild(away);

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
addTaskBtn.setAttribute("class", "addTaskBtn");
addTaskBtn.innerText = "Add Task";
modalContent.appendChild(addTaskBtn);

window.onclick = function (event) {
  if (event.target == backdrop) {
    backdrop.style.display = "none";
  }
};
let states=[];
let MyObj = {
  title:"",
  description:"",
  statuss:"",
  priority:""
}

titleInput.addEventListener("change", (event)=>{
  MyObj.title=event.target.value
});
despInput.addEventListener("change", (event)=>{
  MyObj.description=event.target.value
});
statusSelect.addEventListener("change", (event)=>{
  MyObj.statuss=event.target.value
});
prioritySelect.addEventListener("change", (event)=>{
  MyObj.priority=event.target.value
});
const CardElement = (props) => {
  const { id, title, description, priority, status } = props;

  return `
    <div class="card" draggable="true" data-id=${id}>
      ${
        status === "done"
          ? `<div class="checked"><i class="fas fa-check"></i></div>`
          : `<div class="done" onclick="makeDone('${id}')"><i class="fas fa-check"></i></div>`
      }
      <div class="details">
        <h4>${title}</h4>
        <p>${description}</p>
        <div class="priority">
          ${priority}
        </div>
      </div>
      <div class="actions">
        <div class="done" onclick="remove('${id}')">
          <i class="fa-solid fa-xmark"></i>
        </div>
        <div class="done" onclick="">
          <i class="fa-solid fa-pen-to-square"></i>
        </div>
      </div>
    </div>
  `;
};



addTaskBtn.addEventListener("click", (event)=>{

    backdrop.style.display = "none";
  
   states.push(MyObj);
   console.log(states);
   localStorage.setItem("tod", JSON.stringify(states))
   
})