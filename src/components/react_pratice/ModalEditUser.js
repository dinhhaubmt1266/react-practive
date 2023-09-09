import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { putUpdateUser } from '../../services/UserService';
import { toast } from 'react-toastify';

const ModalEditUser = (props) => {
    const {show, handleClose, dataUserEdit, handleEditUserFromModel} = props;
    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    const handelEditUser = async () => {
        let res = await putUpdateUser(name, job);
        if (res){
            handleEditUserFromModel({
                first_name: name,
                id: dataUserEdit.id
            })
            toast.success("Update user succeed!");
        }
    }
    // console.log(dataUserEdit)
    useEffect(() => {
        if (show) {
            setName(dataUserEdit.first_name);
        }
    },[dataUserEdit])

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit user</Modal.Title>
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
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handelEditUser}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ModalEditUser;