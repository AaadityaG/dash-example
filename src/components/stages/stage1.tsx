"use client";

import React, { useRef, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { ImageUp } from 'lucide-react';

const Stage1 = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('Upload Image'); // State to store the file name

  const handleFileInputClick = () => {
    // Trigger the file input click event
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFileName(selectedFile.name); // Update state with the selected file name
    } else {
      setFileName('Upload Image'); // Reset to default if no file is selected
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-semibold">Description</h1>

      <div className="flex flex-col ">
        <Label htmlFor="product-name" className="mb-1 text-sm">Product Name *</Label>
        <Input
          type="text"
          id="product-name"
          className="border p-2 w-1/2 text-sm"
          placeholder="Enter Product Name"
        />
      </div>

      <div className="flex flex-col">
        <Label htmlFor="category" className="mb-1 text-sm">Category *</Label>
        <Select>
          <SelectTrigger className="w-1/2 text-sm">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent className="w-1/2 text-sm">
            <SelectItem value="shoes">Shoes</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col">
        <Label htmlFor="brand" className="mb-1 text-sm">Brand *</Label>
        <Input
          type="text"
          id="brand"
          className="border p-2 w-1/2 text-sm"
          placeholder="Enter Brand"
        />
      </div>

      <div className="flex flex-col">
        <Input
          type="file"
          id="image-upload"
          className="hidden" // Hide the default file input
          ref={fileInputRef}
          accept="image/*" // Accept image files only
          onChange={handleFileChange} // Call handleFileChange on file selection
        />
        <button
          type="button"
          onClick={handleFileInputClick}
          className="border p-2 w-1/5 text-sm flex items-center justify-center gap-2 bg-white border-[#497aff] text-[#497aff] font-semibold rounded-lg"
        >
          <ImageUp /> <span>{fileName}</span> {/* Display the file name or default text */}
        </button>
      </div>
    </div>
  );
};

export default Stage1;
