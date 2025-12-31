'use client';

import { TrendingUp, Zap } from 'lucide-react';
import React from 'react';
import styles from './style.module.css';

/**
 * StatCard Component
 * @param {string} title
 * @param {string|number} value
 * @param {number} trend
 * @param {React.Component} icon
 */
export default function StatCard({ title, value, trend = 12.5, icon: Icon = Zap }) {
  return (
    <div className={styles.statCardContainer}>
      <div className={styles.statCardGlow} />

      <div className={styles.statCardInner}>
        <div className={styles.statCardHeader}>
          <div className={styles.iconBox}>
            <Icon size={20} strokeWidth={2.5} />
          </div>

          {trend && (
            <div className={styles.trendIndicator}>
              <TrendingUp size={14} />
              <span>{trend}%</span>
            </div>
          )}
        </div>

        <div>
          <p className={styles.statTitle}>{title}</p>
          <h3 className={styles.statValue}>{value}</h3>
        </div>

        <div className={styles.statCardFooter}>
          <div className={styles.statProgressBg}>
            <div className={styles.statProgressFill} />
          </div>
          <span className={styles.statSubtext}>vs last month</span>
        </div>
      </div>
    </div>
  );
}
