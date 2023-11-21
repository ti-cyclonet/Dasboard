
import { Modal } from 'react-bootstrap';

export type UIModalProps  = {
    title: string;
    show: boolean;
    closeButton: boolean;
    children: React.ReactNode;
    onHide?: () => void;
}

export const UIModal: React.FC<UIModalProps> = ({ title, show, closeButton, onHide, children }) => {

        return (
          <Modal key='test' show={show} onHide={onHide}>
            <Modal.Header closeButton={closeButton}>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {children}
            </Modal.Body>
          </Modal>
        );
      }