import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { getPreprocessorContext } from "./preprocessor.mjs";

// 获取当前文件路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 处理条件编译
const preprocessorContext = getPreprocessorContext();

const codeMap = {
  code: fs.readFileSync(path.resolve(__dirname, "./pages.default.json"), "utf-8"),
  input: "test",
};


// 条件编译
const code =
  preprocessorContext.transform(codeMap.code, codeMap.input) || "";

console.log("code", code);
