
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export type UIConfirmationDialogProps  = {
    title: string;
    message?: string;
    show: boolean;
    onHide?: () => void;
    onCancel?: (event: any) => void;
    onConfirm?: (event: any) => void;
}

export const UIConfirmationDialog: React.FC<UIConfirmationDialogProps> = ({ title, message, show, onHide, onCancel, onConfirm }) => {

        return (
          <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={onCancel}>
                Cancelar
              </Button>
              <Button variant="primary" onClick={onConfirm}>
                Confirmar
              </Button>
            </Modal.Footer>
          </Modal>
        );
      }