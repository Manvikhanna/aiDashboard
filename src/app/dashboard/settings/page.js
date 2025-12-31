// import style from './style.module.css';

// export default function Settings() {
//   return (
//     <div className={style.pageWrapper}>
//       {/* The Square Grid Background */}
//       <div className={style.gridBackground}></div>

//       <div className={style.container}>
//         <aside className={style.sidebar}>
//           <div className={style.profileBadge}>
//             <div className={style.avatar}>JD</div>
//             <div>
//               <p className={style.userName}>John Doe</p>
//               <p className={style.userPlan}>Pro Plan</p>
//             </div>
//           </div>
//           <nav className={style.nav}>
//             <button className={`${style.navItem} ${style.active}`}>General</button>
//             <button className={style.navItem}>AI Workspace</button>
//             <button className={style.navItem}>Billing</button>
//             <button className={style.navItem}>API Keys</button>
//           </nav>
//         </aside>

//         <main className={style.mainContent}>
//           <section className={style.header}>
//             <h2>General Settings</h2>
//             <p>Update your personal information and preferences.</p>
//           </section>

//           <div className={style.formGrid}>
//             <div className={style.inputGroup}>
//               <label>Full Name</label>
//               <input type='text' defaultValue='John Doe' />
//             </div>
//             <div className={style.inputGroup}>
//               <label>Email Address</label>
//               <input type='email' defaultValue='john@example.com' />
//             </div>
//             <div className={style.inputGroup}>
//               <label>Interface Language</label>
//               <select>
//                 <option>English (US)</option>
//                 <option>French</option>
//                 <option>German</option>
//               </select>
//             </div>
//           </div>

//           <div className={style.actionFooter}>
//             <button className={style.cancelBtn}>Discard</button>
//             <button className={style.saveBtn}>Save Changes</button>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

import style from './style.module.css';

export default function Settings() {
  return (
    <div className={style.dashboardLayout}>
      {/* Background Grid - Poore page par */}
      <div className={style.gridBackground}></div>

      {/* Sidebar - Dashboard feel ke liye */}
      {/* <aside className={style.sidebar}>
        <div className={style.logo}>
          AI<span>SaaS</span>
        </div>
        <nav className={style.sideNav}>
          <div className={style.navGroup}>Menu</div>
          <button className={style.sideBtn}>Dashboard</button>
          <button className={style.sideBtn}>Analytics</button>
          <button className={`${style.sideBtn} ${style.activeSide}`}>Settings</button>
        </nav>
      </aside> */}

      <div className={style.mainWrapper}>
        {/* Top Header */}
        <header className={style.topBar}>
          <div className={style.headerLeft}>
            <h1>Settings</h1>
            <p>Manage your account and AI preferences</p>
          </div>
          <div className={style.headerRight}>
            <input type='text' placeholder='Search anything...' className={style.search} />
            <div className={style.userProfile}>JS</div>
          </div>
        </header>

        {/* Tab Navigation */}
        <nav className={style.tabNav}>
          <button className={style.tab}>General</button>
          <button className={style.tab}>Security</button>
          <button className={`${style.tab} ${style.activeTab}`}>Account Settings</button>
          <button className={style.tab}>Billing</button>
          <button className={style.tab}>Notifications</button>
        </nav>

        {/* Full Page Content Area */}
        <div className={style.pageBody}>
          <div className={style.settingsSection}>
            <div className={style.sectionInfo}>
              <h3>Public Profile</h3>
              <p>This will be displayed on your AI profile.</p>
            </div>

            <div className={style.formFields}>
              <div className={style.inputBox}>
                <label>Username</label>
                <div className={style.inputGroup}>
                  <span className={style.prefix}>app.ai/</span>
                  <input type='text' defaultValue='x-ae-a-19' />
                </div>
              </div>

              <div className={style.inputBox}>
                <label>Phone Number</label>
                <div className={style.phoneWrapper}>
                  <div className={style.flag}>🇮🇳 +91</div>
                  <input type='text' defaultValue='98765 43210' />
                </div>
              </div>

              <div className={style.inputBox}>
                <label>Biography</label>
                <textarea
                  placeholder='Write something about your AI interests...'
                  rows='5'></textarea>
                <span className={style.hint}>Maximum 500 characters</span>
              </div>
            </div>
          </div>

          <div className={style.stickyFooter}>
            <button className={style.btnSecondary}>Discard Changes</button>
            <button className={style.btnPrimary}>Save Settings</button>
          </div>
        </div>
      </div>
    </div>
  );
}
