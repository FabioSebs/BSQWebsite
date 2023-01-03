import React , {useEffect, useRef} from 'react'
import styles from "../styles/Splash.module.css"
import Image from 'next/image'
import { motion } from "framer-motion"

const Splash = () => {
    const el = useRef(null);

    useEffect(()=>{
        setTimeout(()=>{
            el.current.style.display = "none"
            el.current.style.visibility = "hidden"
        }, 5000)
    }, [])

    return (
        <motion.div className={styles.splash}
            transition={{ delay:2 , duration: 2 }}
            initial={{ opacity: 1, x: 1, zIndex: 3 }}
            animate={{ opacity: 0, x: 0, zIndex: 0 }}
            ref={el}
        >
            <Image
                src="/bsqlogo.svg"
                height={300}
                width={300}
              />

        </motion.div>
    )
}

export default Splash