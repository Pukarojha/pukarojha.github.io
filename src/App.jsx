import React, { useState, useEffect, useMemo } from 'react';
import { profileData } from './data';
import { Terminal, Mail, Server, Activity, FileJson, FolderGit2, X, Box } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

export default function App() {
  const [isBooting, setIsBooting] = useState(true);
  const [activeNode, setActiveNode] = useState(profileData.experience[0]);
  const [activeProject, setActiveProject] = useState(profileData.projects[0]);

  // Mouse trail
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skillProcesses = useMemo(() => {
    const rows = [];
    Object.entries(profileData.skills).forEach(([category, skills], catIdx) => {
      skills.forEach((skill, sIdx) => {
        const statuses = ["ACTIVE", "SYSTEM", "RUNNING"];
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        
        // Give clear Experience metrics based on category mapping
        let exp = "1 YRS";
        if (category === "Languages" || category === "Databases" || category === "Web_Frameworks") exp = "3 YRS";
        if (category === "Cross_Platform" || category === "DevOps_Cloud") exp = "2 YRS";

        // Hardcode his best skills to 3+
        if (["React.js", "Node.js", "JavaScript (ES6+)", "Python", "React Native"].includes(skill)) exp = "3+ YRS";

        rows.push({
          id: skill,
          pid: 1000 + (catIdx * 100) + sIdx,
          exp: exp,
          status,
          category
        });
      });
    });
    return rows;
  }, []);

  if (isBooting) {
    return (
      <div className="boot-sequence">
        <div className="boot-terminal">
          <TypeAnimation
            sequence={[
              '> SYSTEM.BOOT()...', 500,
              '> INITIALIZING SYSTEM_ENGINEER_O_PUKAR...\n> MOUNTING CORE MODULES... [OK]\n> COMPILING STACK DEPENDENCIES... [OK]\n> ESTABLISHING DATABASE CONNECTIONS... [OK]\n> FETCHING DEPLOYMENT HISTORY... [OK]\n> SYSTEM READY. LAUNCHING GUI...', 
              1000,
              () => setIsBooting(false)
            ]}
            wrapper="div"
            cursor={true}
            speed={70}
            style={{ whiteSpace: 'pre-line', fontFamily: 'var(--font-code)', color: '#00ff00', fontSize: '1.2rem', lineHeight: '1.8' }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="os-container">
      {/* Global Mouse Glow */}
      <div 
        className="mouse-glow" 
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      {/* TOP BAR */}
      <header className="os-header">
        <div className="os-brand">
          <Terminal size={20} className="text-accent" />
          <span className="font-code font-bold">O_PUKAR_OS // SYS_ADMIN</span>
        </div>
        <div className="os-controls">
          <div className="status-indicator">
            <span className="pulse-dot"></span>
            SYSTEM ONLINE
          </div>
          <div className="social-links">
            <a href={`https://${profileData.contact.github}`} target="_blank" rel="noreferrer"><FaGithub size={20}/></a>
            <a href={`https://${profileData.contact.linkedin}`} target="_blank" rel="noreferrer"><FaLinkedin size={20}/></a>
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profileData.contact.email}`} target="_blank" rel="noreferrer" title="Compose in Gmail"><Mail size={20}/></a>
          </div>
        </div>
      </header>

      <main className="os-layout">
        
        {/* HERO MATRIX */}
        <section className="glass-panel profile-matrix">
           <div className="profile-header">
              <img src={profileData.avatarUrl} alt="Pukar" className="avatar-glitch" />
              <div>
                 <h1 className="glitch-text" data-text={profileData.name}>{profileData.name}</h1>
                 <h2 className="title-text text-accent font-code">&gt; {profileData.title}</h2>
              </div>
           </div>

           <div className="summary-yaml font-code">
              <div className="yaml-header"><FileJson size={14} className="inline mr-2" /> system_config.yml</div>
              <div className="yaml-body">
                <span className="yaml-key">user_profile:</span><br/>
                <span className="yaml-indent"></span><span className="yaml-key">role:</span> <span className="string">"Full-Stack Software Developer"</span><br/>
                <span className="yaml-indent"></span><span className="yaml-key">uptime:</span> <span className="string">"3+ Years Professional Experience"</span><br/>
                <span className="yaml-indent"></span><span className="yaml-key">directives:</span><br/>
                <span className="yaml-indent-double"></span><span className="yaml-bullet">-</span> <span className="yaml-value">"Architect highly scalable MERN / React Native platforms"</span><br/>
                <span className="yaml-indent-double"></span><span className="yaml-bullet">-</span> <span className="yaml-value">"Eliminate technical debt & resolve production incidents"</span><br/>
                <span className="yaml-indent-double"></span><span className="yaml-bullet">-</span> <span className="yaml-value">"Deliver zero-defect deployments on schedule"</span><br/>
                <span className="yaml-indent"></span><span className="yaml-key">communication:</span> <span className="string">"Cross-functional Agile leader"</span>
              </div>
           </div>
           
           <div className="system-stats">
              <div className="stat-box">
                <span className="stat-label">SYS_LVL</span>
                <span className="stat-value text-accent">{profileData.stats.level}</span>
              </div>
              <div className="stat-box">
                <span className="stat-label">COMMITS</span>
                <span className="stat-value">{profileData.stats.commits}+</span>
              </div>
              <div className="stat-box">
                <span className="stat-label">CAFFEINE</span>
                <span className="stat-value">{profileData.stats.cupsOfCoffee}ml</span>
              </div>
           </div>
        </section>

        {/* MICROSERVICE EXPERIENCE GRAPH */}
        <section className="glass-panel experience-service">
          <div className="panel-title">
            <Server size={18} />
            <span>ARCHITECTURE // CAREER_GRAPH</span>
          </div>

          <div className="architecture-graph">
            <div className="service-nodes">
              {profileData.experience.map((exp, idx) => (
                <React.Fragment key={exp.id}>
                  <div 
                    className={`service-node ${activeNode?.id === exp.id ? 'active' : ''}`}
                    onClick={() => setActiveNode(exp)}
                  >
                    <div className="node-icon"><Activity size={24} /></div>
                    <div className="node-info">
                      <span className="node-env text-accent">ENV: {exp.company.toUpperCase()}</span>
                      <span className="node-role">{exp.title}</span>
                    </div>
                  </div>
                  {idx !== profileData.experience.length - 1 && <div className="data-pipeline"></div>}
                </React.Fragment>
              ))}
            </div>

            <div className="server-logs">
              <div className="log-header">
                <span>TERMINAL</span>
                <div className="window-controls">
                  <span className="ctrl close"></span><span className="ctrl min"></span><span className="ctrl expand"></span>
                </div>
              </div>
              <div className="log-body font-code">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeNode.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="log-line text-accent">$&gt; ssh root@{activeNode.company.replace(/\s+/g,'').replace(/\//g,'').toLowerCase()}.io</div>
                    <div className="log-line">Connected. Fetching deployment metrics...</div>
                    <br/>
                    {activeNode.achievements.map((ach, i) => (
                      <div key={i} className="log-success">
                        <span className="status-code">[200 OK]</span> {ach}
                      </div>
                    ))}
                    <br/>
                    <div className="log-line">$&gt; <span className="blink-cursor">_</span></div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* IDE PROJECT WORKSPACE */}
        <section className="glass-panel project-ide">
          <div className="panel-title">
            <FolderGit2 size={18} />
            <span>WORKSPACE // DEPLOYMENTS</span>
          </div>
          
          <div className="ide-layout">
            <div className="ide-sidebar">
              <div className="sidebar-title">EXPLORER</div>
              <ul className="file-tree font-code">
                {profileData.projects.map(proj => (
                  <li 
                    key={proj.id}
                    className={`file-item ${activeProject?.id === proj.id ? 'active' : ''}`}
                    onClick={() => setActiveProject(proj)}
                  >
                    <FileJson size={14}/>
                    <span>{proj.name.replace(/\s+/g,'').replace('-','')}.jsx</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ide-editor">
              <div className="editor-tabs font-code">
                <div className="tab active">
                  <FileJson size={14}/> {activeProject.name.replace(/\s+/g,'').replace('-','')}.jsx <X size={14} className="close-tab"/>
                </div>
              </div>
              
              <div className="editor-content font-code">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="code-line"><span className="keyword">export const</span> <span className="variable">deployTarget</span> <span className="operator">=</span> <span className="string">"{activeProject.name}"</span>;</div>
                    <div className="code-line"><span className="keyword">const</span> <span className="variable">role</span> <span className="operator">=</span> <span className="string">"{activeProject.role}"</span>;</div>
                    <br/>
                    <div className="code-line"><span className="comment">// CORE TECHNOLOGIES</span></div>
                    <div className="code-line"><span className="keyword">const</span> <span className="variable">stack</span> <span className="operator">=</span> [<span className="string">"{activeProject.tech.split(',').join('","')}"</span>];</div>
                    <br/>
                    <div className="code-line"><span className="comment">/**</span></div>
                    <div className="code-line"><span className="comment"> * SYSTEM DESCRIPTION</span></div>
                    <div className="code-line" style={{whiteSpace: 'pre-wrap'}}><span className="comment"> * {activeProject.description}</span></div>
                    <div className="code-line"><span className="comment"> */</span></div>
                    <br/>
                    <div className="code-line"><span className="keyword">export default</span> <span className="function">function</span> <span className="entity">InitializeSystem</span>() &#123;</div>
                    <div className="code-line indent-1"><span className="keyword">return</span> &lt;<span className="tag">System</span> <span className="attr">stack</span>=&#123;<span className="variable">stack</span>&#125; /&gt;;</div>
                    <div className="code-line">&#125;</div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* CI/CD PIPELINE (EDUCATION) */}
        <section className="glass-panel training-data">
          <div className="panel-title">
            <Terminal size={18} />
            <span>PIPELINE // CI-CD_LIFECYCLE</span>
          </div>

          <div className="pipeline-grid">
            {profileData.education.map((edu, idx) => {
              const isBuilding = edu.year.includes("Expected");
              return (
                <React.Fragment key={edu.id}>
                  <div className={`pipeline-stage ${isBuilding ? 'building' : 'passed'}`}>
                    <div className="stage-header">
                      <div className="stage-status font-code">
                        {isBuilding ? (
                           <div className="spinner-border"></div>
                        ) : (
                           <span className="status-badge passed">[GRADUATED]</span>
                        )}
                        <span className="stage-id">BUILD: {edu.id.toUpperCase()}</span>
                      </div>
                      <span className="stage-time font-code">{edu.year}</span>
                    </div>
                    
                    <div className="stage-body">
                      <h3 className="stage-name">{edu.school}</h3>
                      <h4 className="stage-artifact text-accent font-code">&gt; ARTIFACT: {edu.degree}</h4>
                      {isBuilding && (
                        <div className="stage-logs font-code">
                          <div className="log-text">&gt; Pulling target image... OK</div>
                          <div className="log-text">&gt; Compiling modules: {edu.details?.join(", ")}...</div>
                          <div className="blink-cursor-fast text-accent">_</div>
                        </div>
                      )}
                    </div>
                  </div>
                  {idx !== profileData.education.length - 1 && <div className="pipeline-connector"></div>}
                </React.Fragment>
              );
            })}
          </div>
        </section>

        {/* HTOP RESOURCE MONITOR (SKILLS) */}
        <section className="glass-panel system-packages">
          <div className="panel-title">
             <Activity size={18} />
             <span>SYSTEM // RESOURCE_MONITOR</span>
          </div>

          <div className="htop-table font-code">
             <div className="htop-header text-muted">
                <span className="col-pid">PID</span>
                <span className="col-status">STATUS</span>
                <span className="col-binding">EXP_YRS</span>
                <span className="col-cmd">MODULE</span>
             </div>
             <div className="htop-body">
               {skillProcesses.map((proc) => (
                 <div key={proc.id} className="htop-row">
                   <span className="col-pid">{proc.pid}</span>
                   <span className="col-status status-text">[{proc.status}]</span>
                   <span className="col-binding text-muted font-bold">{proc.exp}</span>
                   <span className="col-cmd text-accent">{proc.id}</span>
                 </div>
               ))}
             </div>
          </div>
        </section>

      </main>

      {/* COPYRIGHT FOOTER */}
      <footer className="os-footer font-code">
        &copy; {new Date().getFullYear()} Pukar Ojha. All rights reserved.
      </footer>
    </div>
  );
}
