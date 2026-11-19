export const metadata={
  title:{
    template:"%s | My college website demo" ,
    default: "My  college website demo"
  },
  description:"Official college website demo"
};

export default function RootLayout({children})
{
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}