import React, { useState, useEffect, useRef } from 'react';
import { Activity, Play, Square, RefreshCw, Terminal as TerminalIcon, Database, BarChart2, CheckCircle2, PlayCircle } from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('iot'); // 'iot' or 'analytics'
  const [isPlaying, setIsPlaying] = useState(true);
  const [pumpActive, setPumpActive] = useState(false);
  
  // Telemetry States
  const [moisture, setMoisture] = useState(48.2);
  const [temp, setTemp] = useState(28.5);
  const [packets, setPackets] = useState(1482);
  const [voltage, setVoltage] = useState(3.29);
  
  // Chart History
  const [history, setHistory] = useState([45, 46, 47, 47.5, 48, 48.2, 48.1, 48.2, 48.3, 48.2]);
  
  // Terminal Logs
  const [logs, setLogs] = useState([
    "INFO: Gateway initialized. MQTT broker connected to broker.hivemq.com:1883",
    "SUBSCRIBE: topics=['esp32/agri/sensor', 'esp32/agri/control']",
    "RECEIVED: device='esp32-agri-01' temp=28.4C moisture=48.1% volt=3.30V",
    "RECEIVED: device='esp32-agri-01' temp=28.5C moisture=48.2% volt=3.29V"
  ]);

  const terminalEndRef = useRef(null);

  // --- Data Analytics Tab States ---
  const [selectedDataset, setSelectedDataset] = useState('real_estate'); // 'real_estate' or 'video_games'
  const [analysisStatus, setAnalysisStatus] = useState('idle'); // 'idle', 'running', 'success'
  const [analysisLogs, setAnalysisLogs] = useState([]);
  const [showStatsTable, setShowStatsTable] = useState(false);
  const [sqlRunning, setSqlRunning] = useState(false);
  const [sqlExecuted, setSqlExecuted] = useState(false);

  // Dataset Mock Statistics
  const statsData = {
    real_estate: {
      rows: 10482,
      cols: 8,
      nullsRemoved: 312,
      outliersAdjusted: 89,
      metrics: [
        { parameter: "Price (AED)", mean: "3.1M", median: "2.4M", min: "450K", max: "28M", stdDev: "1.2M" },
        { parameter: "Area (Sq.Ft)", mean: "1,840", median: "1,450", min: "520", max: "12,400", stdDev: "820" },
        { parameter: "Rental Yield (%)", mean: "6.8%", median: "7.1%", min: "4.2%", max: "11.4%", stdDev: "1.8%" }
      ],
      sqlQuery: `SELECT Area, AVG(Price_AED) AS avg_price, COUNT(*) AS volume
FROM dubai_listings 
WHERE Price_AED > 500000 
GROUP BY Area 
ORDER BY avg_price DESC 
LIMIT 5;`,
      sqlResult: [
        { Area: "Palm Jumeirah", avg_price: "12.4M AED", volume: "1,482" },
        { Area: "Downtown Dubai", avg_price: "4.5M AED", volume: "3,124" },
        { Area: "Dubai Marina", avg_price: "3.2M AED", volume: "2,840" },
        { Area: "Business Bay", avg_price: "2.1M AED", volume: "1,980" },
        { Area: "JLT", avg_price: "1.6M AED", volume: "1,056" }
      ]
    },
    video_games: {
      rows: 16598,
      cols: 11,
      nullsRemoved: 271,
      outliersAdjusted: 0,
      metrics: [
        { parameter: "Global Sales (M)", mean: "0.54M", median: "0.17M", min: "0.01M", max: "82.7M", stdDev: "1.55M" },
        { parameter: "North America Sales", mean: "0.26M", median: "0.08M", min: "0.00M", max: "41.4M", stdDev: "0.81M" },
        { parameter: "Europe Sales", mean: "0.15M", median: "0.02M", min: "0.00M", max: "29.0M", stdDev: "0.50M" }
      ],
      sqlQuery: `SELECT Genre, SUM(Global_Sales) AS total_sales, AVG(Global_Sales) AS avg_sales
FROM game_sales 
GROUP BY Genre 
ORDER BY total_sales DESC 
LIMIT 5;`,
      sqlResult: [
        { Genre: "Action", total_sales: "1,751M", avg_sales: "0.52M" },
        { Genre: "Sports", total_sales: "1,330M", avg_sales: "0.56M" },
        { Genre: "Shooter", total_sales: "1,037M", avg_sales: "0.79M" },
        { Genre: "Role-Playing", total_sales: "927M", avg_sales: "0.62M" },
        { Genre: "Platform", total_sales: "831M", avg_sales: "0.93M" }
      ]
    }
  };

  // Auto Scroll Terminal
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  // Telemetry loop simulation (Only runs when IoT tab is active)
  useEffect(() => {
    if (!isPlaying || activeTab !== 'iot') return;

    const interval = setInterval(() => {
      setPackets(prev => prev + 1);

      let newMoisture = moisture;
      if (pumpActive) {
        newMoisture = Math.min(95, +(moisture + Math.random() * 1.5 + 0.5).toFixed(1));
      } else {
        newMoisture = Math.max(25, +(moisture - Math.random() * 0.15 - 0.05).toFixed(1));
      }
      setMoisture(newMoisture);

      const newTemp = +(temp + (Math.random() - 0.5) * 0.2).toFixed(1);
      setTemp(newTemp);
      setVoltage(+(3.28 + Math.random() * 0.04).toFixed(2));

      setHistory(prev => {
        const next = [...prev.slice(1), newMoisture];
        return next;
      });

      const time = new Date().toLocaleTimeString();
      const newLog = `[${time}] MQTT_RECV: topic='esp32/agri/sensor' payload={'temp': ${newTemp}, 'moisture': ${newMoisture}%, 'pump': ${pumpActive ? 'ON' : 'OFF'}, 'volt': ${voltage}V}`;
      setLogs(prev => [...prev.slice(-15), newLog]);
    }, 1500);

    return () => clearInterval(interval);
  }, [isPlaying, pumpActive, moisture, temp, voltage, activeTab]);

  const handlePumpToggle = () => {
    const time = new Date().toLocaleTimeString();
    const action = !pumpActive ? 'ON' : 'OFF';
    const commandLog = `[${time}] MQTT_SEND: topic='esp32/agri/control' command='PUMP_${action}'`;
    setLogs(prev => [...prev, commandLog]);
    setPumpActive(!pumpActive);
  };

  const handleManualRefresh = () => {
    setPackets(prev => prev + 1);
    const newTemp = +(temp + (Math.random() - 0.5) * 0.5).toFixed(1);
    setTemp(newTemp);
    const time = new Date().toLocaleTimeString();
    setLogs(prev => [...prev, `[${time}] GATEWAY_REQ: manual telemetry poll requested`]);
  };

  // Convert chart history array to SVG coordinate string
  const getSvgPath = () => {
    const minVal = 20;
    const maxVal = 100;
    const padding = 10;
    const plotWidth = 500 - padding * 2;
    const plotHeight = 180 - padding * 2;
    
    const points = history.map((val, idx) => {
      const x = padding + (idx / (history.length - 1)) * plotWidth;
      const ratio = (val - minVal) / (maxVal - minVal);
      const y = padding + plotHeight - (ratio * plotHeight);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    });
    
    return `M ${points.join(' L ')}`;
  };

  // Data Analytics Simulator Trigger
  const runPandasCleaningPipeline = () => {
    setAnalysisStatus('running');
    setShowStatsTable(false);
    setAnalysisLogs([]);

    const steps = [
      "import pandas as pd",
      "import numpy as np",
      `df = pd.read_csv('${selectedDataset === 'real_estate' ? 'dubai_listings.csv' : 'game_sales.csv'}')`,
      `[LOG] Initial dimensions: {df.shape[0]} rows x {df.shape[1]} columns.`,
      "[LOG] Scanning for missing values...",
      `[LOG] Found null entries in '${selectedDataset === 'real_estate' ? 'price, area' : 'publisher, year'}'.`,
      "df.dropna(subset=['price', 'area'] if dataset == 'dubai' else ['publisher'], inplace=True)",
      `[LOG] Imputed or dropped ${statsData[selectedDataset].nullsRemoved} records containing incomplete measurements.`,
      "[LOG] Scanning for outliers in numerical vectors...",
      selectedDataset === 'real_estate'
        ? "df = df[df['price_aed'] < df['price_aed'].quantile(0.99)] # Adjusted outliers"
        : "[LOG] No significant mathematical outliers discovered in sales volumes.",
      "[LOG] Re-indexing dataframe and casting data vectors to numeric formats...",
      `[SUCCESS] Pandas pipeline successfully run. Processed records: ${statsData[selectedDataset].rows}. Nulls handled: ${statsData[selectedDataset].nullsRemoved}.`
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setAnalysisLogs(prev => [...prev, step]);
        if (idx === steps.length - 1) {
          setAnalysisStatus('success');
          setShowStatsTable(true);
        }
      }, (idx + 1) * 350);
    });
  };

  // SQL Query Execution Simulator
  const runSqlQuery = () => {
    setSqlRunning(true);
    setSqlExecuted(false);
    setTimeout(() => {
      setSqlRunning(false);
      setSqlExecuted(true);
    }, 1200);
  };

  return (
    <div className="container page-fade-in" style={styles.pageWrapper}>
      {/* Tab Selectors */}
      <div className="scrollable-tab-container">
        <button 
          onClick={() => setActiveTab('iot')}
          style={{
            ...styles.tabBtn,
            borderBottom: activeTab === 'iot' ? '2px solid #00f2fe' : '2px solid transparent',
            color: activeTab === 'iot' ? '#fff' : 'var(--text-muted)'
          }}
        >
          <Activity size={18} style={{ color: activeTab === 'iot' ? '#00f2fe' : 'inherit' }} />
          <span>📡 IoT Telemetry Lab</span>
        </button>
        <button 
          onClick={() => setActiveTab('analytics')}
          style={{
            ...styles.tabBtn,
            borderBottom: activeTab === 'analytics' ? '2px solid #00f2fe' : '2px solid transparent',
            color: activeTab === 'analytics' ? '#fff' : 'var(--text-muted)'
          }}
        >
          <Database size={18} style={{ color: activeTab === 'analytics' ? '#00f2fe' : 'inherit' }} />
          <span>📊 Data Analytics Workbench</span>
        </button>
      </div>

      {/* IoT TAB CONTENT */}
      {activeTab === 'iot' && (
        <>
          <div style={styles.header}>
            <div style={styles.headerInfo}>
              <span className="telemetry-text">Interactive Showcase // Telemetry Streams</span>
              <h2 style={styles.title}>LIVE TELEMETRY HUB</h2>
              <p style={styles.subtitle}>
                Simulating live telemetry packets from an ESP32 device network in Bikaner, India.
              </p>
            </div>

            <div style={styles.headerControls}>
              <button 
                className="btn-secondary" 
                onClick={() => setIsPlaying(!isPlaying)}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                {isPlaying ? (
                  <>
                    <Square size={14} style={{ color: '#ff4c4c' }} /> Pause Stream
                  </>
                ) : (
                  <>
                    <Play size={14} style={{ color: '#05ffa1' }} /> Resume Stream
                  </>
                )}
              </button>
              <button className="btn-secondary" onClick={handleManualRefresh}>
                <RefreshCw size={14} /> Poll Device
              </button>
            </div>
          </div>

          {/* Grid Indicators */}
          <div className="telemetry-grid">
            <div className={`telemetry-card ${pumpActive ? 'active-green' : 'active'}`}>
              <span className="telemetry-label">Gateway Status</span>
              <div style={styles.valRow}>
                <span className="telemetry-value" style={{ color: pumpActive ? '#05ffa1' : '#00f2fe' }}>
                  {pumpActive ? 'IRRIGATING' : 'MONITORING'}
                </span>
              </div>
              <span className="telemetry-text" style={{ fontSize: '0.75rem', opacity: 0.6 }}>
                Device: esp32-agri-01
              </span>
            </div>

            <div className="telemetry-card active">
              <span className="telemetry-label">Soil Moisture</span>
              <span className="telemetry-value">{moisture}%</span>
              <span className="telemetry-text" style={{ fontSize: '0.75rem', color: moisture < 35 ? '#ff4c4c' : '#05ffa1' }}>
                {moisture < 35 ? 'CRITICAL: DRY' : 'OPTIMAL'}
              </span>
            </div>

            <div className="telemetry-card active">
              <span className="telemetry-label">Ambient Temp</span>
              <span className="telemetry-value">{temp}°C</span>
              <span className="telemetry-text" style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
                Greenhouse Zone A
              </span>
            </div>

            <div className="telemetry-card active">
              <span className="telemetry-label">Ingested Packets</span>
              <span className="telemetry-value">{packets}</span>
              <span className="telemetry-text" style={{ fontSize: '0.75rem', color: '#00f2fe' }}>
                Total MQTT Publishes
              </span>
            </div>
          </div>

          {/* Split Grid */}
          <div className="responsive-split-grid">
            {/* SVG Chart Card */}
            <div className="glass-card" style={styles.chartCard}>
              <div style={styles.cardHeader}>
                <span className="telemetry-text">Telemetry Trend // Soil Moisture History (%)</span>
                <span className="telemetry-text" style={{ color: '#05ffa1' }}>Range: 20% - 100%</span>
              </div>
              
              <div style={styles.svgWrapper}>
                <svg viewBox="0 0 500 180" width="100%" height="100%" preserveAspectRatio="none">
                  <line x1="10" y1="10" x2="490" y2="10" className="chart-grid-line" />
                  <line x1="10" y1="50" x2="490" y2="50" className="chart-grid-line" />
                  <line x1="10" y1="90" x2="490" y2="90" className="chart-grid-line" />
                  <line x1="10" y1="130" x2="490" y2="130" className="chart-grid-line" />
                  <line x1="10" y1="170" x2="490" y2="170" className="chart-axis-line" />
                  <path d={getSvgPath()} className="svg-chart-path" />
                  {history.map((val, idx) => {
                    const padding = 10;
                    const plotWidth = 500 - padding * 2;
                    const plotHeight = 180 - padding * 2;
                    const x = padding + (idx / (history.length - 1)) * plotWidth;
                    const ratio = (val - 20) / 80;
                    const y = padding + plotHeight - (ratio * plotHeight);
                    return (
                      <circle 
                        key={idx} 
                        cx={x} 
                        cy={y} 
                        r={idx === history.length - 1 ? 5 : 3} 
                        fill={idx === history.length - 1 ? '#05ffa1' : '#00f2fe'} 
                      />
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Actuator control */}
            <div className="glass-card" style={styles.controlCard}>
              <span className="telemetry-text">Device Actuator Panel</span>
              <h3 style={styles.controlTitle}>PUMP SYSTEM</h3>
              <p style={styles.controlDesc}>
                Deploy command packets via MQTT broker to trigger the water pump solenoid relay on your hardware setup.
              </p>

              <div style={styles.panelActionRow}>
                <button 
                  className="btn-primary" 
                  onClick={handlePumpToggle}
                  style={{
                    borderColor: pumpActive ? '#ff4c4c' : '#05ffa1',
                    width: '100%',
                    justifyContent: 'center',
                    backgroundColor: pumpActive ? 'rgba(255, 76, 76, 0.05)' : 'rgba(5, 255, 161, 0.03)'
                  }}
                >
                  {pumpActive ? 'Deactivate Water Pump' : 'Activate Water Pump'}
                </button>
              </div>

              <div style={styles.nodeMeta}>
                <div style={styles.metaRow}>
                  <span style={styles.metaLabel}>Device IP:</span>
                  <span style={styles.metaVal}>192.168.1.42</span>
                </div>
                <div style={styles.metaRow}>
                  <span style={styles.metaLabel}>WiFi Signal:</span>
                  <span style={styles.metaVal} className="telemetry-green">-64 dBm</span>
                </div>
                <div style={styles.metaRow}>
                  <span style={styles.metaLabel}>Operating Voltage:</span>
                  <span style={styles.metaVal}>{voltage}V</span>
                </div>
              </div>
            </div>
          </div>

          {/* MQTT Receiver Terminal */}
          <div className="glass-card" style={styles.terminalCard}>
            <div style={styles.terminalHeader}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <TerminalIcon size={16} style={{ color: '#00f2fe' }} />
                <span className="telemetry-text" style={{ color: '#fff' }}>MQTT GATEWAY LOGS (RECEIVER STREAM)</span>
              </div>
              <span className="blink-dot"></span>
            </div>
            <div style={styles.terminalWindow}>
              {logs.map((log, index) => (
                <div key={index} style={styles.logLine}>
                  <span style={styles.logPrompt}>$</span> {log}
                </div>
              ))}
              <div ref={terminalEndRef}></div>
            </div>
          </div>
        </>
      )}

      {/* DATA ANALYTICS TAB CONTENT */}
      {activeTab === 'analytics' && (
        <>
          <div style={styles.header}>
            <div style={styles.headerInfo}>
              <span className="telemetry-text">Interactive Showcase // Pandas & SQL Analysis</span>
              <h2 style={styles.title}>DATA ANALYTICS WORKBENCH</h2>
              <p style={styles.subtitle}>
                Simulating exploratory data analysis pipelines and SQL query aggregations on cleaned databases.
              </p>
            </div>
          </div>

          <div className="responsive-split-grid">
            {/* Left side: Pandas pipeline simulator */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={styles.cardHeader}>
                <span className="telemetry-text">Dataset Preprocessing Pipeline</span>
                <div style={styles.datasetSelector}>
                  <button 
                    onClick={() => {
                      setSelectedDataset('real_estate');
                      setAnalysisStatus('idle');
                      setShowStatsTable(false);
                      setSqlExecuted(false);
                    }}
                    style={{
                      ...styles.datasetBtn,
                      backgroundColor: selectedDataset === 'real_estate' ? 'rgba(0, 242, 254, 0.15)' : 'transparent',
                      borderColor: selectedDataset === 'real_estate' ? '#00f2fe' : 'rgba(255,255,255,0.08)'
                    }}
                  >
                    Dubai Real Estate
                  </button>
                  <button 
                    onClick={() => {
                      setSelectedDataset('video_games');
                      setAnalysisStatus('idle');
                      setShowStatsTable(false);
                      setSqlExecuted(false);
                    }}
                    style={{
                      ...styles.datasetBtn,
                      backgroundColor: selectedDataset === 'video_games' ? 'rgba(0, 242, 254, 0.15)' : 'transparent',
                      borderColor: selectedDataset === 'video_games' ? '#00f2fe' : 'rgba(255,255,255,0.08)'
                    }}
                  >
                    Video Game Sales
                  </button>
                </div>
              </div>

              <p style={styles.controlDesc}>
                Execute a simulated Python script using **Pandas** and **NumPy** to run a data cleaning workflow (handling null values, formatting columns, and scaling features).
              </p>

              <button 
                onClick={runPandasCleaningPipeline} 
                className="btn-primary" 
                style={{ justifyContent: 'center' }}
                disabled={analysisStatus === 'running'}
              >
                {analysisStatus === 'running' ? 'Running Clean Pipeline...' : 'Run pandas_clean_pipeline.py'}
              </button>

              {/* Mock Python Terminal Output */}
              <div style={styles.pythonTerminal}>
                {analysisLogs.length === 0 ? (
                  <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>Terminal awaiting script run...</span>
                ) : (
                  analysisLogs.map((log, index) => (
                    <div key={index} style={{
                      ...styles.logLine,
                      color: log.startsWith('[SUCCESS]') ? '#05ffa1' : log.startsWith('[LOG]') ? '#00f2fe' : '#9ca3af'
                    }}>
                      <span style={{ color: '#ff4c4c', marginRight: '6px' }}>{log.startsWith('import') || log.startsWith('df') || log.startsWith('d.d') ? '>>>' : '::'}</span>
                      {log}
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Right side: Statistical metrics table after cleaning */}
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'space-between' }}>
              <div>
                <span className="telemetry-text">Exploratory Data Analysis (EDA)</span>
                <h3 style={{ ...styles.controlTitle, marginTop: '0.5rem' }}>DATASET SUMMARY STATS</h3>
                <p style={{ ...styles.controlDesc, marginTop: '0.5rem' }}>
                  Descriptive statistical outputs compiled dynamically from computed array rows.
                </p>
              </div>

              {showStatsTable ? (
                <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={styles.metricsSummaryBar}>
                    <div><strong>Shape:</strong> {statsData[selectedDataset].rows} rows x {statsData[selectedDataset].cols} cols</div>
                    <div><strong>Nulls Cleared:</strong> {statsData[selectedDataset].nullsRemoved}</div>
                  </div>
                  <table style={styles.dataTable}>
                    <thead>
                      <tr>
                        <th style={styles.tableHeader}>Parameter</th>
                        <th style={styles.tableHeader}>Mean</th>
                        <th style={styles.tableHeader}>Median</th>
                        <th style={styles.tableHeader}>Min</th>
                        <th style={styles.tableHeader}>Max</th>
                        <th style={styles.tableHeader}>Std Dev</th>
                      </tr>
                    </thead>
                    <tbody>
                      {statsData[selectedDataset].metrics.map((metric, idx) => (
                        <tr key={idx} style={styles.tableRow}>
                          <td style={{ ...styles.tableCell, color: '#00f2fe', fontWeight: '600' }}>{metric.parameter}</td>
                          <td style={styles.tableCell}>{metric.mean}</td>
                          <td style={styles.tableCell}>{metric.median}</td>
                          <td style={styles.tableCell}>{metric.min}</td>
                          <td style={styles.tableCell}>{metric.max}</td>
                          <td style={styles.tableCell}>{metric.stdDev}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div style={styles.statsPlaceholder}>
                  <BarChart2 size={40} style={{ color: 'var(--text-muted)', marginBottom: '1rem' }} />
                  <span>Awaiting data cleaning pipeline execution to calculate statistical aggregates.</span>
                </div>
              )}
            </div>
          </div>

          {/* SQL Query Runner (Large horizontal row) */}
          <div className="glass-card" style={styles.sqlCard}>
            <div style={styles.cardHeader}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Database size={16} style={{ color: '#00f2fe' }} />
                <span className="telemetry-text" style={{ color: '#fff' }}>SQL Query Engine Simulator</span>
              </div>
              <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#05ffa1' }}>DBMS: MySQL 8.0</span>
            </div>

            <div className="responsive-split-grid">
              {/* SQL Input Box */}
              <div style={styles.sqlEditor}>
                <div style={styles.sqlLines}>
                  {[1, 2, 3, 4, 5, 6, 7].map(n => <div key={n} style={{ color: 'rgba(255,255,255,0.15)' }}>{n}</div>)}
                </div>
                <pre style={styles.sqlCode}>
                  {statsData[selectedDataset].sqlQuery}
                </pre>
              </div>

              {/* SQL Controls */}
              <div style={styles.sqlControls}>
                <button 
                  onClick={runSqlQuery} 
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  disabled={sqlRunning}
                >
                  <PlayCircle size={16} /> {sqlRunning ? 'Executing SQL...' : 'Run Query'}
                </button>
                <div style={styles.sqlConsoleLog}>
                  <div className="telemetry-text" style={{ fontSize: '0.7rem' }}>Console output</div>
                  <div style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: sqlExecuted ? '#05ffa1' : '#9ca3af' }}>
                    {sqlRunning ? "> Query running on target clusters..." : sqlExecuted ? "> Query successfully compiled. (0.015s)" : "> Engine idle. Ready to execute."}
                  </div>
                </div>
              </div>
            </div>

            {/* SQL Results Grid */}
            {sqlExecuted && (
              <div style={styles.sqlResultsWrapper}>
                <div className="telemetry-text" style={{ marginBottom: '0.75rem', fontSize: '0.75rem' }}>QUERY RESULTS GRID (LIMIT 5)</div>
                <table style={styles.dataTable}>
                  <thead>
                    <tr>
                      {Object.keys(statsData[selectedDataset].sqlResult[0]).map((key, i) => (
                        <th key={i} style={styles.tableHeader}>{key.toUpperCase()}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {statsData[selectedDataset].sqlResult.map((row, idx) => (
                      <tr key={idx} style={styles.tableRow}>
                        {Object.values(row).map((val, i) => (
                          <td key={i} style={{ ...styles.tableCell, color: i === 0 ? '#fff' : 'var(--text-secondary)' }}>{val}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  pageWrapper: {
    paddingTop: '130px',
    paddingBottom: '80px',
    minHeight: '100vh',
  },
  tabContainer: {
    display: 'flex',
    gap: '2.5rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    marginBottom: '2.5rem',
  },
  tabBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    paddingBottom: '1rem',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.95rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    transition: 'all 0.3s ease',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '3rem',
    flexWrap: 'wrap',
    gap: '2rem',
  },
  headerInfo: {
    flex: '1 1 500px',
  },
  title: {
    fontSize: 'clamp(2rem, 5vw, 4rem)',
    letterSpacing: '-0.02em',
    marginBottom: '1rem',
  },
  subtitle: {
    maxWidth: '600px',
    color: 'var(--text-secondary)',
  },
  headerControls: {
    display: 'flex',
    gap: '1rem',
  },
  valRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '0.25rem',
  },
  splitGrid: {
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr',
    gap: '1.5rem',
    marginBottom: '1.5rem',
  },
  chartCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '260px',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
    flexWrap: 'wrap',
    gap: '1rem',
    width: '100%'
  },
  svgWrapper: {
    width: '100%',
    height: '180px',
    background: 'rgba(5, 7, 12, 0.4)',
    border: '1px solid rgba(255, 255, 255, 0.03)',
    borderRadius: '8px',
    padding: '0.5rem',
  },
  controlCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    justifyContent: 'space-between',
  },
  controlTitle: {
    fontSize: '1.5rem',
    color: '#fff',
  },
  controlDesc: {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.5'
  },
  panelActionRow: {
    margin: '1rem 0',
  },
  nodeMeta: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    paddingTop: '1rem',
  },
  metaRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.85rem',
    fontFamily: "'JetBrains Mono', monospace",
  },
  metaLabel: {
    color: 'var(--text-muted)',
  },
  metaVal: {
    color: 'var(--text-primary)',
  },
  
  // Terminal Styles
  terminalCard: {
    padding: '1.5rem',
    background: 'rgba(5, 7, 12, 0.85)',
    border: '1px solid var(--border-color)',
  },
  terminalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
    paddingBottom: '0.75rem',
    marginBottom: '1rem',
  },
  terminalWindow: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.82rem',
    maxHeight: '220px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
    backgroundColor: '#020408',
    padding: '1.25rem',
    borderRadius: '6px',
    border: '1px solid rgba(255, 255, 255, 0.03)',
  },
  logLine: {
    color: '#9ca3af',
    lineHeight: '1.4',
    wordBreak: 'break-all',
  },
  logPrompt: {
    color: '#00f2fe',
  },

  // --- Data Analytics Layout Styles ---
  datasetSelector: {
    display: 'flex',
    gap: '0.5rem',
  },
  datasetBtn: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.8rem',
    color: '#fff',
    border: '1px solid',
    borderRadius: '4px',
    padding: '0.35rem 0.75rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  pythonTerminal: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.8rem',
    backgroundColor: '#020408',
    border: '1px solid rgba(255, 255, 255, 0.04)',
    borderRadius: '6px',
    padding: '1.25rem',
    flexGrow: 1,
    minHeight: '180px',
    maxHeight: '240px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  statsPlaceholder: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px dashed rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    padding: '2rem',
    color: 'var(--text-muted)',
    fontSize: '0.9rem',
    textAlign: 'center',
    minHeight: '200px',
  },
  metricsSummaryBar: {
    display: 'flex',
    justifyContent: 'space-between',
    background: 'rgba(255, 255, 255, 0.02)',
    border: '1px solid rgba(255, 255, 255, 0.04)',
    padding: '0.75rem 1rem',
    borderRadius: '6px',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.85rem',
    marginBottom: '1rem',
    color: 'var(--text-secondary)'
  },
  dataTable: {
    width: '100%',
    borderCollapse: 'collapse',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.82rem',
    textAlign: 'left',
  },
  tableHeader: {
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    padding: '0.75rem 0.5rem',
    color: 'var(--text-muted)',
    fontWeight: '500',
  },
  tableRow: {
    borderBottom: '1px solid rgba(255,255,255,0.03)',
    transition: 'background 0.2s',
  },
  tableCell: {
    padding: '0.75rem 0.5rem',
    color: 'var(--text-primary)',
  },

  // SQL Card Styles
  sqlCard: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  sqlContainer: {
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr',
    gap: '1.5rem',
  },
  sqlEditor: {
    background: '#020408',
    border: '1px solid rgba(255, 255, 255, 0.04)',
    borderRadius: '6px',
    display: 'flex',
    padding: '1rem',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.85rem',
    gap: '1.25rem',
    minHeight: '150px',
  },
  sqlLines: {
    display: 'flex',
    flexDirection: 'column',
    userSelect: 'none',
  },
  sqlCode: {
    color: '#00f2fe',
    margin: 0,
    whiteSpace: 'pre-wrap',
    lineHeight: '1.5',
    flexGrow: 1,
  },
  sqlControls: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '1rem',
  },
  sqlConsoleLog: {
    backgroundColor: '#020408',
    border: '1px solid rgba(255, 255, 255, 0.04)',
    padding: '1rem',
    borderRadius: '6px',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  sqlResultsWrapper: {
    borderTop: '1px solid rgba(255,255,255,0.08)',
    paddingTop: '1.5rem',
  }
};
