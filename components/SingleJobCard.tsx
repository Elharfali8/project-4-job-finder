import * as React from "react"

interface SingleJobTypes {
  title: string,
  company_name: string,
  company_logo: string,
  job_type: string,
  category: string,
  publication_date: string,
}

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { Star } from "lucide-react"

export function SingleJobCard({
  title,
  company_name,
company_logo,
job_type,
category,
publication_date,
}: SingleJobTypes) {

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", { 
      day: "2-digit", 
      month: "short", 
      year: "numeric" 
    });
  };

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-x-4">
          <span>
            <Image src={company_logo} alt="company logo" width={50} height={50} className="rounded-full shadow-lg border-gray-800 border dark:border-gray-200"/>
          </span>
                  <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{company_name}</CardDescription>
              </div>
        </div>
      </CardHeader>
      <CardContent >
        <div className="flex flex-wrap gap-4 items-center">
        <p className="py-1 px-3 rounded-md bg-sky-600 text-white">{category}</p>
        <p className="py-1 px-3 rounded-md bg-green-700 text-white ">{job_type}</p>
        </div>
        <p className="mt-6 ">
          <span className="mr-2 text-lg poppins-semibold">publication date :</span>
          <span className="text-gray-700 dark:text-gray-300">{formatDate(publication_date)}</span>
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="bg-yellow-300 dark:text-gray-800 hover:bg-yellow-200">Add to favorite <Star /></Button>
        <Button className="dark:text-white">Apply for job</Button>
      </CardFooter>
    </Card>
  )
}
