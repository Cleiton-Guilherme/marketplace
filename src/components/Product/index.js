import React from 'react';
import imagem from '../../assets/hambuger.png'
import { useNavigate } from 'react-router-dom';

const Product = ({ Product }) => {
  const navigate = useNavigate();

  return (
    <div className='bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover: scale-105 p-4 rounded-lg relative'>
        <span className='bg-red-100 border-red-500 rounded-full text-primary text-sm px-4 py-1 inline-block mb-4'>Hamburguer</span>
        <img className='w-64 mx-auto transform transition duration-300 hover:scale-105' src={imagem} alt="Imagem do produto"/>
        <div className='flex flex-col items-center my-3 space-y-2'>
            <h1 className='text-gray-900 text-lg'>{Product.nome}</h1>
            <p className='text-gray-500 text-sm text-center'>{Product.descricao}</p>
            <h2 className='text-gray-900 text-2x1 font-bold'>{Product.precoUnitario}</h2>
            <button onClick={() => navigate(`/product/${Product._id}`)} className='bg-primary text-white px-8 py-2 rounded-ss-full transition transform duration-300 hover: scale-105'>Pedir Agora</button>
        </div>
    </div>
  )
}

export default Product