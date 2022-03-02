import React from "react";
import "./Add.css";
import { Modal, Button } from "react-bootstrap";
const AddMovie = ({ handleSubmit, handleChange, show, setShow, newMovie }) => {
    const handleClose = () => setShow(false);
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="header">
                    <Modal.Title className="title">Add Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body className="add">
                    <input
                        name="name"
                        type="text"
                        placeholder="tilte"
                        onChange={handleChange}
                    />
                    <input
                        name="description"
                        type="text"
                        placeholder="description"
                        onChange={handleChange}
                    />
                    <input
                        name="posterUrl"
                        type="text"
                        placeholder="posterUrl"
                        onChange={handleChange}
                    />
                    <input
                        name="rate"
                        type="text"
                        placeholder="rate"
                        onChange={handleChange}
                    />
                    <input
                        name="trailerUrl"
                        type="text"
                        placeholder="trailerUrl"
                        onChange={handleChange}
                    />
                    {/* <input */}
                    {/* name="id" */}
                    {/* type="number" */}
                    {/* placeholder="id" */}
                    {/* onChange={handleChange} */}
                    {/* /> */}
                </Modal.Body>
                <Modal.Footer className="footer">
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Add movie
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddMovie;
