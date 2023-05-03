// 1. Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// 2. The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function (numberOfChildren, partnersName, geographicLocation, jobIitle) {
  div = document.querySelector("div");
  div.style.fontSize = "2rem";
  div.style.textAlign = "center";
  div.style.marginTop = "10%";
  div.innerHTML = `You will be a ${jobIitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`;
})(2, "Julia", "Czech", "programmer");
