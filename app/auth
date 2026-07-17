'use server';

import { createClient } from '@/lib/supabase/server';

export async function login(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
}

export async function register(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  return await supabase.auth.signUp({
    email,
    password,
  });
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
}

export async function forgotPassword(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get('email') as string;

  return await supabase.auth.resetPasswordForEmail(email);
}

export async function resetPassword(formData: FormData) {
  const supabase = await createClient();

  const password = formData.get('password') as string;

  return await supabase.auth.updateUser({
    password,
  });
}
