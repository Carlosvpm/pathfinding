import { INode } from "@/interfaces";

const reconstructPath = (
    cameFrom: { current: INode; previous: INode }[],
    current: INode
) => {
    const totalPath = [current];

    let relation = cameFrom.find((n) => n.current === current);

    while (relation?.current !== relation?.previous) {
        if (relation?.previous) totalPath.push(relation?.previous);

        relation = cameFrom.find((n) => n.current === relation?.previous);
    }

    return totalPath;
};

export { reconstructPath }