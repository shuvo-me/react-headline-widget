import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const cn = (...classes: string[]) => twMerge(clsx(classes));

export default cn;
