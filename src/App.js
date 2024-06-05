import { useState } from "react";

export default function App() {
  return (
    <div className="container" style={styles.container}>
      <Formblue />
    </div>
  );
}

function Formblue() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.username.trim()) {
      errors.username = "Username is required";
      window.alert(errors.username);
    } else if (!formData.email.trim()) {
      errors.email = "Email is required";
      window.alert(errors.email);
    } else if (formData.password !== formData.confirmPassword.trim()) {
      errors.password = "Passwords do not match";
      window.alert(errors.password);
    } else {
      // If no errors, process the form data
      window.alert("Form submitted successfully");
    }
  };

  return (
    <div className="form" style={styles.form}>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Username:</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            autoComplete="on"
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            autoComplete="on"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            autoComplete="off"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
            autoComplete="off"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f4f8",
    width: "100%",
  },
  form: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#ffffff",
    fontSize: "16px",
    cursor: "pointer",
  },
};
