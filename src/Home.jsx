import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({ user, setUser }) => {
    const navigate = useNavigate(); // ✅ best practice

    const handleSubmit = (e) => {
        e.preventDefault();  
        navigate("/quiz")

    }
    return (
        <div className='text-center justify-center items-center bg-blue-500 w-full h-full text-white p-28'>
            <h1 className='text-5xl font-extrabold text-red-700'>Welcome to Quiz...!</h1>
            <form onSubmit={handleSubmit}>
                <section className='mt-10'>
                    <label className='text-2xl font-semibold text-red-700' htmlFor="name">Name: </label>
                    <input className='border-none bg-blue-300 rounded-lg text-red-700 w-60 p-2' type="text" placeholder= 'Enter your Name' id='name' name='name' required onChange={(e) => {
                        const { value } = e.target
                        setUser(value)
                    }} />
                </section>
                <br />
                <button className='cursor-pointer text-lg bg-blue-300 rounded-lg px-5 py-2 mt-5 text-red-700 font-semibold transform hover:-translate-y-1' disabled={user.length === 0} type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default Home