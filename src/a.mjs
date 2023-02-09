import localForage from "localforage";

localForage.getItem("foo")
  .then((value) => {
    console.log(value);
  })
  .catch(console.error);
