import { INode } from "@/interfaces";
import { myLoop } from "./my-loop";

const astar = (
  startNode: INode,
  endNode: INode,
  grid: INode[][],
  updateGrid: (e: INode[][]) => void,
  setNode: (node: INode, key: "isWallNode" | "isStep", value: any) => void
) => {
  const openSet = [startNode];
  const closeSet: INode[] = [];

  const cameFrom = [{ current: startNode, previous: startNode }];

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
};


export { astar };
