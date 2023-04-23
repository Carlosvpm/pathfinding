import { INode } from "@/interfaces";

export const calculateNeighbors = (
    currentNode: INode,
    grid: INode[][],
    onCallBack: (e: INode[][]) => void
) => {
    const { x, y } = currentNode;

    const neighbors = [];

    if (x < 4) neighbors.push(grid[y][x + 1]);
    if (x > 0) neighbors.push(grid[y][x - 1]);
    if (y > 0) neighbors.push(grid[y - 1][x]);
    if (y < 4) neighbors.push(grid[y + 1][x]);

    // if (y > 0 && x < 4) neighbors.push(grid[y - 1][x + 1]);
    // if (y < 4 && x < 4) neighbors.push(grid[y + 1][x + 1]);
    // if (y > 0 && x > 0) neighbors.push(grid[y - 1][x - 1]);
    // if (y < 4 && x > 0) neighbors.push(grid[y + 1][x - 1]);

    const newNodes = [...grid];

    onCallBack(newNodes);

    return neighbors;
};