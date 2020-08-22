"use strict";

import { printToDom } from './river.js'


const formMaker = () => {
    let domString = "";
    $('#bearCards').append(`<form>
    <div class="form-group">
      <label for="exampleInputEmail1">Enter Bear Info</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <small id="emailHelp" class="form-text text-muted">Enter everything you know about the bear.</small>
    </div>
    <div class="form-group">
        <label for="exampleFormControlFile1">Example file input</label>
        <input type="file" class="form-control-file" id="exampleFormControlFile1">
      </div>
    <button type="submit" id ="bearButton" class="btn btn-primary">Submit</button>
  </form>
`);
printToDom("submitForm", domString)
};


// const captureBear = () => {
//     $("bearButton").click(() => {
//         let bearForm = {};
//         bearForm.bearName = $("#bearInfo").val();
//         bearForm.bearImg = $("#submit-bear").val();
//         bearCard.push(bearForm)
//     }) 
// }

export { formMaker }