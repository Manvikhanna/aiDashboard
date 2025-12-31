// export default function Navbar() {
//   return (
//     <div
//       style={{
//         padding: 16,
//         borderBottom: '1px solid #f1f1f1',
//       }}>
//       <strong style={{ color: '#ff7a18' }}>AI Dashboard</strong>
//     </div>
//   );
// }

'use client';

import React from 'react';
import { Search, Bell, Zap, Command, ChevronDown, LayoutGrid } from 'lucide-react';
import styles from './style.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbarWrapper}>
      <div className={styles.navbarLeft}>
        <div className={styles.brandPill}>
          <Zap size={16} fill='#ff7a18' color='#ff7a18' />
          <strong>AI Dashboard</strong>
        </div>

        <div className={styles.searchContainer}>
          <Search size={16} color='#94a3b8' />
          <input type='text' placeholder='Search AI tools...' />
          <div className={styles.kbdHint}>
            <Command size={10} />
            <span>K</span>
          </div>
        </div>
      </div>

      <div className={styles.navbarRight}>
        <div className={styles.actionIcon}>
          <LayoutGrid size={20} />
        </div>

        <div className={styles.actionIcon}>
          <Bell size={20} />
          <div className={styles.notificationDot} />
        </div>

        <div className={styles.profileTrigger}>
          <div className={styles.avatarSm}>JD</div>
          <div className={styles.userMeta}>
            <span>John Doe</span>
          </div>
          <ChevronDown size={14} color='#94a3b8' style={{ marginLeft: '4px' }} />
        </div>
      </div>
    </nav>
  );
}
