'use client';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import styles from './style.module.css';

const performanceData = [
  { time: '10:00', latency: 120, throughput: 400 },
  { time: '10:05', latency: 132, throughput: 450 },
  { time: '10:10', latency: 101, throughput: 500 },
  { time: '10:15', latency: 144, throughput: 420 },
  { time: '10:20', latency: 110, throughput: 480 },
  { time: '10:25', latency: 130, throughput: 520 },
  { time: '10:30', latency: 125, throughput: 490 },
];

const costData = [
  { model: 'GPT-4', cost: 45.2 },
  { model: 'Claude 3', cost: 32.1 },
  { model: 'Llama 3', cost: 12.5 },
  { model: 'Mistral', cost: 8.4 },
];

const COLORS = ['#ff7a18', '#fb923c', '#fdba74', '#fed7aa'];

const LiveDemo = ({ onBack }) => {
  return (
    <div className={styles.demoPage}>
      {/* Sidebar Mockup */}
      <aside className={styles.sidebar}>
        <div className={styles.brand}>🚀 NEXUS</div>
        <nav className={styles.sideNav}>
          <div className={`${styles.navItem} ${styles.active}`}>Dashboard</div>
          <div className={styles.navItem}>API Keys</div>
          <div className={styles.navItem}>Models</div>
          <div className={styles.navItem}>Billing</div>
        </nav>
        <button className={styles.backBtn} onClick={onBack}>
          ← Back to Home
        </button>
      </aside>

      {/* Main Dashboard Content */}
      <main className={styles.content}>
        <header className={styles.header}>
          <div>
            <h1>Welcome back, Dev</h1>
            <p>Your systems are performing within optimal parameters.</p>
          </div>
          <div className={styles.userProfile}>
            <div className={styles.avatar}>JD</div>
          </div>
        </header>

        {/* Stats Summary */}
        <div className={styles.statsRow}>
          <div className={styles.statCard}>
            <span>Total Requests</span>
            <h3>1.2M</h3>
            <small className={styles.positive}>+12% vs last week</small>
          </div>
          <div className={styles.statCard}>
            <span>Avg. Latency</span>
            <h3>124ms</h3>
            <small className={styles.positive}>-5ms optimization</small>
          </div>
          <div className={styles.statCard}>
            <span>Active Deployment</span>
            <h3>v2.4.0</h3>
            <small>Stable</small>
          </div>
        </div>

        {/* Charts Section */}
        <div className={styles.chartSection}>
          <div className={styles.mainChart}>
            <div className={styles.chartHeader}>
              <h4>System Throughput & Latency</h4>
              <div className={styles.legend}>
                <span className={styles.l1}>Throughput</span>
                <span className={styles.l2}>Latency</span>
              </div>
            </div>
            <div className={styles.chartBody}>
              <ResponsiveContainer width='100%' height={250}>
                <AreaChart data={performanceData}>
                  <defs>
                    <linearGradient id='colorT' x1='0' y1='0' x2='0' y2='1'>
                      <stop offset='5%' stopColor='#ff7a18' stopOpacity={0.1} />
                      <stop offset='95%' stopColor='#ff7a18' stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray='3 3' vertical={false} stroke='#f1f5f9' />
                  <XAxis dataKey='time' axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                  <Tooltip
                    contentStyle={{
                      borderRadius: '12px',
                      border: 'none',
                      boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
                    }}
                  />
                  <Area
                    type='monotone'
                    dataKey='throughput'
                    stroke='#ff7a18'
                    strokeWidth={3}
                    fill='url(#colorT)'
                  />
                  <Area
                    type='monotone'
                    dataKey='latency'
                    stroke='#94a3b8'
                    strokeWidth={2}
                    fill='transparent'
                    strokeDasharray='5 5'
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className={styles.sideChart}>
            <h4>Cost per Model ($)</h4>
            <ResponsiveContainer width='100%' height={200}>
              <BarChart data={costData} layout='vertical'>
                <XAxis type='number' hide />
                <YAxis
                  dataKey='model'
                  type='category'
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12 }}
                  width={70}
                />
                <Tooltip cursor={{ fill: 'transparent' }} />
                <Bar dataKey='cost' radius={[0, 4, 4, 0]}>
                  {costData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity Table */}
        <div className={styles.tableCard}>
          <h4>Recent API Activity</h4>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Request ID</th>
                <th>Model</th>
                <th>Status</th>
                <th>Tokens</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: 'req_9a2b',
                  model: 'gpt-4o',
                  status: '200 OK',
                  tokens: '1,024',
                  time: '2s ago',
                },
                {
                  id: 'req_4f11',
                  model: 'claude-3',
                  status: '200 OK',
                  tokens: '512',
                  time: '12s ago',
                },
                {
                  id: 'req_bc82',
                  model: 'llama-3',
                  status: '429 Error',
                  tokens: '-',
                  time: '1m ago',
                },
              ].map((row, i) => (
                <tr key={i}>
                  <td>
                    <code>{row.id}</code>
                  </td>
                  <td>{row.model}</td>
                  <td>
                    <span
                      className={row.status.includes('OK') ? styles.statusOk : styles.statusErr}>
                      {row.status}
                    </span>
                  </td>
                  <td>{row.tokens}</td>
                  <td>{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default LiveDemo;
