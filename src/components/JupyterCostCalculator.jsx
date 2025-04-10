// components/JupyterCostCalculator.jsx
import React, { useState, useEffect, useRef } from 'react';

// Simple tooltip component
function Tooltip({ text, children }) {
  const [show, setShow] = useState(false);
  
  const tooltipStyle = {
    position: 'absolute',
    top: '100%',
    left: '0',
    zIndex: 100,
    backgroundColor: '#1e293b',
    color: 'white',
    padding: '0.5rem',
    borderRadius: '0.25rem',
    fontSize: '0.75rem',
    maxWidth: '250px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    marginTop: '0.5rem',
    display: show ? 'block' : 'none',
  };
  
  const containerStyle = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
  };
  
  const iconStyle = {
    fontSize: '0.75rem',
    marginLeft: '0.5rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: '#e2e8f0',
    color: '#334155',
    cursor: 'pointer',
  };
  
  return (
    <div style={containerStyle}>
      {children}
      <span 
        style={iconStyle}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >?</span>
      <div style={tooltipStyle}>{text}</div>
    </div>
  );
}

export default function JupyterCostCalculator() {
  // Self-hosted cloud settings
  const [ownNodeType, setOwnNodeType] = useState('n2-highcpu-32');
  const [ownNumCPUs, setOwnNumCPUs] = useState(4);
  const [ownStudents, setOwnStudents] = useState(1200);
  const [ownHours, setOwnHours] = useState(24);
  
  // UC Merced Jupyterhub service settings
  const [i2cNodeType, setI2cNodeType] = useState('n2-highcpu-32');
  const [i2cNumCPUs, setI2cNumCPUs] = useState(4);
  const [i2cStudents, setI2cStudents] = useState(1200);
  const [i2cHours, setI2cHours] = useState(24);
  
  // Results states
  const [showResults, setShowResults] = useState(false);
  const [ownResult, setOwnResult] = useState(null);
  const [i2cResult, setI2cResult] = useState(null);

  const NODE_PRICING = {
    'n2-highcpu-32': 27.93,
    'n2-highcpu-96': 83.73,
    'n2-highmem-32': 50.31,
  };

  const NODE_DESCRIPTIONS = {
    'n2-highcpu-32': '32 vCPUs, 32 GB RAM',
    'n2-highcpu-96': '96 vCPUs, 96 GB RAM',
    'n2-highmem-32': '32 vCPUs, 128 GB RAM',
  };

  const FIXED_BASE_COST_UCMERCED = 1500; // Monthly base cost

  useEffect(() => {
    // Calculate costs on first render and whenever inputs change
    calculateCosts();
  }, [
    ownNodeType, ownNumCPUs, ownStudents, ownHours,
    i2cNodeType, i2cNumCPUs, i2cStudents, i2cHours
  ]);

  const calculateCosts = () => {
    // Calculate self-hosted cost using the new logic:
    // Number of Active Pods = Total Users / 4
    // Recommended Memory = 1 GB x Number of Active Pods
    const ownActivePods = Math.ceil(ownStudents / 4);
    const ownRecommendedMemory = ownActivePods * 1; // 1 GB per active pod
    
    // Calculate the number of nodes needed based on the memory
    const ownNodeMemory = parseInt(NODE_DESCRIPTIONS[ownNodeType].split(',')[1].trim().split(' ')[0]);
    const ownTotalNodes = Math.ceil(ownRecommendedMemory / ownNodeMemory);
    
    const ownHourlyCost = NODE_PRICING[ownNodeType] / 24;
    const ownComputeCost = ownTotalNodes * ownHourlyCost * ownHours;
    const ownTotal = ownComputeCost;

    // Calculate 2i2c managed service cost using the same new logic
    const i2cActivePods = Math.ceil(i2cStudents / 4);
    const i2cRecommendedMemory = i2cActivePods * 1; // 1 GB per active pod
    
    // Calculate the number of nodes needed based on the memory
    const i2cNodeMemory = parseInt(NODE_DESCRIPTIONS[i2cNodeType].split(',')[1].trim().split(' ')[0]);
    const i2cTotalNodes = Math.ceil(i2cRecommendedMemory / i2cNodeMemory);
    
    const i2cHourlyCost = NODE_PRICING[i2cNodeType] / 24;
    const i2cComputeCost = i2cTotalNodes * i2cHourlyCost * i2cHours;
    const i2cTotal = i2cComputeCost + (FIXED_BASE_COST_UCMERCED / 30); // Monthly cost converted to daily

    setOwnResult({
      activePods: ownActivePods,
      recommendedMemory: ownRecommendedMemory,
      totalNodes: ownTotalNodes.toFixed(2),
      computeCost: ownComputeCost.toFixed(2),
      total: ownTotal.toFixed(2),
      hours: ownHours
    });

    setI2cResult({
      activePods: i2cActivePods,
      recommendedMemory: i2cRecommendedMemory,
      totalNodes: i2cTotalNodes.toFixed(2),
      computeCost: i2cComputeCost.toFixed(2),
      baseCost: FIXED_BASE_COST_UCMERCED,
      total: i2cTotal.toFixed(2),
      hours: i2cHours
    });
  };

  // Simple bar chart component for cost comparison
  function CostComparisonChart({ selfHostedCost, managedCost }) {
    const maxValue = Math.max(selfHostedCost, managedCost);
    const selfHostedWidth = (selfHostedCost / maxValue) * 100;
    const managedWidth = (managedCost / maxValue) * 100;
    
    const barContainerStyle = {
      marginBottom: '1.5rem',
      padding: '1rem',
      backgroundColor: 'white',
      borderRadius: '8px',
      border: '1px solid #e2e8f0',
    };
    
    const barStyle = {
      height: '30px',
      marginBottom: '1rem',
      borderRadius: '4px',
      position: 'relative',
      backgroundColor: '#f1f5f9',
    };
    
    const fillStyle = (width, color) => ({
      position: 'absolute',
      left: 0,
      top: 0,
      height: '100%',
      width: `${width}%`,
      backgroundColor: color,
      borderRadius: '4px',
      transition: 'width 0.5s ease-in-out',
    });
    
    const labelStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '0.875rem',
      color: '#334155',
      marginBottom: '0.5rem',
    };
    
    const valueStyle = {
      position: 'absolute',
      right: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      fontWeight: 'bold',
      color: '#fff',
      textShadow: '0 0 2px rgba(0,0,0,0.5)',
      fontSize: '0.875rem',
    };

    return (
      <div style={barContainerStyle}>
        <h4 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem', color: '#0f172a'}}>
          Monthly Cost Comparison
        </h4>
        
        <div style={labelStyle}>
          <span>Faculty or Department Hosted</span>
          <span>${selfHostedCost.toFixed(2)}</span>
        </div>
        <div style={barStyle}>
          <div style={fillStyle(selfHostedWidth, '#3b82f6')}>
            <span style={valueStyle}>${selfHostedCost.toFixed(2)}</span>
          </div>
        </div>
        
        <div style={labelStyle}>
          <span>UC Merced Jupyterhub</span>
          <span>${managedCost.toFixed(2)}</span>
        </div>
        <div style={barStyle}>
          <div style={fillStyle(managedWidth, '#f97316')}>
            <span style={valueStyle}>${managedCost.toFixed(2)}</span>
          </div>
        </div>
        
        <div style={{
          marginTop: '1rem', 
          padding: '0.75rem',
          backgroundColor: '#fff7ed',
          border: '1px solid #fdba74',
          borderRadius: '6px',
          borderLeft: '3px solid #f97316',
          color: '#9a3412',
          fontSize: '0.8rem',
          fontWeight: '500'
        }}>
          <strong>⚠️ HIDDEN COST ALERT:</strong> Faculty or Department Hosted JupyterHub requires dedicated IT specialists 
          with AWS cloud engineering, DevOps, and system administration skills (1-1.25 FTE) not shown in these figures.
        </div>
      </div>
    );
  }

  // Presets for common educational scenarios
  const PRESETS = {
    small_class: {
      name: 'Small Class (30-50 students)',
      students: 50,
      hours: 8,
      cpus: 2,
      node: 'n2-highcpu-32'
    },
    medium_class: {
      name: 'Medium Class (80-100 students)',
      students: 100,
      hours: 12,
      cpus: 2,
      node: 'n2-highcpu-32'
    },
    large_class: {
      name: 'Large Class (200+ students)',
      students: 250,
      hours: 12,
      cpus: 4,
      node: 'n2-highcpu-32'
    },
    department: {
      name: 'Department-wide (1000+ students)',
      students: 1200,
      hours: 24,
      cpus: 4,
      node: 'n2-highcpu-96'
    }
  };

  // CSS styles as JS objects
  const styles = {
    container: {
      margin: '0 auto',
      padding: '1.5rem',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    },
    title: {
      textAlign: 'center',
      marginTop: 0,
      fontSize: '1.5rem',
      color: '#0f172a',
      borderBottom: '1px solid #e2e8f0',
      paddingBottom: '0.75rem',
      marginBottom: '1.5rem',
    },
    calculatorGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '2rem',
      marginBottom: '2rem',
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
      },
    },
    formContainer: {
      border: '1px solid #cbd5e1',
      borderRadius: '12px',
      backgroundColor: '#f8fafc',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      padding: '1.5rem',
    },
    formTitle: {
      textAlign: 'center',
      marginTop: 0,
      fontSize: '1.25rem',
      color: '#0f172a',
      borderBottom: '1px solid #e2e8f0',
      paddingBottom: '0.75rem',
      marginBottom: '1.5rem',
    },
    formGroup: {
      marginBottom: '1rem',
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      marginBottom: '0.5rem',
      fontWeight: 600,
      fontSize: '0.875rem',
      color: '#334155',
      display: 'flex',
      alignItems: 'center',
    },
    select: {
      padding: '0.5rem',
      borderRadius: '6px',
      border: '1px solid #cbd5e0',
      backgroundColor: 'white',
      fontSize: '0.875rem',
      width: '100%',
    },
    input: {
      padding: '0.5rem',
      borderRadius: '6px',
      border: '1px solid #cbd5e0',
      backgroundColor: 'white',
      fontSize: '0.875rem',
      width: '100%',
    },
    button: {
      backgroundColor: '#3b82f6',
      color: 'white',
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '6px',
      fontWeight: 600,
      cursor: 'pointer',
      width: '100%',
      transition: 'background-color 0.2s',
      fontSize: '1rem',
      marginTop: '0.5rem',
    },
    resultsContainer: {
      marginTop: '1.5rem',
      padding: '1rem',
      backgroundColor: 'white',
      borderRadius: '8px',
      border: '1px solid #e2e8f0',
    },
    resultsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '2rem',
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
      },
    },
    resultsTitle: {
      fontSize: '1.25rem',
      fontWeight: 600,
      marginBottom: '1rem',
      color: '#0f172a',
    },
    resultLine: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.5rem',
      padding: '0.5rem 0',
      borderBottom: '1px dashed #e2e8f0',
    },
    resultTotal: {
      display: 'flex',
      justifyContent: 'space-between',
      fontWeight: 700,
      fontSize: '1.125rem',
      marginTop: '1rem',
      padding: '0.75rem 0',
      borderTop: '2px solid #e2e8f0',
      color: '#0f172a',
    },
    hint: {
      fontSize: '0.75rem',
      color: '#64748b',
      marginTop: '0.25rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '1rem',
    },
    nodeInfo: {
      fontSize: '0.75rem',
      color: '#64748b',
      marginTop: '0.25rem',
    },
    comparisonTitle: {
      textAlign: 'center',
      marginTop: '2rem',
      fontSize: '1.5rem',
      color: '#0f172a',
      paddingBottom: '0.75rem',
      marginBottom: '1.5rem',
    },
    presetContainer: {
      marginBottom: '1.5rem',
    },
    presetButton: {
      backgroundColor: '#f1f5f9',
      border: '1px solid #cbd5e1',
      borderRadius: '6px',
      padding: '0.5rem 1rem',
      fontSize: '0.875rem',
      fontWeight: 600,
      cursor: 'pointer',
      margin: '0 0.5rem 0.5rem 0',
      transition: 'all 0.2s',
    },
    activePreset: {
      backgroundColor: '#dbeafe',
      borderColor: '#3b82f6',
      color: '#1e40af',
    },
    methodologyNote: {
      marginTop: '2rem',
      padding: '1rem',
      backgroundColor: '#f8fafc',
      borderRadius: '8px',
      border: '1px solid #e2e8f0',
      fontSize: '0.875rem',
      color: '#475569',
    }
  };

  // State for presets
  const [activePreset, setActivePreset] = useState(null);
  
  // Apply preset to both calculators
  const applyPreset = (presetKey) => {
    const preset = PRESETS[presetKey];
    setOwnStudents(preset.students);
    setOwnHours(preset.hours);
    setOwnNumCPUs(preset.cpus);
    setOwnNodeType(preset.node);
    
    setI2cStudents(preset.students);
    setI2cHours(preset.hours);
    setI2cNumCPUs(preset.cpus);
    setI2cNodeType(preset.node);
    
    setActivePreset(presetKey);
    setShowResults(true);
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>JupyterHub Cost Calculator</h3>
      
      {/* Presets */}
      <div style={styles.presetContainer}>
        <div style={{marginBottom: '0.75rem', fontWeight: 600, fontSize: '0.875rem'}}>
          Quick Presets:
        </div>
        {Object.keys(PRESETS).map(key => (
          <button
            key={key}
            style={{
              ...styles.presetButton,
              ...(activePreset === key ? styles.activePreset : {})
            }}
            onClick={() => applyPreset(key)}
          >
            {PRESETS[key].name}
          </button>
        ))}
      </div>
      
      <div style={styles.calculatorGrid}>
        {/* Self-hosted Cloud Form */}
        <div style={styles.formContainer}>
          <h4 style={styles.formTitle}>Faculty or Department Hosted JupyterHub</h4>
          
          <div style={styles.formGroup}>
            <Tooltip text="The type of VM instance used to run JupyterHub. Different types offer varying combinations of CPU and memory.">
              <label style={styles.label}>Node Type:</label>
            </Tooltip>
            <select 
              style={styles.select}
              value={ownNodeType} 
              onChange={e => setOwnNodeType(e.target.value)}
            >
              <option value="n2-highcpu-32">n2-highcpu-32</option>
              <option value="n2-highcpu-96">n2-highcpu-96</option>
              <option value="n2-highmem-32">n2-highmem-32</option>
            </select>
            <div style={styles.nodeInfo}>
              {NODE_DESCRIPTIONS[ownNodeType]} - ${NODE_PRICING[ownNodeType]}/day
            </div>
          </div>

          <div style={styles.formGroup}>
            <Tooltip text="The amount of CPU resources allocated per student. Higher values provide better performance for computationally intensive workloads.">
              <label style={styles.label}>CPUs per Student:</label>
            </Tooltip>
            <select 
              style={styles.select}
              value={ownNumCPUs} 
              onChange={e => setOwnNumCPUs(parseInt(e.target.value))}
            >
              <option value="2">2 CPUs</option>
              <option value="4">4 CPUs</option>
            </select>
            <div style={styles.hint}>
              {ownNumCPUs === 2 ? 'Sufficient for basic programming' : 'Better for data science workloads'}
            </div>
          </div>

          <div style={styles.formGroup}>
            <Tooltip text="The total number of students who will have access to the JupyterHub. This affects resource provisioning and costs.">
              <label style={styles.label}>Total Students:</label>
            </Tooltip>
            <input 
              type="number" 
              min="1"
              style={styles.input}
              value={ownStudents} 
              onChange={e => setOwnStudents(parseInt(e.target.value) || 0)} 
            />
          </div>

          <div style={styles.formGroup}>
            <Tooltip text="The number of hours per day that the JupyterHub will be active. Affects daily compute costs.">
              <label style={styles.label}>Hours per Day:</label>
            </Tooltip>
            <input 
              type="number" 
              min="1"
              max="24"
              style={styles.input}
              value={ownHours} 
              onChange={e => setOwnHours(parseInt(e.target.value) || 0)} 
            />
            <div style={styles.hint}>
              For 24/7 operation, use 24 hours
            </div>
          </div>
        </div>

        {/* UC Merced Jupyterhub Service Form */}
        <div style={styles.formContainer}>
          <h4 style={styles.formTitle}>UC Merced Jupyterhub Service</h4>
          
          <div style={styles.formGroup}>
            <Tooltip text="The type of VM instance used by UC Merced to run your JupyterHub. Different types offer varying combinations of CPU and memory.">
              <label style={styles.label}>Node Type:</label>
            </Tooltip>
            <select 
              style={styles.select}
              value={i2cNodeType} 
              onChange={e => setI2cNodeType(e.target.value)}
            >
              <option value="n2-highcpu-32">n2-highcpu-32</option>
              <option value="n2-highcpu-96">n2-highcpu-96</option>
              <option value="n2-highmem-32">n2-highmem-32</option>
            </select>
            <div style={styles.nodeInfo}>
              {NODE_DESCRIPTIONS[i2cNodeType]} - ${NODE_PRICING[i2cNodeType]}/day
            </div>
          </div>

          <div style={styles.formGroup}>
            <Tooltip text="The amount of CPU resources allocated per student. Higher values provide better performance for computationally intensive workloads.">
              <label style={styles.label}>CPUs per Student:</label>
            </Tooltip>
            <select 
              style={styles.select}
              value={i2cNumCPUs} 
              onChange={e => setI2cNumCPUs(parseInt(e.target.value))}
            >
              <option value="2">2 CPUs</option>
              <option value="4">4 CPUs</option>
            </select>
            <div style={styles.hint}>
              {i2cNumCPUs === 2 ? 'Sufficient for basic programming' : 'Better for data science workloads'}
            </div>
          </div>

          <div style={styles.formGroup}>
            <Tooltip text="The total number of students who will have access to the JupyterHub. This affects resource provisioning and costs.">
              <label style={styles.label}>Total Students:</label>
            </Tooltip>
            <input 
              type="number" 
              min="1"
              style={styles.input}
              value={i2cStudents} 
              onChange={e => setI2cStudents(parseInt(e.target.value) || 0)} 
            />
          </div>

          <div style={styles.formGroup}>
            <Tooltip text="The number of hours per day that the JupyterHub will be active. Affects daily compute costs.">
              <label style={styles.label}>Hours per Day:</label>
            </Tooltip>
            <input 
              type="number" 
              min="1"
              max="24"
              style={styles.input}
              value={i2cHours} 
              onChange={e => setI2cHours(parseInt(e.target.value) || 0)} 
            />
            <div style={styles.hint}>
              For 24/7 operation, use 24 hours
            </div>
          </div>
        </div>
      </div>

      <button 
        style={styles.button} 
        onClick={() => setShowResults(!showResults)}
      >
        {showResults ? 'Hide Cost Comparison' : 'Show Cost Comparison'}
      </button>

      {showResults && ownResult && i2cResult && (
        <div>
          <h3 style={styles.comparisonTitle}>Cost Comparison</h3>
          
          {/* Visual comparison chart */}
          <CostComparisonChart 
            selfHostedCost={parseFloat(ownResult.total) * 30}
            managedCost={parseFloat(i2cResult.total) * 30}
          />
          
          <div style={styles.resultsGrid}>
            {/* Self-hosted Results */}
            <div style={styles.resultsContainer}>
              <div style={styles.resultsTitle}>Faculty or Department Hosted JupyterHub Costs</div>
              
              <div style={styles.resultLine}>
                <Tooltip text="Active pods are calculated as 25% of total users, representing the typical concurrent usage pattern.">
                  <span>Active Pods (Users ÷ 4):</span>
                </Tooltip>
                <span>{ownResult.activePods}</span>
              </div>
              
              <div style={styles.resultLine}>
                <Tooltip text="Each active pod is allocated 1GB of memory, which is sufficient for most educational Jupyter notebooks.">
                  <span>Required Memory (1GB per pod):</span>
                </Tooltip>
                <span>{ownResult.recommendedMemory} GB</span>
              </div>
              
              <div style={styles.resultLine}>
                <Tooltip text="The number of cloud nodes needed based on the memory requirements and selected node type.">
                  <span>Total Nodes Required:</span>
                </Tooltip>
                <span>{ownResult.totalNodes}</span>
              </div>
              
              <div style={styles.resultLine}>
                <span>Compute Costs (for {ownResult.hours} hours):</span>
                <span>${ownResult.computeCost}</span>
              </div>
              
              <div style={styles.resultTotal}>
                <span>Total Daily Cost:</span>
                <span>${ownResult.total}</span>
              </div>
              
              <div style={styles.resultTotal}>
                <Tooltip text="This is purely the infrastructure cost. Self-hosted solutions typically require DevOps staff time not reflected here.">
                  <span>Estimated Monthly Cost:</span>
                </Tooltip>
                <span>${(parseFloat(ownResult.total) * 30).toFixed(2)}</span>
              </div>
            </div>

            {/* UC Merced Jupyterhub Results */}
            <div style={styles.resultsContainer}>
              <div style={styles.resultsTitle}>UC Merced Jupyterhub Service Costs</div>
              
              <div style={styles.resultLine}>
                <span>Active Pods (Users ÷ 4):</span>
                <span>{i2cResult.activePods}</span>
              </div>
              
              <div style={styles.resultLine}>
                <span>Required Memory (1GB per pod):</span>
                <span>{i2cResult.recommendedMemory} GB</span>
              </div>
              
              <div style={styles.resultLine}>
                <span>Total Nodes Required:</span>
                <span>{i2cResult.totalNodes}</span>
              </div>
              
              <div style={styles.resultLine}>
                <Tooltip text="The UC Merced Jupyterhub base service fee covers professional administration, monitoring, and maintenance.">
                  <span>UC Merced Base Service Fee:</span>
                </Tooltip>
                <span>${i2cResult.baseCost.toFixed(2)}/month</span>
              </div>
              
              <div style={styles.resultLine}>
                <span>Compute Costs (for {i2cResult.hours} hours):</span>
                <span>${i2cResult.computeCost}/day</span>
              </div>
              
              <div style={styles.resultTotal}>
                <span>Total Daily Cost:</span>
                <span>${i2cResult.total}</span>
              </div>
              
              <div style={styles.resultTotal}>
                <Tooltip text="This includes both infrastructure and managed service fees. No additional IT staff time is required.">
                  <span>Estimated Monthly Cost:</span>
                </Tooltip>
                <span>${(parseFloat(i2cResult.total) * 30).toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          {/* Methodology note */}
          <div style={styles.methodologyNote}>
            <h4 style={{margin: '0 0 0.75rem 0', fontSize: '1rem'}}>Calculation Methodology</h4>
            <p>This calculator uses the following approach to estimate JupyterHub costs:</p>
            <ul style={{margin: '0.5rem 0', paddingLeft: '1.5rem'}}>
              <li><strong>Active Users:</strong> Typically only 25% of registered users are active simultaneously</li>
              <li><strong>Memory Allocation:</strong> 1GB of RAM per active user pod is standard for educational use</li>
              <li><strong>Node Requirements:</strong> Calculated based on total memory needs and chosen node type</li>
              <li><strong>Total Cost:</strong> Includes both infrastructure costs and service fees (for 2i2c option)</li>
            </ul>
            <div style={{
              marginTop: '1.25rem',
              padding: '1rem',
              backgroundColor: '#fffbeb',
              border: '1px solid #fbbf24',
              borderRadius: '8px',
              borderLeft: '4px solid #f59e0b',
              color: '#92400e',
              fontWeight: '500'
            }}>
              <div style={{fontSize: '1rem', fontWeight: '700', marginBottom: '0.5rem', display: 'flex', alignItems: 'center'}}>
                <span style={{marginRight: '0.5rem'}}>⚠️</span> IMPORTANT COST CONSIDERATION
              </div>
              <p style={{margin: 0}}>
                The Faculty or Department Hosted JupyterHub option requires <strong>dedicated IT specialists</strong> not reflected in this calculation.
                When comparing costs, you must factor in approximately <strong>1-1.25 FTE</strong> of specialized expertise 
                across cloud engineering, DevOps, and system administration. This team must continuously monitor and maintain 
                the infrastructure. This significant hidden cost makes UC Merced JupyterHub service substantially more 
                cost-effective when factoring in total cost of ownership.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}