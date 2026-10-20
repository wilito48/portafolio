import { FaDownload } from 'react-icons/fa';
import Button from './Button';
import { profile } from '../../data/profile';
import { useLanguage } from '../../hooks/useLanguage';

const DownloadCV = ({ className = '' }) => {
  const { t } = useLanguage();

  return (
    <Button href={profile.cv.path} download={profile.cv.fileName} variant="secondary" className={className}>
      <FaDownload aria-hidden="true" />
      {t.ui.downloadCv}
    </Button>
  );
};

export default DownloadCV;
