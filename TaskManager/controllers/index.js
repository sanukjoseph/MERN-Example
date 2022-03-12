const getAllTasks = (req, res) => {
  res.send("Get all tasks");
};

const CreateTask = (req, res) => {
  res.json({
    status: "success",
    message: "Create task",
    data: req.body,
  });
};

const GetSingleTask = (req, res) => {
  res.send("Get single task" + req.params.id);
};

const updateTask = (req, res) => {
  res.send(`Update task ${req.params.id}`);
};

const DeleteTask = (req, res) => {
  res.send(`Delete task ${req.params.id}`);
};

module.exports = {
  getAllTasks,
  CreateTask,
  GetSingleTask,
  updateTask,
  DeleteTask,
};
