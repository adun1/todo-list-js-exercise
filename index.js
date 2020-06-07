const newTask = function(title, description) {
  const task = {
    title,
    description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);

    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
};

// DRIVER CODE BELOW
const tasks = [];
tasks.push(newTask("Clean Cat Litter", "Take all the 💩 out of the litter box"));
tasks.push(newTask("Do Laundry", "😨"));

tasks[0].logState(); // Clean Cat Litter has not been completed
tasks[0].markCompleted();
tasks[0].logState(); // Clean Cat Litter has been completed
