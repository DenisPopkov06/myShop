function parseData(arr) {
  let res = [];
  let id = 0;
  for (let obj of arr) {
    for (let data of obj.products) {
      data.id = id.toString();
      id += 1;
      res.push(data);
    }
  }
  return res;
}

export default parseData