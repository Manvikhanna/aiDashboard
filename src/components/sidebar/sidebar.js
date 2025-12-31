// 'use client';

// import {
//   Activity,
//   BarChart3,
//   ChevronRight,
//   Cpu,
//   LayoutDashboard,
//   LogOut,
//   Settings,
//   Zap,
// } from 'lucide-react';
// import { useRouter } from 'next/navigation'; // ✅ import useRouter
// import { useState } from 'react';
// import styles from './style.module.css';

// const navItems = [
//   { id: 'overview', label: 'Overview', icon: LayoutDashboard, path: '/dashboard' },
//   { id: 'analytics', label: 'Analytics', icon: BarChart3, path: '/dashboard/analaytic' },
//   { id: 'ai-tools', label: 'AI Tools', icon: Cpu, path: '/dashboard/aiTools' },
//   { id: 'usage', label: 'Usage', icon: Activity, path: '/dashboard/usage' },
//   { id: 'settings', label: 'Settings', icon: Settings, path: '/dashboard/settings' },
// ];

// export default function Sidebar() {
//   const [activeItem, setActiveItem] = useState('overview');
//   const router = useRouter(); // ✅ initialize router

//   const handleNavigation = (item) => {
//     setActiveItem(item.id); // Highlight active
//     router.push(item.path); // Navigate to path
//   };

//   return (
//     <aside className={styles.sidebarContainer}>
//       <div className={styles.logoSection}>
//         <div className={styles.logoBox}>
//           <Zap size={20} fill='white' stroke='white' />
//         </div>
//         <span className={styles.logoText}>AI NEXUS</span>
//       </div>

//       <nav className={styles.navMenu}>
//         {navItems.map((item) => (
//           <div
//             key={item.id}
//             className={`${styles.navItem} ${activeItem === item.id ? styles.navItemActive : ''}`}
//             onClick={() => handleNavigation(item)} // ✅ call function
//           >
//             <item.icon className={styles.itemIcon} strokeWidth={2.5} />
//             <span className={styles.itemLabel}>{item.label}</span>
//             <ChevronRight className={styles.chevron} />
//           </div>
//         ))}
//       </nav>

//       <div className={styles.upgradeCard}>
//         <div className={styles.upgradeTitle}>
//           <Zap size={14} fill='currentColor' />
//           GO UNLIMITED
//         </div>
//         <p style={{ fontSize: '0.75rem', color: '#64748b', margin: '0 0 12px', lineHeight: '1.4' }}>
//           Access premium clusters and dedicated cloud GPU.
//         </p>
//         <button className={styles.upgradeBtn}>UPGRADE NOW</button>
//       </div>

//       <div className={styles.footerSection}>
//         <div className={styles.userProfile}>
//           <div className={styles.userAvatar}>
//             <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>JD</span>
//             <div className={styles.statusDot} />
//           </div>
//           <div className={styles.userInfo}>
//             <span className={styles.userName}>John Doe</span>
//             <span className={styles.userStatus}>System Active</span>
//           </div>
//           <LogOut size={18} className={styles.logoutBtn} />
//         </div>
//       </div>
//     </aside>
//   );
// }

'use client';

import {
  Activity,
  BarChart3,
  ChevronRight,
  Cpu,
  LayoutDashboard,
  LogOut,
  Settings,
  Zap,
} from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import styles from './style.module.css';

const navItems = [
  { label: 'Overview', icon: LayoutDashboard, path: '/dashboard' },
  { label: 'Analytics', icon: BarChart3, path: '/dashboard/analaytic' },
  { label: 'AI Tools', icon: Cpu, path: '/dashboard/aiTools' },
  { label: 'Usage', icon: Activity, path: '/dashboard/usage' },
  { label: 'Settings', icon: Settings, path: '/dashboard/settings' },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <aside className={styles.sidebarContainer}>
      <div className={styles.logoSection}>
        <div className={styles.logoBox}>
          <Zap size={20} fill='white' stroke='white' />
        </div>
        <span className={styles.logoText}>AI NEXUS</span>
      </div>

      <nav className={styles.navMenu}>
        {navItems.map((item) => {
          const isActive =
            pathname === item.path ||
            (item.path !== '/dashboard' && pathname.startsWith(item.path));

          return (
            <div
              key={item.path}
              className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
              onClick={() => router.push(item.path)}>
              <item.icon className={styles.itemIcon} strokeWidth={2.5} />
              <span className={styles.itemLabel}>{item.label}</span>
              <ChevronRight className={styles.chevron} />
            </div>
          );
        })}
      </nav>

      <div className={styles.upgradeCard}>
        <div className={styles.upgradeTitle}>
          <Zap size={14} fill='currentColor' />
          GO UNLIMITED
        </div>
        <p className={styles.upgradeText}>Access premium clusters and dedicated cloud GPU.</p>
        <button className={styles.upgradeBtn}>UPGRADE NOW</button>
      </div>

      <div className={styles.footerSection}>
        <div className={styles.userProfile}>
          <div className={styles.userAvatar}>
            JD
            <div className={styles.statusDot} />
          </div>
          <div className={styles.userInfo}>
            <span className={styles.userName}>John Doe</span>
            <span className={styles.userStatus}>System Active</span>
          </div>
          <LogOut size={18} className={styles.logoutBtn} />
        </div>
      </div>
    </aside>
  );
}
