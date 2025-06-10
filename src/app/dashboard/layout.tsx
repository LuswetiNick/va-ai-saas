import { requireUser } from "@/hooks/require-user";

const DashboardLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await requireUser();
  return <div>{children}</div>;
};
export default DashboardLayout;
