"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyToClipboardProps {
  text: string;
  displayText?: string;
  className?: string;
}

export function CopyToClipboard({ text, displayText, className }: CopyToClipboardProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className={cn(
        "inline-flex items-center gap-2 hover:text-primary transition-colors",
        copied && "text-green-500",
        className
      )}
    >
      {displayText || text}
      {copied ? (
        <Check className="h-4 w-4" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </button>
  );
}