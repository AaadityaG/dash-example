import React from 'react';
import Image from 'next/image';
import Logo from "@/assets/user.png"; // Change this to the appropriate product image path

interface ProductCardProps {
    productName: string;
    price: string;
    brand: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ productName, price, brand }) => {
    return (
        <div className='w-full bg-white rounded flex gap-2 p-2 h-20 items-center mt-2'>
            <Image src={Logo} alt={productName} className='h-16 w-16 rounded' />
            <div className='flex flex-col'>
                <span className='font-[500]'>{productName}</span>
                <span className='text-xs'>{price}</span>
                <span className='text-xs p-1 bg-[#E1E7EB] text-[#1F8CD0]'>{brand}</span>
            </div>
        </div>
    );
}

export default ProductCard;
