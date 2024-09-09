const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

// URL Ihrer Website
const sitemapUrl = 'https://www.luenesecurity.com';

// Erstellen Sie einen WriteStream für die Sitemap-Datei
const writeStream = createWriteStream(path.join(__dirname, 'public', 'sitemap.xml'));

// Erstellen Sie die Sitemap
const smStream = new SitemapStream({ hostname: sitemapUrl });

// Definieren Sie die URLs, die in die Sitemap aufgenommen werden sollen
smStream.write({ url: '/', changefreq: 'daily', priority: 1.0 });
smStream.write({ url: '/kontakt', changefreq: 'monthly', priority: 0.7 });
// Weitere URLs hier hinzufügen

smStream.end();

// Schreiben Sie die Sitemap in die Datei
streamToPromise(smStream).then((sitemap) => writeStream.write(sitemap)).catch(console.error);
