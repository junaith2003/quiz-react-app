import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Result = ({ user, score }) => {
    const navigator = useNavigate()
    if (!user) {
        navigator("/")
    }

    useEffect(() => {
        if (!user) {
            navigator("/")
        }
    }, [user])
    return (
        <div className='text-center bg-blue-500 text-red-700 p-28'>
            <h1 className='text-5xl text-red-700 font-extrabold'>Quiz Completed...!</h1>
            <h2 className='text-3xl mt-10 font-bold mb-5 text-red-700'>Hello {user},Your Score is {score}.</h2>
            <a href="/home">
                <button className='bg-blue-400 rounded-lg px-6 py-2 text-lg font-medium'>Back to Home</button>
            </a>
        </div>
    )
}

export default Result