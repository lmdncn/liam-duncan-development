import { useCallback } from 'react';
import { RESUME_CONFIG } from '@/lib/constants';

export const useDownloadResume = () => {
  const downloadResume = useCallback(() => {
    const pdfUrl = RESUME_CONFIG.path;
    
    // Download the PDF
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = RESUME_CONFIG.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Open PDF in new tab
    window.open(pdfUrl, '_blank');
  }, []);

  return { downloadResume };
};