// Adding a Event Listener to a Addbutton
showNotes();
let add  = document.getElementById('add');
add.addEventListener("click",function (e) {
    let content = document.getElementById('description');
    let title = document.getElementById('title');
    let notes = localStorage.getItem("notes");
    if (notes==null) {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        cardtitle : title.value,
        text : content.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    content.value = "";
    title.value = "";
    // console.log(notesObj);

    showNotes();
})


function showNotes(element,index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
      html += `
              <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                      <div class="card-body">
                          <h5 class="card-title">${element.cardtitle}</h5>
                          <p class="card-text"> ${element.text}</p>
                          <button id = "${index}" onclick="deleteNote(this.id)" class="btn btn-danger">Delete Note</button>
                      </div>
                  </div>`;
    });
    let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Pls Add a Note First`;
  }
}


function deleteNote(index) {
  
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}


let search = document.getElementById('search');
search.addEventListener("input",function () {
    let inputTxt = search.value.toLowerCase();

    let noteCard = document.getElementsByClassName('noteCard');
    
    Array.from(noteCard).forEach(element => {
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if (cardtxt.includes(inputTxt)) {
            element.style.display = "block";
        }
        else
        {
            element.style.display = "none";


        }
    });
})
