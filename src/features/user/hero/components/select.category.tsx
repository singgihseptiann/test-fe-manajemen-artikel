import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

export default function SelectCategory() {
  return (
    <div className="flex flex-col gap-2 rounded-2xl bg-blue-500 p-2 md:flex-row">
      <div>
        <Select>
          <SelectTrigger className="w-full bg-white md:w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Input type="search" placeholder="Search Articles" className="bg-white" />
    </div>
  );
}
