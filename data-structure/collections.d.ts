export class Node<T> {
    value: T;
    constructor(value: T);
}

export class LinkedList<T> extends Node<T> {
    next: LinkedList<T>;
    constructor(value: T, next?: LinkedList<T>);
}

export class DoubleLinkedList<T> extends LinkedList<T> {
    prev: DoubleLinkedList<T>;
    constructor(value: T, next?: DoubleLinkedList<T>, prev?: DoubleLinkedList<T>);
}

export class BinaryTree<T> extends Node<T> {
    left: BinaryTree<T>;
    right: BinaryTree<T>;
    constructor(value: T, left?: BinaryTree<T>, right?: BinaryTree<T>);
}

export class Tree<T> extends Node<T> {
    children: Tree<T>[];
    constructor(value: T, children?: Tree<T>[]);
}

export class Graph<T> extends Node<T> {
    edges: Graph<T>[];
    constructor(value: T, edges: Graph<T>[]);
}
