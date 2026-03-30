export function buildApiUrl(path) {
  const configuredBase = process.env.VUE_APP_API_BASE_URL;

  if (configuredBase) {
    return `${configuredBase.replace(/\/$/, '')}${path}`;
  }

  if (typeof window !== 'undefined') {
    const { protocol, hostname, origin } = window.location;

    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return `http://localhost:3000${path}`;
    }

    if (protocol.startsWith('http')) {
      return `${origin}${path}`;
    }
  }

  return path;
}
