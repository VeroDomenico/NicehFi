import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]/route'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { name, type, institution, accountNumber, initialBalance, currency } = body

  try {
    const account = await prisma.account.create({
      data: {
        name,
        type,
        balance: initialBalance,
        currency: currency || 'USD',
        institution,
        accountNumber,
        user: { connect: { email: session.user.email } },
      },
    })

    return NextResponse.json(account)
  } catch (error) {
    return NextResponse.json({ error: 'Error creating account' }, { status: 500 })
  }
}

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const accounts = await prisma.account.findMany({
      where: { user: { email: session.user.email } },
    })

    return NextResponse.json(accounts)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching accounts' }, { status: 500 })
  }
}

