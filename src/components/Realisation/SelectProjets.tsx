
import { Label, Select } from "flowbite-react";

export function SelectProjets() {
  return (
    <div className="">
      <div className="mb-2 block bg-white">
        <Label htmlFor="countries">Select your country</Label>
      </div>
      <Select id="countries" required>
        <option>United States</option>
        <option>Canada</option>
        <option>France</option>
        <option>Germany</option>
      </Select>
    </div>
  );
}
