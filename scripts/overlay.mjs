import sharp from "sharp"
import { fileURLToPath } from "url"
import path from "path"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, "..")
const SRC = path.join(root, "public/park/original.png")
const OUT = path.join(root, "public/park/enhanced.png")

const W = 1280
const H = 960

/* ---------- Design system ---------- */
const C = {
  ink: "#1f3b2c",
  inkSoft: "#2c4a39",
  leaf: "#6fae57",
  sand: "#e8dcc4",
  paper: "#f5f1e6",
  river: "#3f7fb0",
  wood: "#6b4a2b",
  woodDark: "#4f3620",
}

const ICONS = {
  walk: `<path d="M13 4.5a1.6 1.6 0 1 0 0-.01zM11 8l-3 4 1.5 1.5L11 12v3l-2 5h2l2-4 2 4h2l-2.5-6V9l2 2 2-1-3-3-2.5-1z" fill="${C.paper}"/>`,
  bike: `<g fill="none" stroke="${C.paper}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="17" r="3.4"/><circle cx="18" cy="17" r="3.4"/><path d="M6 17l4-7h5l3 7M10 10l-1.5-3h-2M15 10l1.5 3"/></g>`,
  info: `<g fill="none" stroke="${C.paper}" stroke-width="1.9" stroke-linecap="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 11v6"/></g><circle cx="12" cy="7.6" r="1.3" fill="${C.paper}"/>`,
  view: `<g fill="none" stroke="${C.paper}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></g>`,
  picnic: `<g fill="none" stroke="${C.paper}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20l3-9h10l3 9M6 14h12M9 11V6h6v5"/></g>`,
  water: `<path d="M12 3s6 6.5 6 10.5A6 6 0 1 1 6 13.5C6 9.5 12 3 12 3z" fill="none" stroke="${C.paper}" stroke-width="1.8"/>`,
}

/*
  Freestanding park information stand (the "moodboard / плакат").
  Drawn flat & upright, including wooden posts, then skewed into the
  scene with Sharp affine so it reads as a real 3D object on the ground.
*/
function standBoard() {
  const w = 560
  const panelH = 466
  const postsH = 220 // legs going down to the ground
  const h = panelH + postsH
  const pad = 28
  const postW = 26

  const rows = [
    { ic: "walk", t: "Прогулочная тропа", d: "300 м", a: "→" },
    { ic: "view", t: "Смотровая точка", d: "450 м", a: "↗" },
    { ic: "water", t: "Родник", d: "180 м", a: "↘" },
    { ic: "picnic", t: "Зона отдыха", d: "260 м", a: "←" },
  ]
  const rowH = 62
  const startY = 184
  const items = rows
    .map((r, i) => {
      const y = startY + i * rowH
      return `
      <g transform="translate(${pad + 4}, ${y})">
        <rect x="0" y="-30" width="48" height="48" rx="10" fill="${C.inkSoft}"/>
        <svg x="9" y="-21" width="30" height="30" viewBox="0 0 24 24">${ICONS[r.ic]}</svg>
        <text x="66" y="-6" font-family="Verdana, sans-serif" font-size="20" font-weight="700" fill="${C.paper}">${r.t}</text>
        <text x="66" y="16" font-family="Verdana, sans-serif" font-size="14" fill="${C.leaf}">${r.d}</text>
        <text x="${w - pad - 6}" y="6" text-anchor="end" font-family="Verdana, sans-serif" font-size="34" font-weight="800" fill="${C.leaf}">${r.a}</text>
        ${i < rows.length - 1 ? `<line x1="0" y1="${rowH - 14}" x2="${w - pad * 2}" y2="${rowH - 14}" stroke="rgba(245,241,230,0.16)" stroke-width="1"/>` : ""}
      </g>`
    })
    .join("")

  return {
    width: w,
    height: h,
    buffer: Buffer.from(`<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="face" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="${C.ink}"/>
        <stop offset="1" stop-color="#162a1f"/>
      </linearGradient>
      <linearGradient id="postG" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="${C.wood}"/>
        <stop offset="0.5" stop-color="${C.woodDark}"/>
        <stop offset="1" stop-color="#3a2817"/>
      </linearGradient>
    </defs>

    <!-- wooden posts -->
    <rect x="${pad + 30}" y="${panelH - 30}" width="${postW}" height="${postsH + 20}" rx="4" fill="url(#postG)"/>
    <rect x="${w - pad - 30 - postW}" y="${panelH - 30}" width="${postW}" height="${postsH + 20}" rx="4" fill="url(#postG)"/>

    <!-- board face -->
    <rect x="0" y="0" width="${w}" height="${panelH}" rx="18" fill="url(#face)"/>
    <rect x="0" y="0" width="${w}" height="${panelH}" rx="18" fill="none" stroke="rgba(0,0,0,0.35)" stroke-width="6"/>
    <rect x="0" y="0" width="12" height="${panelH}" rx="6" fill="${C.leaf}"/>

    <!-- header -->
    <text x="${pad}" y="64" font-family="Verdana, sans-serif" font-size="40" font-weight="800" fill="${C.paper}" letter-spacing="1">ЛЕСНОЙ ПАРК</text>
    <text x="${pad}" y="100" font-family="Verdana, sans-serif" font-size="18" fill="${C.leaf}" letter-spacing="3">КАРТА · НАВИГАЦИЯ · ПРАВИЛА</text>
    <line x1="${pad}" y1="124" x2="${w - pad}" y2="124" stroke="rgba(245,241,230,0.22)" stroke-width="2"/>
    <text x="${pad}" y="156" font-family="Verdana, sans-serif" font-size="15" fill="rgba(245,241,230,0.75)">Вы находитесь у пешеходного моста через р. Тихая</text>

    ${items}

    <!-- footer pictogram rules -->
    <g transform="translate(${pad}, ${panelH - 36})">
      <svg x="0" y="-20" width="26" height="26" viewBox="0 0 24 24">${ICONS.bike}</svg>
      <svg x="40" y="-20" width="26" height="26" viewBox="0 0 24 24">${ICONS.info}</svg>
      <svg x="80" y="-20" width="26" height="26" viewBox="0 0 24 24">${ICONS.picnic}</svg>
      <text x="${w - pad * 2}" y="0" text-anchor="end" font-family="Verdana, sans-serif" font-size="13" fill="rgba(245,241,230,0.6)">СЕКТОР B · 09:00–21:00</text>
    </g>
  </svg>`),
  }
}

/* Soft elliptical ground shadow */
function groundShadow(w, h) {
  return Buffer.from(`<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <defs><filter id="b"><feGaussianBlur stdDeviation="14"/></filter></defs>
    <ellipse cx="${w / 2}" cy="${h / 2}" rx="${w / 2 - 16}" ry="${h / 2 - 8}" fill="rgba(0,0,0,0.42)" filter="url(#b)"/>
  </svg>`)
}

/* Ground directional arrow (painted on the path) */
function groundArrow() {
  const w = 300
  const h = 150
  return Buffer.from(`<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.7">
      <polygon points="20,120 120,30 168,30 78,120" fill="${C.leaf}"/>
      <polygon points="120,30 250,30 250,12 290,52 250,92 250,74 178,74" fill="${C.paper}"/>
    </g>
  </svg>`)
}

/* "Вы здесь" locator pin */
function pin() {
  const w = 150
  const h = 70
  return Buffer.from(`<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <defs><filter id="s4" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#000" flood-opacity="0.35"/></filter></defs>
    <g filter="url(#s4)">
      <rect x="0" y="0" width="${w}" height="44" rx="22" fill="${C.leaf}"/>
      <polygon points="${w / 2 - 10},42 ${w / 2 + 10},42 ${w / 2},66" fill="${C.leaf}"/>
    </g>
    <circle cx="26" cy="22" r="7" fill="none" stroke="${C.paper}" stroke-width="3"/>
    <circle cx="26" cy="22" r="2.4" fill="${C.paper}"/>
    <text x="42" y="28" font-family="Verdana, sans-serif" font-size="16" font-weight="800" fill="${C.paper}">Вы здесь</text>
  </svg>`)
}

/* Bridge zone marker */
function bridgeMarker() {
  const w = 296
  const h = 60
  return Buffer.from(`<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
    <defs><filter id="s2" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#000" flood-opacity="0.3"/></filter></defs>
    <g filter="url(#s2)">
      <rect x="0" y="0" width="${w}" height="${h}" rx="10" fill="${C.paper}"/>
      <rect x="0" y="0" width="54" height="${h}" rx="10" fill="${C.river}"/>
      <rect x="44" y="0" width="10" height="${h}" fill="${C.river}"/>
    </g>
    <svg x="12" y="15" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="${C.paper}" stroke-width="1.8" stroke-linecap="round"><path d="M2 14h20M5 14v-3M19 14v-3M2 17c3 0 3-3 5-3s2 3 5 3 3-3 5-3 2 3 3 3"/></g></svg>
    <text x="66" y="26" font-family="Verdana, sans-serif" font-size="15" font-weight="700" fill="${C.ink}">Пешеходный мост</text>
    <text x="66" y="46" font-family="Verdana, sans-serif" font-size="12" fill="${C.inkSoft}">р. Тихая · переход к роднику</text>
  </svg>`)
}

async function run() {
  const stand = standBoard()

  // Render the flat stand to a raster buffer.
  const flat = await sharp(stand.buffer).png().toBuffer()

  /*
    Skew the stand into the scene to fake 3D perspective.
    The board is turned slightly to face the path: its right side
    recedes, so we apply a small vertical shear + scale via affine.
    matrix [[a,b],[c,d]] maps input (X,Y) -> (a*X+b*Y, c*X+d*Y)
      - c < 0 lifts the right edge so the board appears angled
      - slight a<1 narrows it toward the back
  */
  const tilted = await sharp(flat)
    .affine([[1, 0], [-0.05, 1]], {
      background: { r: 0, g: 0, b: 0, alpha: 0 },
      interpolator: sharp.interpolators.bilinear,
    })
    .png()
    .toBuffer()

  // Scale the whole board down so it sits believably in the mid-ground
  // (further away) instead of looming in the foreground.
  const scale = 0.5
  const sized = await sharp(tilted)
    .resize({ width: Math.round(stand.width * scale) })
    .png()
    .toBuffer()
  const tmeta = await sharp(sized).metadata()

  // Placement: mid-ground, on the lit clearing to the left of the bridge.
  const standLeft = 96
  const standTop = 150

  // Cast shadow on the ground, offset toward the camera (sun from upper-left).
  const shW = Math.round(tmeta.width * 0.95)
  const shH = 60
  const shadow = await sharp(groundShadow(shW, shH)).png().toBuffer()

  const base = sharp(SRC).resize(W, H, { fit: "cover" })

  await base
    .composite([
      // path graphics first (under the stand)
      { input: groundArrow(), left: 300, top: 780 },
      // contact shadow beneath the stand legs
      { input: shadow, left: standLeft - 4, top: standTop + tmeta.height - 44, blend: "multiply" },
      // the standing info board (3D-skewed, scaled into the mid-ground)
      { input: sized, left: standLeft, top: standTop },
      // supporting markers
      { input: pin(), left: 470, top: 620 },
      { input: bridgeMarker(), left: 360, top: 372 },
    ])
    .png()
    .toFile(OUT)

  const meta = await sharp(OUT).metadata()
  console.log(`[v0] enhanced.png written: ${meta.width}x${meta.height}, stand ${tmeta.width}x${tmeta.height}`)
}

run().catch((e) => {
  console.error("[v0] overlay failed:", e)
  process.exit(1)
})
