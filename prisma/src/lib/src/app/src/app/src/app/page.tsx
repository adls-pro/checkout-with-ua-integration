export default function Home() {
  return (
    <div className="container py-16">
      <div className="card">
        <h1 className="h1 mb-2">Cinq Checkout — Admin</h1>
        <p className="text-sm text-slate-600">Головна сторінка працює ✅</p>
        <div className="mt-6 flex gap-3">
          <a className="btn" href="/admin/dashboard">В адмін-панель</a>
        </div>
      </div>
    </div>
  );
}
