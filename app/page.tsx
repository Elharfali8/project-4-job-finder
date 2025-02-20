'use client'
import Link from "next/link";
import Image from "next/image";
import {motion} from 'framer-motion'
import { Button } from "@/components/ui/button";
import landing from '@/assets/landing.svg'

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center bg-muted">
      <div className="container main-container grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{opacity: 1, x: 0}}
          transition={{ duration: 0.5 }}
          className="grid place-content-center"
        >
          <h1 className="text-4xl lg:text-5xl poppins-bold text-gray-900 dark:text-gray-50 capitalize">
            find your dream job
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg lg:text-xl">
            Explore thousands of job opportunities, track applications, and land your perfect role.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-2 lg:text-lg">
            Start your journey with us and take control of your career today.
          </p>
          <div>
          <Button asChild className="px-6 lg:px-8 mt-6 text-gray-50">
            <Link href={'/dashboard'} className="md:text-lg poppins-medium capitalize w-auto">
              go to dashboard
            </Link>
          </Button>
          </div>
        </motion.div>
        <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{opacity: 1, x: 0}}
             transition={{ duration: 0.5 }}
             className="hidden lg:grid place-items-center"
        >
            <Image src={landing} alt="landing interview" width={500} height={400} />
        </motion.div>
      </div>
    </main>
  );
}
