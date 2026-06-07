"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getPortfolios() {
  return await prisma.portfolio.findMany({
    orderBy: { createdAt: 'desc' }
  });
}

export async function addPortfolio(formData: FormData) {
  const title = formData.get("title") as string;
  const category = formData.get("category") as string;
  const description = formData.get("description") as string;
  const imageUrl = formData.get("imageUrl") as string;

  if (!title || !category || !description || !imageUrl) {
    return { error: "Semua kolom wajib diisi" };
  }

  try {
    await prisma.portfolio.create({
      data: {
        title,
        category,
        description,
        imageUrl,
      }
    });

    revalidatePath("/admin/portofolio");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    return { error: "Gagal menyimpan portofolio" };
  }
}

export async function updatePortfolio(id: string, formData: FormData) {
  const title = formData.get("title") as string;
  const category = formData.get("category") as string;
  const description = formData.get("description") as string;
  const imageUrl = formData.get("imageUrl") as string;

  try {
    await prisma.portfolio.update({
      where: { id },
      data: {
        title,
        category,
        description,
        imageUrl,
      }
    });

    revalidatePath("/admin/portofolio");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    return { error: "Gagal mengupdate portofolio" };
  }
}

export async function deletePortfolio(id: string) {
  try {
    await prisma.portfolio.delete({
      where: { id }
    });
    
    revalidatePath("/admin/portofolio");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    return { error: "Gagal menghapus portofolio" };
  }
}
