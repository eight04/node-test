const {JSDOM} = require("jsdom");
const dom = new JSDOM(`<select multiple><option>1</option><option>2</option></select>`);
const select = dom.window.document.querySelector("select");
console.log(select.selectedOptions.length);
select.options[0].selected = true;
console.log(select.selectedOptions.length);
