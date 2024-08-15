import React, { useState } from 'react';
import './Modal.css';
import { Pencil } from 'react-bootstrap-icons'; // Import Bootstrap icon
import Swal from 'sweetalert2'; // Import SweetAlert2
import '@fortawesome/fontawesome-free/css/all.min.css';
const CustomModal = ({ isOpen, onClose, onSubmit }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    storeName: '',
    phone: '',
    city: '',
    firstName: '',
    lastName: '',
  });
  const [logoFile, setLogoFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setLogoFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Démarre le spinner
    try {
      await onSubmit(user, logoFile);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Submission successful!',
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Submission failed. Please try again.',
      });
    } finally {
      setIsLoading(false); // Arrête le spinner
    }
  };

  if (!isOpen) return null;

  return (
    <div className="custom-modal-overlay">
      <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <div className="profile-card">
          <div className="profile-header">
            <div className="profile-image-container">
              <img
                src={preview || 'photo-gallery.png'}
                alt="Profile"
                className="profile-image"
              />
              <div className="profile-upload">
                <input type="file" id="imgInp" className="upload-input" onChange={handleFileChange} />
                <label htmlFor="imgInp" className="upload-label">
                <i className="fas fa-plus"></i>
                </label>
              </div>
            </div>
            <div className="profile-info">
              <h2>{user.firstName} {user.lastName}</h2>
              <p>Add your Restaurant logo</p>
            </div>
          </div>

          <div className="profile-body">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" name="firstName" value={user.firstName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" name="lastName" value={user.lastName} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" name="email" value={user.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" name="phone" value={user.phone} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Store Name</label>
                  <input type="text" name="storeName" value={user.storeName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>City</label>
                  <input type="text" name="city" value={user.city} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Password</label>
                  <div className="password-group">
                    <input type="password" name="password" className="pass-input" value={user.password} onChange={handleChange} required />
                    <span className="toggle-password fas fa-eye-slash"></span>
                  </div>
                </div>
              </div>
              <div className="form-actions">
                <button type="submit" className="btn-submit" disabled={isLoading}>
                  {isLoading ? <div className="spinner"></div> : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;