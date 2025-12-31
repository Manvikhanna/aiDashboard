// import styles from './style.module.css';

// export default function Usage() {
//   return (
//     <div className={styles.container}>
//       {/* Background Tech Grid Pattern */}
//       <div className={styles.gridOverlay}></div>

//       <main className={styles.content}>
//         <header className={styles.topNav}>
//           <div className={styles.systemStatus}>
//             <span className={styles.statusText}>SYS_ACTIVE</span>
//             <div className={styles.liveBar}>
//               <div className={styles.innerBar}></div>
//             </div>
//           </div>
//           <div className={styles.timestamp}>CORE_LOAD: 24% // 2025.12.31</div>
//         </header>

//         <section className={styles.heroSection}>
//           <div className={styles.titleWrapper}>
//             <h1 className={styles.mainTitle} data-text='RESOURCE_USAGE'>
//               RESOURCE_USAGE
//             </h1>
//             <div className={styles.orangeLine}></div>
//           </div>
//         </section>

//         <div className={styles.dashboardGrid}>
//           {/* Main Visual Gauge */}
//           <div className={styles.gaugeCard}>
//             <div className={styles.cardHeader}>NETWORK_LOAD_01</div>
//             <div className={styles.gaugeVisual}>
//               <div className={styles.gaugeRing}>
//                 <div className={styles.gaugeData}>
//                   <span className={styles.bigNum}>74</span>
//                   <span className={styles.unit}>%</span>
//                 </div>
//               </div>
//             </div>
//             <div className={styles.dataFooter}>
//               <span>ENCRYPT: AES-256</span>
//               <span>BANDWIDTH: STABLE</span>
//             </div>
//           </div>

//           {/* Detailed Usage Stats */}
//           <div className={styles.statsCard}>
//             <div className={styles.cardHeader}>MODULE_RESOURCES</div>
//             <div className={styles.statList}>
//               {[
//                 { label: 'NEURAL_ENGINE', val: '88%', fill: '88%' },
//                 { label: 'API_REQUESTS', val: '42%', fill: '42%' },
//                 { label: 'LATENCY_MS', val: '12ms', fill: '15%' },
//               ].map((item, i) => (
//                 <div key={i} className={styles.statRow}>
//                   <div className={styles.statLabel}>
//                     <span>{item.label}</span>
//                     <span>{item.val}</span>
//                   </div>
//                   <div className={styles.track}>
//                     <div className={styles.fill} style={{ width: item.fill }}></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Footer Data Stream */}
//         <div className={styles.terminalFooter}>
//           <div className={styles.streamText}>
//             {'>'} INITIALIZING_AI_SUITE... OK // CONNECTING_TO_ORANGE_CORE... OK //
//             USAGE_OPTIMIZED...
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

'use client';
import React, { useState } from 'react';
import styles from './style.module.css';

export default function Usage() {
  const [hoverScore, setHoverScore] = useState(null);

  const meterData = [
    { grade: 'F', range: '0-60%', color: '#ef4444', label: 'Critical' },
    { grade: 'D', range: '60-70%', color: '#facc15', label: 'Warning' },
    { grade: 'C', range: '70-80%', color: '#ff6b00', label: 'Adequate' },
    { grade: 'B', range: '80-90%', color: '#22c55e', label: 'Good' },
    { grade: 'A', range: '90-100%', color: '#3b82f6', label: 'Excellent' },
  ];

  return (
    <div className={styles.container}>
      {/* THE SQUARE BOX GRID BACKGROUND */}
      <div className={styles.squareGrid}></div>
      <div className={styles.vignette}></div>

      <main className={styles.dashboard}>
        {/* INTERACTIVE SCORE SECTION */}
        <section className={styles.glassCard}>
          <div className={styles.cardHeader}>
            <h3 className={styles.label}>AI Safety & Compliance Score</h3>
            <p className={styles.subLabel}>Interactive system audit (Hover segments to inspect)</p>
          </div>

          <div className={styles.scoreContent}>
            <div className={styles.scoreHero}>
              <div
                className={styles.gradeBox}
                style={{ backgroundColor: hoverScore?.color || '#ff6b00' }}>
                {hoverScore?.grade || 'C'}
              </div>
              <div className={styles.scoreDetails}>
                <div className={styles.percentageRow}>
                  <span className={styles.mainScore}>{hoverScore ? hoverScore.range : '73%'}</span>
                  <span className={styles.trendUp}>▲ 23%</span>
                </div>
                <div className={styles.statusText}>{hoverScore?.label || 'Adequate'}</div>
              </div>
            </div>

            <div className={styles.meterWrapper}>
              <div className={styles.meterBar}>
                {meterData.map((item, idx) => (
                  <div
                    key={idx}
                    className={styles.segment}
                    style={{ '--seg-color': item.color }}
                    onMouseEnter={() => setHoverScore(item)}
                    onMouseLeave={() => setHoverScore(null)}>
                    {item.grade === 'C' && !hoverScore && (
                      <div className={styles.indicator}>
                        <div className={styles.indicatorLine}></div>
                        <span className={styles.indicatorTag}>CURRENT_STATE</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className={styles.axis}>
                <span>0%</span>
                <span>60%</span>
                <span>70%</span>
                <span>80%</span>
                <span>90%</span>
                <span>100%</span>
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE BOTTOM GRID */}
        <div className={styles.bottomGrid}>
          <div className={`${styles.glassCard} ${styles.interactiveCard}`}>
            <h3 className={styles.label}>Asset Distribution</h3>
            <div className={styles.chartSpace}>
              <div className={styles.segmentedRing}>
                <div className={styles.pulseRing}></div>
                <div className={styles.innerCircle}>
                  <span className={styles.ringBigNum}>100</span>
                  <span className={styles.ringSub}>Total Assets</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.glassCard} ${styles.interactiveCard}`}>
            <h3 className={styles.label}>Risk Mitigation</h3>
            <div className={styles.chartSpace}>
              <div className={styles.donutContainer}>
                <div className={styles.donut}>
                  <div className={styles.donutCenter}>
                    <span className={styles.donutNum}>-25</span>
                    <span className={styles.donutSub}>Nodes Restricted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
