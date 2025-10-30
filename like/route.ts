import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";
export async function POST(req: NextRequest) {
  const { fromId, toId } = await req.json();
  if (!fromId || !toId) return NextResponse.json({ ok: false, error: "fromId/toId required" }, { status: 400 });
  await prisma.like.upsert({ where: { fromId_toId: { fromId, toId } }, create: { fromId, toId }, update: {} });
  const reciprocal = await prisma.like.findUnique({ where: { fromId_toId: { fromId: toId, toId: fromId } } });
  if (reciprocal) {
    await prisma.match.upsert({
      where: { userAId_userBId: { userAId: fromId, userBId: toId } },
      create: { userAId: fromId, userBId: toId }, update: {}
    });
  }
  return NextResponse.json({ ok: true, match: Boolean(reciprocal) });
}
