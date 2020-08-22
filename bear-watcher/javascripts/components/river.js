"use strict";



const printToDom = (divID, textToPrint) => {
    const selectedDiv = document.getElementById(divID);
    selectedDiv.innerHTML = textToPrint;
  };


  const bearCardMaker = () => {
      domString = "";

      domString = `<div class="card" style="width: 18rem;">
      <img src="${image}" class="card-img-top" alt="cool bear">
      <div class="card-body">
        <p class="card-text">${name}</p>
      </div>
    </div>`



  }

  export { printToDom, bearCardMaker }


