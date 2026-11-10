const NAMED: Record<string, string> = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', hellip: '…', ndash: '–',
  mdash: '—', lsquo: '‘', rsquo: '’', sbquo: '‚', ldquo: '“', rdquo: '”',
  bdquo: '„', laquo: '«', raquo: '»', times: '×', divide: '÷', copy: '©',
  reg: '®', trade: '™', yen: '¥', middot: '·', bull: '•', deg: '°',
  prime: '′', Prime: '″', larr: '←', rarr: '→', uarr: '↑', darr: '↓',
}

/** Decode HTML entities produced by WordPress (wptexturize, esc_html) into plain text. */
export function decodeEntities(input: string): string {
  return input.replace(/&(#x[0-9a-f]+|#\d+|[a-z][a-z0-9]*);/gi, (m, code: string) => {
    if (code[0] === '#') {
      const cp = code[1] === 'x' || code[1] === 'X' ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10)
      return Number.isFinite(cp) ? String.fromCodePoint(cp) : m
    }
    return NAMED[code] ?? NAMED[code.toLowerCase()] ?? m
  })
}

/** strip_tags() equivalent for metadata strings. */
export function stripTags(html: string): string {
  return html.replace(/<[^>]*>/g, '')
}
