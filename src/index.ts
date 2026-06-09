console.log("index.ts loaded");

import Gantt from "frappe-gantt";
import "./index.css";

const tasks = [
  {
    id: "1",
    name: "要件定義",
    start: "2026-06-01",
    end: "2026-06-10",
    progress: 100,
  },
  {
    id: "2",
    name: "設計",
    start: "2026-06-11",
    end: "2026-06-20",
    progress: 50,
  },
  {
    id: "3",
    name: "実装",
    start: "2026-06-21",
    end: "2026-07-10",
    progress: 20,
  }
];

new Gantt("#gantt", tasks);