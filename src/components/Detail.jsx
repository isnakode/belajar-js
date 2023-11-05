export default function Detail({ title, children }) {
    return (
        <details style={{
            border: '2px solid RGBA(255,255,255,0.20)',
            borderRadius: '8px',
            padding: '8px',
        }}>
            <summary>{title}</summary>
            <div style={{
                paddingTop: '16px'
            }}>{children}</div>
        </details>
    )
}