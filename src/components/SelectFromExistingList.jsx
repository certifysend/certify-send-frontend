import React, { useState } from 'react';
import { X } from 'lucide-react';
import EmailCompositionPane from './EmailCompositionPane';

const SelectFromExistingList = ({ onClose, certificates = [] }) => {
  const [showEmailPane, setShowEmailPane] = useState(false);
  const [selectedCertificates, setSelectedCertificates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCertificates = certificates.filter(cert =>
    cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.attendees.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCertificateSelect = (id) => {
    setSelectedCertificates(prev => {
      if (prev.includes(id)) {
        return prev.filter(certId => certId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black/20 flex items-center justify-center z-50">
      <EmailCompositionPane onBack={() => setShowEmailPane(false)} onClose={onClose} />
    </div>
  );
};

export default SelectFromExistingList;