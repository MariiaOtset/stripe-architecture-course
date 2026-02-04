
import { NextRequest, NextResponse } from 'next/server'
import { auth, db } from '@/lib/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json({ error: 'missing-fields' }, { status: 400 })
    }

    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      email: user.email,
      createdAt: serverTimestamp(),
    })

    return NextResponse.json({ user: { uid: user.uid, email: user.email! } })
  } catch (err: any) {
    return NextResponse.json({ error: err.code || 'unknown' }, { status: 400 })
  }
}
