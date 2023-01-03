import React from 'react'
import styles from "../styles/Nav.module.css"
import {useRecoilState} from 'recoil'
import { formState } from '../pages'

const Navbar = () => {
    const [formType, setFormType] = useRecoilState(formState);
    
    return (
        <nav className={styles.nav}>
            <h1 onClick={()=>{setFormType("basketball")}}>Basketball</h1>
            <h1 onClick={()=>{setFormType("swimming")}}>Swimming</h1>
            <h1 onClick={()=>{setFormType("complaint")}}>Complaint</h1>
        </nav>
    )
}

export default Navbar