import React, { useState } from 'react'
import { Modal, ModalContent, PreviewContainer } from './PreviewModal';

function PreviewModalSingleClick({children,previewClassName,previewContent}) {
    const [showModal, setShowModal] = useState(false);
    const [lastTap, setLastTap] = useState(0);
  
    const handleTap = () => {
   
        setShowModal(true);

    };
  
    const handleCloseModal = (e) => {
        if (e.target === e.currentTarget) {
            
            setShowModal(false);
          }
    };
  
    return (
      <>
        <PreviewContainer onClick={handleTap}>{children}</PreviewContainer>
  
        {showModal && (
          <Modal onClick={handleCloseModal}>
            <ModalContent className={previewClassName}>{previewContent}</ModalContent>
          </Modal>
        )}
      </>
    );
}

export default PreviewModalSingleClick