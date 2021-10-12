import { Modal, Button } from 'react-bootstrap';

const ConfirmationModal = (props) => {
    return (
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this character?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={props.handleAction}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ConfirmationModal;