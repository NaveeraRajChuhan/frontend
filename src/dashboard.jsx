import React, { useEffect, useState } from "react";
import "./dashboard.css";

    function Dashboard() {

  // ================= ORDERS CRUD =================

  const defaultOrders = [
    {
      id: 1,
      customer: "Alex Morgan",
      initials: "AM",
      avatar: "one",
      product: "Premium Headphones",
      date: "2026-07-28",
      status: "Delivered",
      amount: "129.00"
    },
    {
      id: 2,
      customer: "Sarah Jones",
      initials: "SJ",
      avatar: "two",
      product: "Smart Watch Pro",
      date: "2026-07-27",
      status: "Pending",
      amount: "249.00"
    },
    {
      id: 3,
      customer: "David Wilson",
      initials: "DW",
      avatar: "three",
      product: "Wireless Keyboard",
      date: "2026-07-26",
      status: "Delivered",
      amount: "89.00"
    },
    {
      id: 4,
      customer: "Emma Miller",
      initials: "EM",
      avatar: "four",
      product: "AirPods Max",
      date: "2026-07-25",
      status: "Cancelled",
      amount: "399.00"
    }
  ];

  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("dashboardOrders");

    return savedOrders
      ? JSON.parse(savedOrders)
      : defaultOrders;
  });

  const [showOrderForm, setShowOrderForm] = useState(false);

  const [editingOrder, setEditingOrder] = useState(null);

  const [formData, setFormData] = useState({
    customer: "",
    product: "",
    date: "",
    status: "Pending",
    amount: ""
  });


  // Save orders in localStorage
  useEffect(() => {
    localStorage.setItem(
      "dashboardOrders",
      JSON.stringify(orders)
    );
  }, [orders]);


  // Format date
  const formatDate = (date) => {
    if (!date) return "";

    return new Date(date + "T00:00:00").toLocaleDateString(
      "en-US",
      {
        month: "short",
        day: "numeric",
        year: "numeric"
      }
    );
  };


  // Handle input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  // Open Add Order form
  const handleAddOrder = () => {

    setEditingOrder(null);

    setFormData({
      customer: "",
      product: "",
      date: new Date().toISOString().split("T")[0],
      status: "Pending",
      amount: ""
    });

    setShowOrderForm(true);
  };


  // Open Edit Order form
  const handleEditOrder = (order) => {

    setEditingOrder(order);

    setFormData({
      customer: order.customer,
      product: order.product,
      date: order.date,
      status: order.status,
      amount: order.amount
    });

    setShowOrderForm(true);
  };


  // Create / Update
  const handleSubmitOrder = (e) => {

    e.preventDefault();

    if (
      !formData.customer ||
      !formData.product ||
      !formData.date ||
      !formData.amount
    ) {
      alert("Please fill all fields.");
      return;
    }


    if (editingOrder) {

      // UPDATE
      setOrders(
        orders.map((order) =>
          order.id === editingOrder.id
            ? {
                ...order,
                customer: formData.customer,
                initials: formData.customer
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase(),
                product: formData.product,
                date: formData.date,
                status: formData.status,
                amount: formData.amount
              }
            : order
        )
      );

    } else {

      // CREATE
      const newOrder = {
        id: Date.now(),

        customer: formData.customer,

        initials: formData.customer
          .split(" ")
          .map((word) => word[0])
          .join("")
          .slice(0, 2)
          .toUpperCase(),

        avatar: ["one", "two", "three", "four"][
          orders.length % 4
        ],

        product: formData.product,

        date: formData.date,

        status: formData.status,

        amount: formData.amount
      };

      setOrders([...orders, newOrder]);
    }

    setShowOrderForm(false);
  };


  // DELETE
  const handleDeleteOrder = (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this order?"
    );

    if (confirmDelete) {

      setOrders(
        orders.filter((order) => order.id !== id)
      );

    }
  };
  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="logo">
          <div className="logo-icon">D</div>
          <span>DashFlow</span>
        </div>

        <div className="menu-title">MAIN MENU</div>

        <nav>
          <a className="active">
            <span>⌂</span>
            Dashboard
          </a>

          <a>
            <span>📊</span>
            Analytics
          </a>

          <a>
            <span>🛒</span>
            Orders
          </a>

          <a>
            <span>👥</span>
            Customers
          </a>

          <a>
            <span>📦</span>
            Products
          </a>
        </nav>

        <div className="menu-title">OTHER</div>

        <nav>
          <a>
            <span>⚙</span>
            Settings
          </a>

          <a>
            <span>❓</span>
            Help Center
          </a>
        </nav>

        <div className="upgrade-card">
          <div className="upgrade-icon">⚡</div>
          <h3>Upgrade Plan</h3>
          <p>Get more features and unlock advanced analytics.</p>
          <button>Upgrade Now</button>
        </div>

        <div className="profile">
          <div className="avatar">N</div>
          <div>
            <strong>Naveera</strong>
            <small>Administrator</small>
          </div>
          <span className="dots">⋮</span>
        </div>

      </aside>


      {/* MAIN CONTENT */}
      <main className="main">

        {/* TOP BAR */}
        <header className="topbar">

          <div>
            <h1>Good morning, Naveera 👋</h1>
            <p>Here's what's happening with your business today.</p>
          </div>

          <div className="top-actions">
            <button className="icon-btn">🔍</button>
            <button className="icon-btn notification">
              🔔
              <span></span>
            </button>

            <div className="top-profile">
              <div className="avatar small">N</div>
              <span>Naveera</span>
              <b>⌄</b>
            </div>
          </div>

        </header>


        {/* STAT CARDS */}
        <section className="stats">

          <div className="stat-card">
            <div className="stat-top">
              <span>Total Revenue</span>
              <div className="stat-icon purple">💰</div>
            </div>

            <h2>$48,290</h2>

            <div className="growth positive">
              ↑ 12.8%
              <span>vs last month</span>
            </div>
          </div>


          <div className="stat-card">
            <div className="stat-top">
              <span>Total Orders</span>
              <div className="stat-icon blue">🛍️</div>
            </div>

            <h2>2,845</h2>

            <div className="growth positive">
              ↑ 8.4%
              <span>vs last month</span>
            </div>
          </div>


          <div className="stat-card">
            <div className="stat-top">
              <span>Customers</span>
              <div className="stat-icon pink">👥</div>
            </div>

            <h2>18,492</h2>

            <div className="growth positive">
              ↑ 5.2%
              <span>vs last month</span>
            </div>
          </div>


          <div className="stat-card">
            <div className="stat-top">
              <span>Conversion Rate</span>
              <div className="stat-icon green">📈</div>
            </div>

            <h2>6.84%</h2>

            <div className="growth negative">
              ↓ 1.2%
              <span>vs last month</span>
            </div>
          </div>

        </section>


        {/* CHART + QUICK STATS */}
        <section className="middle-grid">

          {/* SALES CHART */}
          <div className="card chart-card">

            <div className="card-header">
              <div>
                <h3>Revenue Overview</h3>
                <p>Monthly revenue performance</p>
              </div>

              <select>
                <option>Last 7 months</option>
                <option>Last 30 days</option>
                <option>This year</option>
              </select>
            </div>

            <div className="chart">

              <div className="y-axis">
                <span>$50k</span>
                <span>$40k</span>
                <span>$30k</span>
                <span>$20k</span>
                <span>$10k</span>
                <span>$0</span>
              </div>

              <div className="chart-area">

                <div className="grid-line"></div>
                <div className="grid-line"></div>
                <div className="grid-line"></div>
                <div className="grid-line"></div>
                <div className="grid-line"></div>

                <div className="bars">

                  <div className="bar-wrapper">
                    <div className="bar" style={{height:"45%"}}></div>
                    <small>Jan</small>
                  </div>

                  <div className="bar-wrapper">
                    <div className="bar" style={{height:"58%"}}></div>
                    <small>Feb</small>
                  </div>

                  <div className="bar-wrapper">
                    <div className="bar" style={{height:"52%"}}></div>
                    <small>Mar</small>
                  </div>

                  <div className="bar-wrapper">
                    <div className="bar" style={{height:"72%"}}></div>
                    <small>Apr</small>
                  </div>

                  <div className="bar-wrapper">
                    <div className="bar" style={{height:"64%"}}></div>
                    <small>May</small>
                  </div>

                  <div className="bar-wrapper">
                    <div className="bar" style={{height:"82%"}}></div>
                    <small>Jun</small>
                  </div>

                  <div className="bar-wrapper">
                    <div className="bar current" style={{height:"94%"}}></div>
                    <small>Jul</small>
                  </div>

                </div>

              </div>

            </div>
          </div>


          {/* CUSTOMER DEVICE */}
          <div className="card traffic-card">

            <div className="card-header">
              <div>
                <h3>Traffic Sources</h3>
                <p>Where your visitors come from</p>
              </div>

              <button className="more">•••</button>
            </div>

            <div className="donut-container">

              <div className="donut">
                <div className="donut-inner">
                  <strong>68%</strong>
                  <span>Organic</span>
                </div>
              </div>

            </div>

            <div className="traffic-list">

              <div>
                <span className="dot purple-dot"></span>
                <span>Organic Search</span>
                <strong>68%</strong>
              </div>

              <div>
                <span className="dot blue-dot"></span>
                <span>Social Media</span>
                <strong>18%</strong>
              </div>

              <div>
                <span className="dot pink-dot"></span>
                <span>Direct</span>
                <strong>9%</strong>
              </div>

              <div>
                <span className="dot gray-dot"></span>
                <span>Others</span>
                <strong>5%</strong>
              </div>

            </div>

          </div>

        </section>


        {/* BOTTOM SECTION */}
        <section className="bottom-grid">

          {/* ORDERS */}
          <div className="card orders-card">

            <div className="card-header">
              <div>
                <h3>Recent Orders</h3>
                <p>Latest transactions from your store</p>
              </div>

              <div className="order-header-buttons">

  <button
    className="add-order-btn"
    onClick={handleAddOrder}
  >
    + Add Order
  </button>

  <button className="view-btn">
    View All →
  </button>

</div>
            </div>

            <div className="table-wrapper">

              <table>

                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Product</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Amount</th>
                    <th>Actions</th>
                  </tr>
                </thead>

             <tbody>

  {orders.map((order) => (

    <tr key={order.id}>

      <td>

        <div className="customer">

          <div
            className={`customer-avatar ${order.avatar}`}
          >
            {order.initials}
          </div>

          <span>{order.customer}</span>

        </div>

      </td>


      <td>
        {order.product}
      </td>


      <td>
        {formatDate(order.date)}
      </td>


      <td>

        <span
          className={`status ${order.status.toLowerCase()}`}
        >
          {order.status}
        </span>

      </td>


      <td>
        <strong>
          ${parseFloat(order.amount).toFixed(2)}
        </strong>
      </td>


      <td>

        <div className="order-actions">

          <button
            className="edit-order"
            onClick={() => handleEditOrder(order)}
            title="Edit Order"
          >
            ✏️
          </button>


          <button
            className="delete-order"
            onClick={() => handleDeleteOrder(order.id)}
            title="Delete Order"
          >
            🗑️
          </button>

        </div>

      </td>

    </tr>

  ))}

</tbody>

              </table>

            </div>

          </div>


          {/* ACTIVITY */}
          <div className="card activity-card">

            <div className="card-header">
              <div>
                <h3>Recent Activity</h3>
                <p>Latest updates</p>
              </div>
            </div>

            <div className="activity">

              <div className="activity-item">
                <div className="activity-icon purple-bg">🛒</div>
                <div>
                  <strong>New order received</strong>
                  <p>Order #ORD-2845 was placed</p>
                  <small>2 minutes ago</small>
                </div>
              </div>


              <div className="activity-item">
                <div className="activity-icon blue-bg">👤</div>
                <div>
                  <strong>New customer registered</strong>
                  <p>Emily joined your store</p>
                  <small>18 minutes ago</small>
                </div>
              </div>


              <div className="activity-item">
                <div className="activity-icon green-bg">💵</div>
                <div>
                  <strong>Payment received</strong>
                  <p>$249 payment completed</p>
                  <small>1 hour ago</small>
                </div>
              </div>


              <div className="activity-item">
                <div className="activity-icon orange-bg">📦</div>
                <div>
                  <strong>Product updated</strong>
                  <p>Smart Watch stock updated</p>
                  <small>3 hours ago</small>
                </div>
              </div>

            </div>

          </div>

        </section>

        {/* ================= ORDER MODAL ================= */}

        {showOrderForm && (

          <div
            className="order-modal-overlay"
            onClick={() => setShowOrderForm(false)}
          >

            <div
              className="order-modal"
              onClick={(e) => e.stopPropagation()}
            >

              <div className="order-modal-header">

                <div>

                  <h2>
                    {editingOrder
                      ? "Edit Order"
                      : "Add New Order"}
                  </h2>

                  <p>
                    {editingOrder
                      ? "Update order information"
                      : "Create a new order"}
                  </p>

                </div>

                <button
                  className="close-modal"
                  onClick={() => setShowOrderForm(false)}
                >
                  ×
                </button>

              </div>


              <form onSubmit={handleSubmitOrder}>

                {/* CUSTOMER */}

                <div className="form-group">

                  <label>
                    Customer Name
                  </label>

                  <input
                    type="text"
                    name="customer"
                    placeholder="e.g. John Smith"
                    value={formData.customer}
                    onChange={handleInputChange}
                  />

                </div>


                {/* PRODUCT */}

                <div className="form-group">

                  <label>
                    Product
                  </label>

                  <input
                    type="text"
                    name="product"
                    placeholder="e.g. Wireless Mouse"
                    value={formData.product}
                    onChange={handleInputChange}
                  />

                </div>


                {/* DATE */}

                <div className="form-group">

                  <label>
                    Date
                  </label>

                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                  />

                </div>


                {/* STATUS */}

                <div className="form-group">

                  <label>
                    Status
                  </label>

                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                  >

                    <option value="Pending">
                      Pending
                    </option>

                    <option value="Delivered">
                      Delivered
                    </option>

                    <option value="Cancelled">
                      Cancelled
                    </option>

                  </select>

                </div>


                {/* AMOUNT */}

                <div className="form-group">

                  <label>
                    Amount ($)
                  </label>

                  <input
                    type="number"
                    name="amount"
                    placeholder="129.00"
                    step="0.01"
                    value={formData.amount}
                    onChange={handleInputChange}
                  />

                </div>


                {/* BUTTONS */}

                <div className="modal-buttons">

                  <button
                    type="button"
                    className="cancel-modal"
                    onClick={() =>
                      setShowOrderForm(false)
                    }
                  >
                    Cancel
                  </button>


                  <button
                    type="submit"
                    className="save-order"
                  >
                    {editingOrder
                      ? "Update Order"
                      : "Add Order"}
                  </button>

                </div>

              </form>

            </div>

          </div>

        )}




      </main>

    </div>
  );
}

export default Dashboard;