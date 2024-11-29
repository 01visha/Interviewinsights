import React, { useState } from "react";

const ProfileUpdate = () => {
  const [resume, setResume] = useState(null);

  const handleFileUpload = (event) => {
    setResume(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Profile updated successfully!");
    console.log("Uploaded resume:", resume);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header text-center">
              <h4>Update Profile</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Resume Upload */}
                <div className="mb-3">
                  <label htmlFor="resume" className="form-label">
                    Upload Resume
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                  />
                  {resume && (
                    <small className="text-success mt-2 d-block">
                      {resume.name} selected
                    </small>
                  )}
                </div>

                {/* Submit Button */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
