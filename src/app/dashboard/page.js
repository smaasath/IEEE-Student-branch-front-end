'use client'
import { useRouter } from "next/navigation";
import React, { useEffect } from 'react'


const page = () => {
    const router = useRouter()
    useEffect(() => {
        router.push('/dashboard/insights')
    }, [])
    return (
        <div>
            <h1>loading</h1>
        </div>
    )
}

export default page
