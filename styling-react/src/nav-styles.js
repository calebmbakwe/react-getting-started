import configStyles from "./config-styles";

const button = {
  flex: 1,
  height: configStyles.imageHeight,
  padding: 20,
  fontSize: 50,
  background: "transparent",
  color: "#fff",
  textShadow: "1px 1px 3px rgba(0, 0, 0, .6)",
  border: "none",
  outline: 0,
  cursor: "pointer",
  userSelect: "none",
  ":hover": {
    transition: "all 1s",
    color: "#8c9ea4"
  }
};

const prev = {
  ...button,
  textAlign: "left"
};

const next = {
  ...button,
  textAlign: "right"
};

const hidden = {
  visibility: "hidden"
};

export default {
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex"
  },
  prev,
  prevHidden: {
    ...prev,
    ...hidden
  },
  next,
  nextHidden: {
    ...next,
    ...hidden
  }
};
