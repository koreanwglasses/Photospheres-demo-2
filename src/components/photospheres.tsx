import * as React from "react";
import { ClusterNode } from "../types/cluster";
import { validate } from "../core/utils";

interface PhotospheresProps {
  data: ClusterNode;
}

export class Photospheres extends React.Component<PhotospheresProps> {
  constructor(props: PhotospheresProps) {
    super(props);
    validate(ClusterNode, props.data);
  }

  render() {
    const { data } = this.props;
    console.log(data);
    return <div>nothing to see here yet :)</div>;
  }
}
