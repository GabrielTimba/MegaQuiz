import React from 'react';
import {useHistory} from 'react-router-dom'
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Button from '../Button';
import './style.css';

interface ModalProps {
    show:boolean,
    toggle:()=>void,
    total:number,
    answered:number,
    score:number
}

const ModalAppearance:React.FC<ModalProps>=({show,toggle,total,score,answered})=>{
    const history=useHistory();

    return(
        <Modal 
            isOpen={show} 
            toggle={toggle} 
            backdrop="static"
            style={{ maxWidth: "800px" }}
        >
            <ModalHeader toggle={()=>{history.push('/')}} className="modal-header">Parabens!</ModalHeader>
            <ModalBody className="modal-body">
                <p>
                    Terminou o quiz com a seguinte pontuação:
                    De um total de {total} questõe respondeu a {answered} e obteve  
                    &nbsp;{score} respotas correctas
                </p>
            </ModalBody>
            <ModalFooter className="modal-footer">
                 <Button text="Terminar" click={()=>{history.push('/')}}/>
            </ModalFooter>
        </Modal>
    )
}

export default ModalAppearance;