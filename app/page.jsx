"use client"

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <section className="py-5">
        <p
          className="text-2xl pb-4 text-center font-bold text-blue-500"
        >
          This is Home page
        </p>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <Link href={'/blogs'}><Button>Blogs</Button></Link>
        </motion.div>
      </section>
    </>

  )
}

export default Home
