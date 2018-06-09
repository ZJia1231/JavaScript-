// 通过闭包和WeakMap创建一个私有变量
export let Stack = (function () {
    const items = new WeakMap();
    class Stack {
        constructor() {
            items.set(this, []);
        }
        push(element) {
            items.get(this).push(element);
        }
        pop() {
            return items.get(this).pop();
        }
        peek() {
            let temp = items.get(this);
            return temp[temp.length - 1];
        }
        isEmpty() {
            return items.get(this).length === 0;
        }
        size() {
            return items.get(this).length;
        }
        clear() {
            items.get(this) = [];
        }
        print() {
            console.log(items.get(this).toString());
        }
    }
    return Stack;
})();