import { INode } from "@/interfaces";

// Calcula o custo de cada nó
// Para saber qual nó é o melhor de ser visitado primeiro de acordo com o custo
const euristic = (startNode: INode, endNode: INode, currentNode: INode) => {
    const xDistanceToEnd = endNode.x - currentNode.x;
    const yDistanceToEnd = endNode.y - currentNode.y;

    const xDistanceToStart = startNode.x - currentNode.x;
    const yDistanceToStart = startNode.y - currentNode.y;

    const distanceToEnd = Math.sqrt(xDistanceToEnd ** 2 + yDistanceToEnd ** 2);
    const distanceToStart = Math.sqrt(
        xDistanceToStart ** 2 + yDistanceToStart ** 2
    );

    currentNode.cost = distanceToEnd + distanceToStart;

    return currentNode;
};

export { euristic }