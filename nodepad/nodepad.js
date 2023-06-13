const main = document.getElementById("main");
function Savenote() {
  const data = [];
  const notes = document.querySelectorAll(".note textarea");
  notes.forEach((element) => {
    data.push(element.value);
  });
  if (data.length === 0) {
    localStorage.removeItem("notes");
  } else {
    localStorage.setItem("notes", JSON.stringify(data));
  }
}

const addNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
   <nav>
    <i class=" save2 fa-solid fa-floppy-disk"  ></i>
    <i class=" trash fa-solid fa-trash"  ></i></nav>
    <textarea > ${text}</textarea> `;
  note.querySelector("textarea").style.backgroundColor = "black";

  note.querySelector(".trash").addEventListener("click", function () {
    note.remove();
    Savenote();
  });

  note.querySelector(".save2").addEventListener("click", Savenote);
  note.querySelector("textarea").addEventListener("focusout", Savenote());

  main.appendChild(note);
  Savenote();
};
(function () {
  const lsnotes = JSON.parse(localStorage.getItem("notes"));
  if (lsnotes == null) addNote();
  else {
    lsnotes.forEach((element) => {
      addNote(element);
    });
  }
})();
