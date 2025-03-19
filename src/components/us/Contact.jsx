import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Contact = () => {

    const { register, handleSubmit } = useForm();
    const send = (data) => {
        console.log(data)
    }

  return (
    <div>
        <h1>Contact</h1>
        <form action="" onSubmit={handleSubmit(send)}>
            <input type="text" placeholder='Enter your name' {...register("name")}/>
            <input type="text" placeholder='Enter your e-mail' {...register("email")}/>
            <input type="text" placeholder='Enter your phone' {...register("phone")}/>
            <button type='submit'>Send</button>
        </form>
    </div>
  )
}

export default Contact