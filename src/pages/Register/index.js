import React, { useState } from 'react'
import logo from '../../assets/logo.png';
import { registerUser  } from '../../services/authService';
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [inputValues, setInputValues] = useState({
        nome: '',
        email:'',
        senha: '',
        imagem:''
      })

      const navigate = useNavigate();

      const handleChangeValues = (evento) => {
        setInputValues({
          ...inputValues,
          [evento.target.name]: evento.target.value
        })
        console.log(inputValues);
      }

      const handleSubmit = async (evento) => {
        evento.preventDefault();
        const response = await registerUser(inputValues);
        if(response.data) {
            alert(`Usuario ${response.data.nome} Cadastrado com Sucesso!`)
            navigate('/admin')
        }
      }

    
  return (
   <main className='h-screen w-full banner'>
        <div className='flex pt-20 flex-col items-center h-screen'>
            <img src={logo} alt='Logotipo do Food App' className='w-52'/>
            <h1 className='text-2x1 text-gray-600'>Cadastro do Usuario</h1>
            <form onSubmit={handleSubmit} className='bg-white w-96 mt-6 p-4 rounded-lg shadow-lg'>
                <div className='flex flex-cool space-x-6'>
                    <input type='text' name='nome' placeholder='Digite o seu Nome:'
                    className='w-full px-4 p-3 rounded-lg ring-red-400 focus:ring-1 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl'
                    onChange={handleChangeValues}
                    />
                    <input type='email' name='email' placeholder='Digite o seu Email:'
                    className='w-full px-4 p-3 rounded-lg ring-red-400 focus:ring-1 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl'
                    onChange={handleChangeValues}
                    />
                    <input type='password' name='senha' placeholder='Digite o sua Senha:'
                    className='w-full px-4 p-3 rounded-lg ring-red-400 focus:ring-1 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl'
                    onChange={handleChangeValues}
                    />
                    <input type='text' name='imagem' placeholder='Insira a URL da Imagem de Avatar'
                    className='w-full px-4 p-3 rounded-lg ring-red-400 focus:ring-1 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl'
                    onChange={handleChangeValues}
                    />
                    <button type="submit" className="w-full py-3 bg-primary text-white focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300">
                    Cadastrar
                    </button>
                </div>
            </form>
        </div>
   </main>
  )
}

export default Register