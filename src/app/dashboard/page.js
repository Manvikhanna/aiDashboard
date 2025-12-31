'use client';

import {
  Bar,
  BarChart,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import StatCard from '@/components/statcard/statcard';
import styles from './dashboard.module.css';

const lineData = [
  { day: 'Mon', usage: 420 },
  { day: 'Tue', usage: 360 },
  { day: 'Wed', usage: 520 },
  { day: 'Thu', usage: 310 },
  { day: 'Fri', usage: 680 },
  { day: 'Sat', usage: 480 },
];

const barData = [
  { name: 'Mon', requests: 120 },
  { name: 'Tue', requests: 90 },
  { name: 'Wed', requests: 160 },
  { name: 'Thu', requests: 70 },
  { name: 'Fri', requests: 190 },
];

const pieData = [
  { name: 'Chat AI', value: 45 },
  { name: 'Image AI', value: 25 },
  { name: 'Voice AI', value: 20 },
  { name: 'Other', value: 10 },
];

const COLORS = ['#ff7a18', '#fbbf24', '#fb923c', '#fdba74'];

export default function Dashboard() {
  return (
    <div className={styles.page}>
      {/* HEADER */}
      <div className={styles.header}>
        <h2 className={styles.title}>AI Dashboard</h2>
        <p className={styles.subtitle}>Intelligent insights powered by real-time AI data</p>
      </div>

      {/* STATS */}
      <div className={styles.statsGrid}>
        <StatCard title='Credits Used' value='1,240' trend={18.2} />
        <StatCard title='AI Requests' value='320' trend={12.5} />
        <StatCard title='Active Tools' value='4' trend={6.8} />
      </div>

      {/* CHARTS */}
      <div className={styles.chartsGrid}>
        {/* LINE */}
        <div className={styles.glassCard}>
          <h4 className={styles.cardTitle}>Usage Growth</h4>
          <ResponsiveContainer width='100%' height={240}>
            <LineChart data={lineData}>
              <XAxis dataKey='day' />
              <YAxis />
              <Tooltip />
              <Line
                type='monotone'
                dataKey='usage'
                stroke='url(#lineGradient)'
                strokeWidth={4}
                dot={{ r: 4 }}
              />
              <defs>
                <linearGradient id='lineGradient' x1='0' y1='0' x2='1' y2='0'>
                  <stop offset='0%' stopColor='#ff7a18' />
                  <stop offset='100%' stopColor='#fbbf24' />
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* BAR */}
        <div className={styles.glassCard}>
          <h4 className={styles.cardTitle}>Daily Requests</h4>
          <ResponsiveContainer width='100%' height={240}>
            <BarChart data={barData}>
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Bar dataKey='requests' radius={[12, 12, 0, 0]} fill='url(#barGradient)' />
              <defs>
                <linearGradient id='barGradient' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='0%' stopColor='#ff7a18' />
                  <stop offset='100%' stopColor='#fbbf24' />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* PIE */}
        <div className={styles.glassCard}>
          <h4 className={styles.cardTitle}>AI Tool Usage</h4>
          <ResponsiveContainer width='100%' height={240}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey='value'
                nameKey='name'
                innerRadius={60}
                outerRadius={95}
                paddingAngle={5}>
                {pieData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
