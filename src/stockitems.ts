interface item{
    //itemDescribtion(name?: String): String;
    item_name: string;
    item_describtion: string;
}

class warehouse{
    private stockItem: item = {
        item_name: "",
        item_describtion: ""
    };

    private warehouseItems: item[] = [];

    set setName(name: string){
         this.stockItem.item_name = name;
    }

    set setDescription(desc: string){
        this.stockItem.item_describtion = desc;
    }

    addToWarehouse(){
        this.warehouseItems.push(this.stockItem);
    }

    get getWarehouse(){
        return this.warehouseItems;
    }





}