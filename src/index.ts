
import { createApp } from "vue";
import test from "./test.ce.vue";

console.log("imported");
console.log("imported", test);

export const toto = "toto";

createApp(test).mount(document.body);