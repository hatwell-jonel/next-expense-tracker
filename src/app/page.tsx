'use client';
import Header from "@/components/Header";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel
} from "@/components/ui/select"
import { yearList } from "@/lib/utils";
import CreateBudget from "@/components/CreateBudget";
import BudgetCard from "@/components/BudgetCard";




export default function Home() {

  const CREATE_BUDGET = "/create";

  return (
    <>  
      <Header />
      <main className="mt-10">
        <div className="w-full md:w-[80%] mx-auto place-content-center flex justify-between px-10" aria-label="filter">
          <span>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by Year..  " />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {
                yearList.map((year, index) => (<SelectItem key={index} value={year}>{year}</SelectItem>))
              }
            </SelectContent>
          </Select>
          </span>
          <span>
              <CreateBudget />
          </span>
        </div>


        <div className="px-10 pt-10 w-full md:w-[80%] mx-auto place-content-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" aria-label="budgets">
            <BudgetCard />
            <BudgetCard />
            <BudgetCard />
            <BudgetCard />
            <BudgetCard />
            <BudgetCard />
            <BudgetCard />
            <BudgetCard />
            <BudgetCard />
            <BudgetCard />
            <BudgetCard />
            <BudgetCard />
        </div>

      </main>
      {/* <footer className="border border-red-500 py-5 sticky bottom-0 ">
        <div className="w-full md:w-[80%] mx-auto place-content-center ">
            all rights reserved 2024 
            &copy;  <Link href="https://www.linkedin.com/in/jonel-hatwell/" target="_blank"> Jonel Hatwell</Link>
        </div>
      </footer> */}
    </>
  );
}

