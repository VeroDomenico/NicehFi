import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../../auth/[...nextauth]/route'

const prisma = new PrismaClient()

export async function POST(request: Request, { params }: { params: { accountId: string } }) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { type, amount, description, category, date } = body

  try {
    const account = await prisma.account.findUnique({
      where: { id: params.accountId },
      include: { user: true },
    })

    if (!account || account.user.email !== session.user.email) {
      return NextResponse.json({ error: 'Account not found' }, { status: 404 })
    }

    const transaction = await prisma.transaction.create({
      data: {
        type,
        amount,
        description,
        category,
        date: new Date(date),
        account: { connect: { id: params.accountId } },
      },
    })

    // Update account balance
    await prisma.account.update({
      where: { id: params.accountId },
      data: { balance: type === 'CREDIT' ? account.balance.add(amount) : account.balance.sub(amount) },
    })

    return NextResponse.json(transaction)
  } catch (error) {
    return NextResponse.json({ error: 'Error creating transaction' }, { status: 500 })
  }
}

export async function GET(request: Request, { params }: { params: { accountId: string } }) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const account = await prisma.account.findUnique({
      where: { id: params.accountId },
      include: { user: true },
    })

    if (!account || account.user.email !== session.user.email) {
      return NextResponse.json({ error: 'Account not found' }, { status: 404 })
    }

    const transactions = await prisma.transaction.findMany({
      where: { accountId: params.accountId },
      orderBy: { date: 'desc' },
    })

    return NextResponse.json(transactions)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching transactions' }, { status: 500 })
  }
}

