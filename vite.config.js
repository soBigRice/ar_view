/*
 * @Author: MrRice
 * @Date: 2024-11-08 13:38:05
 * @LastEditors: MrRice 1246333567@qq.com
 * @LastEditTime: 2024-11-08 13:57:13
 * @FilePath: /vr_viewer/vite.config.js
 * @Description:
 * -----小舟从此逝，江海寄余生----
 * Copyright (c) 2024 by 米大饭, All Rights Reserved.
 */
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  plugins: [mkcert()],
  base: "./",
  server: {
    https: true,
    host: "0.0.0.0",
  },
});
