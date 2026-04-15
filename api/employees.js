import express from "express";
import {
    createEmployee,
    deleteEmployee,
    getEmployee,
    getEmployees,
    updateEmployee,
} from "#db/queries/employees"

const router = express.Router();
export default router;

router.get("/", async (req, res) => {
    const employees = await getEmployees();
    res.send(employees);
});

router.post("/", async (req, res) => {
    const body = req.body;
    if (!body) return res.status(400).send("Request body is required.");

    const { name, birthday, salary } = body;
    if (!name || !birthday || !salary) {
        return res.status(400).send("name, birthday, and salary are required.")
    }

    const employee = await createEmployee({ name, birthday, salary });
    res.status(201).send(employee);
});

router.get("/:id", async (req, res) => {
    const employee = await getEmployee(req.params.id);
    if (!employee) return res.status(404).send("Employee not found.");
    res.send(employee);
});

router.delete("/:id", async (req, res) => {
    const employee = await deleteEmployee(req.params.id);
    if (!employee) return res.status(404).send("Employee not found.");
    res.status(204).send();
});

router.put("/:id", async (req, res) => {
    const body = req.body;
    if (!body) return res.status(400).send("Request body is required.");

    const { name, birthday, salary } = body;
    if (!name || !birthday || !salary) {
        return res.status(400).send("name, birthday, and salary are required.");
    }

    const employee = await updateEmployee({ id: req.params.id, name, birthday, salary });
    if (!employee) return res.status(404).send("Employee not found.");
    res.send(employee);
});