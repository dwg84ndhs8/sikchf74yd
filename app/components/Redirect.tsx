"use client";

import { redirect } from 'next/navigation';

const Redirect = () => {
  const uri = process.env.NEXT_PUBLIC_REDIRECT_URI!;
  redirect(uri);
};

export default Redirect;