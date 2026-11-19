import "./globals.css";

export const metadata = {
  title: "KX Goods — Thoughtful things for everyday",
  description:
    "Useful, beautiful things for the everyday. Discover thoughtfully chosen objects made to be kept.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}