import { useForm } from "react-hook-form"

import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Correo enviado satisfactoriamente');



export const Form = () => {

  const {register ,
     handleSubmit , 
     formState : {errors}
    } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    notify()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-[300px] m-auto flex flex-col items-center justify-center mb-10" action=""> 
    <Toaster />
        <input className={`border-2 border-Gray-400 px-4 rounded-2xl w-full h-10 focus:outline-none ${errors.email && "border-Red-400"}`} type="email" placeholder="ingresu su correo electronico" 
        {
          ...register("email" , {required: true, pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g })
        }
        />

        {
          errors.email?.type === "pattern" && <p className="text-Red-400 italic ">Por favor ingrese una email valido</p>
        }
        {
          errors.email?.type === "required" && <p className="text-Red-400 italic ">El correo es obligatorio</p>
        }
        
        <input className="bg-Blue-500 text-white w-full rounded-2xl p-2  mt-8 shadow-Blue-500 shadow-lg cursor-pointer hover:bg-Blue-500/80 hover:shadow-Blue-500/80 transition-all duration-500" type="submit" value="Notificarme" />
    </form>
  )
}

