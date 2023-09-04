import { useState } from "react";
import HText from "../../shared/HText";
import { X } from 'lucide-react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../FireBase/firebase'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const LogIn = () => {
    const [fields, setFields] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate()
    const onChange = (e) => {
        const { name, value } = e.target;
        setFields((prev) => ({ ...prev, [name]: value }));
    }

    const handleSignIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, fields.email, fields.password)
            .then((userCredential) => {
                // Successfully signed in
                const user = userCredential.user;
                navigate('/')
                // console.log(user)
                // Handle successful sign-in here
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // Handle sign-in error here
            });
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-primary-100/40">
            <div className="bg-primary-100 p-8 rounded-lg shadow-lg w-2/5 ">
                <div className="flex justify-end items-center mb-5">
                    <Link to="/">
                        <X className="h-6 w-6" />
                    </Link>
                </div>
                <div className="text-center">
                    <HText>Log In</HText>
                </div>
                <form onSubmit={handleSignIn} method="post">
                    <div className="mt-4 flex flex-col justify-center items-start text-lg">
                        <h2>EMAIL</h2>
                        <input
                            type="email"
                            name="email"
                            value={fields.email}
                            placeholder="Enter your email"
                            onChange={onChange}
                            className="w-full px-4 py-3 rounded-lg bg-white placeholder-white border border-gray-300 focus:outline-none focus:ring focus:border-primary-300"
                        />
                    </div>
                    <div className="mt-4 flex flex-col justify-center items-start text-lg">
                        <h2>PASSWORD</h2>
                        <input
                            type="password"
                            name="password"
                            value={fields.password}
                            placeholder="Enter your password"
                            onChange={onChange}
                            autocomplete="current-password"
                            className="w-full px-4 py-3 rounded-lg bg-white placeholder-white border border-gray-300 focus:outline-none focus:ring focus:border-primary-300"
                        />
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full px-4 py-3 bg-yellow-300 text-white rounded-lg hover:bg-primary-400 focus:outline-none focus:ring focus:ring-primary-200 font-montserrat"
                        >
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LogIn;
