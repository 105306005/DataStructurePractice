class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delect(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

//try out the array
const MaggieArray = new MyArray();
MaggieArray.push("Hello");
MaggieArray.push("there");
MaggieArray.push("?");
MaggieArray.pop();
MaggieArray.push("!");
delectItem = MaggieArray.delect(1);
console.log("delectItem: ", delectItem);
console.log(MaggieArray);
