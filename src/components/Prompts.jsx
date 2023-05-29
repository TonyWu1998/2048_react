import React from "react";

function Prompts() {
  return (
    <div style={{ marginTop: "20px" }}>
      <p style={{ display: "inline", marginRight: "10px" }}>
        Press →/←/↑/↓ to start or
      </p>
      <Button variant="contained">
        Restart
        <ReplayIcon />
      </Button>
      <p style={{ display: "inline", marginLeft: "10px" }}> to restart</p>
    </div>
  );
}

export default Prompts;
