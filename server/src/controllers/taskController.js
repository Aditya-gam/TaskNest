const { getRepository } = require('typeorm');
const Task = require('../entities/Task');

const getAllTasks = async (req, res) => {
  const taskRepository = getRepository(Task);
  const tasks = await taskRepository.find();
  res.json(tasks);
};

const createTask = async (req, res) => {
  const { title, description, due_date } = req.body;
  const taskRepository = getRepository(Task);
  const task = taskRepository.create({ title, description, due_date });
  await taskRepository.save(task);
  res.status(201).json(task);
};

module.exports = { getAllTasks, createTask };
