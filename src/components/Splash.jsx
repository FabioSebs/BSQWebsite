import React from 'react'
import Logo from '../assets/bsqlogo.svg'
import '../styles/splash.css'
import { motion, useTransform, useMotionValue } from "framer-motion"

const Splash = () => {
    return (
        <motion.div
            className='splashDiv'
            transition={{delay: 5, duration: 3}}
            initial={{opacity: 1, x: 1}}
            animate={{opacity: 0, x: 0}}
        >
            <motion.img
                src={Logo}
                alt="bsqlogo"
                className='bsqlogo'
                transition={{duration: 5}}
                initial={{opacity: 0, scale: 0, x: "-100%"}}
                animate={{opacity: 1, scale:2,x: 0}}
            />
        </motion.div>
    )
}

export default Splash