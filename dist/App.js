"use strict";
class Item {
    constructor(Name, Url) {
        this.Name = Name;
        this.Url = Url;
    }
    Render() {
        const div = document.createElement("div");
        div.onclick = () => window.location.href = this.Url;
        div.textContent = this.Name;
        return div;
    }
}
class ItemHolder {
    constructor() {
        this.itemList = [];
    }
    AddItem(item) {
        this.itemList.push(item);
    }
    Render() {
        const ul = document.createElement("ul");
        this.itemList.forEach(item => {
            const li = document.createElement("li");
            li.appendChild(item.Render());
            ul.appendChild(li);
        });
        return ul;
    }
}
const itemHolder = new ItemHolder();
const fnLockItem = new Item("Mac solutions", "./Mac/mac.html");
itemHolder.AddItem(fnLockItem);
itemHolder.AddItem(new Item("Docker cheet sheet", "./Docker/cheetsheet.html"));
itemHolder.AddItem(new Item("Bash solutions", "./Bash/Bash.html"));
itemHolder.AddItem(new Item("Git solutions", "./Git/Git.html"));
itemHolder.AddItem(new Item("Fn Serverless solutions", "./FnServerless/fn.html"));
document.body.appendChild(itemHolder.Render());
//typescripting
class Writer {
    constructor() {
        this.items = [];
    }
    Log(item) {
        this.items.push(item);
    }
    AllLog() {
        this.items.forEach((item, index) => {
            let div = document.createElement("div");
            div.innerText = `${index})${item}`;
            document.body.appendChild(div);
        });
    }
}
let items = [1, 2, 3];
let items2 = [1, 2, 3];
let x;
x = [5, "2"];
console.log(items);
console.log(items2);
var colors;
(function (colors) {
    colors[colors["red"] = 0] = "red";
    colors[colors["blue"] = 1] = "blue";
    colors[colors["green"] = 2] = "green";
})(colors || (colors = {}));
;
let color = colors.blue;
console.log(color);
let writer = new Writer();
let notSure = 5;
notSure = "alper";
writer.Log(notSure.substr(2, 5));
let data = "123456";
let dataObj = data;
let dataString = dataObj;
writer.Log(dataString.substr(3, 1));
function test(x) {
    if (x > 10) {
        let x = 5;
    }
    return x;
}
writer.Log(test(12));
for (let i = 0; i < 10; i++) {
    setTimeout(function () { console.log(i); }, 100 * i);
}
let [first, second] = [1, 2];
[first, second] = [second, first];
writer.Log(`first:${first} second:${second} `);
let [f1, f2, ...frest] = [1, 2, 3, 4, 5];
writer.Log(`f1:${f1} f2:${f2} fr:${frest}`);
let { a1, a2, a3, ...arest } = { a1: 5, a2: 6, a3: 7, a4: 5, a5: 6 };
writer.Log(`a1:${a1} a2:${a2} a3:${a3} arest:${JSON.stringify(arest)}`);
function test2({ count = 0, name = "empty" } = {}) {
    writer.Log(count + "-" + name);
}
test2();
test2({ count: 2 });
test2({ count: 2, name: "alper" });
let objects = { count: 5, name: "alper" };
let datas = { ...objects, field1: "field" };
writer.Log(JSON.stringify(datas));
;
function test3(data = { name: "empty", count: 0 }) {
    writer.Log(JSON.stringify(data));
}
test3();
test3({ name: "alper" });
test3({ name: "alper", count: 7 });
class Clock {
    constructor(h, v) {
        this.currentTime = 5;
    }
    setTime(d) {
        this.currentTime = d;
    }
}
writer.AllLog();
