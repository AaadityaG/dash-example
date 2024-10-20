"use client";

import React, { useState } from 'react';
import {
  Button
} from '@/components/ui/button';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Trash2 } from 'lucide-react';

// Define the type for the option-value pairs
interface OptionValue {
  option: string;
  value: string;
}

const Stage2: React.FC = () => {
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
  );
};

export default Stage2;
