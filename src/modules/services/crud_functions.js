const BASE_URL = 'http://localhost:3000';

class CrudFuncService {
  getTasks() {
    return fetch(`${BASE_URL}/tasks`).then((response) => response.json());
  }

  getTasksById(id) {
    return fetch(`${BASE_URL}/tasks/${id}`).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.status);
    });
  }

  createTask(task) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    };

    return fetch(`${BASE_URL}/tasks`, options).then((response) => response.json());
  }

  updateTask(id, data) {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    return fetch(`${BASE_URL}/tasks/${id}`, options).then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.status);
      });
  }

  deleteTask(id) {
    const options = {
      method: 'DELETE',
    };

    return fetch(`${BASE_URL}/tasks/${id}`, options).then((response) => response.json());
  }
}

export default new CrudFuncService();
const crudFuncService = new CrudFuncService();

// crudFuncService.getTasks().then((data) => console.log(data));

// crudFuncService.getTasksById(4).then((data) => console.log(data));

// crudFuncService.createTask({value:'щось створилось', done: false}).then((data) => console.log(data));

// crudFuncService.updateTask(13,{value:'а тепер щось змінилось', done: true}).then((data) => console.log(data));

// crudFuncService.deleteTask(13).then((data) => console.log(data));
