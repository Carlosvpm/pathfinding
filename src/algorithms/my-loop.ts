import { INode } from "@/interfaces";
import { euristic } from "./euristic";
import { reconstructPath } from "./reconstruct-path";
import { calculateNeighbors } from "./calculate-neighbors";



const myLoop = (
    startNode: INode,
    endNode: INode,
    openSet: INode[],
    closeSet: INode[],
    cameFrom: { current: INode; previous: INode }[],
    grid: INode[][],
    updateGrid: (e: INode[][]) => void,
    setNode: (node: INode, key: "isWallNode" | "isStep", value: any) => void
) => {

    // Se openSet (Nós que irão ser visitados) estiver vazio quer dizer que os "vizinhos" são paredes/inválidos
    if (openSet.length === 0) {
        return alert("Hobbers Win!!")
    }

    // Organizar o array para que o vizinho com o menor custo seja visitado primeiro
    openSet.sort((a, b) => {
        return a.cost - b.cost;
    });

    let current = openSet.shift() as INode;
    // Adicionar o primeiro vizinho a ser visitado no array de nós que ja foram visitados
    closeSet.push(current);
    current.visited = !current.isFinishNode;
    
    // Verificar se a posição do nó atual não é a mesma dos nós de início e fim
    if (current.x === endNode.x && current.y === endNode.y) {
        const path = reconstructPath(cameFrom, current);

        path.forEach((step, index) => {
            setTimeout(() => {
                setNode(grid[step.y][step.x], "isStep", true);
            }, 5 * index);
        });

        return alert("Coops Win!!");
    }

    // Procura os nós vizinhos
    const neighbors = calculateNeighbors(current, grid, updateGrid);

    // Verifica se não é inicio ou fim e se ja foi visitado
    neighbors
        .filter(
            (node) =>
                !node.isStartNode && !node.isWallNode && !closeSet.includes(node)
        )
        .forEach((node) => {
            const nodeAlreadyVisited = openSet.includes(node);
            node.inOpenSet = !node.isFinishNode;

            if (!nodeAlreadyVisited) {
                openSet.push(euristic(startNode, endNode, node));
                cameFrom.push({ current: node, previous: current });
            }
        });
    
    updateGrid(grid);

    myLoop(
        startNode,
        endNode,
        openSet,
        closeSet,
        cameFrom,
        grid,
        updateGrid,
        setNode
    );

    return;


};

export { myLoop }