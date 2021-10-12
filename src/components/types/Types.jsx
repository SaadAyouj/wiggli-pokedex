import React from 'react'

import { motion } from 'framer-motion'

const Types = () => {
    return (
        <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1>Types</h1>
        </motion.div>
    )
}

export default Types
