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
const Stage2 = () => {
  return (
    <div className="flex flex-col gap-4">
          <h1 className="font-semibold">Varients</h1>
            <div className="flex gap-4 items-end">
            <div className="flex flex-col">
              <Label htmlFor="product-name" className="mb-1 text-sm">Options *</Label>
              <Input
                type="text"
                id="product-name"
                className="border p-2 w-[100px] text-sm"
                placeholder=""
              />
              </div>



            <div className="flex flex-col">
              <Label htmlFor="product-name" className="mb-1 text-sm">Values *</Label>
              <Input
                type="text"
                id="product-name"
                className="border p-2 w-[200px] text-sm"
                placeholder=""
              />
            </div>
            <Button className='bg-transperent hover:bg-transperent'>
              <Trash2 className='text-[#ff3838]' />
            </Button>
            </div>
            <Button className='w-[100px] bg-white text-[#1F8CD0] hover:bg-white'>+ Add Option</Button>
          </div>
  )
}

export default Stage2
