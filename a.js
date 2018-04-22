import {bar} from "./c";

export const moduleVa = bar;
export function loadModule() {
	return import("./b");
}
