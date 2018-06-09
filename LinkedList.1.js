// 单独放在一个js文件里方便HashTable.1 调用;
export class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
export class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    append(element) {
        let node = new Node(element),
            current;
        if (this.head === null) {
            this.head = node;
        }
        else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.length++;
    }

    insert(position, element) {
        if (position > -1 && position <= this.length) {
            let node = new Node(element),
                current = this.head, previous,
                index = 0;

            if (position == 0) {
                node.next = current;
                this.head = node;
            }
            else {
                while (index++ != position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }

            this.length++;
            return true;

        }
        else {
            return false;
        }
    }
    removeAt(position) {
        if (position > -1 && position < this.length) {
            let current = this.head,
                previous,
                index = 0;

            if (position === 0) {
                this.head = current.next;
            }
            else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.length--;
            return current.element;
        }
        else {
            return null;
        }
    }
    remove(element) {
        let current = this.head,
            previous;
        if (this.head.element === element) {
            this.head = current.next;
            return true;
        }
        while (current) {
            if (current.element == element) {
                previous.next = current.next;
                return true;
            }
            previous = current;
            current = current.next;
        }
        return false;
    }
    indexOf(element) {
        let current = this.head,
            index = -1;
        while (current) {
            if (current.element === element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }
    isEmpty() {
        return this.length === 0;
    }
    size() {
        return this.length;
    }
    getHead() {
        return this.head;
    }
    toString() {
        let current = this.head,
            string = '';
        while (current) {
            string += current.element + (current.next ? '->' : '');
            current = current.next;
        }
        return string;
    }
    print() {
        console.log(this.toString());
    }
}