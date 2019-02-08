import React from "react";
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);

import Routes from "./Routes";

const App = () => <Routes />;

export default App;
