'use client';
import { useState } from 'react';
import styles from './style.module.css';

const TOOLS = [
  {
    id: 1,
    name: 'Video Gen',
    desc: 'Create cinematic AI videos from text.',
    category: 'Video',
    status: 'Pro',
  },
  {
    id: 2,
    name: 'Voice Lab',
    desc: 'Realistic AI voice cloning and TTS.',
    category: 'Audio',
    status: 'Free',
  },
  {
    id: 3,
    name: 'Image Pro',
    desc: 'Upscale and edit images with AI.',
    category: 'Image',
    status: 'Pro',
  },
  {
    id: 4,
    name: 'Code Mint',
    desc: 'Write clean code with AI assistance.',
    category: 'Dev',
    status: 'Free',
  },
  {
    id: 5,
    name: 'Text Master',
    desc: 'Summarize and rewrite long articles.',
    category: 'Text',
    status: 'Free',
  },
  {
    id: 6,
    name: '3D Studio',
    desc: 'Generate 3D assets for games.',
    category: 'Design',
    status: 'New',
  },
];

export default function AiTools() {
  const [filter, setFilter] = useState('All');

  const filteredTools = filter === 'All' ? TOOLS : TOOLS.filter((t) => t.category === filter);

  return (
    <div className={styles.pageWrapper}>
      <header className={styles.header}>
        <div className={styles.topInfo}>
          <h1 className={styles.title}>AI Tool Library</h1>
          <p className={styles.subtitle}>Supercharge your workflow with our curated models.</p>
        </div>

        <div className={styles.searchBar}>
          <input type='text' placeholder='Search tools...' className={styles.input} />
          <button className={styles.searchBtn}>Find Tools</button>
        </div>
      </header>

      {/* Filter Tabs */}
      <div className={styles.filterContainer}>
        {['All', 'Video', 'Audio', 'Image', 'Dev', 'Text'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`${styles.filterTab} ${filter === cat ? styles.activeTab : ''}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Tool Cards */}
      <div className={styles.toolGrid}>
        {filteredTools.map((tool) => (
          <div key={tool.id} className={styles.toolCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconCircle}>{tool.category[0]}</div>
              <span className={styles.tag}>{tool.status}</span>
            </div>
            <h3 className={styles.toolTitle}>{tool.name}</h3>
            <p className={styles.toolDescription}>{tool.desc}</p>
            <button className={styles.actionBtn}>Open Tool</button>
          </div>
        ))}
      </div>
    </div>
  );
}
