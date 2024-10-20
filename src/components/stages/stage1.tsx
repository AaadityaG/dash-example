
"use client"

import React, { useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Button } from '@/components/ui/button';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Trash2 } from 'lucide-react';
import SlideToggle from '@/components/Toggle';


const Stage1 = () => {
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
    <SelectTrigger className="w-1/2 text-sm"> {/* Adjust the width here */}
      <SelectValue placeholder="Select Category" />
    </SelectTrigger>
    <SelectContent className="w-1/2 text-sm"> {/* Ensure the dropdown matches the trigger's width */}
      <SelectItem value="shoes">Shoes</SelectItem>
    </SelectContent>
  </Select>
</div>


  <div className="flex flex-col">
    <Label htmlFor="details" className="mb-1 text-sm">Brand *</Label>
    <Input
      type="text"
      id="details"
      className="border p-2 w-1/2 text-sm"
      placeholder="Enter Brand"
    />
  </div>
</div>
  )
}

export default Stage1
