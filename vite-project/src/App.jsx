import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [form, setForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    completed: false,
  });

  const [selectedTodo, setSelectedTodo] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/todo/")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  const handleDelete = async (id) => {
    const response = await fetch(`http://127.0.0.1:8000/api/todo/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      alert("Todo Successfully Deleted...");
      setTodos(todos.filter((todo) => todo.id !== id));
    } else {
      alert("Something Went Wrong");
    }
  };

  const handleUpdate = (todo) => {
    setFormData({
      title: todo.title,
      description: todo.description,
      completed: todo.completed,
    });
    setSelectedTodo(todo);
    setForm(true);
  };

  const handleAdd = () => {
    setFormData({
      title: "",
      description: "",
      completed: false,
    });
    setSelectedTodo(null);
    setForm(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedTodo) {
      const response = await fetch(
        `http://127.0.0.1:8000/api/todo/${selectedTodo.id}/`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Todo Successfully Updated...");
        setForm(false);
        setFormData({
          title: "",
          description: "",
          completed: false,
        });
        setSelectedTodo(null);
        fetch("http://127.0.0.1:8000/api/todo/")
          .then((res) => res.json())
          .then((data) => {
            setTodos(data);
          });
      } else {
        alert("Something Went Wrong");
      }
    } else {
      const response = await fetch("http://127.0.0.1:8000/api/todo/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Todo Successfully Created...");
        setForm(false);
        setFormData({
          title: "",
          description: "",
          completed: false,
        });
        fetch("http://127.0.0.1:8000/api/todo/")
          .then((res) => res.json())
          .then((data) => {
            setTodos(data);
          });
      } else {
        alert("Something Went Wrong");
      }
    }
  };

  return (
    <>
      <div className="container text-center">
        <h1 className="mt-5">TodoList</h1>
        {todos.length === 0 && (
          <>
            <p>No Todos Currently..</p>
            <button onClick={handleAdd} className="btn btn-outline-dark mt-3">
              Add Todo
            </button>
          </>
        )}
        {form && (
          <form onSubmit={handleSubmit} className="mt-3">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title:
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description:
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="completed"
                name="completed"
                checked={formData.completed}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="completed">
                Completed
              </label>
            </div>
            <button type="submit" className="btn btn-outline-dark">
              {selectedTodo ? "Update Todo" : "Create Todo"}
            </button>
          </form>
        )}

        {todos.length !== 0 && (
          <>
            <table className="table mt-5">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Completed</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {todos.map((todo) => (
                  <tr key={todo.id}>
                    <td>{todo.title}</td>
                    <td>{todo.description}</td>
                    <td>{todo.completed ? "True" : "False"}</td>
                    <td>
                      <button
                        onClick={() => handleUpdate(todo)}
                        className="btn btn-outline-dark btn-sm m-2"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(todo.id)}
                        className="btn btn-outline-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={handleAdd} className="btn btn-outline-dark mt-3">
              Add Another Todo
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default App;
