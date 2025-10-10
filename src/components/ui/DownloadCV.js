// src/components/ui/DownloadCV.jsx
import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import './DownloadCV.css';

const PDF_PATH = '/cv-kervyn-willy.pdf'; // Debe existir en /public

const DownloadCV = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // Verificar que existe (y que no es un rewrite a index.html)
      const head = await fetch(PDF_PATH, { method: 'HEAD', cache: 'no-store' });
      if (!head.ok) throw new Error(`No se encontró el PDF (HTTP ${head.status})`);

      // Descarga directa (simple y robusta)
      const a = document.createElement('a');
      a.href = PDF_PATH;
      a.download = 'CV-Kervyn-Willy-Rojas-Poma.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      console.error(err);
      alert(`No se pudo descargar el CV: ${err.message}`);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      className={`btn btn-secondary download-cv-btn ${isDownloading ? 'loading' : ''}`}
      onClick={handleDownload}
      disabled={isDownloading}
      style={{ display: 'flex', alignItems: 'center', gap: 8 }}
    >
      <FaDownload />
      <span>{isDownloading ? 'Descargando…' : 'Descargar CV'}</span>
    </button>
  );
};

export default DownloadCV;
