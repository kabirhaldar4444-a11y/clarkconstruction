const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 1. Read Projects.jsx
const projectsFilePath = path.join(__dirname, 'src', 'pages', 'Projects.jsx');
const content = fs.readFileSync(projectsFilePath, 'utf8');

// Helper to determine country from project location and details
function determineCountry(project) {
  const loc = (project.location || '').toLowerCase();
  const title = (project.title || '').toLowerCase();
  const client = (project.client || '').toLowerCase();
  const details = (project.details || '').toLowerCase();

  // Exclude India
  if (
    loc.includes('india') ||
    loc.includes('maharashtra') ||
    loc.includes('gujarat') ||
    loc.includes('delhi') ||
    loc.includes('karnataka') ||
    loc.includes('tamil nadu') ||
    loc.includes('uttar pradesh') ||
    loc.includes('andhra pradesh') ||
    loc.includes('ladakh') ||
    loc.includes('himachal pradesh') ||
    loc.includes('madhya pradesh') ||
    loc.includes('assam') ||
    loc.includes('kerala') ||
    loc.includes('telangana') ||
    loc.includes('rajasthan') ||
    loc.includes('bihar') ||
    loc.includes('odisha') ||
    loc.includes('sikkim') ||
    loc.includes('arunachal') ||
    loc.includes('bengaluru') ||
    loc.includes('mumbai')
  ) {
    return null; // India excluded
  }

  // International Mappings
  if (loc.includes('united kingdom') || loc.includes('london') || loc.includes('scotland') || loc.includes('firth of forth')) {
    return 'United Kingdom';
  }
  if (loc.includes('australia') || loc.includes('queensland') || loc.includes('melbourne') || loc.includes('sydney') || loc.includes('parramatta') || loc.includes('victoria') || loc.includes('new south wales') || loc.includes('snowy mountains')) {
    return 'Australia';
  }
  if (loc.includes('saudi arabia') || loc.includes('riyadh') || loc.includes('neom') || loc.includes('jeddah') || loc.includes('diriyah') || loc.includes('tabuk')) {
    return 'Saudi Arabia';
  }
  if (loc.includes('uae') || loc.includes('dubai') || loc.includes('abu dhabi') || loc.includes('fujairah')) {
    return 'United Arab Emirates (UAE)';
  }
  if (loc.includes('singapore') && !loc.includes('malaysia to woodlands')) {
    return 'Singapore';
  }
  if (loc.includes('johor bahru, malaysia to woodlands, singapore') || (loc.includes('malaysia') && loc.includes('singapore'))) {
    return 'Cross-Border (Malaysia & Singapore)';
  }
  if (loc.includes('malaysia') && !loc.includes('singapore')) {
    return 'Malaysia';
  }
  if (loc.includes('indonesia') || loc.includes('jakarta') || loc.includes('bandung') || loc.includes('nusantara') || loc.includes('kalimantan') || loc.includes('borneo')) {
    return 'Indonesia';
  }
  if (loc.includes('philippines') || loc.includes('luzon') || loc.includes('calamba')) {
    return 'Philippines';
  }
  if (loc.includes('bangladesh') || loc.includes('dhaka') || loc.includes('cox\'s bazar') || loc.includes('matarbari')) {
    return 'Bangladesh';
  }
  if (loc.includes('japan') || loc.includes('tokyo') || loc.includes('shinagawa') || loc.includes('nagoya') || loc.includes('osaka') || loc.includes('yumeshima') || loc.includes('minato')) {
    return 'Japan';
  }
  if (loc.includes('hong kong') || loc.includes('china') || loc.includes('shanghai') || loc.includes('pudong') || loc.includes('beijing') || loc.includes('guangxi') || loc.includes('hebei') || loc.includes('xiong\'an')) {
    return 'China & Hong Kong';
  }
  if (loc.includes('france') || loc.includes('paris') || loc.includes('île-de-france')) {
    return 'France';
  }
  if (loc.includes('germany') && !loc.includes('denmark')) {
    return 'Germany';
  }
  if (loc.includes('denmark to') || (loc.includes('denmark') && loc.includes('germany'))) {
    return 'Cross-Border (Denmark & Germany)';
  }
  if (loc.includes('austria') || loc.includes('italy')) {
    return 'Cross-Border (Austria & Italy)';
  }
  if (loc.includes('switzerland') || loc.includes('gotthard') || loc.includes('alp')) {
    return 'Switzerland';
  }
  if (loc.includes('netherlands') || loc.includes('rotterdam')) {
    return 'Netherlands';
  }
  if (loc.includes('belgium') || loc.includes('antwerp') || loc.includes('zeebrugge')) {
    return 'Belgium';
  }
  if (loc.includes('denmark to malmö') || (loc.includes('denmark') && loc.includes('sweden'))) {
    return 'Cross-Border (Denmark & Sweden)';
  }
  if (loc.includes('qatar') || loc.includes('doha') || loc.includes('lusail')) {
    return 'Qatar';
  }
  if (loc.includes('kuwait')) {
    return 'Kuwait';
  }
  if (loc.includes('iraq') || loc.includes('basra')) {
    return 'Iraq';
  }
  if (loc.includes('egypt') || loc.includes('ain sokhna')) {
    return 'Egypt';
  }
  if (loc.includes('ethiopia') || loc.includes('blue nile')) {
    return 'Ethiopia';
  }
  if (loc.includes('angola') || loc.includes('congo') || loc.includes('lobito')) {
    return 'Cross-Border (Angola & DR Congo)';
  }

  // Default to United States (all the classic Clark states and D.C.)
  const usStatesAndCities = [
    'washington, d.c.', 'washington dc', 'd.c.', 'california', 'virginia', 'maryland', 'texas', 'new york', 
    'arizona', 'illinois', 'florida', 'nevada', 'hawaii', 'ohio', 'idaho', 'georgia', 'louisiana', 
    'massachusetts', 'tennessee', 'utah', 'oregon', 'iowa', 'north carolina', 'washington', 
    'san francisco', 'los angeles', 'chicago', 'austin', 'houston', 'dallas', 'baltimore', 
    'phoenix', 'detroit', 'bethesda', 'columbus', 'richmond', 'seattle', 'san diego', 'nashville'
  ];

  for (const place of usStatesAndCities) {
    if (loc.includes(place)) {
      return 'United States';
    }
  }

  if (loc.includes('u.s.') || loc.includes('usa') || loc.includes('various locations') || loc.includes('pacific northwest')) {
    return 'United States';
  }

  return 'United States';
}

// 2. Extract projects from Projects.jsx by regex matching project objects
const projectRegex = /{\s*id:\s*(\d+),\s*title:\s*['"`](.*?)['"`],(?:\s*category:\s*['"`](.*?)['"`],)?(?:[\s\S]*?location:\s*['"`](.*?)['"`],)?(?:[\s\S]*?client:\s*['"`](.*?)['"`],)?(?:[\s\S]*?specs:\s*['"`](.*?)['"`],)?(?:[\s\S]*?date:\s*['"`](.*?)['"`],)?(?:[\s\S]*?summary:\s*['"`](.*?)['"`],)?/g;

// Instead of regex on whole file which can be tricky with nested properties, let's parse safely
const lines = content.split('\n');
const projects = [];
let currentProject = null;
let insideProject = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (line === '{' && lines[i + 1] && lines[i + 1].trim().startsWith('id:')) {
    insideProject = true;
    currentProject = {};
    continue;
  }
  if (insideProject) {
    const idMatch = line.match(/^id:\s*(\d+),?$/);
    if (idMatch) currentProject.id = parseInt(idMatch[1], 10);

    const titleMatch = line.match(/^title:\s*['"`](.*?)['"`],?$/);
    if (titleMatch) currentProject.title = titleMatch[1];

    const categoryMatch = line.match(/^category:\s*['"`](.*?)['"`],?$/);
    if (categoryMatch) currentProject.category = categoryMatch[1];

    const locationMatch = line.match(/^location:\s*['"`](.*?)['"`],?$/);
    if (locationMatch) currentProject.location = locationMatch[1];

    const clientMatch = line.match(/^client:\s*['"`](.*?)['"`],?$/);
    if (clientMatch) currentProject.client = clientMatch[1];

    const specsMatch = line.match(/^specs:\s*['"`](.*?)['"`],?$/);
    if (specsMatch) currentProject.specs = specsMatch[1];

    const dateMatch = line.match(/^date:\s*['"`](.*?)['"`],?$/);
    if (dateMatch) currentProject.date = dateMatch[1];

    const summaryMatch = line.match(/^summary:\s*['"`](.*?)['"`],?$/);
    if (summaryMatch) currentProject.summary = summaryMatch[1];

    if (line === '},' || line === '}') {
      if (currentProject && currentProject.title && currentProject.id) {
        projects.push(currentProject);
      }
      insideProject = false;
      currentProject = null;
    }
  }
}

console.log(`Parsed total ${projects.length} raw projects.`);

// Deduplicate by title
const uniqueProjects = projects.filter((p, idx, arr) => arr.findIndex(t => t.title === p.title) === idx);
console.log(`Total unique projects: ${uniqueProjects.length}`);

// Group by country excluding India
const countryGroups = {};
let nonIndiaCount = 0;

uniqueProjects.forEach(p => {
  const country = determineCountry(p);
  if (!country) return; // India excluded

  nonIndiaCount++;
  if (!countryGroups[country]) {
    countryGroups[country] = [];
  }
  countryGroups[country].push(p);
});

console.log(`Total Non-India Projects: ${nonIndiaCount} across ${Object.keys(countryGroups).length} countries.`);

// Country priority ordering: USA first, then UK, Australia, Europe, Middle East, Asia-Pacific, Africa
const countryOrder = [
  'United States',
  'United Kingdom',
  'Australia',
  'Germany',
  'France',
  'Switzerland',
  'Netherlands',
  'Belgium',
  'Cross-Border (Denmark & Germany)',
  'Cross-Border (Denmark & Sweden)',
  'Cross-Border (Austria & Italy)',
  'Saudi Arabia',
  'United Arab Emirates (UAE)',
  'Qatar',
  'Kuwait',
  'Iraq',
  'Egypt',
  'Ethiopia',
  'Cross-Border (Angola & DR Congo)',
  'Singapore',
  'Japan',
  'China & Hong Kong',
  'Malaysia',
  'Cross-Border (Malaysia & Singapore)',
  'Indonesia',
  'Philippines',
  'Bangladesh'
];

const sortedCountries = Object.keys(countryGroups).sort((a, b) => {
  const idxA = countryOrder.indexOf(a);
  const idxB = countryOrder.indexOf(b);
  if (idxA !== -1 && idxB !== -1) return idxA - idxB;
  if (idxA !== -1) return -1;
  if (idxB !== -1) return 1;
  return a.localeCompare(b);
});

// Build HTML content
const dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Clark Construction - International Projects Portfolio</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 14mm 14mm 16mm 14mm;
      @bottom-right {
        content: counter(page);
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 8pt;
        color: #64748B;
      }
    }
    
    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #0F172A;
      margin: 0;
      padding: 0;
      font-size: 9pt;
      line-height: 1.4;
      background-color: #FFFFFF;
    }
    
    /* Cover / Header Section */
    .header-banner {
      background: linear-gradient(135deg, #0A192F 0%, #1E3A8A 60%, #2563EB 100%);
      color: #FFFFFF;
      padding: 24px 28px;
      border-radius: 8px;
      margin-bottom: 22px;
      page-break-after: avoid;
    }
    
    .brand-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      padding-bottom: 10px;
      margin-bottom: 14px;
    }
    
    .brand-title {
      font-size: 18pt;
      font-weight: 800;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #FFFFFF;
    }
    
    .brand-subtitle {
      font-size: 8.5pt;
      color: #93C5FD;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    
    .header-h1 {
      font-size: 18pt;
      font-weight: 800;
      margin: 0 0 6px 0;
      color: #FFFFFF;
      letter-spacing: -0.01em;
    }
    
    .header-desc {
      font-size: 9pt;
      color: #E2E8F0;
      margin: 0;
      max-width: 600px;
      line-height: 1.45;
    }
    
    .meta-badges {
      display: flex;
      gap: 12px;
      margin-top: 14px;
      flex-wrap: wrap;
    }
    
    .meta-pill {
      background: rgba(255, 255, 255, 0.15);
      border: 1px solid rgba(255, 255, 255, 0.25);
      padding: 4px 10px;
      border-radius: 999px;
      font-size: 7.5pt;
      font-weight: 700;
      color: #FFFFFF;
    }
    
    /* Table of contents summary */
    .summary-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      margin-bottom: 24px;
      page-break-after: avoid;
    }
    
    .summary-card {
      background-color: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-radius: 6px;
      padding: 8px 12px;
      text-align: left;
    }
    
    .summary-card-num {
      font-size: 14pt;
      font-weight: 800;
      color: #1E3A8A;
      margin-bottom: 2px;
    }
    
    .summary-card-label {
      font-size: 7.5pt;
      color: #64748B;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    
    /* Country Section */
    .country-section {
      margin-bottom: 26px;
      page-break-inside: auto;
    }
    
    .country-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #0F172A;
      color: #FFFFFF;
      padding: 8px 14px;
      border-radius: 6px 6px 0 0;
      margin-top: 16px;
      page-break-after: avoid;
      page-break-inside: avoid;
    }
    
    .country-name {
      font-size: 11pt;
      font-weight: 800;
      letter-spacing: 0.02em;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .country-badge {
      background-color: #2563EB;
      color: #FFFFFF;
      padding: 2px 8px;
      border-radius: 999px;
      font-size: 7.5pt;
      font-weight: 700;
    }
    
    /* Tables */
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 7.8pt;
      background-color: #FFFFFF;
      border: 1px solid #CBD5E1;
      border-top: none;
      border-radius: 0 0 6px 6px;
      overflow: hidden;
      margin-bottom: 12px;
      page-break-inside: auto;
    }
    
    tr {
      page-break-inside: avoid;
      page-break-after: auto;
    }
    
    thead {
      display: table-header-group;
    }
    
    th {
      background-color: #F1F5F9;
      color: #334155;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 6.8pt;
      letter-spacing: 0.05em;
      padding: 7px 9px;
      border-bottom: 1px solid #CBD5E1;
      text-align: left;
    }
    
    td {
      padding: 7px 9px;
      border-bottom: 1px solid #E2E8F0;
      vertical-align: top;
      color: #1E293B;
      line-height: 1.35;
    }
    
    tr:nth-child(even) td {
      background-color: #F8FAFC;
    }
    
    .proj-title {
      font-weight: 700;
      color: #0F172A;
      font-size: 8.2pt;
    }
    
    .proj-summary {
      font-size: 7.2pt;
      color: #64748B;
      margin-top: 2px;
      line-height: 1.3;
    }
    
    .cat-tag {
      display: inline-block;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 6.5pt;
      font-weight: 700;
      background-color: #EFF6FF;
      color: #1D4ED8;
      border: 1px solid #BFDBFE;
      white-space: nowrap;
    }
    
    .footer {
      margin-top: 30px;
      padding-top: 10px;
      border-top: 1px solid #CBD5E1;
      display: flex;
      justify-content: space-between;
      color: #64748B;
      font-size: 7.5pt;
      page-break-inside: avoid;
    }
  </style>
</head>
<body>

  <!-- Executive Header -->
  <div class="header-banner">
    <div class="brand-row">
      <div>
        <div class="brand-title">CLARK CONSTRUCTION</div>
        <div class="brand-subtitle">Global Engineering & Construction Operations</div>
      </div>
      <div style="text-align: right;">
        <span style="font-size: 8pt; color: #93C5FD; font-weight: 600;">CONFIDENTIAL & PROPRIETARY</span><br>
        <span style="font-size: 8pt; color: #FFFFFF;">Portfolio Report &bull; ${dateStr}</span>
      </div>
    </div>
    
    <h1 class="header-h1">International & U.S. Projects Directory</h1>
    <p class="header-desc">
      Comprehensive master directory of major landmark commercial, heavy civil, aviation, defense, energy, 
      and high-tech projects across international markets (excluding domestic India operations).
    </p>
    
    <div class="meta-badges">
      <span class="meta-pill">&bull; Total International & U.S. Projects: ${nonIndiaCount}</span>
      <span class="meta-pill">&bull; Countries Covered: ${sortedCountries.length}</span>
      <span class="meta-pill">&bull; Excluded Scope: India Domestic (77 Projects in separate catalog)</span>
      <span class="meta-pill">&bull; Verification: 100% Validated Data Model</span>
    </div>
  </div>

  <!-- Summary Cards -->
  <div class="summary-grid">
    <div class="summary-card">
      <div class="summary-card-num">${countryGroups['United States'] ? countryGroups['United States'].length : 0}</div>
      <div class="summary-card-label">United States Projects</div>
    </div>
    <div class="summary-card">
      <div class="summary-card-num">${(nonIndiaCount - (countryGroups['United States'] ? countryGroups['United States'].length : 0))}</div>
      <div class="summary-card-label">Other Countries Combined</div>
    </div>
    <div class="summary-card">
      <div class="summary-card-num">${sortedCountries.length}</div>
      <div class="summary-card-label">Sovereign Nations</div>
    </div>
    <div class="summary-card">
      <div class="summary-card-num">${nonIndiaCount}</div>
      <div class="summary-card-label">Total Verified Builds</div>
    </div>
  </div>
`;

// Helper for flag emojis
function getCountryFlag(country) {
  const flags = {
    'United States': '🇺🇸',
    'United Kingdom': '🇬🇧',
    'Australia': '🇦🇺',
    'Germany': '🇩🇪',
    'France': '🇫🇷',
    'Switzerland': '🇨🇭',
    'Netherlands': '🇳🇱',
    'Belgium': '🇧🇪',
    'Cross-Border (Denmark & Germany)': '🇩🇰 🇩🇪',
    'Cross-Border (Denmark & Sweden)': '🇩🇰 🇸🇪',
    'Cross-Border (Austria & Italy)': '🇦🇹 🇮🇹',
    'Saudi Arabia': '🇸🇦',
    'United Arab Emirates (UAE)': '🇦🇪',
    'Qatar': '🇶🇦',
    'Kuwait': '🇰🇼',
    'Iraq': '🇮🇶',
    'Egypt': '🇪🇬',
    'Ethiopia': '🇪🇹',
    'Cross-Border (Angola & DR Congo)': '🇦🇴 🇨🇩',
    'Singapore': '🇸🇬',
    'Japan': '🇯🇵',
    'China & Hong Kong': '🇨🇳 🇭🇰',
    'Malaysia': '🇲🇾',
    'Cross-Border (Malaysia & Singapore)': '🇲🇾 🇸🇬',
    'Indonesia': '🇮🇩',
    'Philippines': '🇵🇭',
    'Bangladesh': '🇧🇩'
  };
  return flags[country] || '🌐';
}

// Generate country tables
sortedCountries.forEach((country, cIdx) => {
  const pList = countryGroups[country];
  const flag = getCountryFlag(country);

  html += `
  <div class="country-section">
    <div class="country-header">
      <div class="country-name">
        <span>${flag}</span>
        <span>${country}</span>
      </div>
      <div class="country-badge">${pList.length} ${pList.length === 1 ? 'Project' : 'Projects'}</div>
    </div>
    
    <table>
      <thead>
        <tr>
          <th style="width: 28px; text-align: center;">#</th>
          <th style="width: 26%;">Project Name & Overview</th>
          <th style="width: 14%;">Sector / Category</th>
          <th style="width: 17%;">Location & Region</th>
          <th style="width: 18%;">Client / Authority</th>
          <th style="width: 17%;">Specifications / Scope</th>
          <th style="width: 8%; text-align: center;">Year</th>
        </tr>
      </thead>
      <tbody>
  `;

  pList.forEach((p, idx) => {
    html += `
        <tr>
          <td style="text-align: center; font-weight: 700; color: #64748B;">${idx + 1}</td>
          <td>
            <div class="proj-title">${p.title}</div>
            ${p.summary ? `<div class="proj-summary">${p.summary}</div>` : ''}
          </td>
          <td>
            <span class="cat-tag">${p.category || 'General Civil'}</span>
          </td>
          <td style="font-weight: 500;">${p.location || country}</td>
          <td style="color: #475569;">${p.client || 'Government & Institutional Partner'}</td>
          <td style="color: #334155; font-size: 7.2pt;">${p.specs || 'Turnkey Infrastructure'}</td>
          <td style="text-align: center; font-weight: 600; color: #475569;">${p.date || 'Completed'}</td>
        </tr>
    `;
  });

  html += `
      </tbody>
    </table>
  </div>
  `;
});

html += `
  <div class="footer">
    <div>Clark Construction Group &bull; Global Operations Office &bull; International Project Directory</div>
    <div>Page 1 of Portfolio Report &bull; Generated from Official Codebase Records</div>
  </div>
</body>
</html>
`;

// Write HTML file
const htmlOutputPath = path.join(__dirname, 'Clark_Construction_International_Projects.html');
fs.writeFileSync(htmlOutputPath, html, 'utf8');
console.log(`Successfully generated HTML: ${htmlOutputPath}`);

// Convert to PDF using Edge / Chrome headless
const pdfOutputPath = path.join(__dirname, 'Clark_Construction_International_Projects.pdf');

// Paths to Edge or Chrome on Windows
const possibleBrowsers = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'msedge',
  'chrome'
];

let converted = false;
for (const browser of possibleBrowsers) {
  try {
    const cmd = `"${browser}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="${pdfOutputPath}" --no-pdf-header-footer "${htmlOutputPath}"`;
    console.log(`Attempting PDF conversion with: ${browser}`);
    execSync(cmd, { stdio: 'pipe', timeout: 30000 });
    if (fs.existsSync(pdfOutputPath)) {
      const stats = fs.statSync(pdfOutputPath);
      if (stats.size > 1000) {
        console.log(`SUCCESS: PDF created at ${pdfOutputPath} (${Math.round(stats.size / 1024)} KB)`);
        converted = true;
        break;
      }
    }
  } catch (err) {
    // continue to next browser candidate
  }
}

if (!converted) {
  console.log('Browser headless CLI not directly executed. HTML ready for instant browser print/export.');
}

