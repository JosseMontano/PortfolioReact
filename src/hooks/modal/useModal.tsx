import {useState} from 'react'

export const UseModal = (initialValue = false) => {
    const [isOpen, setIsOpen] = useState<boolean>(initialValue);
    const openModal = ():void => setIsOpen(true);
    const closeModal = ():void => setIsOpen(false)
    return [isOpen, openModal, closeModal];
}
