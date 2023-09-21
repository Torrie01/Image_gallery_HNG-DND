/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';
import images from './ImagesData';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredImages, setFilteredImages] = useState([]);
  const [isSignedOut, setIsSignedOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const filtered = images.filter((image) =>
      image.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setFilteredImages(filtered);
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSignOut = () => {
    setIsSignedOut(true);

    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('index', index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    
    e.currentTarget.classList.add('drag-over');
  };

  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove('drag-over');
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    
    e.currentTarget.classList.remove('drag-over');

    
    const draggedIndex = e.dataTransfer.getData('index');

    const updatedImages = [...filteredImages];

    const draggedImage = updatedImages[draggedIndex];
    updatedImages[draggedIndex] = updatedImages[index];
    updatedImages[index] = draggedImage;

    setFilteredImages(updatedImages);
  };

  return (
    <div className="gallery">
      <div className="gallery-header">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Catalogue..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="sign-out">
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {isSignedOut ? (
            <div className="thank-you-message">
              <h1>Thank you for viewing!</h1>
            </div>
          ) : (
            <div className="gallery-items">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="gallery-item"
                  draggable="true"
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={(e) => handleDragOver(e, index)}
                  onDragLeave={(e) => handleDragLeave(e)}
                  onDrop={(e) => handleDrop(e, index)}
                >
                  <img src={image.path} alt={`Image ${image.id}`} />
                  <div className="tags">
                    {image.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Gallery;

