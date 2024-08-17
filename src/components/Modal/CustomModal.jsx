import React, { useState } from 'react';
import './Modal.css';
import Swal from 'sweetalert2';
import '@fortawesome/fontawesome-free/css/all.min.css';
import authService from '../APi/AuthService'; // Import your authService
import { useTranslation } from 'react-i18next';

const CustomModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
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
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const maxSize = 9 * 1024 * 1024; // 6MB
    const maxWidth = 800; // Adjust as needed
    const maxHeight = 800; // Adjust as needed

    if (file) {
      if (file.size > maxSize) {
        Swal.fire({
          icon: 'error',
          title: t('file_too_large'),
          text:" try an image less than 9MO",
        });
        e.target.value = null; // Clear the input
        return;
      }

      try {
        const resizedFile = await resizeImage(file, maxWidth, maxHeight);
        setLogoFile(resizedFile);

        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(resizedFile);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: t('image_resize_error'),
          text: t('unable_to_resize_image'),
        });
      }
    } else {
      setPreview(null);
    }
  };

  const resizeImage = (file, maxWidth, maxHeight) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const reader = new FileReader();
      
      reader.onload = (e) => {
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        let width = img.width;
        let height = img.height;

        // Calculate the new dimensions
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob((blob) => {
          if (blob) {
            resolve(new File([blob], file.name, { type: file.type }));
          } else {
            reject(new Error('Failed to convert canvas to blob.'));
          }
        }, file.type);
      };

      img.onerror = (err) => {
        reject(err);
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await authService.addUser(user, logoFile);
      Swal.fire({
        icon: 'success',
        title: t('success_title'),
        text: t('success_text'),
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirect after SweetAlert is closed
          window.location.href = "https://lmenu-admin.netlify.app";
        }
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: t('error_title'),
        text: t('error_text'),
      });
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  if (!isOpen) return null;

  return (
    <div className="custom-modal-overlay" onClick={onClose}>
      <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose} aria-label={t('close_modal')}>×</button>
        <div className="modal-content">
          <h2 className="modal-title">{t('create_account')}</h2>
          <p className="modal-subtitle">{t('welcome_message')}</p>
          <div className="profile-header">
            <div className="profile-image-container">
              <img
                src={preview || 'photo-gallery.png'}
                alt="Profile"
                className="profile-image"
              />
              <div className="profile-upload">
                <input 
                  type="file" 
                  id="imgInp" 
                  className="upload-input" 
                  onChange={handleFileChange} 
                />
                <label htmlFor="imgInp" className="upload-label">
                  <i className="fas fa-plus"></i>
                </label>
              </div>
            </div>
            <div className="profile-info">
              <p>{t('add_your_logo')}</p>
            </div>
          </div>

          <div className="profile-body">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>{t('first_name')}</label>
                  <input 
                    type="text" 
                    name="firstName" 
                    value={user.firstName} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>{t('last_name')}</label>
                  <input 
                    type="text" 
                    name="lastName" 
                    value={user.lastName} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>{t('email')}</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={user.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>{t('phone')}</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={user.phone} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>{t('store_name')}</label>
                  <input 
                    type="text" 
                    name="storeName" 
                    value={user.storeName} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>{t('city')}</label>
                  <input 
                    type="text" 
                    name="city" 
                    value={user.city} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>{t('password')}</label>
                  <div className="password-group">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      name="password" 
                      className="pass-input" 
                      value={user.password} 
                      onChange={handleChange} 
                      required 
                    />
                    <span 
                      className={`toggle-password fas ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`} 
                      onClick={togglePasswordVisibility}
                    ></span>
                  </div>
                </div>
              </div>
              <div className="form-actions">
                <button 
                  type="submit" 
                  className="btn-submit" 
                  disabled={isLoading}
                >
                  {isLoading ? <div className="spinner"></div> : t('submit')}
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
