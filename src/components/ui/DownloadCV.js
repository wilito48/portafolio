import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import './DownloadCV.css';

const DownloadCV = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    try {
      // Intentar descargar el archivo PDF
      const response = await fetch('/cv-kervyn-willy.pdf');
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'CV-Kervyn-Willy-Rojas-Poma.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } else {
        // Si no existe el archivo, mostrar un mensaje
        alert('El archivo CV no está disponible en este momento.');
      }
    } catch (error) {
      console.error('Error al descargar el CV:', error);
      alert('Error al descargar el CV. Por favor, inténtalo más tarde.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button 
      className={`btn btn-secondary download-cv-btn ${isDownloading ? 'loading' : ''}`}
      onClick={handleDownload}
      disabled={isDownloading}
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px'
      }}
    >
      <FaDownload />
      <span>
        {isDownloading ? 'Descargando...' : 'Descargar CV'}
      </span>
    </button>
  );
};

export default DownloadCV; 