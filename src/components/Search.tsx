import { useState } from "react"
import { Link } from "react-router-dom"
import React from "react"
import { FaTimesCircle } from "react-icons/fa"
import { motion } from "framer-motion"

export default function SearchMenu({ onClose }: { onClose: () => void }) {
    const [query, setQuery] = useState("")
    const [type, setType] = useState("movie")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setQuery(e.target.value)
    }

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setType(e.target.value)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed top-0 left-0 w-screen h-screen bg-black z-[999] bg-opacity-50 flex items-center justify-center">
            <button className="fixed top-20 right-10" onClick={onClose}>
                <FaTimesCircle size={30} color="white" />
            </button>
            <div className="grid lg:flex bg-white w-3/5 rounded-md overflow-clip shadow-xl shadow-[0px 0px 10px 0px rgba(0,0,0,0.8)]">
                <input type="text" className="p-4 focus:ring-0 focus:outline-none w-full bg-gray-100" placeholder="Search" onChange={handleChange} />
                <select name="" id="" className="mx-5 py-4 lg:py-0 focus:outline-none" onChange={handleSelect}>
                    <option value="movie">Movie</option>
                    <option value="tv">TV Shows</option>
                </select>
                <Link onClick={() => onClose()} to={`/${type}/search?query=${query}`} className="bg-gradient-to-bl from-red-500 to-red-600 hover:bg-gradient-to-br hover:from-red-500 hover:to-red-700 px-5 py-4 text-white font-bold text-center">Search</Link>
            </div>
        </motion.div>
    )
}