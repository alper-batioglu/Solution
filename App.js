"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var _a;
var Item = /** @class */ (function () {
    function Item(Name, Url) {
        this.Name = Name;
        this.Url = Url;
    }
    Item.prototype.Render = function () {
        var _this = this;
        var div = document.createElement("div");
        div.onclick = function () { return window.location.href = _this.Url; };
        div.textContent = this.Name;
        return div;
    };
    return Item;
}());
var ItemHolder = /** @class */ (function () {
    function ItemHolder() {
        this.itemList = [];
    }
    ItemHolder.prototype.AddItem = function (item) {
        this.itemList.push(item);
    };
    ItemHolder.prototype.Render = function () {
        var ul = document.createElement("ul");
        this.itemList.forEach(function (item) {
            var li = document.createElement("li");
            li.appendChild(item.Render());
            ul.appendChild(li);
        });
        return ul;
    };
    return ItemHolder;
}());
var itemHolder = new ItemHolder();
var fnLockItem = new Item("FN lock with MS Remote desktop client", "./Mac/mac.html");
itemHolder.AddItem(fnLockItem);
itemHolder.AddItem(new Item("Docker cheet sheet", "./Docker/cheetsheet.html"));
itemHolder.AddItem(new Item("Bash solutions", "./Bash/Bash.html"));
itemHolder.AddItem(new Item("Git solutions", "./Git/Git.html"));
itemHolder.AddItem(new Item("Fn Serverless solutions", "./FnServerless/fn.html"));
document.body.appendChild(itemHolder.Render());
//typescripting
var Writer = /** @class */ (function () {
    function Writer() {
        this.items = [];
    }
    Writer.prototype.Log = function (item) {
        this.items.push(item);
    };
    Writer.prototype.AllLog = function () {
        this.items.forEach(function (item, index) {
            var div = document.createElement("div");
            div.innerText = index + ")" + item;
            document.body.appendChild(div);
        });
    };
    return Writer;
}());
var items = [1, 2, 3];
var items2 = [1, 2, 3];
var x;
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
var color = colors.blue;
console.log(color);
var writer = new Writer();
var notSure = 5;
notSure = "alper";
writer.Log(notSure.substr(2, 5));
var data = "123456";
var dataObj = data;
var dataString = dataObj;
writer.Log(dataString.substr(3, 1));
function test(x) {
    if (x > 10) {
        var x_1 = 5;
    }
    return x;
}
writer.Log(test(12));
var _loop_1 = function (i) {
    setTimeout(function () { console.log(i); }, 100 * i);
};
for (var i = 0; i < 10; i++) {
    _loop_1(i);
}
var _b = [1, 2], first = _b[0], second = _b[1];
_a = [second, first], first = _a[0], second = _a[1];
writer.Log("first:" + first + " second:" + second + " ");
var _c = [1, 2, 3, 4, 5], f1 = _c[0], f2 = _c[1], frest = _c.slice(2);
writer.Log("f1:" + f1 + " f2:" + f2 + " fr:" + frest);
var _d = { a1: 5, a2: 6, a3: 7, a4: 5, a5: 6 }, a1 = _d.a1, a2 = _d.a2, a3 = _d.a3, arest = __rest(_d, ["a1", "a2", "a3"]);
writer.Log("a1:" + a1 + " a2:" + a2 + " a3:" + a3 + " arest:" + JSON.stringify(arest));
function test2(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.count, count = _c === void 0 ? 0 : _c, _d = _b.name, name = _d === void 0 ? "empty" : _d;
    writer.Log(count + "-" + name);
}
test2();
test2({ count: 2 });
test2({ count: 2, name: "alper" });
var objects = { count: 5, name: "alper" };
var datas = __assign({}, objects, { field1: "field" });
writer.Log(JSON.stringify(datas));
;
function test3(data) {
    if (data === void 0) { data = { name: "empty", count: 0 }; }
    writer.Log(JSON.stringify(data));
}
test3();
test3({ name: "alper" });
test3({ name: "alper", count: 7 });
var Clock = /** @class */ (function () {
    function Clock(h, v) {
        this.currentTime = 5;
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
writer.AllLog();
