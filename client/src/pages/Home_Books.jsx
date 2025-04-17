import { useState, useEffect } from "react";

export default function Home_Books({ api_url }) {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
    rating: "",
    reading_status: ""
  });
  const [editingBookId, setEditingBookId] = useState(null);

  const fetchBooks = async () => {
    try {
      const res = await fetch(`${api_url}/api/user_library`, {
        credentials: "include",
      });
      const data = await res.json();
      setBooks(data.books || []);
    } catch (err) {
      console.error("Error fetching books", err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = editingBookId ? "PUT" : "POST";
      const endpoint = editingBookId
        ? `${api_url}/api/user_library/${editingBookId}`
        : `${api_url}/api/user_library`;

      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (res.ok) {
        fetchBooks();
        setForm({
          title: "",
          author: "",
          genre: "",
          description: "",
          rating: "",
          reading_status: ""
        });
        setEditingBookId(null);
      } else {
        console.error(data.error || "Error submitting form");
      }
    } catch (err) {
      console.error("Error submitting book", err);
    }
  };

  const handleEdit = (book) => {
    setForm(book);
    setEditingBookId(book.id);
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${api_url}/api/user_library/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok) {
        fetchBooks();
      } else {
        console.error(data.error || "Error deleting");
      }
    } catch (err) {
      console.error("Error deleting book", err);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">{editingBookId ? "Edit Book" : "Add a Book"}</h2>
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={form.author}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={form.genre}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />
        <input
          type="number"
          step="0.01"
          name="rating"
          placeholder="Rating"
          value={form.rating}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="reading_status"
          placeholder="Reading Status"
          value={form.reading_status}
          onChange={handleChange}
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
          {editingBookId ? "Update" : "Add"}
        </button>
      </form>

      <h2 className="text-xl font-bold mb-2">Your Library</h2>
      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <ul className="space-y-2">
          {books.map((book) => (
            <li key={book.id} className="border p-2 rounded shadow">
              <strong>{book.title}</strong> by {book.author}
              <p>Status: {book.reading_status || "N/A"}</p>
              <div className="space-x-2 mt-2">
                <button onClick={() => handleEdit(book)} className="text-blue-500">
                  Edit
                </button>
                <button onClick={() => handleDelete(book.id)} className="text-red-500">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
