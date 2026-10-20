import { FaDownload } from 'react-icons/fa';
import Button from './Button';
import { profile } from '../../data/profile';

const DownloadCV = ({ className = '' }) => (
  <Button href={profile.cv.path} download={profile.cv.fileName} variant="secondary" className={className}>
    <FaDownload aria-hidden="true" />
    Descargar CV
  </Button>
);

export default DownloadCV;
