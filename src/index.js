import Gantt from "frappe-gantt";
import "./index.css";
const tasks = [
    {
        id: '1',
        name: 'training gantt',
        start: '2026-06-01',
        end: '2026-12-31',
        progress: 20
    }
];
const gantt = new Gantt("#gantt", tasks);
