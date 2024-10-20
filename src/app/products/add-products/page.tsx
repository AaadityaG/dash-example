"use client";

import React, { useState, useRef } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ImageUp, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Stage2 from "@/components/stages/stage2";
import Stage3 from "@/components/stages/stage3";
import Stage4 from "@/components/stages/stage4";
import SlideToggle from '@/components/Toggle';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

interface OptionValue {
  option: string;
  value: string;
}


const Page = () => {
  const [currentStage, setCurrentStage] = useState(0); // Track the current stage (0 = Description)
  const stages = ["Description", "Variants", "Combinations", "Price Info"]; // Stage names
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState("Upload Image"); // State to store the file name
  const [productName, setProductName] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [options, setOptions] = useState<OptionValue[]>([{ option: '', value: '' }]);

  const handleAddOption = () => {
    setOptions([...options, { option: '', value: '' }]); // Add a new empty option-value pair
  };

  const handleChange = (index: number, field: 'option' | 'value', value: string) => {
    const newOptions = [...options];
    newOptions[index][field] = value; // Update the specific field for the given index
    setOptions(newOptions);
  };

  const handleRemoveOption = (index: number) => {
    const newOptions = options.filter((_, i) => i !== index); // Remove the option at the given index
    setOptions(newOptions);
  };

  const handleFileInputClick = () => {
    // Trigger the file input click event
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFileName(selectedFile.name); // Update state with the selected file name
    } else {
      setFileName("Upload Image"); // Reset to default if no file is selected
    }
  };

  // Function to move to the next stage
  const nextStage = () => {
    // Validation for the first stage
    if (currentStage === 0) {
      const newErrors: { [key: string]: string } = {};
      if (!productName) newErrors.productName = "Product Name is required.";
      if (!category) newErrors.category = "Category is required.";
      if (!brand) newErrors.brand = "Brand is required.";
      if (fileName === "Upload Image") newErrors.image = "Image upload is required.";

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return; // Stop navigation if there are errors
      }
    }

    if (currentStage < stages.length - 1) {
      setCurrentStage((prev) => prev + 1);
    } else {
      // Handle form submission on the last stage
      handleSubmit();
    }
  };

  // Function to move to the previous stage
  const prevStage = () => {
    if (currentStage > 0) {
      setCurrentStage((prev) => prev - 1);
    } else {
      // Handle cancellation logic here if at the first stage
      handleCancel();
    }
  };

  const handleCancel = () => {
    // Add cancel logic here
    console.log("Form canceled");
  };

  const handleSubmit = () => {
    // Add form submission logic here
    console.log("Form submitted");
  };

  // Form fields for each stage
  const renderStageFields = () => {
    switch (currentStage) {
      case 0:
        return (
          <>
            <div className="flex flex-col gap-4">
              <h1 className="font-semibold">Description</h1>

              <div className="flex flex-col">
                <Label htmlFor="product-name" className="mb-1 text-sm">Product Name *</Label>
                <Input
                  type="text"
                  id="product-name"
                  className={`border p-2 lg:w-1/2 md:w-1/2 text-sm ${errors.productName ? 'border-red-500' : ''}`}
                  placeholder="Enter Product Name"
                  value={productName}
                  onChange={(e) => {
                    setProductName(e.target.value);
                    setErrors((prev) => ({ ...prev, productName: "" })); // Clear error on input
                  }}
                />
                {errors.productName && <p className="text-red-500 text-sm">{errors.productName}</p>}
              </div>

              <div className="flex flex-col">
                <Label htmlFor="category" className="mb-1 text-sm">Category *</Label>
                <Select onValueChange={(value) => {
                  setCategory(value);
                  setErrors((prev) => ({ ...prev, category: "" })); // Clear error on selection
                }}>
                  <SelectTrigger className="lg:w-1/2 md:w-1/2  text-sm">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent className="lg:w-1/2 md:w-1/2  text-sm">
                    <SelectItem value="shoes">Shoes</SelectItem>
                    {/* Add more categories as needed */}
                  </SelectContent>
                </Select>
                {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
              </div>

              <div className="flex flex-col">
                <Label htmlFor="brand" className="mb-1 text-sm">Brand *</Label>
                <Input
                  type="text"
                  id="brand"
                  className={`border p-2 lg:w-1/2 md:w-1/2  text-sm ${errors.brand ? 'border-red-500' : ''}`}
                  placeholder="Enter Brand"
                  value={brand}
                  onChange={(e) => {
                    setBrand(e.target.value);
                    setErrors((prev) => ({ ...prev, brand: "" })); // Clear error on input
                  }}
                />
                {errors.brand && <p className="text-red-500 text-sm">{errors.brand}</p>}
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
                  className="border p-2 lg:w-1/5 md:w-1/5  text-sm flex items-center justify-center gap-2 bg-white border-[#497aff] text-[#497aff] font-semibold rounded-lg"
                >
                  <ImageUp /> <span>{fileName}</span> {/* Display the file name or default text */}
                </button>
                {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
              </div>
            </div>
          </>
        );
      case 1:
        return (
          <div className="flex flex-col gap-4">
      <h1 className="font-semibold">Variants</h1>

      {options.map((option, index) => (
        <div key={index} className="flex gap-4 items-end">
          <div className="flex flex-col">
            <Label htmlFor={`option-${index}`} className="mb-1 text-sm">Options *</Label>
            <Input
              type="text"
              id={`option-${index}`}
              className="border p-2 w-[100px] text-sm"
              placeholder=""
              value={option.option}
              onChange={(e) => handleChange(index, 'option', e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor={`value-${index}`} className="mb-1 text-sm">Values *</Label>
            <Input
              type="text"
              id={`value-${index}`}
              className="border p-2 w-[200px] text-sm"
              placeholder=""
              value={option.value}
              onChange={(e) => handleChange(index, 'value', e.target.value)}
            />
          </div>

          <Button 
            className='bg-transparent hover:bg-transparent'
            onClick={() => handleRemoveOption(index)}
          >
            <Trash2 className='text-[#ff3838]' />
          </Button>
        </div>
      ))}

      <Button 
        className='w-[100px] bg-white text-[#1F8CD0] hover:bg-white'
        onClick={handleAddOption}
      >
        + Add Option
      </Button>
    </div>
        )
      case 2:
        return (
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
  <h1 className="font-semibold">Variants</h1>
  
  {/* Column Headers */}
  <div className="hidden sm:grid grid-cols-4 gap-4">
    <div className="flex flex-col">
      <Label className="mb-1 text-sm"></Label>
    </div>
    <div className="flex flex-col">
      <Label htmlFor="sku" className="mb-1 text-sm">SKU *</Label>
    </div>
    <div className="flex flex-col">
      <Label className="mb-1 text-sm">In stock</Label>
    </div>
    <div className="flex flex-col">
      <Label htmlFor="quantity" className="mb-1 text-sm">Quantity</Label>
    </div>
  </div>

  {/* Variant Row 1 */}
  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
    <div className="flex flex-col">
      <p className="text-sm">M/Black</p>
    </div>
    <div className="flex flex-col">
      <Input
        type="text"
        id="sku-1"
        className="border p-2 text-sm w-full"
        placeholder=""
      />
    </div>
    <div className="flex flex-col">
      <SlideToggle />
    </div>
    <div className="flex flex-col">
      <Input
        type="text"
        id="quantity-1"
        className="border p-2 text-sm w-full"
        placeholder=""
      />
    </div>
  </div>

  {/* Variant Row 2 */}
  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
    <div className="flex flex-col">
      <p className="text-sm">M/Red</p>
    </div>
    <div className="flex flex-col">
      <Input
        type="text"
        id="sku-2"
        className="border p-2 text-sm w-full"
        placeholder=""
      />
    </div>
    <div className="flex flex-col">
      <SlideToggle />
    </div>
    <div className="flex flex-col">
      <Input
        type="text"
        id="quantity-2"
        className="border p-2 text-sm w-full"
        placeholder=""
      />
    </div>
  </div>
</div>


        )
      case 3:
        return (
          <div className="flex flex-col gap-4">
          <h1 className="font-semibold">Price Info</h1>

  <div className="flex flex-col ">
    <Label htmlFor="product-name" className="mb-1 text-sm">Price *</Label>
    <Input
      type="text"
      id="product-name"
      className="border p-2 w-1/2 text-sm"
      placeholder="Enter Product Name"
    />
  </div>

  <div className="flex flex-col ">
    <Label htmlFor="product-name" className="mb-1 text-sm">Discount</Label>
    <div className='flex gap-2'>
    <Input
      type="text"
      id="product-name"
      className="border p-2 w-1/3 text-sm"
      placeholder="Enter Product Name"
    />
    <ToggleGroup type="single" variant="outline">
      <ToggleGroupItem value="bold" aria-label="Toggle bold" className='bg-gray-300'>
        $
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic" className='bg-gray-300'>
        %
      </ToggleGroupItem>
    </ToggleGroup>
    </div>

  </div>
  </div>
        )
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-screen">
      {/* Header */}
      <div id="header" className="w-full h-8 flex justify-between items-center">
        <h1 className="lg:text-xl md:text-xl text-md font-bold">Add Products</h1>
        <div className="flex gap-3">
          {/* "Cancel" becomes "Back" on intermediate stages */}
          {currentStage === 0 ? (
            <Link href={"/products"}>
              <Button
                variant="outline"
                className="lg:px-10 md:px-10 font-[600] text-[#1F8CD0] bg-[#E1E7EB] hover:text-[#1F8CD0] hover:bg-[#E1E7EB]"
              >
                Cancel
              </Button>
            </Link>
          ) : (
            <Button
              variant="outline"
              onClick={prevStage}
              className="lg:px-10 md:px-10 font-[600] text-[#1F8CD0] bg-[#E1E7EB] hover:text-[#1F8CD0] hover:bg-[#E1E7EB]"
            >
              Back
            </Button>
          )}
          
          <Button
            onClick={nextStage}
            className="lg:px-10 md:px-10 bg-[#1F8CD0] text-white hover:bg-[#1F8CD0] hover:text-white font-[600]"
          >
            {currentStage === stages.length - 1 ? "Confirm" : "Next"}
          </Button>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="w-full mt-6">
        <Breadcrumb>
          <BreadcrumbList>
            {stages.map((stage, index) => (
              <BreadcrumbItem key={stage}>
                {index <= currentStage ? (
                  <BreadcrumbPage className="lg:bg-[#DAEDF9] md:bg-[#DAEDF9] lg:p-1 lg:px-2 md:p-1 md:px-2 rounded text-[#1F8CD0] font-[500] cursor-pointer lg:text-md md:text-md text-xs">
                    {stage}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    onClick={() => setCurrentStage(index)}
                    className="cursor-pointer lg:p-1 lg:px-2 md:p-1 md:px-2 lg:text-md md:text-md text-xs"
                  >
                    {stage}
                  </BreadcrumbLink>
                )}
                {/* Always render the separator if not the last item */}
                {index < stages.length - 1 && <BreadcrumbSeparator />}
              </BreadcrumbItem>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Form Fields */}
      <div className="mt-10">{renderStageFields()}</div>
    </div>
  );
};

export default Page;
