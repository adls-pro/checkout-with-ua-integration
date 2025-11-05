export default function Dashboard() {
  return (
    <div className="container py-10 space-y-6">
      <div className="h1">Панель керування</div>
      <div className="grid md:grid-cols-3 gap-6">
        <a className="card" href="/admin/integrations/payments">
          <div className="h2 mb-2">Методи оплати</div>
          <p className="text-sm">Plata by Mono | оплата карткою</p>
        </a>
        <a className="card" href="/admin/integrations/shipping">
          <div className="h2 mb-2">Методи доставки</div>
          <p className="text-sm">Нова Пошта</p>
        </a>
        <a className="card" href="/admin/orders">
          <div className="h2 mb-2">Замовлення</div>
          <p className="text-sm">Перегляд та статуси</p>
        </a>
      </div>
    </div>
  );
}
