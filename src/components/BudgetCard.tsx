'use client';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Link from "next/link";
import { motion } from "framer-motion";
  

const BudgetCard = () => {
    const budget_details = `budget-details`;

    return (
        <motion.div whileHover={{scale: 1.02,}}>
            <Link href={budget_details}>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-center underline">January 2024</CardTitle>
                        {/* <CardDescription>Card Description</CardDescription> */}
                    </CardHeader>
                    <CardContent>
                        <ul>
                            <li className="flex gap-5 justify-center">
                                <p className="uppercase">budget:</p>
                                <p>£1000</p>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </Link>
        </motion.div>
    );
}
 
export default BudgetCard;