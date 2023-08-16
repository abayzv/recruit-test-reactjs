import { Link } from "react-router-dom";
import Layout from "../../components/layout";
import { FiLock, FiUser } from "react-icons/fi";

export default function Register() {
    return (
        <Layout>
            <div className="fixed top-0 w-[100%] h-[100%] flex items-center justify-center bg-gray-800">
                <div className="bg-white shadow-md p-10 rounded-md w-[500px] grid gap-5 mx-4">
                    <div className="w-full flex justify-center">
                        <Link to="/" className="flex items-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/1456/1456703.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap">Movie<span className='text-red-500'>Star</span></span>
                        </Link>
                    </div>
                    <div>
                        <form>
                            <div className="grid gap-2 mb-3">
                                <label className="text-neutral-500">Email</label>
                                <div className="flex border">
                                    <div className="flex items-center justify-center p-2 px-3 bg-slate-200">
                                        <FiUser size={20} />
                                    </div>

                                    <input
                                        name="email"
                                        type="text"
                                        className="p-2 px-4 w-full outline-none"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <div className="grid gap-2 mb-3">
                                <label className="text-neutral-500">Password</label>
                                <div className="flex border">
                                    <div className="flex items-center justify-center p-2 px-3 bg-slate-200">
                                        <FiLock size={20} />
                                    </div>

                                    <input
                                        name="password"
                                        type="password"
                                        className="p-2 px-4 w-full outline-none"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>
                            <div className="grid gap-2 mb-3">
                                <label className="text-neutral-500">Password Confirmation</label>
                                <div className="flex border">
                                    <div className="flex items-center justify-center p-2 px-3 bg-slate-200">
                                        <FiLock size={20} />
                                    </div>

                                    <input
                                        name="password"
                                        type="password"
                                        className="p-2 px-4 w-full outline-none"
                                        placeholder="Password Confirmation"
                                    />
                                </div>
                            </div>
                            <div className="w-full text-end">
                                <button
                                    type="submit"
                                    className="mt-5 w-full bg-red-500 p-3 px-5 rounded text-white"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}