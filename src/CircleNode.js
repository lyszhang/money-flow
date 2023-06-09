import React, { memo } from "react";
import { Handle } from "reactflow";

export default memo(({ data, isConnectable }) => {
  return (
    <div
      style={{
        width: "90px",
        height: "60px",
        borderRadius: "100%",
        background: "#CCCCCC",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Handle
        type="target"
        position="left"
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <div>{data.label}</div>
      <Handle
        type="source"
        position="right"
        id="a"
        style={{ background: "#555" }}
        isConnectable={isConnectable}
      />
    </div>
  );
});
