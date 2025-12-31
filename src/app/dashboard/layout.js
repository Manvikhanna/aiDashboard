import Navbar from '@/components/navbar/navbar';
import Sidebar from '@/components/sidebar/sidebar';

export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />
        <div style={{ padding: 24 }}>{children}</div>
      </div>
    </div>
  );
}
