import db from "#db/client";
import { createEmployee } from "./queries/employees.js";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  await Promise.all([
    createEmployee({ name: "Alice Johnson", birthday: "1985-03-12", salary: "72000"}),
    createEmployee({ name: "Bob Smith", birthday: "1990-07-24", salary: "58000"}),
    createEmployee({ name: "Carol White", birthday: "1978-11-05", salary: "95000"}),
    createEmployee({ name: "David Brown", birthday: "1995-01-30", salary: "64000"}),
    createEmployee({ name: "Eva Martinez", birthday: "1988-06-18", salary: "81000"}),
    createEmployee({ name: "Frank Lee", birthday: "1972-09-09", salary: "110000"}),
    createEmployee({ name: "Grace Kim", birthday: "1993-04-22", salary: "76000"}),
    createEmployee({ name: "Henry Davis", birthday: "1982-12-01", salary: "88000"}),
    createEmployee({ name: "Iris Patel", birthday: "1997-08-14", salary: "55000"}),
    createEmployee({ name: "Jack Thompson", birthday: "1969-02-27", salary: "120000"})
  ]);
}
