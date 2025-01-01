import { Textarea } from "@/components/ui/textarea";
import React from "react";

type Props = {
  prompt: (value: string) => void;
};

const AdditionalPrompts = ({ prompt }: Props) => {
  return (
    <div className="mt-5">
      <label className="text-slate-500">User Prompts (optional)</label>
      <Textarea
        placeholder="Enter your prompt here..."
        onChange={(e) => prompt(e.target.value)}
        className="mt-2"
      />
    </div>
  );
};

export default AdditionalPrompts;
