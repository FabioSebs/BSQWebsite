import React, { useEffect, useRef } from 'react'
import Logo from '../assets/bsqlogo.svg'
import '../styles/splash.css'
import { motion, useTransform, useMotionValue } from "framer-motion"

const Splash = () => {
    const splashDiv = useRef();

    useEffect(() => {
        splashDiv.current.style.display = 'none'
        splashDiv.current.style.visbility = 'hidden'
    }, [])

    setTimeout(() => {
        splashDiv.current.style.display = 'none'
        splashDiv.current.style.visbility = 'hidden'
    }, 3000)


    return (
        <motion.div
            className='splashDiv'
            transition={{ delay: 5, duration: 3 }}
            initial={{ opacity: 1, x: 1, zIndex: 3 }}
            animate={{ opacity: 0, x: 0, zIndex: 0 }}
            ref={splashDiv}
        >
            <motion.img
                src={Logo}
                alt="bsqlogo"
                className='bsqlogo'
                transition={{ duration: 5 }}
                initial={{ opacity: 0, scale: 0, x: "-100%" }}
                animate={{ opacity: 1, scale: 2, x: 0 }}
            />
        </motion.div>
    )
}

export default Splash