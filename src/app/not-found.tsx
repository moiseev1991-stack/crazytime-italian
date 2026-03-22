export default function NotFound() {
  return (
    <main style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      textAlign: 'center',
    }}>
      <h1 style={{
        fontSize: '6rem',
        fontWeight: 800,
        color: '#7B2FBE',
        margin: '0 0 16px',
        lineHeight: 1,
      }}>
        404
      </h1>
      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: 700,
        color: '#f8fafc',
        margin: '0 0 12px',
      }}>
        Pagina Non Trovata
      </h2>
      <p style={{
        color: '#94a3b8',
        fontSize: '1rem',
        maxWidth: '400px',
        margin: '0 0 32px',
        lineHeight: 1.6,
      }}>
        La pagina che stai cercando non esiste o è stata spostata.
      </p>
      <a href="/" style={{
        display: 'inline-block',
        background: '#F59E0B',
        color: '#000',
        fontWeight: 700,
        padding: '14px 32px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontSize: '1rem',
      }}>
        Torna alla Home
      </a>
    </main>
  );
}
