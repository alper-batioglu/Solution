"use strict";
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
var fnLockItem = new Item("FN lock with MS Remote desktop client", "./Mac/FnLock.html");
itemHolder.AddItem(fnLockItem);
document.body.appendChild(itemHolder.Render());
