
export interface INode {
    cost: number;
    x: number;
    y: number;
    isStartNode: boolean;
    isFinishNode: boolean;
    isWallNode: boolean;
    visited: boolean;
    inOpenSet: boolean;
    isStep: boolean;
}
