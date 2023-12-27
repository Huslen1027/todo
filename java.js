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
  });
}

boardsF();

const backdrop = document.createElement("div");
backdrop.setAttribute("class", "backdrop");
root.appendChild(backdrop);

const away = document.createElement("div");
away.setAttribute("class", "away");
backdrop.appendChild(away);

const modal = document.createElement("div");
modal.setAttribute("class", "modal");
backdrop.appendChild(modal);
