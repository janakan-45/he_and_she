import { useStore } from '../context/StoreContext';

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, removeFromCart, updateQty } = useStore();

  const total = cart.reduce((sum, item) => sum + item.priceNum * item.qty, 0);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`cart-backdrop${cartOpen ? ' cart-backdrop--open' : ''}`}
        onClick={() => setCartOpen(false)}
      />

      {/* Drawer */}
      <div className={`cart-drawer${cartOpen ? ' cart-drawer--open' : ''}`}>
        <div className="cart-drawer-header">
          <div>
            <div className="cart-drawer-title">Shopping Cart</div>
            <div className="cart-drawer-count">{cart.reduce((s, c) => s + c.qty, 0)} items</div>
          </div>
          <button className="cart-close" onClick={() => setCartOpen(false)}>✕</button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-icon">🛍</div>
              <p>Your cart is empty</p>
              <button className="btn-primary" style={{ cursor: 'pointer', marginTop: '16px' }} onClick={() => setCartOpen(false)}>
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map(item => (
              <div className="cart-item" key={`${item.id}-${item.color}`}>
                <div className="cart-item-img">
                  {item.img
                    ? <img src={item.img} alt={item.name} />
                    : <span style={{ fontSize: '28px' }}>{item.emoji}</span>
                  }
                </div>
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-color">
                    <span className="cart-color-dot" style={{ background: item.color }} />
                    {item.price}
                  </div>
                  <div className="cart-item-controls">
                    <div className="cart-qty">
                      <button onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                    </div>
                    <button className="cart-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total-row">
              <span>Total</span>
              <span className="cart-total-price">LKR {total.toLocaleString()}</span>
            </div>
            <button
              className="btn-primary cart-checkout"
              style={{ width: '100%', textAlign: 'center', cursor: 'pointer', display: 'block' }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Proceed to Order →
            </button>
            <button
              className="btn-ghost"
              style={{ width: '100%', textAlign: 'center', cursor: 'pointer', justifyContent: 'center', marginTop: '8px' }}
              onClick={() => setCartOpen(false)}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}


