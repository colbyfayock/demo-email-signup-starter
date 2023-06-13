"use client";

import { useState } from 'react';

import { buttonVariants } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

const SignupForm = () => {
  const [state, setState] = useState<string>();

  async function handleOnSubmit(e) {
    e.preventDefault();
    setState('loading');
    setTimeout(() => {
      setState('ready');
    }, 1500);
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input id="name" />
      <Label htmlFor="email">Email</Label>
      <Input id="email" />
      <button className={buttonVariants()} disabled={state === 'loading'}>
        Sign Up
      </button>
    </form>
  )
}

export default SignupForm;