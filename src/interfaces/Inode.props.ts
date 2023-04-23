import { INode } from "./Inode";

export interface INodeProps {
    node: INode;
    onPressNode?: (node: INode) => void;
}
