const core = require("@actions/core");

const ism = core.getInput("ism");

const natija = `Salom, ${ism}!`;
core.setOutput("natija", natija);

console.log(natija);
