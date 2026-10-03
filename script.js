/* =========================================
   FIX IT WITH ME
   Main JavaScript
========================================= */


/* =========================================
   APP STATE
========================================= */

let selectedProsthesis = null;

let selectedCompany = "";

let selectedModel = "";

let selectedPart = {
    arabic: "",
    english: ""
};

let selectedProblem = "";

let cart = [];

let orders = [];


/* =========================================
   PAGE NAVIGATION
========================================= */

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {

        page.classList.remove("active-page");

    });


    const targetPage = document.getElementById(pageId);

    if (targetPage) {

        targetPage.classList.add("active-page");

    }


    setActiveNav(pageId);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================
   NAVIGATION
========================================= */

function navigate(pageId) {

    showPage(pageId);

}


function goHome() {

    showPage("homePage");

}


/* =========================================
   ACTIVE NAVIGATION
========================================= */

function setActiveNav(pageId) {

    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(function(item) {

        item.classList.remove("active");

        if (item.dataset.page === pageId) {

            item.classList.add("active");

        }

    });


    if (
        pageId === "partPage" ||
        pageId === "prosthesisPage" ||
        pageId === "replacementPage"
    ) {

        const diagnosisNav =
            document.querySelector('[data-page="diagnosisPage"]');

        if (diagnosisNav) {

            diagnosisNav.classList.add("active");

        }

    }

}


/* =========================================
   START DIAGNOSIS
========================================= */

function startDiagnosis() {

    if (!selectedProsthesis) {

        showPage("homePage");

        setTimeout(function() {

            showToast("اختر نوع الطرف للبدء بالتشخيص");

        }, 300);

        return;

    }

    showPage("diagnosisPage");

}


/* =========================================
   SELECT PROSTHESIS
========================================= */

function selectProsthesis(type) {

    selectedProsthesis = type;


    const selectedTypeText =
        document.getElementById("selectedTypeText");


    if (selectedTypeText) {

        if (type === "upper") {

            selectedTypeText.textContent =
                "طرف علوي — الذراع واليد";

        } else {

            selectedTypeText.textContent =
                "طرف سفلي — الساق والقدم";

        }

    }


    showPage("prosthesisPage");

    showToast("تم اختيار نوع الطرف");

}


/* =========================================
   CONTINUE TO DIAGNOSIS
========================================= */

function continueToDiagnosis() {

    const companySelect =
        document.getElementById("companySelect");

    const modelSelect =
        document.getElementById("modelSelect");


    selectedCompany = companySelect.value;

    selectedModel = modelSelect.value;


    if (!selectedProsthesis) {

        showToast("اختر نوع الطرف أولًا");

        return;

    }


    if (!selectedCompany) {

        showToast("اختر الشركة المصنعة");

        companySelect.focus();

        return;

    }


    if (!selectedModel) {

        showToast("اختر الطراز");

        modelSelect.focus();

        return;

    }


    showPage("diagnosisPage");

    showToast("تم حفظ بيانات الطرف");

}


/* =========================================
   SELECT PART
========================================= */

function selectPart(arabicName, englishName) {

    selectedPart = {
        arabic: arabicName,
        english: englishName
    };


    const partTitle =
        document.getElementById("partTitle");

    const partEnglish =
        document.getElementById("partEnglish");


    if (partTitle) {

        partTitle.textContent = arabicName;

    }


    if (partEnglish) {

        partEnglish.textContent = englishName;

    }


    showPage("partPage");

}


/* =========================================
   SELECT PROBLEM
========================================= */

function selectProblem(problem) {

    selectedProblem = problem;


    const resultPart =
        document.getElementById("resultPart");

    const resultProblem =
        document.getElementById("resultProblem");


    if (resultPart) {

        resultPart.textContent =
            selectedPart.arabic || "غير محدد";

    }


    if (resultProblem) {

        resultProblem.textContent =
            problem;

    }


    showPage("replacementPage");

}


/* =========================================
   CART
========================================= */

function addToCart(productName, price) {

    const existingProduct = cart.find(function(item) {

        return item.name === productName;

    });


    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({

            id: Date.now(),

            name: productName,

            price: price,

            quantity: 1

        });

    }


    updateCart();

    showToast("تمت إضافة القطعة إلى السلة");

}


/* =========================================
   UPDATE CART
========================================= */

function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartSummary =
        document.getElementById("cartSummary");

    const cartTotal =
        document.getElementById("cartTotal");

    const cartCount =
        document.getElementById("cartCount");


    const totalQuantity = cart.reduce(
        function(total, item) {

            return total + item.quantity;

        },
        0
    );


    if (cartCount) {

        cartCount.textContent = totalQuantity;

    }


    if (!cartItems) {

        return;

    }


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    0
                </div>

                <h3>
                    السلة فارغة
                </h3>

                <p>
                    لم تتم إضافة أي قطع حتى الآن.
                </p>

                <button
                    class="primary-btn"
                    onclick="startDiagnosis()"
                >
                    ابدأ التشخيص
                </button>

            </div>

        `;


        if (cartSummary) {

            cartSummary.classList.add("hidden");

        }


        return;

    }


    let html = "";


    cart.forEach(function(item) {

        html += `

            <div class="cart-item">

                <div class="cart-item-icon">
                    P
                </div>

                <div class="cart-item-info">

                    <strong>
                        ${escapeHTML(item.name)}
                    </strong>

                    <span>
                        ${item.quantity} × ${item.price} ر.س
                    </span>

                </div>

                <strong>
                    ${item.price * item.quantity} ر.س
                </strong>

                <button
                    class="remove-btn"
                    onclick="removeFromCart(${item.id})"
                >
                    حذف
                </button>

            </div>

        `;

    });


    cartItems.innerHTML = html;


    const total = calculateCartTotal();


    if (cartTotal) {

        cartTotal.textContent =
            total.toLocaleString("ar-SA") + " ر.س";

    }


    if (cartSummary) {

        cartSummary.classList.remove("hidden");

    }

}


/* =========================================
   REMOVE FROM CART
========================================= */

function removeFromCart(id) {

    cart = cart.filter(function(item) {

        return item.id !== id;

    });


    updateCart();

    showToast("تم حذف القطعة من السلة");

}


/* =========================================
   CALCULATE TOTAL
========================================= */

function calculateCartTotal() {

    return cart.reduce(
        function(total, item) {

            return total + (item.price * item.quantity);

        },
        0
    );

}


/* =========================================
   CHECKOUT
========================================= */

function checkout() {

    if (cart.length === 0) {

        showToast("السلة فارغة");

        return;

    }


    const total = calculateCartTotal();


    const newOrder = {

        id: "FI-" + Math.floor(10000 + Math.random() * 90000),

        items: cart.map(function(item) {

            return {
                name: item.name,
                quantity: item.quantity,
                price: item.price
            };

        }),

        total: total,

        date: new Date().toLocaleDateString("ar-SA"),

        status: "قيد المعالجة"

    };


    orders.unshift(newOrder);


    cart = [];


    updateCart();

    renderOrders();

    showPage("ordersPage");

    showToast("تم إنشاء الطلب بنجاح");

}


/* =========================================
   RENDER ORDERS
========================================= */

function renderOrders() {

    const ordersList =
        document.getElementById("ordersList");


    if (!ordersList) {

        return;

    }


    if (orders.length === 0) {

        ordersList.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    —
                </div>

                <h3>
                    لا توجد طلبات
                </h3>

                <p>
                    ستظهر طلباتك هنا بعد إتمام عملية الشراء.
                </p>

            </div>

        `;

        return;

    }


    let html = "";


    orders.forEach(function(order) {

        const productNames =
            order.items
                .map(function(item) {

                    return item.name;

                })
                .join("، ");


        html += `

            <div class="order-card">

                <div class="order-top">

                    <span class="order-number">
                        ${escapeHTML(order.id)}
                    </span>

                    <span class="order-status">
                        ${escapeHTML(order.status)}
                    </span>

                </div>

                <div class="order-products">

                    ${escapeHTML(productNames)}

                </div>

                <div class="order-bottom">

                    <span>
                        ${escapeHTML(order.date)}
                    </span>

                    <strong>
                        ${order.total.toLocaleString("ar-SA")} ر.س
                    </strong>

                </div>

            </div>

        `;

    });


    ordersList.innerHTML = html;

}


/* =========================================
   SPECIALIST CHAT
========================================= */

function sendMessage() {

    const input =
        document.getElementById("chatInput");

    const messages =
        document.getElementById("chatMessages");


    if (!input || !messages) {

        return;

    }


    const text = input.value.trim();


    if (!text) {

        return;

    }


    const userMessage =
        document.createElement("div");

    userMessage.className =
        "message user-message";

    userMessage.textContent = text;


    messages.appendChild(userMessage);


    input.value = "";


    messages.scrollTop =
        messages.scrollHeight;


    setTimeout(function() {

        const response =
            document.createElement("div");

        response.className =
            "message specialist-message";

        response.textContent =
            "تم استلام رسالتك. سيتم توجيه استفسارك للمختص.";

        messages.appendChild(response);

        messages.scrollTop =
            messages.scrollHeight;

    }, 700);

}


/* =========================================
   CHAT ENTER
========================================= */

function handleChatKey(event) {

    if (event.key === "Enter") {

        event.preventDefault();

        sendMessage();

    }

}


/* =========================================
   TOAST
========================================= */

let toastTimer;


function showToast(message) {

    const toast =
        document.getElementById("toast");

    const toastText =
        document.getElementById("toastText");


    if (!toast || !toastText) {

        return;

    }


    toastText.textContent = message;


    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer = setTimeout(function() {

        toast.classList.remove("show");

    }, 2600);

}


/* =========================================
   ESCAPE HTML
========================================= */

function escapeHTML(value) {

    const div =
        document.createElement("div");

    div.textContent =
        String(value);

    return div.innerHTML;

}


/* =========================================
   INITIALIZATION
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateCart();

        renderOrders();

        showPage("homePage");

    }
);