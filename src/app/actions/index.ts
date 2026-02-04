'use server'

import { auth } from '@/lib/firebase'
import { UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export async function signUp(values: any) {
  try {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    )
    return { user: userCredential.user }
  } catch (error: any) {
    return { error: error.message }
  }
}

export async function signIn(values: any) {
  try {
    const userCredential: UserCredential = await signInWithEmailAndPassword(
      auth,
      values.email,
      values.password
    )
    return { user: userCredential.user }
  } catch (error: any) {
    return { error: error.message }
  }
}
