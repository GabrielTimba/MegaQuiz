import React from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Button from '../Button';
import './style.css';

interface ModalProps {
    show:boolean,
    toggle:()=>void,
}

const ModalAppearance:React.FC<ModalProps>=({show,toggle})=>{
    return(
        <Modal 
            isOpen={show} 
            toggle={toggle} 
            backdrop="static"
            style={{ maxWidth: "800px" }}
        >
            <ModalHeader toggle={toggle} className="modal-header">Parabens!</ModalHeader>
            <ModalBody className="modal-body">
                <p>
                    Terminou o quiz com a seguite pontuacao:
                    De um total de X questoes respondeu a Y e obteve 
                    W respotas correctas
                </p>
            </ModalBody>
            <ModalFooter className="modal-footer">
                 <Button text="Fechar" click={toggle}/>
            </ModalFooter>
        </Modal>
    )
}

export default ModalAppearance;