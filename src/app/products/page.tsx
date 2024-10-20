"use client"

import React, { useEffect, useState } from 'react';
// import { Button } from './ui/button';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Link from 'next/link';
import { useToast } from "@/hooks/use-toast"

const Products = () => {
    // State for managing the dialog
    const [isOpen, setIsOpen] = useState(false);
    // State for the new category name
    const [categoryName, setCategoryName] = useState('');
    // State for storing categories
    const [categories, setCategories] = useState<string[]>([]);

    const { toast } = useToast()

    // Load categories from local storage on component mount
    useEffect(() => {
        const storedCategories = localStorage.getItem('categories');
        if (storedCategories) {
            setCategories(JSON.parse(storedCategories));
        }
    }, []);

    // Function to handle saving the category
    const handleSave = () => {
        if (categoryName) {
            const updatedCategories = [...categories, categoryName]; // Add new category to the list
            setCategories(updatedCategories); // Update state

            // Save to local storage
            localStorage.setItem('categories', JSON.stringify(updatedCategories));

            setCategoryName(''); // Clear input
            setIsOpen(false); // Close dialog
        }
    };

    return (
        <div className='w-full h-screen'>
            <div id="header" className='w-full h-8 flex justify-between items-center'>
                <h1 className='text-xl font-bold'>Products</h1>
                <div className='flex gap-3'>
                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                        <DialogTrigger asChild>
                            <Button variant={"outline"} className='font-[600] text-[#1F8CD0] bg-[#E1E7EB] hover:text-[#1F8CD0] hover:bg-[#E1E7EB]'>
                                Add Category
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Add Category</DialogTitle>
                                <DialogDescription>
                                    <label htmlFor="category-name" className='block mb-2'>Category Name *</label>
                                    <input
                                        id="category-name"
                                        type="text"
                                        value={categoryName}
                                        onChange={(e) => setCategoryName(e.target.value)}
                                        className='w-full p-2 border border-gray-300 rounded'
                                        required
                                    />
                                </DialogDescription>
                            </DialogHeader>
                            <div className='flex justify-end mt-4'>
                                <Button variant="outline" onClick={() => setIsOpen(false)} className='mr-2 text-[#1F8CD0]'>
                                    Cancel
                                </Button>
                                <Button onClick={handleSave} className='bg-[#1F8CD0]'>
                                    Save
                                </Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                    {categories.length !== 0 ? 
                <Link href="/products/add-products">
                <Button 
                    className='bg-[#1F8CD0] text-white hover:bg-[#1F8CD0] hover:text-white font-[600]' 
                    >
                    Add Products
                </Button>
                </Link> : 
                <Button 
                    className='bg-[#1F8CD0] text-white hover:bg-[#1F8CD0] hover:text-white font-[600]' 
                    onClick={() => {
                        toast({
                          title: "Please create category first!",
                        })
                      }}
                    >
                    Add Products
                </Button>
                }
                </div>
            </div>
            <div className='h-4/5 mt-5 flex flex-wrap gap-4'>
                {categories.map((category, index) => (
                    <div key={index} className='w-60 h-full bg-[#c7c7c7] rounded-lg p-3 font-[500]'>
                        {category}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
