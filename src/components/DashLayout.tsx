import Sidebar from '../components/Sidebar';
import '../globals.css';

export const metadata = {
  title: 'Dashboard Layout',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <div className="flex-1 p-6">{children}</div>
      </body>
    </html>
  );
}
