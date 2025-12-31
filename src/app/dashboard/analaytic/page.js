'use client';

import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';
import styles from './style.module.css';

// Mock Data
const volumeData = [
  { name: 'Mon', volume: 2400 },
  { name: 'Tue', volume: 3560 },
  { name: 'Wed', volume: 2100 },
  { name: 'Thu', volume: 5800 },
  { name: 'Fri', volume: 7200 },
  { name: 'Sat', volume: 4100 },
  { name: 'Sun', volume: 6300 },
];

const modelData = [
  { name: 'GPT-4o', value: 450 },
  { name: 'Claude 3.5', value: 300 },
  { name: 'Llama 3', value: 250 },
];

const COLORS = ['#ff6b00', '#ff9e52', '#ffd3b0'];

export default function Analytics() {
  const stats = [
    { label: 'Total AI Requests', value: '1.2M', change: '+12%' },
    { label: 'Avg. Latency', value: '240ms', change: '-5%' },
    { label: 'Active Users', value: '45.2k', change: '+18%' },
    { label: 'Credits Consumed', value: '890k', change: '+7%' },
  ];

  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>AI Insights</h1>
          <p className={styles.subtitle}>Real-time performance metrics</p>
        </div>
        <button className={styles.exportBtn}>Download CSV</button>
      </header>

      {/* Stats Grid */}
      <div className={styles.statsGrid}>
        {stats.map((stat, i) => (
          <div key={i} className={styles.card}>
            <span className={styles.statLabel}>{stat.label}</span>
            <div className={styles.statValueRow}>
              <h2 className={styles.statValue}>{stat.value}</h2>
              <span className={stat.change.startsWith('+') ? styles.trendUp : styles.trendDown}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className={styles.mainGrid}>
        {/* Inference Chart */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Inference Volume (Weekly)</h3>
          <div className={styles.chartWrapper}>
            <ResponsiveContainer width='100%' height={300}>
              <AreaChart data={volumeData}>
                <defs>
                  <linearGradient id='colorOrange' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='5%' stopColor='#ff6b00' stopOpacity={0.3} />
                    <stop offset='95%' stopColor='#ff6b00' stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray='3 3' vertical={false} stroke='#eee' />
                <XAxis dataKey='name' axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Area
                  type='monotone'
                  dataKey='volume'
                  stroke='#ff6b00'
                  strokeWidth={3}
                  fillOpacity={1}
                  fill='url(#colorOrange)'
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Model Distribution Chart */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Model Usage</h3>
          <div className={styles.chartWrapper}>
            <ResponsiveContainer width='100%' height={300}>
              <PieChart>
                <Pie
                  data={modelData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey='value'>
                  {modelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend iconType='circle' verticalAlign='bottom' />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
