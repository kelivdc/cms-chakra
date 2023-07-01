'use client'
// import Image from 'next/image'
// import styles from './page.module.css'

import { Button, ChakraProvider, Input } from "@chakra-ui/react";
import { useState } from "react";
import slugify from "slugify";

export default function Home() {
  const [slug, setSlug] = useState('')
  const handleInput = (event) => {
    setSlug(slugify(event.target.value, {lower: true}))
  }
  return (
    <ChakraProvider>
      <Input onChange={handleInput} />
      <Input value={slug} />
      <Button colorScheme="blue">Button</Button>
    </ChakraProvider>
  )
}
