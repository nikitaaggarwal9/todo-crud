import React from 'react';
import {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import {toast} from "react-toastify";
import { useAppDispatch } from '../hooks';
import {updateTodo, addTodo} from "../redux/todoSlice";
import { IProps } from '../redux/store';

const EditModal = ({id, title, edit}: IProps) => {
	const dispatch = useAppDispatch();
    const [newTitle, setNewTitle] = useState(title);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

    const handleSaveChanges = () => {
        if(newTitle === '') {
            toast.error("This field cannot be empty!")
            return;
        }
        
        if(edit) {
            dispatch(updateTodo({id:id, title:newTitle}))
            toast.info("Task Updated!")
        } else {
            dispatch(addTodo({title: newTitle}));
		    toast.success("Todo Added Succesfully!");
        }

        handleClose();
    }

	return (
		<>
			<Button
                variant={edit ? 'success' : 'dark'}
				onClick={handleShow}>
				{edit ? 'Edit' : 'Add New Todo'}
			</Button>

			<Modal
				show={show}
				onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>
                    {edit ? `Edit Todo:  ${title}` : 'Add New Todo'}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlInput1">
							<Form.Label>
								Todo Name
							</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter new name"
								autoFocus
                                value={newTitle}
                                onChange={(e)=>setNewTitle(e.target.value)}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="secondary"
						onClick={handleClose}>
						Close
					</Button>
					<Button
						variant="primary"
						onClick={()=> {
                            handleSaveChanges();
                        }}>
						{edit ? 'Save Changes' : 'Add Todo'}
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default EditModal;
