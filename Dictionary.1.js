export class Dictionary {
    constructor() {
        this.items = {};
    }

    has(key) {
        return key in this.items;
    }

    delete(key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    }

    set(key, value) {
        this.items[key] = value;
    }

    get(key) {
        return this.has(key) ? this.items[key] : undefined;
    }

    values() {
        let values = [];
        for (let key in this.items) {
            if (this.has(key)) {
                values.push(this.items[key]);
            }
        }
        return values;
    }

    clear() {
        this.items = {};
    }

    size() {
        return Object.keys(this.items).length;
    }

    keys() {
        return Object.keys(this.items);
    }

    getItems() {
        return this.items;
    }
}