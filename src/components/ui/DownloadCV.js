import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import './DownloadCV.css';

const DownloadCV = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    try {
      // Usar una ruta absoluta relativa a la raíz pública
      const pdfUrl = process.env.PUBLIC_URL + '/cv-kervyn-willy.pdf';
      console.log('Intentando descargar desde:', pdfUrl);
      
      // Verificar si el archivo existe
      const checkResponse = await fetch(pdfUrl, { method: 'HEAD' });
      
      if (!checkResponse.ok) {
        throw new Error('Archivo no encontrado');
      }
      
      // Si el archivo existe, proceder con la descarga
      const response = await fetch(pdfUrl);
      
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'CV-Kervyn-Willy-Rojas-Poma.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error('Error al descargar el CV:', error);
      alert(`Error al descargar el CV: ${error.message}. Por favor, verifica que el archivo exista en la ruta correcta.`);
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