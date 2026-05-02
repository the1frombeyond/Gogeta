const fs = require('fs');
let content = fs.readFileSync('bin/install.js', 'utf8');

// Banner color
content = content.replace("cyan + '   ██████╗", "red + '   ██████╗");

// CLI title text
content = content.replace("'  GOGETA CLI ' + dim + 'v' + pkg.version + reset + '\\n' +", "'  ' + red + bold + 'GOGETA CLI' + reset + ' ' + dim + 'v' + pkg.version + reset + '\\n' +");

// CLI description text
content = content.replace("'  Ultimate AI-Powered Development Command Center with Enhanced\\n' +", "'  Quantum-Enhanced Development System featuring Voice-to-Code,\\n' +");
content = content.replace("'  Meta-Prompting, Autonomous Agents, and Smart Code Generation.\\n';", "'  Visual Builder, Predictive AI, and Autonomous Multi-Agents.\\n';");

fs.writeFileSync('bin/install.js', content);
console.log("Replaced banner.");
