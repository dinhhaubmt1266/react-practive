import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalAddNewUser = (props) => {
    const {show, handleClose} = props;
    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    const handleSaveUser = () => {
        console.log(name, job);
    }
    return (
    <div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={name} onChange={(event) => setName(event.target.value)}></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Job</label>
                        <input type="text" className="form-control" value={job} onChange={(event) => setJob(event.target.value)}></input>
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveUser}>
            Save Changes
          </Button>
        </Modal.Footer>
    </Modal>
    </div>
    );
}
export default ModalAddNewUser;