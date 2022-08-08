const foo = ({cwd = process.cwd()}) => {
  console.log(cwd);
};

export { foo };
