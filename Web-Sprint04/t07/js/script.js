class Node { 
    constructor(value) { 
        this.value = value; 
        this.next = null
    } 
} 
class LinkedList {
    constructor() {
        this.head = null; 
        this.size = 0; 
    } 
    add(value) {
        var node = new Node(value); 
        var current; 
        if (this.head == null) 
            this.head = node; 
        else { 
            current = this.head; 
            while (current.next) { 
                current = current.next; 
            } 
            current.next = node; 
        } 
        this.size++; 
    }
    remove(value) {
        var current = this.head; 
        var prev = null; 

        while (current != null) { 
            if (current.value === value) { 
                if (prev == null) { 
                    this.head = current.next; 
                } else { 
                    prev.next = current.next; 
                } 
                this.size--; 
                return true; 
            }
            prev = current; 
            current = current.next;  
        } 
        return false;
    }
    contains(value) {
        var current = this.head; 

        while (current != null) { 
            if (current.value === value) 
                return true; 
            current = current.next; 
        } 
        return false;
    }
    [Symbol.iterator] = function() {
        let current = this.head;
        return {
            next() {
                if (current) {
                    let data = current.value;
                    current = current.next;
                    return {done: false, value: data};
                }
                return {done: true};
            }
        };
    };
    clear() {
        this.head = null;
    }
    count() {
        return size;
    }
    log() {
        var current = this.head; 
        var str = current.value;
        current = current.next;  
        while (current) { 
            str +=", " + current.value ; 
            current = current.next; 
        } 
        console.log(str);
    }
}
function createLinkedList(array) {
    const list = new LinkedList();
    array.forEach(value => list.add(value));
    return list;
}


/*const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100]);
ll.log();
// "100, 1, 2, 3, 100, 4, 5, 100"
while(ll.remove(100));
ll.log();
// "1, 2, 3, 4, 5"
ll.add(10);
ll.log();
// "1, 2, 3, 4, 5, 10"
console.log(ll.contains(10));
// "true"
let sum = 0;
for (const n of ll) {
sum += n; }
console.log(sum);
// "25"
ll.clear();
ll.log();
// ""
*/