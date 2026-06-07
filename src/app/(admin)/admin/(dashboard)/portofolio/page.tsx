import { prisma } from "@/lib/prisma";
import PortfolioManager from "./PortfolioManager";

export const dynamic = "force-dynamic";

export default async function PortofolioPage() {
  const portfolios = await prisma.portfolio.findMany({
    orderBy: { createdAt: 'desc' }
  });
  
  const formattedData = portfolios.map(item => ({
    id: item.id,
    title: item.title,
    category: item.category,
    description: item.description,
    imageUrl: item.imageUrl,
  }));

  return (
    <PortfolioManager initialData={formattedData} />
  );
}
