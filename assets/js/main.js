// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("nav-links");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.style.display === "flex";
    nav.style.display = open ? "none" : "flex";
    toggle.setAttribute("aria-expanded", String(!open));
  });
  // Close menu when clicking a link (mobile UX)
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      if (window.innerWidth < 760) {
        nav.style.display = "none";
        toggle.setAttribute("aria-expanded", "false");
      }
    })
  );
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const id = this.getAttribute("href");
    if (id.length > 1) {
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Contact form: AJAX submit with UX + basic validation
const form = document.getElementById("contact-form");
const statusEl = document.getElementById("contact-status");
const submitBtn = document.getElementById("contact-submit");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // HTML5 validation fallback
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    statusEl.textContent = "Sending…";
    submitBtn.disabled = true;

    try {
      const formData = new FormData(form);
      const res = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        statusEl.textContent = "Thanks! We’ll get back to you shortly.";
      } else {
        // Try to read errors from Formspree
        const data = await res.json().catch(() => ({}));
        statusEl.textContent =
          data?.errors?.[0]?.message ||
          "Something went wrong. Please email us directly.";
      }
    } catch (err) {
      statusEl.textContent =
        "Network error. Please check your connection or email us directly.";
    } finally {
      submitBtn.disabled = false;
    }
  });
}
