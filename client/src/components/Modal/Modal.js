import React, { useState } from 'react'
import { createPortal } from 'react-dom'

const modalRoot = document.getElementById('modal-root')

const Modal = ({children, defaultOpened = false}) => {
    const [isOpen, setIsOpen] = useState(defaultOpened)

    return (
        createPortal(isOpen ? <div className="modal">{children}</div> : null, modalRoot)
    )
}

export default Modal;