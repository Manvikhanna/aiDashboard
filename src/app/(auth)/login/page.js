'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './style.module.css';

export default function Login() {
  const router = useRouter();

  // State for inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    // If valid, navigate to dashboard
    router.push('/dashboard'); // Replace with your actual dashboard route
  };

  return (
    <div className={styles.loginContainer}>
      {/* 3D Cube Shower */}
      <div className={styles.cubeScene}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={styles.cubeWrapper}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${14 + Math.random() * 10}s`,
            }}>
            <div className={styles.cube}>
              <div className={`${styles.face} ${styles.front}`}></div>
              <div className={`${styles.face} ${styles.back}`}></div>
              <div className={`${styles.face} ${styles.left}`}></div>
              <div className={`${styles.face} ${styles.right}`}></div>
              <div className={`${styles.face} ${styles.top}`}></div>
              <div className={`${styles.face} ${styles.bottom}`}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative blobs */}
      <div className={styles.blobOne}></div>
      <div className={styles.blobTwo}></div>

      <div className={styles.loginCard}>
        <div className={styles.logoSection}>
          <div className={styles.iconBox}>
            <span className={styles.logoIcon}>✦</span>
          </div>
          <h2 className={styles.loginTitle}>Welcome</h2>
          <p className={styles.loginSubtitle}>Sign in to continue to your dashboard</p>
        </div>

        <form className={styles.loginForm} onSubmit={handleLogin}>
          {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

          <div className={styles.inputWrapper}>
            <label className={styles.label}>Email Address</label>
            <input
              type='email'
              placeholder='e.g. alex@example.com'
              className={styles.inputField}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.inputWrapper}>
            <div className={styles.labelRow}>
              <label className={styles.label}>Password</label>
              <span className={styles.forgotPass}>Forgot?</span>
            </div>
            <input
              type='password'
              placeholder='••••••••'
              className={styles.inputField}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type='submit' className={styles.loginBtn}>
            Sign In
          </button>
        </form>

        <div className={styles.divider}>
          <span>or continue with</span>
        </div>

        <div className={styles.socialRow}>
          <button className={styles.socialBtn}>
            <img
              src='https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png'
              alt='Google'
            />
          </button>
          <button className={styles.socialBtn}>
            <span className={styles.appleIcon}></span>
          </button>
        </div>

        <p className={styles.signupText}>
          New here? <span className={styles.link}>Create an account</span>
        </p>
      </div>
    </div>
  );
}
