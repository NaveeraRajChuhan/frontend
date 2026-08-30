// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import React, { useEffect, useState } from "react";
// import "./UserPage.jsx";

function UserPage() {
  const defaultComplaints = [];

  const [complaints, setComplaints] = useState(() => {
    const savedComplaints = localStorage.getItem("dashboardComplaints");

    return savedComplaints
      ? JSON.parse(savedComplaints)
      : defaultComplaints;
  });

  const [showForm, setShowForm] = useState(false);
  const [editingComplaint, setEditingComplaint] = useState(null);

  const [formData, setFormData] = useState({
    subject: "",
    category: "General",
    message: ""
  });

  // ================= SAVE COMPLAINTS =================

  useEffect(() => {
    localStorage.setItem(
      "dashboardComplaints",
      JSON.stringify(complaints)
    );
  }, [complaints]);

  // ================= INPUT CHANGE =================

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ================= ADD COMPLAINT =================

  const handleAddComplaint = () => {
    setEditingComplaint(null);

    setFormData({
      subject: "",
      category: "General",
      message: ""
    });

    setShowForm(true);
  };

  // ================= EDIT COMPLAINT =================

  const handleEditComplaint = (complaint) => {
    setEditingComplaint(complaint);

    setFormData({
      subject: complaint.subject,
      category: complaint.category,
      message: complaint.message
    });

    setShowForm(true);
  };

  // ================= SUBMIT =================

  const handleSubmitComplaint = (e) => {
    e.preventDefault();

    if (
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    // UPDATE
    if (editingComplaint) {
      setComplaints(
        complaints.map((complaint) =>
          complaint.id === editingComplaint.id
            ? {
                ...complaint,
                subject: formData.subject,
                category: formData.category,
                message: formData.message
              }
            : complaint
        )
      );
    }

    // CREATE
    else {
      const newComplaint = {
        id: Date.now(),

        subject: formData.subject,

        category: formData.category,

        message: formData.message,

        status: "Pending",

        date: new Date().toISOString()
      };

      setComplaints([
        ...complaints,
        newComplaint
      ]);
    }

    setShowForm(false);

    setFormData({
      subject: "",
      category: "General",
      message: ""
    });

    setEditingComplaint(null);
  };

  // ================= DELETE =================

  const handleDeleteComplaint = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this complaint?"
    );

    if (confirmDelete) {
      setComplaints(
        complaints.filter(
          (complaint) => complaint.id !== id
        )
      );
    }
  };

  // ================= DATE =================

  const formatDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString(
      "en-US",
      {
        month: "short",
        day: "numeric",
        year: "numeric"
      }
    );
  };

  return (
    <div className="user-page">

      {/* ================= HEADER ================= */}

      <header className="user-header">

        <div>
          <h1>User Dashboard</h1>
          <p>
            Submit and manage your complaints
          </p>
        </div>

        <button
          className="add-complaint-btn"
          onClick={handleAddComplaint}
        >
          + New Complaint
        </button>

      </header>


      {/* ================= USER INFO ================= */}

      <section className="user-welcome">

        <div className="user-avatar">
          N
        </div>

        <div>
          <h2>Welcome, Naveera 👋</h2>

          <p>
            Have an issue? Submit your complaint
            and we'll take care of it.
          </p>
        </div>

      </section>


      {/* ================= COMPLAINTS ================= */}

      <section className="complaints-section">

        <div className="complaints-header">

          <div>
            <h2>My Complaints</h2>

            <p>
              View and manage your complaints
            </p>
          </div>

          <div className="complaint-count">
            {complaints.length} Complaints
          </div>

        </div>


        {complaints.length === 0 ? (

          <div className="no-complaints">

            <div className="empty-icon">
              📋
            </div>

            <h3>No Complaints Yet</h3>

            <p>
              You haven't submitted any complaints.
            </p>

            <button
              onClick={handleAddComplaint}
            >
              Submit Your First Complaint
            </button>

          </div>

        ) : (

          <div className="complaints-list">

            {complaints.map((complaint) => (

              <div
                className="complaint-card"
                key={complaint.id}
              >

                <div className="complaint-top">

                  <div>

                    <span className="complaint-category">
                      {complaint.category}
                    </span>

                    <h3>
                      {complaint.subject}
                    </h3>

                  </div>

                  <span
                    className={`complaint-status ${complaint.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {complaint.status}
                  </span>

                </div>


                <p className="complaint-message">
                  {complaint.message}
                </p>


                <div className="complaint-bottom">

                  <small>
                    Submitted:{" "}
                    {formatDate(complaint.date)}
                  </small>


                  <div className="complaint-actions">

                    <button
                      className="edit-complaint"
                      onClick={() =>
                        handleEditComplaint(complaint)
                      }
                    >
                      ✏️ Edit
                    </button>

                    <button
                      className="delete-complaint"
                      onClick={() =>
                        handleDeleteComplaint(
                          complaint.id
                        )
                      }
                    >
                      🗑️ Delete
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>


      {/* ================= COMPLAINT MODAL ================= */}

      {showForm && (

        <div
          className="complaint-modal-overlay"
          onClick={() => setShowForm(false)}
        >

          <div
            className="complaint-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="complaint-modal-header">

              <div>

                <h2>
                  {editingComplaint
                    ? "Edit Complaint"
                    : "Submit Complaint"}
                </h2>

                <p>
                  {editingComplaint
                    ? "Update your complaint"
                    : "Tell us about your problem"}
                </p>

              </div>

              <button
                className="close-complaint-modal"
                onClick={() =>
                  setShowForm(false)
                }
              >
                ×
              </button>

            </div>


            <form
              onSubmit={handleSubmitComplaint}
            >

              {/* SUBJECT */}

              <div className="complaint-form-group">

                <label>
                  Complaint Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  placeholder="e.g. Payment issue"
                  value={formData.subject}
                  onChange={handleInputChange}
                />

              </div>


              {/* CATEGORY */}

              <div className="complaint-form-group">

                <label>
                  Category
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                >

                  <option value="General">
                    General
                  </option>

                  <option value="Order">
                    Order
                  </option>

                  <option value="Payment">
                    Payment
                  </option>

                  <option value="Product">
                    Product
                  </option>

                  <option value="Delivery">
                    Delivery
                  </option>

                  <option value="Technical">
                    Technical
                  </option>

                </select>

              </div>


              {/* MESSAGE */}

              <div className="complaint-form-group">

                <label>
                  Complaint Details
                </label>

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Describe your problem..."
                  value={formData.message}
                  onChange={handleInputChange}
                />

              </div>


              {/* BUTTONS */}

              <div className="complaint-modal-buttons">

                <button
                  type="button"
                  className="cancel-complaint"
                  onClick={() =>
                    setShowForm(false)
                  }
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="submit-complaint"
                >
                  {editingComplaint
                    ? "Update Complaint"
                    : "Submit Complaint"}
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

// export default UserPage;
