export default function handler(req, res) {
  const vcard = `
BEGIN:VCARD
VERSION:3.0
FN:Jason Brooks
TITLE:Fullstack Developer
TEL;TYPE=CELL:8653523318
EMAIL:jasonbrooks1127@gmail.com
URL:https://jason-brooks-portfolio.vercel.app
item1.URL:https://linkedin.com/in/jason-brooks-32222539b
item1.X-ABLabel:LinkedIn
item2.URL:https://github.com/JKBrooksDev
item2.X-ABLabel:GitHub
END:VCARD
  `.trim();

  res.setHeader("Content-Type", "text/vcard; charset=utf-8");
  res.setHeader("Content-Disposition", "inline; filename=JasonBrooks.vcf");
  res.status(200).send(vcard);
}
