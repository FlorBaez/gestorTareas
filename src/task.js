// Lista de tareas 
let tasks = JASONparse (localStorage,getItem ('tasks')) || [];

// Función para agrgar tareas
export const addTask = (task) => {
    const newTask = {
        id: Date.now (),
        text: task,
        completed: false
    };
    tasks.push (newTask);
    localStorage.setItem('tasks', JASON.stringify (tasks));
}

// Función para poder traer la lista de tareas
export const getTasks = () => tasks;
