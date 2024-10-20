"use client";

import React from 'react';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import SlideToggle from '@/components/Toggle';

const Stage3 = () => {
  return (
    <div className="flex flex-col gap-4 w-1/2">
      <h1 className="font-semibold">Variants</h1>
      <div className="grid grid-cols-4 gap-4">
        {/* Column Headers */}
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
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col">
          <p className='text-sm'>M/Black</p>
        </div>
        <div className="flex flex-col">
          <Input
            type="text"
            id="sku-1"
            className="border p-2 w-[100px] text-sm"
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
            className="border p-2 w-[200px] text-sm"
            placeholder=""
          />
        </div>
      </div>

      {/* Variant Row 2 */}
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col">
          <p className='text-sm'>M/Red</p>
        </div>
        <div className="flex flex-col">
          <Input
            type="text"
            id="sku-2"
            className="border p-2 w-[100px] text-sm"
            placeholder=""
          />
        </div>
        <div className="flex flex-col">
          <SlideToggle  />
        </div>
        <div className="flex flex-col">
          <Input
            type="text"
            id="quantity-2"
            className="border p-2 w-[200px] text-sm"
            placeholder=""
          />
        </div>
      </div>

      {/* Variant Row 2 */}
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col">
          <p className='text-sm'>L/Black</p>
        </div>
        <div className="flex flex-col">
          <Input
            type="text"
            id="sku-2"
            className="border p-2 w-[100px] text-sm"
            placeholder=""
          />
        </div>
        <div className="flex flex-col">
          <SlideToggle  />
        </div>
        <div className="flex flex-col">
          <Input
            type="text"
            id="quantity-2"
            className="border p-2 w-[200px] text-sm"
            placeholder=""
          />
        </div>
      </div>

      {/* Variant Row 2 */}
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col">
          <p className='text-sm'>L/Red</p>
        </div>
        <div className="flex flex-col">
          <Input
            type="text"
            id="sku-2"
            className="border p-2 w-[100px] text-sm"
            placeholder=""
          />
        </div>
        <div className="flex flex-col">
          <SlideToggle  />
        </div>
        <div className="flex flex-col">
          <Input
            type="text"
            id="quantity-2"
            className="border p-2 w-[200px] text-sm"
            placeholder=""
          />
        </div>
      </div>
    </div>
  );
}

export default Stage3;
