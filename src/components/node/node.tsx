import { INodeProps } from "@/interfaces";
import "./node.css";

export const Node = ({ node, onPressNode }: INodeProps) => {
  const extraClassNode = node.isStartNode
    ? "start-node"
    : node.isFinishNode
    ? "finish-node"
    : "";
  return (
    <td
      className={`node ${extraClassNode} ${
        node.isWallNode ? "wall-node" : ""
      } ${node.inOpenSet ? "to-visit-node" : ""}
      ${node.visited ? "visited-node" : ""}
      ${node.isStep ? "step-node" : ""}
      `}
      onClick={() => onPressNode && onPressNode(node)}
    ></td>
  );
};
