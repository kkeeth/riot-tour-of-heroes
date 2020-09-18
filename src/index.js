import "@riotjs/hot-reload";
import { component } from "riot";
import "ress";
import App from "./app.riot";
import registerGlobalComponents from "./register-global-components";
import "./styles.css";

// register
registerGlobalComponents();

// mount the root tag
component(App)(document.getElementById("root"));
