export class Node {
    constructor(value) {
        this.value = value;
    }
}

export class LinkedList extends Node {
    constructor(value, next) {
        super(value);
        this.next = next;
    }
}

export class DoubleLinkedList extends LinkedList {
    constructor(value, next, prev) {
        super(value, next);
        this.prev = prev;
        if (next) {
            next.prev = this;
        }
        if (prev) {
            prev.next = this;
        }
    }
}

export class BinaryTree extends Node {
    constructor(value, left, right) {
        super(value);
        this.left = left;
        this.right = right;
    }
}

export class Tree extends Node {
    constructor(value, children = []) {
        super(value);
        this.children = children;
    }
}

export class Graph extends Node {
    constructor(value, edges = []) {
        super(value);
        this.edges = edges;
    }
}
