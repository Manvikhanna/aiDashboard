'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function Home() {
  const router = useRouter();

  function handleLiveDemo() {
    router.push('/liveDemo');
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Navigation */}
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>🚀</span>
            AI Nexus
          </div>
          <div className={styles.navLinks}>
            <Link href='/features' className={styles.navLink}>
              Features
            </Link>
            <Link href='/pricing' className={styles.navLink}>
              Pricing
            </Link>
            <Link href='/login' className={styles.navLink}>
              Login
            </Link>
            <Link href='/register' className={styles.buttonPrimary}>
              Get Started
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <header className={styles.hero}>
          <span className={styles.badge}>New: GPT-5 Integration Available</span>
          <h1 className={styles.title}>
            Build & Scale Your <br />
            <span className={styles.gradientText}>AI SaaS Faster</span>
          </h1>
          <p className={styles.subtitle}>
            The ultimate dashboard kit for AI developers. Monitor tokens, manage users, and deploy
            models with a single click.
          </p>

          <div className={styles.ctaGroup}>
            <Link href='/register' className={styles.buttonPrimary}>
              Start Building Free
            </Link>
            {/* <Link className={styles.buttonSecondary}>
              View Live Demo
            </Link> */}
            <span className={styles.buttonSecondary} onClick={handleLiveDemo}>
              View Live Demo
            </span>
          </div>

          {/* 3D Dashboard Mockup with Charts */}
          <div className={styles.dashboardPreview}>
            <div className={styles.dashboardInner}>
              <aside className={styles.mockSidebar}>
                <div
                  className={styles.mockSidebarItem}
                  style={{ width: '40%', marginBottom: 20 }}></div>
                <div className={`${styles.mockSidebarItem} ${styles.active}`}></div>
                <div className={styles.mockSidebarItem}></div>
                <div className={styles.mockSidebarItem}></div>
                <div className={styles.mockSidebarItem}></div>
              </aside>
              <section className={styles.mockContent}>
                <div className={styles.mockHeader}>
                  <div className={styles.mockTitle}></div>
                  <div
                    className={styles.mockTitle}
                    style={{ width: 60, background: 'var(--scale-slate-100)' }}></div>
                </div>
                <div className={styles.mockStatsGrid}>
                  <div className={styles.mockStatCard}>
                    <div className={styles.mockStatLabel}></div>
                    <div className={styles.mockStatValue}></div>
                  </div>
                  <div className={styles.mockStatCard}>
                    <div className={styles.mockStatLabel}></div>
                    <div className={styles.mockStatValue} style={{ width: '50%' }}></div>
                  </div>
                  <div className={styles.mockStatCard}>
                    <div className={styles.mockStatLabel}></div>
                    <div
                      className={styles.mockStatValue}
                      style={{ width: '90%', background: 'var(--scale-orange-300)' }}></div>
                  </div>
                </div>
                <div className={styles.mockChartArea}>
                  <div className={styles.mockBar} style={{ height: '40%' }}></div>
                  <div className={styles.mockBar} style={{ height: '60%' }}></div>
                  <div className={styles.mockBar} style={{ height: '35%' }}></div>
                  <div
                    className={`${styles.mockBar} ${styles.highlight}`}
                    style={{ height: '85%' }}></div>
                  <div className={styles.mockBar} style={{ height: '50%' }}></div>
                  <div className={styles.mockBar} style={{ height: '70%' }}></div>
                  <div className={styles.mockBar} style={{ height: '45%' }}></div>
                </div>
              </section>
            </div>
          </div>
        </header>

        {/* Features Grid */}
        <section className={styles.features}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Everything you need to launch</h2>
            <p className={styles.subtitle}>
              Powering the next generation of artificial intelligence startups.
            </p>
          </div>

          <div className={styles.grid}>
            <div className={styles.featureCard}>
              <div className={styles.iconBox}>📊</div>
              <h3 className={styles.featureTitle}>Real-time Analytics</h3>
              <p className={styles.featureDesc}>
                Track token usage, API latency, and user retention in real-time with our
                high-precision charts.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}>⚡</div>
              <h3 className={styles.featureTitle}>Instant Deployment</h3>
              <p className={styles.featureDesc}>
                Deploy your models to edge networks globally. We handle the infrastructure scaling
                for you.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}>🛡️</div>
              <h3 className={styles.featureTitle}>Enterprise Security</h3>
              <p className={styles.featureDesc}>
                SOC2 compliant out of the box. End-to-end encryption for all your proprietary
                training data.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <div className={styles.logo}>🚀 AI Nexus</div>
              <p>Making AI development accessible, scalable, and secure for everyone.</p>
            </div>
            <div className={styles.col}>
              <h4>Product</h4>
              <ul>
                <li>
                  <Link href='#'>Features</Link>
                </li>
                <li>
                  <Link href='#'>Pricing</Link>
                </li>
              </ul>
            </div>
            <div className={styles.col}>
              <h4>Resources</h4>
              <ul>
                <li>
                  <Link href='#'>Docs</Link>
                </li>
                <li>
                  <Link href='#'>API</Link>
                </li>
              </ul>
            </div>
            <div className={styles.col}>
              <h4>Legal</h4>
              <ul>
                <li>
                  <Link href='#'>Privacy</Link>
                </li>
                <li>
                  <Link href='#'>Terms</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer> */}
    </main>
  );
}
