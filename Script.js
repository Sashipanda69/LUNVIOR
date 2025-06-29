 <!-- JavaScript -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
  <script>
    // ------------------- INITIALIZATION -------------------
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    let users = JSON.parse(localStorage.getItem("users")) || [
      { name: "Demo User", username: "demo@example.com", password: "demo123", joined: new Date().toISOString() }
    ];
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    let usedCoupons = JSON.parse(localStorage.getItem("usedCoupons")) || [];

   const products = [
  { 
    name: "Oversized Tee", 
    price: 799, 
    category: "genz", 
    image: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/2025/APRIL/11/J8sIk2Gz_f88bffe1203248499b23f39a8077d6b6.jpg" 
  },
  { 
    name: "Graphic Hoodie", 
    price: 1199, 
    category: "genz", 
    image: "https://i.pinimg.com/736x/be/86/1c/be861c3aa871d7f7db3b77eebccffa20.jpg" 
  },
  { 
    name: "Kids' Cotton Set", 
    price: 599, 
    category: "kids", 
    image: "http://dress-trends.com/wp-content/uploads/2016/11/%D0%9Aids-fashion-trends-and-tendencies-2017-kids-clothes-kids-wear-4.jpg" 
  },
  { 
    name: "GenZ Cargo Pants", 
    price: 999, 
    category: "genz", 
    image: "https://freshstreetwear.com/cdn/shop/files/11_b8b20472-5e85-4d78-855a-69c72eb5698a.jpg?v=1691790345" 
  },
  { 
    name: "Urban Fit Jacket", 
    price: 1999, 
    category: "men", 
    image: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/21076750/2022/12/5/f881788f-d41f-4d94-b084-130595bad5e11670236941966Jackets1.jpg" 
  },
  { 
    name: "Formal White Shirt", 
    price: 1099, 
    category: "men", 
    image: "https://i.pinimg.com/originals/5c/04/80/5c0480defa0905206f86945e285370ea.jpg" 
  },
  { 
    name: "Printed Kurti", 
    price: 899, 
    category: "women", 
    image: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/2472859/2018/4/7/11523089731402-Anouk-Women-Black--Mustard-Printed-Straight-Kurta-6901523089731263-1.jpg" 
  },
  { 
    name: "Floral Top", 
    price: 599, 
    category: "women", 
    image: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/11193658/2020/9/10/7079e797-8b15-4c61-9de3-8eada9f4dc651599728610939-Chemistry-Women-Tops-9551599728609155-1.jpg" 
  },
  { 
    name: "Funky Hoodie", 
    price: 1299, 
    category: "genz", 
    image: "https://m.media-amazon.com/images/I/71b9UhVQvvL._AC_UY1100_.jpg" 
  },
  { 
    name: "Color Splash Co-ord", 
    price: 1699, 
    category: "genz", 
    image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/products/Matteus20695_400x.jpg?v=1661855647" 
  },
  { 
    name: "Cute Cartoon Tee", 
    price: 599, 
    category: "kids", 
    image: "http://c.shld.net/rpx/i/s/i/spin/-122/prod_1600013312??hei=64&wid=64&qlt=50" 
  },
  { 
    name: "Mini Shorts", 
    price: 499, 
    category: "kids", 
    image: "https://www.jiomart.com/images/product/500x630/rvjgq8zb9n/hellcat-boys-multicolor5-cotton-blend-typographic-pack-of-3-shorts-product-images-rvjgq8zb9n-0-202402280652.jpg" 
  },
  { 
    name: "Rainbow Dress", 
    price: 899, 
    category: "kids", 
    image: "https://i.etsystatic.com/6708489/r/il/2bc802/1722574931/il_fullxfull.1722574931_tc1z.jpg" 
  },
  { 
    name: "Co-ord Set", 
    price: 1599, 
    category: "women", 
    image: "https://www.ahalyaa.com/cdn/shop/products/AHTUPZ-COMBO-613-ICH_1_f6117cc6-002b-4ca1-a881-c5a52fab12b2_1080x.jpg?v=1680613801" 
  },
  { 
    name: "Chino Pants", 
    price: 799, 
    category: "men", 
    image: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/9089109/2022/3/15/b9215f01-ee5d-4ec6-8d8b-4e7beeef662c1647326511199-HERENOW-Men-Black-Slim-Fit-Solid-Mid-Rise-Chinos-27916473265-1.jpg" 
  },
  { 
    name: "Premium Leather Jacket", 
    price: 4999, 
    category: "luxury", 
    image: "https://imgmedia.lbb.in/media/2023/07/64b8d8e65758625afe7bf6cb_1689835750343.jpg" 
  },
  { 
    name: "Designer Silk Saree", 
    price: 3999, 
    category: "luxury", 
    image: "https://i.pinimg.com/originals/97/ba/25/97ba2543fc1169cf3360de69d5ca8a44.jpg" 
  },
  { 
    name: "Limited Edition Watch", 
    price: 8999, 
    category: "luxury", 
    image: "https://i5.walmartimages.com/asr/b51bac15-1273-441a-b5f6-ceb78c71f6b7_1.ae08e2fe33f26f7fc57b8015aacda912.jpeg" 
  }
];

    const coupons = {
      "SAVE100": { discount: 100, expiry: "2025-12-31" },
      "LUNVIOR50": { discount: 50, expiry: "2025-12-31" }
    };

    // ------------------- UTILITY FUNCTIONS -------------------
    function save(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }

    function isLoggedIn() {
      return localStorage.getItem("loggedIn") === "true";
    }

    // ------------------- SEARCH FUNCTIONALITY -------------------
    function setupSearch() {
      // Search icon click event
      document.getElementById("search-icon-btn").addEventListener("click", function() {
        const searchModal = new bootstrap.Modal(document.getElementById('searchModal'));
        searchModal.show();
        
        // Focus on input when modal opens
        setTimeout(() => {
          document.getElementById("search-modal-input").focus();
        }, 500);
      });
    
      // Search button in modal
      document.getElementById("search-modal-button").addEventListener("click", function() {
        const query = document.getElementById("search-modal-input").value;
        performSearch(query, document.getElementById("search-modal-results"));
      });
    
      // Also search on Enter key
      document.getElementById("search-modal-input").addEventListener("keyup", function(e) {
        if (e.key === "Enter") {
          const query = this.value;
          performSearch(query, document.getElementById("search-modal-results"));
        }
      });
    
      // Perform the search
      function performSearch(query, resultsContainer) {
        if (!query.trim()) {
          resultsContainer.innerHTML = `<div class="p-3 text-center text-muted">Start typing to search products</div>`;
          return;
        }
        
        const results = products.filter(product => 
          product.name.toLowerCase().includes(query.toLowerCase())
        );
        
        resultsContainer.innerHTML = "";
        
        if (results.length === 0) {
          resultsContainer.innerHTML = `<div class="p-3 text-center">No results found for "${query}"</div>`;
        } else {
          results.forEach(product => {
            const item = document.createElement("div");
            item.className = "search-result-item d-flex align-items-center p-3";
            item.innerHTML = `
              <img src="${product.image}" alt="${product.name}" width="60" height="60" style="object-fit: cover; border-radius: 5px;">
              <div class="ms-3">
                <h6 class="mb-0">${product.name}</h6>
                <small class="text-muted">₹${product.price}</small>
                <button class="btn btn-sm btn-outline-primary mt-1" onclick="addToCart('${product.name}', ${product.price})">
                  <i class="bi bi-cart-plus"></i> Add to Cart
                </button>
              </div>
            `;
            item.addEventListener("click", (e) => {
              // Only close if clicking on the item itself, not buttons inside
              if (e.target === item) {
                addToCart(product.name, product.price);
                bootstrap.Modal.getInstance(document.getElementById('searchModal')).hide();
              }
            });
            resultsContainer.appendChild(item);
          });
        }
      }
    }

    // ------------------- VIEW MANAGEMENT -------------------
    function showCollectionModal(collection) {
      if (!isLoggedIn()) {
        openLoginModal();
        return;
      }
      
      // Special handling for luxury collection
      if (collection === 'luxury') {
        showFullPageView('luxury');
        return;
      }
      
      const modal = new bootstrap.Modal(document.getElementById(`${collection}Modal`));
      modal.show();
    }

    function showFullPageView(view) {
      if (!isLoggedIn() && view !== 'new-arrivals' && view !== 'luxury') {
        openLoginModal();
        return;
      }
      
      document.getElementById(`${view}-view`).style.display = 'block';
      document.body.style.overflow = 'hidden';
      
      // Load content if needed
      if (view === 'wishlist') renderWishlist();
      if (view === 'cart') renderCart();
      if (view === 'orders') renderOrders();
      if (view === 'user-dashboard') {
        document.getElementById("dashboard-username").textContent = localStorage.getItem("userName");
      }
    }

    function hideFullPageView(view) {
      document.getElementById(`${view}-view`).style.display = 'none';
      document.body.style.overflow = 'auto';
    }

    function toggleUserControlPanel() {
      const panel = document.getElementById('userControlPanel');
      panel.classList.toggle('collapsed');
    }

    function confirmLogout() {
      document.getElementById('logout-overlay').style.display = 'block';
      document.getElementById('logout-confirm').style.display = 'block';
    }

    function hideLogoutConfirm() {
      document.getElementById('logout-overlay').style.display = 'none';
      document.getElementById('logout-confirm').style.display = 'none';
    }

    // ------------------- WISHLIST FUNCTIONS -------------------
    function toggleWishlistItem(name, price) {
      if (!isLoggedIn()) {
        alert("Please login to add items to wishlist.");
        openLoginModal();
        return;
      }
      
      const index = wishlist.findIndex(item => item.name === name);
      if (index === -1) {
        wishlist.push({ name, price });
      } else {
        wishlist.splice(index, 1);
      }
      
      save("wishlist", wishlist);
      updateWishlistCount();
      renderWishlist();
      
      // Update heart icon state
      const buttons = document.querySelectorAll(`.wishlist-btn[onclick*="${name}"]`);
      buttons.forEach(btn => {
        btn.classList.toggle('active', index === -1);
      });
    }

    function renderWishlist() {
      const wishlistItems = document.getElementById("wishlist-items");
      const emptyWishlist = document.getElementById("empty-wishlist");
      
      wishlistItems.innerHTML = "";
      
      if (wishlist.length === 0) {
        emptyWishlist.style.display = "block";
        return;
      }
      
      emptyWishlist.style.display = "none";
      
      wishlist.forEach((item, i) => {
        const product = products.find(p => p.name === item.name) || item;
        wishlistItems.innerHTML += `
          <div class="col-md-4">
            <div class="card product-card">
              <button class="wishlist-btn active" onclick="toggleWishlistItem('${product.name}', ${product.price})">
                <i class="bi bi-heart"></i>
              </button>
              <img src="${product.image}" class="card-img-top product-img" alt="${product.name}">
              <div class="card-body">
                <h5 class="product-title">${product.name}</h5>
                <p class="product-price">₹${product.price}</p>
                <button class="btn btn-sm btn-outline-primary w-100" onclick="addToCart('${product.name}', ${product.price})">
                  <i class="bi bi-cart-plus me-1"></i>Add to Cart
                </button>
              </div>
            </div>
          </div>`;
      });
    }

    function updateWishlistCount() {
      const counts = document.querySelectorAll("#wishlist-count, #mobile-wishlist-count");
      counts.forEach(count => {
        count.textContent = wishlist.length;
      });
    }

    // ------------------- CART FUNCTIONS -------------------
    function renderCart() {
      const cartItems = document.getElementById("cart-items");
      const total = document.getElementById("cart-total");
      cartItems.innerHTML = "";
      let sum = 0;

      if (cart.length === 0) {
        cartItems.innerHTML = `<div class="col-12 text-center"><p>Your cart is empty.</p></div>`;
        total.textContent = "0";
        return;
      }

      cart.forEach((item, i) => {
        sum += item.price;
        cartItems.innerHTML += `
          <div class="col-md-6">
            <div class="card p-3 d-flex flex-row justify-content-between align-items-center">
              <div>
                <h6>${item.name}</h6>
                <p class="mb-0">₹${item.price}</p>
              </div>
              <button class="btn btn-sm btn-danger" onclick="removeFromCart(${i})">Remove</button>
            </div>
          </div>`;
      });

      total.textContent = sum;
    }

    function removeFromCart(index) {
      cart.splice(index, 1);
      save("cart", cart);
      renderCart();
      updateCartCount();
    }

    function addToCart(name, price) {
      if (!isLoggedIn()) {
        alert("Please login to add items to cart.");
        openLoginModal();
        return;
      }
      
      cart.push({ name, price });
      save("cart", cart);
      updateCartCount();
      
      // Show a quick confirmation
      const toast = document.createElement('div');
      toast.className = 'position-fixed bottom-0 end-0 p-3';
      toast.style.zIndex = '11';
      toast.innerHTML = `
        <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header bg-success text-white">
            <strong class="me-auto">Added to Cart</strong>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            ${name} has been added to your cart.
          </div>
        </div>
      `;
      document.body.appendChild(toast);
      
      // Auto remove the toast after 3 seconds
      setTimeout(() => {
        toast.remove();
      }, 3000);
    }

    function updateCartCount() {
      const counts = document.querySelectorAll("#cart-count, #mobile-cart-count");
      counts.forEach(count => {
        count.textContent = cart.length;
      });
    }

    // ------------------- ORDER FUNCTIONS -------------------
    function renderOrders() {
      const ordersList = document.getElementById("orders-list");
      ordersList.innerHTML = "";
      
      if (orders.length === 0) {
        ordersList.innerHTML = `
          <li class="list-group-item text-center">
            <i class="bi bi-bag text-muted" style="font-size: 2rem;"></i>
            <h5 class="mt-3">No orders yet</h5>
            <p>Your orders will appear here</p>
            <a href="#" class="btn btn-primary mt-2" onclick="showCollectionModal('genz')">Start Shopping</a>
          </li>
        `;
        return;
      }
      
      orders.forEach((order, i) => {
        let itemsHtml = "";
        order.items.forEach(item => {
          itemsHtml += `<li>${item.name} - ₹${item.price}</li>`;
        });
        
        ordersList.innerHTML += `
          <li class="list-group-item">
            <div class="d-flex justify-content-between">
              <h5>Order #${order.id}</h5>
              <span class="badge bg-primary">${order.status}</span>
            </div>
            <p class="mb-1">Date: ${new Date(order.date).toLocaleDateString()}</p>
            <p class="mb-1">Total: ₹${order.total}</p>
            <div class="mt-2">
              <h6>Items:</h6>
              <ul class="mb-2">${itemsHtml}</ul>
            </div>
          </li>
        `;
      });
    }

    function showPayment() {
      hideFullPageView('cart');
      showFullPageView('payment');
      
      // Calculate total
      let total = 0;
      cart.forEach(item => {
        total += item.price;
      });
      
      document.getElementById("cart-total").textContent = total;
    }

    function placeOrder() {
      const paymentMethod = document.getElementById("payment-method-select").value;
      const name = document.getElementById("customer-name").value;
      const phone = document.getElementById("customer-phone").value;
      const address = document.getElementById("customer-address").value;
      const city = document.getElementById("customer-city").value;
      const pin = document.getElementById("customer-pin").value;
      
      if (!paymentMethod || !name || !phone || !address || !city || !pin) {
        alert("Please fill all the details");
        return;
      }
      
      // Create order
      const order = {
        id: Date.now(),
        date: new Date().toISOString(),
        items: [...cart],
        total: document.getElementById("cart-total").textContent,
        status: "Processing",
        paymentMethod,
        shippingAddress: { name, phone, address, city, pin }
      };
      
      orders.push(order);
      save("orders", orders);
      
      // Clear cart
      cart = [];
      save("cart", cart);
      updateCartCount();
      
      // Show thank you modal
      const orderSummary = document.getElementById("order-summary");
      orderSummary.innerHTML = `
        <p>Your order #${order.id} has been placed successfully!</p>
        <p>Total: ₹${order.total}</p>
        <p>Payment Method: ${order.paymentMethod}</p>
      `;
      
      hideFullPageView('payment');
      const thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
      thankYouModal.show();
    }

    // ------------------- USER AUTH FUNCTIONS -------------------
    function openLoginModal() {
      const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
      loginModal.show();
    }

    function openSignupModal() {
      const signupModal = new bootstrap.Modal(document.getElementById('signupModal'));
      signupModal.show();
      const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
      if (loginModal) loginModal.hide();
    }

    function loginUser(e) {
      e.preventDefault();
      const username = document.getElementById("login-username").value;
      const password = document.getElementById("login-pass").value;
      const status = document.getElementById("login-status");
      
      // Simple validation
      const user = users.find(u => (u.username === username || u.email === username) && u.password === password);
      if (user) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("userName", user.name);
        localStorage.setItem("userEmail", user.username.includes('@') ? user.username : user.email);
        
        // Update UI
        document.getElementById("user-avatar").style.display = "flex";
        document.getElementById("login-btn").classList.add("d-none");
        document.getElementById("control-panel-username").textContent = user.name;
        document.getElementById("control-panel-email").textContent = user.username.includes('@') ? user.username : user.email;
        
        // Close modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        modal.hide();
        
        // Show welcome message
        status.innerHTML = '<div class="alert alert-success">Login successful!</div>';
        setTimeout(() => {
          status.innerHTML = '';
        }, 2000);
      } else {
        status.innerHTML = '<div class="alert alert-danger">Invalid username or password</div>';
      }
    }

    function signupUser(e) {
      e.preventDefault();
      const name = document.getElementById("signup-name").value;
      const username = document.getElementById("signup-username").value;
      const password = document.getElementById("signup-pass").value;
      const status = document.getElementById("signup-status");
      
      // Simple validation
      if (users.some(u => u.username === username)) {
        status.innerHTML = '<div class="alert alert-danger">Username/Email already exists</div>';
        return;
      }
      
      const newUser = {
        name,
        username,
        password,
        joined: new Date().toISOString()
      };
      
      users.push(newUser);
      save("users", users);
      
      status.innerHTML = '<div class="alert alert-success">Account created successfully!</div>';
      
      // Auto login
      setTimeout(() => {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", username.includes('@') ? username : '');
        
        document.getElementById("user-avatar").style.display = "flex";
        document.getElementById("login-btn").classList.add("d-none");
        document.getElementById("control-panel-username").textContent = name;
        document.getElementById("control-panel-email").textContent = username.includes('@') ? username : '';
        
        const modal = bootstrap.Modal.getInstance(document.getElementById('signupModal'));
        modal.hide();
      }, 1500);
    }

    function logout() {
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("userName");
      localStorage.removeItem("userEmail");
      
      document.getElementById("user-avatar").style.display = "none";
      document.getElementById("login-btn").classList.remove("d-none");
      document.getElementById("userControlPanel").classList.add("collapsed");
      hideLogoutConfirm();
      
      // Show login modal
      openLoginModal();
    }

    function showUserDetails() {
      document.getElementById("user-detail-name").textContent = localStorage.getItem("userName");
      document.getElementById("user-detail-email").textContent = localStorage.getItem("userEmail");
      document.getElementById("user-detail-joined").textContent = new Date().toLocaleDateString();
      
      const modal = new bootstrap.Modal(document.getElementById('userDetailsModal'));
      modal.show();
    }

    // ------------------- INITIAL SETUP -------------------
    document.addEventListener('DOMContentLoaded', function() {
      // Event listeners
      document.getElementById("login-form").addEventListener("submit", loginUser);
      document.getElementById("signup-form").addEventListener("submit", signupUser);
      document.getElementById("order-form").addEventListener("submit", function(e) {
        e.preventDefault();
        placeOrder();
      });
      
      // Setup search functionality
      setupSearch();
      
      // User avatar click event
      document.getElementById("user-avatar").addEventListener("click", function() {
        if (isLoggedIn()) {
          toggleUserControlPanel();
        } else {
          openLoginModal();
        }
      });
      
      // Check if user is logged in
      if (isLoggedIn()) {
        document.getElementById("user-avatar").style.display = "flex";
        document.getElementById("login-btn").classList.add("d-none");
        document.getElementById("control-panel-username").textContent = localStorage.getItem("userName");
        document.getElementById("control-panel-email").textContent = localStorage.getItem("userEmail");
      } else {
        document.getElementById("user-avatar").style.display = "none";
        document.getElementById("login-btn").classList.remove("d-none");
      }
      
      // Update counts
      updateCartCount();
      updateWishlistCount();
      
      // Navbar scroll effect
      window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
      
      // Initialize Owl Carousel
      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
      });
    });
  </script>
