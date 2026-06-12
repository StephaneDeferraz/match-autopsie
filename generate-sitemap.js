const fs = require('fs');

// Liste complète de toutes vos pages
const pages = [
  { url: 'https://match-autopsie.fr/index.html', changefreq: 'weekly', priority: 1.0 },
  { url: 'https://match-autopsie.fr/auteur.html', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://match-autopsie.fr/extraits.html', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://match-autopsie.fr/foot-business.html', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://match-autopsie.fr/football-litterature.html', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://match-autopsie.fr/football-politique-ukraine.html', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://match-autopsie.fr/geopolitique-football.html', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://match-autopsie.fr/personnages.html', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://match-autopsie.fr/roman.html', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://match-autopsie.fr/scandales-football-mondial.html', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://match-autopsie.fr/univers.html', changefreq: 'monthly', priority: 0.8 }
];

// Générer le XML
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

pages.forEach(page => {
  xml += `  <url>\n`;
  xml += `    <loc>${page.url}</loc>\n`;
  xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
  xml += `    <priority>${page.priority}</priority>\n`;
  xml += `  </url>\n`;
});

xml += '</urlset>';

// Écrire dans le fichier
fs.writeFileSync('sitemap.xml', xml);

console.log('✅ Sitemap généré avec succès !');