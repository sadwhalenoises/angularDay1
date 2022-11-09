"use strict";
class warehouse {
    constructor() {
        this.stockItem = {
            item_name: "",
            item_describtion: ""
        };
        this.warehouseItems = [];
    }
    set setName(name) {
        this.stockItem.item_name = name;
    }
    set setDescription(desc) {
        this.stockItem.item_describtion = desc;
    }
    addToWarehouse() {
        this.warehouseItems.push(this.stockItem);
    }
    get getWarehouse() {
        return this.warehouseItems;
    }
}
//# sourceMappingURL=stockitems.js.map