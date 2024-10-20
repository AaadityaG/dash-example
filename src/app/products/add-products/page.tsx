"use client";

import React, { useState } from "react";
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

import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import SlideToggle from "@/components/Toggle";
import Stage1 from "@/components/stages/stage1";
import Stage2 from "@/components/stages/stage2";
import Stage3 from "@/components/stages/stage3";
import Stage4 from "@/components/stages/stage4";

const page = () => {
  const [currentStage, setCurrentStage] = useState(0); // Track the current stage (0 = Description)

  const stages = ["Description", "Variants", "Combinations", "Price Info"]; // Stage names

  // Function to move to the next stage
  const nextStage = () => {
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
            <Stage1 />
          </>
        );
      case 1:
        return (
          <>
            <Stage2 />
          </>
        );
      case 2:
        return <Stage3 />;
      case 3:
        return <Stage4 />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-screen ">
      {/* Header */}
      <div id="header" className="w-full h-8 flex justify-between items-center">
        <h1 className="text-xl font-bold">Add Products</h1>
        <div className="flex gap-3">
          {/* "Cancel" becomes "Back" on intermediate stages */}
          {currentStage === 0 ? (
            <Link href={"/products"}>
              <Button
                variant="outline"
                className="px-10 font-[600] text-[#1F8CD0] bg-[#E1E7EB] hover:text-[#1F8CD0] hover:bg-[#E1E7EB]"
              >
                Cancel
              </Button>
            </Link>
          ) : (
            <Button
              variant="outline"
              onClick={prevStage}
              className="px-10 font-[600] text-[#1F8CD0] bg-[#E1E7EB] hover:text-[#1F8CD0] hover:bg-[#E1E7EB]"
            >
              {/* {currentStage === 0 ? 'Cancel' : 'Back'} */}
              Back
            </Button>
          )}
          
          {
            currentStage === stages.length - 1 ? 
            <Button
            onClick={nextStage}
            className="px-10 bg-[#1F8CD0] text-white hover:bg-[#1F8CD0] hover:text-white font-[600]"
          >
            Confirm
          </Button>
          :
          <Button
            onClick={nextStage}
            className="px-10 bg-[#1F8CD0] text-white hover:bg-[#1F8CD0] hover:text-white font-[600]"
          >
            Next
          </Button>
          }
        </div>
      </div>

      {/* Breadcrumb */}
      {/* Breadcrumb */}
      <div className="w-full mt-6">
        <Breadcrumb>
          <BreadcrumbList>
            {stages.map((stage, index) => (
              <BreadcrumbItem key={stage}>
                {index <= currentStage ? ( // Check if the index is less than or equal to currentStage
                  <BreadcrumbPage className="bg-[#DAEDF9] p-1 px-2 rounded text-[#1F8CD0] font-[500] cursor-pointer">
                    {stage}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    onClick={() => setCurrentStage(index)}
                    className="cursor-pointer"
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

export default page;
