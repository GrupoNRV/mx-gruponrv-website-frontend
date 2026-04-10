import HeaderSoft from "@/components/layout/copy-home/HeaderSoft";
import FooterBackTopWrapper from "@/components/layout/copy-home/FooterBackTopWrapper";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderSoft />
      <main>{children}</main>
      <FooterBackTopWrapper />
    </>
  );
}
