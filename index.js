const {VM} = require("vm2");

const vm = new VM({
  sandbox: {input: "foo"}
});
console.log(vm.run("input"));
