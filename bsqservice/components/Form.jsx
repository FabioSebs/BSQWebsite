import React, { useState } from 'react'
import styles from "../styles/Form.module.css"
import { formState } from '../pages';
import {useRecoilState} from 'recoil'
import Image from 'next/image';

const Form = () => {
    const [formType, setFormType] = useRecoilState(formState);
    
    const complaintForm = () => {
        return (
            <form className={styles.formcomplaint} onSubmit={e => e.preventDefault()}>
                {/* IMG */}
                <Image className={styles.img} src={"/cplt.png"} height={70} width={70}/>
                {/* INPUTS */}
                <label htmlFor="id">Name</label>
                <input type='text' />
                <label htmlFor="id">Student ID</label>
                <input type="text" />
                <label htmlFor="id">Complaint</label>
                <input type='text' />
                {/* BUTTON */}
                <button type='submit'>File Complaint</button>
            </form>
        )
    }

    const normalForm = (bball) => {
        let img = bball ? "bball.svg" : "/swimming.png"

        return (
            <form className={bball ? styles.form : styles.formswim} onSubmit={e => e.preventDefault()}>
                {/* IMG */}
                <Image className={styles.img} src={img} height={70} width={70}/>
                {/* INPUTS */}
                <label htmlFor="id">Name</label>
                <input type='text' />
                <label htmlFor="id">Student ID</label>
                <input type="text" />
                {/* BUTTON */}
                <button type='submit'>Register</button>
            </form>
        )
    }

    return (
        <>
            {formType == 'basketball' ? normalForm(true) : formType == "swimming" ? normalForm(false) : complaintForm()}
        </>
    )
}

export default Form