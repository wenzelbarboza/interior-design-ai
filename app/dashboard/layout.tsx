import Header from "./_components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="pt-10 px-10 sm:px-20 lg:px-40 xl:px-60">{children}</div>
    </>
  );
}
