class Item{
    constructor(public Name:string, public Url: string){
    }
    Render(){
        const div = document.createElement("div");
        div.onclick = () => window.location.href = this.Url;
        div.textContent = this.Name;
        return div;
    }
}

class ItemHolder{
    private itemList: Item[] = [];
    AddItem(item: Item){
        this.itemList.push(item);
    }

    Render (){
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

const fnLockItem = new Item("FN lock with MS Remote desktop client", "./Mac/FnLock.html");
itemHolder.AddItem(fnLockItem);

document.body.appendChild( itemHolder.Render());