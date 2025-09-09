"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";


const Filter = () => {
     const searchParams = useSearchParams();
     const router = useRouter();
     const pathname = usePathname();


  return (
  <div className="flex items-center justify-end gap-2 text-sm">
    <span>Sort by:</span>
    <select name="sort" id="sort">
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="asc">Price: Low o High</option>
        <option value="desc">Price: High to Low</option>
    </select>
  </div>
);
};

export default Filter;
