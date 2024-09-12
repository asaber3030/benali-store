import Link from "next/link";

import { Category } from "@prisma/client";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Nav({ categories }: { categories: Category[] }) {
  return (
    <div className="bg-slate-100 dark:bg-slate-800 border-b-2 border-slate-300 dark:border-slate-950">
      <nav className="section py-4 flex max-sm:flex-col max-sm:gap-4 justify-between items-center">
        <div className="flex max-sm:flex-col gap-4 items-center">
          {categories.map(({ name, id }, index) => (
            <Link
              key={index}
              href={`#${id}`}
              className="py-2 px-4 rounded-md bg-white dark:bg-slate-700 dark:hover:bg-slate-800 hover:bg-slate-100 active:bg-slate-200 dark:active:bg-slate-900 border-b-2 hover:border-0 active:border-t-2 border-slate-300 dark:border-slate-900 dark:active:border-slate-950 text-xl transition-all"
            >
              {name}
            </Link>
          ))}
        </div>
        <ThemeSwitcher />
      </nav>
    </div>
  );
}
