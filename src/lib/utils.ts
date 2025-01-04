import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}
// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }
