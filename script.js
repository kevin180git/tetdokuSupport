// Support form handling
document.addEventListener("DOMContentLoaded", () => {
  const supportForm = document.getElementById("support-form")
  const confirmationMessage = document.getElementById("confirmation-message")

  if (supportForm) {
    supportForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = new FormData(supportForm)
      const name = formData.get("name")
      const email = formData.get("email")
      const message = formData.get("message")
      const consent = formData.get("consent")

      // Basic validation
      if (!name || !email || !message || !consent) {
        alert("Please fill in all required fields and agree to the consent checkbox.")
        return
      }

      // Simulate form submission
      // In a real implementation, you would send this data to your backend
      // or use a service like Formspree, Netlify Forms, or EmailJS

      console.log("Form submitted:", {
        name: name,
        email: email,
        message: message,
        consent: consent,
        timestamp: new Date().toISOString(),
      })

      // Show confirmation message
      supportForm.style.display = "none"
      confirmationMessage.style.display = "block"

      // Scroll to confirmation message
      confirmationMessage.scrollIntoView({ behavior: "smooth" })

      // Optional: Reset form after a delay
      setTimeout(() => {
        supportForm.reset()
        supportForm.style.display = "block"
        confirmationMessage.style.display = "none"
      }, 10000) // Reset after 10 seconds
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
})
