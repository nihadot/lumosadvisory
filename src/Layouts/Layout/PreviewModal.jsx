import React, { useState } from "react";
import styled from "styled-components";

export const PreviewContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  img,
  .content {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
`;

const PreviewModal = ({ children, previewContent,previewClassName }) => {
  const [showModal, setShowModal] = useState(false);
  const [lastTap, setLastTap] = useState(0);

  const handleDoubleTap = () => {
    const currentTime = new Date().getTime();

    const tapLength = currentTime - lastTap;

    if (tapLength < 300 && tapLength > 0) {
      setShowModal(true);
    }

    setLastTap(currentTime);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <PreviewContainer onClick={handleDoubleTap}>{children}</PreviewContainer>

      {showModal && (
        <Modal onClick={handleCloseModal}>
          <ModalContent className={previewClassName}>{previewContent}</ModalContent>
        </Modal>
      )}
    </>
  );
};

export default PreviewModal;
