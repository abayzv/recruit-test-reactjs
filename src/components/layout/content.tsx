import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Content({ children, title, background, width, bgSize }: { children: React.ReactNode, title: string, background?: string, width?: string, bgSize?: string }) {

    const renderBackground = () => {
        return background && (
            <>
                <div className="absolute top-0 left-0 w-full h-full -z-10" style={{ backgroundImage: `url(${background})`, backgroundSize: bgSize }} />
                <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-transparent to-gray-900" />
            </>
        )
    }

    return (
        <div className={`bg-gray-800 flex-grow relative ${background && 'bg-opacity-70'}`}>
            {renderBackground()}
            <div className="text-center mt-32 text-white">
                <h1 className='text-3xl mb-2'>{title}</h1>
                <div><Link to="/"><AiFillHome color="red" className="inline-block mb-1" /> Home</Link> - {title}</div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                className={width === 'full' ? '' : 'max-w-screen-xl lg:mx-auto mx-4'}>
                {children}
            </motion.div>
        </div>
    )
}