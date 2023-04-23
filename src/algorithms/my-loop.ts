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

    if (openSet.length === 0) {
        return alert("Ladrões ganharam!!")
    }
    setTimeout(() => {
        openSet.sort((a, b) => {
            return a.cost - b.cost;
        });

        let current = openSet.shift() as INode;
        closeSet.push(current);
        current.visited = !current.isFinishNode;
        if (current.x === endNode.x && current.y === endNode.y) {
            const path = reconstructPath(cameFrom, current);

            path.forEach((step, index) => {
                setTimeout(() => {
                    setNode(grid[step.y][step.x], "isStep", true);
                }, 5 * index);
            });

            return;
        }

        const neighbors = calculateNeighbors(current, grid, updateGrid);

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

    }, 10);
};

export { myLoop }