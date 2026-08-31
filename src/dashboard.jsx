import React from "react";
import "./dashboard.css";

function Dashboard() {
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

              <button className="view-btn">View All →</button>
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
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>
                      <div className="customer">
                        <div className="customer-avatar one">AM</div>
                        <span>Alex Morgan</span>
                      </div>
                    </td>
                    <td>Premium Headphones</td>
                    <td>Jul 28, 2026</td>
                    <td><span className="status delivered">Delivered</span></td>
                    <td><strong>$129.00</strong></td>
                  </tr>


                  <tr>
                    <td>
                      <div className="customer">
                        <div className="customer-avatar two">SJ</div>
                        <span>Sarah Jones</span>
                      </div>
                    </td>
                    <td>Smart Watch Pro</td>
                    <td>Jul 27, 2026</td>
                    <td><span className="status pending">Pending</span></td>
                    <td><strong>$249.00</strong></td>
                  </tr>


                  <tr>
                    <td>
                      <div className="customer">
                        <div className="customer-avatar three">DW</div>
                        <span>David Wilson</span>
                      </div>
                    </td>
                    <td>Wireless Keyboard</td>
                    <td>Jul 26, 2026</td>
                    <td><span className="status delivered">Delivered</span></td>
                    <td><strong>$89.00</strong></td>
                  </tr>


                  <tr>
                    <td>
                      <div className="customer">
                        <div className="customer-avatar four">EM</div>
                        <span>Emma Miller</span>
                      </div>
                    </td>
                    <td>AirPods Max</td>
                    <td>Jul 25, 2026</td>
                    <td><span className="status cancelled">Cancelled</span></td>
                    <td><strong>$399.00</strong></td>
                  </tr>

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

      </main>

    </div>
  );
}

export default Dashboard;