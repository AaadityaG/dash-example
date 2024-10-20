
"use client"

import React, { useState } from 'react';


import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const Stage4 = () => {
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
}

export default Stage4
