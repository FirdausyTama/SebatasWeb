"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { createToken } from "@/lib/auth";
import { cookies } from "next/headers";

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email dan Password wajib diisi" };
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return { error: "Email atau Password salah" };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return { error: "Email atau Password salah" };
    }

    // Buat JWT token
    const token = await createToken({ 
      id: user.id, 
      email: user.email, 
      name: user.name 
    });

    // Simpan ke HTTP Only Cookie
    (await cookies()).set("admin_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });

    return { success: true };
  } catch (error) {
    return { error: "Terjadi kesalahan sistem, silakan coba lagi" };
  }
}

export async function logoutAction() {
  (await cookies()).delete("admin_session");
}
