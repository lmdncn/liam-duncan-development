import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatIndex(n: number): string {
  return String(n).padStart(2, "0");
}

export function scrollToAnchor(href: string): void {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}
