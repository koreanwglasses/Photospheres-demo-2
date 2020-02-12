import * as t from "io-ts";

export interface ClusterNode {
  size?: number;
  preview?: string;
  name?: string;
  children?: Array<ClusterNode>;
}

export const ClusterNode: t.Type<ClusterNode> = t.recursion("ClusterNode", () =>
  t.partial({
    size: t.number,
    preview: t.string,
    name: t.string,
    children: t.array(ClusterNode)
  })
);
