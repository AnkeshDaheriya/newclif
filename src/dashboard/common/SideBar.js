import React from "react";
const SideBar = () => {
  return (
    <aside className="left-sidebar with-vertical">
      <div>
        {/* ---------------------------------- */}
        {/* Start Vertical Layout Sidebar */}
        {/* ---------------------------------- */}
        <div className="brand-logo d-flex align-items-center justify-content-between">
          <a href="./main/index.html" className="text-nowrap logo-img">
            <img
              src="./assets/images/logos/dark-logo.svg"
              className="dark-logo"
              alt="Logo-Dark"
            />
          </a>
          <a
            href="#"
            className="sidebartoggler ms-auto text-decoration-none fs-5 d-block d-xl-none">
            <i className="ti ti-x" />
          </a>
        </div>
        <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
          <ul id="sidebarnav">
            {/* ---------------------------------- */}
            {/* Home */}
            {/* ---------------------------------- */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Home</span>
            </li>
            {/* ---------------------------------- */}
            {/* Dashboard */}
            {/* ---------------------------------- */}
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href=""
                id="get-url"
                aria-expanded="false">
                <span>
                  <i className="ti ti-aperture" />
                </span>
                <span className="hide-menu">Modern</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./main/index2.html"
                aria-expanded="false">
                <span>
                  <i className="ti ti-shopping-cart" />
                </span>
                <span className="hide-menu">eCommerce</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./main/index3.html"
                aria-expanded="false">
                <span>
                  <i className="ti ti-currency-dollar" />
                </span>
                <span className="hide-menu">NFT</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./main/index4.html"
                aria-expanded="false">
                <span>
                  <i className="ti ti-cpu" />
                </span>
                <span className="hide-menu">Crypto</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./main/index5.html"
                aria-expanded="false">
                <span>
                  <i className="ti ti-activity-heartbeat" />
                </span>
                <span className="hide-menu">General</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./main/index6.html"
                aria-expanded="false">
                <span>
                  <i className="ti ti-playlist" />
                </span>
                <span className="hide-menu">Music</span>
              </a>
            </li>
            {/* ---------------------------------- */}
            {/* Frontend page */}
            {/* ---------------------------------- */}
            <li className="sidebar-item">
              <a
                className="sidebar-link has-arrow"
                href="#"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-layout-grid" />
                </span>
                <span className="hide-menu">Frontend page</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a
                    href="./main/frontend-landingpage.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Homepage</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/frontend-aboutpage.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">About Us</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/frontend-contactpage.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Contact Us</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/frontend-blogpage.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Blog</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/frontend-blogdetailpage.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Blog Details</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ---------------------------------- */}
            {/* Apps */}
            {/* ---------------------------------- */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Apps</span>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./main/app-calendar.html"
                aria-expanded="false">
                <span>
                  <i className="ti ti-calendar" />
                </span>
                <span className="hide-menu">Calendar</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./main/app-kanban.html"
                aria-expanded="false">
                <span>
                  <i className="ti ti-layout-kanban" />
                </span>
                <span className="hide-menu">Kanban</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./main/app-chat.html"
                aria-expanded="false">
                <span>
                  <i className="ti ti-message-dots" />
                </span>
                <span className="hide-menu">Chat</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./main/app-email.html"
                aria-expanded="false">
                <span>
                  <i className="ti ti-mail" />
                </span>
                <span className="hide-menu">Email</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./main/app-notes.html"
                aria-expanded="false">
                <span>
                  <i className="ti ti-notes" />
                </span>
                <span className="hide-menu">Notes</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./main/app-contact.html"
                aria-expanded="false">
                <span>
                  <i className="ti ti-phone" />
                </span>
                <span className="hide-menu">Contact Table</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./main/app-contact2.html"
                aria-expanded="false">
                <span>
                  <i className="ti ti-list-details" />
                </span>
                <span className="hide-menu">Contact List</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./main/app-invoice.html"
                aria-expanded="false">
                <span>
                  <i className="ti ti-file-text" />
                </span>
                <span className="hide-menu">Invoice</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./main/page-user-profile.html"
                aria-expanded="false">
                <span>
                  <i className="ti ti-user-circle" />
                </span>
                <span className="hide-menu">User Profile</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link has-arrow"
                href="#"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-chart-donut-3" />
                </span>
                <span className="hide-menu">Blog</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="./main/blog-posts.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Posts</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/blog-detail.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Details</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link has-arrow"
                href="#"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-basket" />
                </span>
                <span className="hide-menu">Ecommerce</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="./main/eco-shop.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Shop</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/eco-shop-detail.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Details</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/eco-product-list.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">List</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/eco-checkout.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Checkout</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/eco-add-product.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Add Product</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/eco-edit-product.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Edit Product</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ---------------------------------- */}
            {/* PAGES */}
            {/* ---------------------------------- */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">PAGES</span>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./main/page-pricing.html"
                aria-expanded="false">
                <span>
                  <i className="ti ti-currency-dollar" />
                </span>
                <span className="hide-menu">Pricing</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./main/page-faq.html"
                aria-expanded="false">
                <span>
                  <i className="ti ti-help" />
                </span>
                <span className="hide-menu">FAQ</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./main/page-account-settings.html"
                aria-expanded="false">
                <span>
                  <i className="ti ti-user-circle" />
                </span>
                <span className="hide-menu">Account Setting</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./landingpage/index.html"
                aria-expanded="false">
                <span>
                  <i className="ti ti-app-window" />
                </span>
                <span className="hide-menu">Landing Page</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link has-arrow"
                href="#"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-layout" />
                </span>
                <span className="hide-menu">Widgets</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="./main/widgets-cards.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Cards</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/widgets-banners.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Banner</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/widgets-charts.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Charts</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/widgets-feeds.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Feed Widgets</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/widgets-apps.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Apps Widgets</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/widgets-data.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Data Widgets</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ---------------------------------- */}
            {/* UI */}
            {/* ---------------------------------- */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">UI</span>
            </li>
            {/* ---------------------------------- */}
            {/* UI Elements */}
            {/* ---------------------------------- */}
            <li className="sidebar-item">
              <a
                className="sidebar-link has-arrow"
                href="#"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-layout-grid" />
                </span>
                <span className="hide-menu">UI Elements</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="./main/ui-accordian.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Accordian</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-badge.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Badge</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-buttons.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Buttons</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-dropdowns.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Dropdowns</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-modals.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Modals</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-tab.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Tab</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/ui-tooltip-popover.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Tooltip &amp; Popover</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/ui-notification.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Alerts</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-progressbar.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Progressbar</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-pagination.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Pagination</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-typography.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Typography</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/ui-bootstrap-ui.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Bootstrap UI</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-breadcrumb.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Breadcrumb</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-offcanvas.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Offcanvas</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-lists.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Lists</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-grid.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Grid</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-carousel.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Carousel</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-scrollspy.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Scrollspy</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-spinner.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Spinner</span>
                  </a>
                </li>
                <li className="sidebar-item mb-3">
                  <a href="./main/ui-link.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Link</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ---------------------------------- */}
            {/* Cards */}
            {/* ---------------------------------- */}
            <li className="sidebar-item">
              <a
                className="sidebar-link has-arrow"
                href="#"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-cards" />
                </span>
                <span className="hide-menu">Cards</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="./main/ui-cards.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Basic Cards</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/ui-card-customs.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Custom Cards</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/ui-card-weather.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Weather Cards</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/ui-card-draggable.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Draggable Cards</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ---------------------------------- */}
            {/* Component */}
            {/* ---------------------------------- */}
            <li className="sidebar-item">
              <a
                className="sidebar-link has-arrow"
                href="#"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-components" />
                </span>
                <span className="hide-menu">Component</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a
                    href="./main/component-sweetalert.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Sweet Alert</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/component-nestable.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Nestable</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/component-noui-slider.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Noui slider</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/component-rating.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Rating</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/component-toastr.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Toastr</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ---------------------------------- */}
            {/* Forms */}
            {/* ---------------------------------- */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Forms</span>
            </li>
            {/* ---------------------------------- */}
            {/* Form Elements */}
            {/* ---------------------------------- */}
            <li className="sidebar-item">
              <a
                className="sidebar-link has-arrow"
                href="#"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-file-text" />
                </span>
                <span className="hide-menu">Form Elements</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="./main/form-inputs.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Forms Input</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/form-input-groups.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Input Groups</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/form-input-grid.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Input Grid</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/form-checkbox-radio.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Checkbox &amp; Radios</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/form-bootstrap-switch.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Bootstrap Switch</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/form-select2.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Select2</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ---------------------------------- */}
            {/* Form Addons */}
            {/* ---------------------------------- */}
            <li className="sidebar-item">
              <a
                className="sidebar-link has-arrow"
                href="#"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-qrcode" />
                </span>
                <span className="hide-menu">Form Addons</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="./main/form-dropzone.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Dropzone</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/form-mask.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Form Mask</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/form-typeahead.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Form Typehead</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ---------------------------------- */}
            {/* Form Validation */}
            {/* ---------------------------------- */}
            <li className="sidebar-item">
              <a
                className="sidebar-link has-arrow"
                href="#"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-alert-circle" />
                </span>
                <span className="hide-menu">Form Validation</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a
                    href="./main/form-bootstrap-validation.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Bootstrap Validation</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/form-custom-validation.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Custom Validation</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ---------------------------------- */}
            {/* Form Pickers */}
            {/* ---------------------------------- */}
            <li className="sidebar-item">
              <a
                className="sidebar-link has-arrow"
                href="#"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-file-pencil" />
                </span>
                <span className="hide-menu">Form Pickers</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a
                    href="./main/form-picker-colorpicker.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Colorpicker</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/form-picker-bootstrap-rangepicker.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Bootstrap Rangepicker</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/form-picker-bootstrap-datepicker.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Bootstrap Datepicker</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/form-picker-material-datepicker.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Material Datepicker</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ---------------------------------- */}
            {/* Form Editor */}
            {/* ---------------------------------- */}
            <li className="sidebar-item">
              <a
                className="sidebar-link has-arrow"
                href="#"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-dna" />
                </span>
                <span className="hide-menu">Form Editor</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a
                    href="./main/form-editor-quill.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Quill Editor</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/form-editor-tinymce.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Tinymce Editor</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ---------------------------------- */}
            {/* Form Input */}
            {/* ---------------------------------- */}
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./main/form-basic.html"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-archive" />
                </span>
                <span className="hide-menu">Basic Form</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./main/form-vertical.html"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-box-align-left" />
                </span>
                <span className="hide-menu">Form Vertical</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./main/form-horizontal.html"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-box-align-bottom" />
                </span>
                <span className="hide-menu">Form Horizontal</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./main/form-actions.html"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-file-export" />
                </span>
                <span className="hide-menu">Form Actions</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./main/form-row-separator.html"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-separator-horizontal" />
                </span>
                <span className="hide-menu">Row Separator</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./main/form-bordered.html"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-border-outer" />
                </span>
                <span className="hide-menu">Form Bordered</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./main/form-detail.html"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-file-description" />
                </span>
                <span className="hide-menu">Form Detail</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./main/form-striped-row.html"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-file-analytics" />
                </span>
                <span className="hide-menu">Striped Rows</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./main/form-floating-input.html"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-file-dots" />
                </span>
                <span className="hide-menu">Form Floating Input</span>
              </a>
            </li>
            {/* ---------------------------------- */}
            {/* Form Wizard */}
            {/* ---------------------------------- */}
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./main/form-wizard.html"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-files" />
                </span>
                <span className="hide-menu">Form Wizard</span>
              </a>
            </li>
            {/* ---------------------------------- */}
            {/* Form Repeater */}
            {/* ---------------------------------- */}
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./main/form-repeater.html"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-topology-star-3" />
                </span>
                <span className="hide-menu">Form Repeater</span>
              </a>
            </li>
            {/* ---------------------------------- */}
            {/* Tables */}
            {/* ---------------------------------- */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Tables</span>
            </li>
            {/* ---------------------------------- */}
            {/* Bootstrap Table */}
            {/* ---------------------------------- */}
            <li className="sidebar-item">
              <a
                className="sidebar-link has-arrow"
                href="#"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-layout-sidebar" />
                </span>
                <span className="hide-menu">Bootstrap Table</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="./main/table-basic.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Basic Table</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/table-dark-basic.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Dark Basic Table</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/table-sizing.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Sizing Table</span>
                  </a>
                </li>
                <li className="sidebar-item mb-3">
                  <a
                    href="./main/table-layout-coloured.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Coloured Table</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ---------------------------------- */}
            {/* Datatable */}
            {/* ---------------------------------- */}
            <li className="sidebar-item">
              <a
                className="sidebar-link has-arrow"
                href="#"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-air-conditioning-disabled" />
                </span>
                <span className="hide-menu">Datatables</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a
                    href="./main/table-datatable-basic.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Basic Initialisation</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/table-datatable-api.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">API</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/table-datatable-advanced.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Advanced Initialisation</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ---------------------------------- */}
            {/* Table Jsgrid */}
            {/* ---------------------------------- */}
            {/* ---------------------------------- */}
            {/* Charts */}
            {/* ---------------------------------- */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Charts</span>
            </li>
            {/* ---------------------------------- */}
            {/* Apex Chart */}
            {/* ---------------------------------- */}
            <li className="sidebar-item">
              <a
                className="sidebar-link has-arrow"
                href="#"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-chart-pie" />
                </span>
                <span className="hide-menu">Apex Charts</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a
                    href="./main/chart-apex-line.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Line Chart</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/chart-apex-area.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Area Chart</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/chart-apex-bar.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Bar Chart</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/chart-apex-pie.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Pie Chart</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/chart-apex-radial.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Radial Chart</span>
                  </a>
                </li>
                <li className="sidebar-item mb-3">
                  <a
                    href="./main/chart-apex-radar.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Radar Chart</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ---------------------------------- */}
            {/* Sample Pages */}
            {/* ---------------------------------- */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Sample Pages</span>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link has-arrow"
                href="#"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-file" />
                </span>
                <span className="hide-menu">Sample Pages</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a
                    href="./main/pages-animation.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Animation</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/pages-search-result.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Search Result</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/pages-gallery.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Gallery</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/pages-treeview.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Treeview</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/pages-block-ui.html" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Block-Ui</span>
                  </a>
                </li>
                <li className="sidebar-item mb-3">
                  <a
                    href="./main/pages-session-timeout.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Session Timeout</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* ---------------------------------- */}
            {/* Icons */}
            {/* ---------------------------------- */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Icons</span>
            </li>
            {/* ---------------------------------- */}
            {/* Tabler Icon */}
            {/* ---------------------------------- */}
            <li className="sidebar-item">
              <a
                className="sidebar-link sidebar-link"
                href="./main/icon-tabler.html"
                aria-expanded="false">
                <span className="rounded-3">
                  <i className="ti ti-archive" />
                </span>
                <span className="hide-menu">Tabler Icon</span>
              </a>
            </li>
            {/* ---------------------------------- */}
            {/* Solar Icon */}
            {/* ---------------------------------- */}
            <li className="sidebar-item">
              <a
                className="sidebar-link sidebar-link"
                href="./main/icon-solar.html"
                aria-expanded="false">
                <span className="rounded-3">
                  <i className="ti ti-mood-smile" />
                </span>
                <span className="hide-menu">Solar Icon</span>
              </a>
            </li>
            {/* ---------------------------------- */}
            {/* AUTH */}
            {/* ---------------------------------- */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">AUTH</span>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link sidebar-link"
                href="./main/authentication-error.html"
                aria-expanded="false">
                <span className="rounded-3">
                  <i className="ti ti-alert-circle" />
                </span>
                <span className="hide-menu">Error</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link has-arrow"
                href="#"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-login" />
                </span>
                <span className="hide-menu">Login</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a
                    href="./main/authentication-login.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Side Login</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/authentication-login2.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Boxed Login</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link has-arrow"
                href="#"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-user-plus" />
                </span>
                <span className="hide-menu">Register</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a
                    href="./main/authentication-register.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Side Register</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/authentication-register2.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Boxed Register</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link has-arrow"
                href="#"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-rotate" />
                </span>
                <span className="hide-menu">Forgot Password</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a
                    href="./main/authentication-forgot-password.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Side Forgot Password</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/authentication-forgot-password2.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Boxed Forgot Password</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link has-arrow"
                href="#"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-zoom-code" />
                </span>
                <span className="hide-menu">Two Steps</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a
                    href="./main/authentication-two-steps.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Side Two Steps</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/authentication-two-steps2.html"
                    className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Boxed Two Steps</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link sidebar-link"
                href="./main/authentication-maintenance.html"
                aria-expanded="false">
                <span className="rounded-3">
                  <i className="ti ti-settings" />
                </span>
                <span className="hide-menu">Maintenance</span>
              </a>
            </li>
            {/* ---------------------------------- */}
            {/* DOCUMENTATION */}
            {/* ---------------------------------- */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">DOCUMENTATION</span>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link sidebar-link"
                href="./docs/index.html"
                aria-expanded="false">
                <span className="rounded-3">
                  <i className="ti ti-file-text" />
                </span>
                <span className="hide-menu">Getting Started</span>
              </a>
            </li>
            {/* ---------------------------------- */}
            {/* OTHER */}
            {/* ---------------------------------- */}
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">OTHER</span>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link has-arrow"
                href="#"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-box-multiple" />
                </span>
                <span className="hide-menu">Menu Level</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="#" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Level 1</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link has-arrow"
                    href="#"
                    aria-expanded="false">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Level 1.1</span>
                  </a>
                  <ul aria-expanded="false" className="collapse two-level">
                    <li className="sidebar-item">
                      <a href="#" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Level 2</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        className="sidebar-link has-arrow"
                        href="#"
                        aria-expanded="false">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Level 2.1</span>
                      </a>
                      <ul
                        aria-expanded="false"
                        className="collapse three-level">
                        <li className="sidebar-item">
                          <a href="#" className="sidebar-link">
                            <div className="round-16 d-flex align-items-center justify-content-center">
                              <i className="ti ti-circle" />
                            </div>
                            <span className="hide-menu">Level 3</span>
                          </a>
                        </li>
                        <li className="sidebar-item">
                          <a href="#" className="sidebar-link">
                            <div className="round-16 d-flex align-items-center justify-content-center">
                              <i className="ti ti-circle" />
                            </div>
                            <span className="hide-menu">Level 3.1</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link link-disabled"
                href="#disabled"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-ban" />
                </span>
                <span className="hide-menu">Disabled</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link" href="#sub" aria-expanded="false">
                <i className="ti ti-star" />
                <div className="hide-menu lh-base">
                  <span className="hide-menu d-block">SubCaption</span>
                  <span className="hide-menu d-block fs-2">
                    This is the sutitle
                  </span>
                </div>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link justify-content-between"
                href="#chip"
                aria-expanded="false">
                <div className="d-flex align-items-center gap-3">
                  <span className="d-flex">
                    <i className="ti ti-award" />
                  </span>
                  <span className="hide-menu">Chip</span>
                </div>
                <div className="hide-menu">
                  <span className="badge rounded-circle bg-primary d-flex align-items-center justify-content-center rounded-pill fs-2">
                    9
                  </span>
                </div>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link justify-content-between"
                href="#outlined"
                aria-expanded="false">
                <div className="d-flex align-items-center gap-3">
                  <span className="d-flex">
                    <i className="ti ti-mood-smile" />
                  </span>
                  <span className="hide-menu">Outlined</span>
                </div>
                <span className="hide-menu badge rounded-pill border border-primary text-primary fs-2 py-1 px-2">
                  Outline
                </span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="https://google.com"
                aria-expanded="false">
                <span className="d-flex">
                  <i className="ti ti-star" />
                </span>
                <span className="hide-menu">External Link</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="fixed-profile p-3 mx-4 mb-2 bg-secondary-subtle rounded mt-3">
          <div className="hstack gap-3">
            <div className="john-img">
              <img
                src="./assets/images/profile/user-1.jpg"
                className="rounded-circle"
                width={40}
                height={40}
                alt="modernize-img"
              />
            </div>
            <div className="john-title">
              <h6 className="mb-0 fs-4 fw-semibold">Mathew</h6>
              <span className="fs-2">Designer</span>
            </div>
            <button
              className="border-0 bg-transparent text-primary ms-auto"
              tabIndex={0}
              type="button"
              aria-label="logout"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="logout">
              <i className="ti ti-power fs-6" />
            </button>
          </div>
        </div>
        {/* ---------------------------------- */}
        {/* Start Vertical Layout Sidebar */}
        {/* ---------------------------------- */}
      </div>
    </aside>
  );
};

export default SideBar;
