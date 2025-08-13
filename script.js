// Support form handling
document.addEventListener("DOMContentLoaded", () => {
  const supportForm = document.getElementById("support-form")
  const confirmationMessage = document.getElementById("confirmation-message")
  const errorMessage = document.getElementById("error-message")

  if (supportForm) {
    supportForm.addEventListener("submit", async (e) => {
      e.preventDefault()

      // Get form data
      const formData = new FormData(supportForm)
      const name = formData.get("name")
      const email = formData.get("email")
      const message = formData.get("message")
      const consent = formData.get("consent")

      // Basic validation
      if (!consent) {
        alert("Please agree to the consent checkbox to proceed.")
        return
      }

      const submitButton = supportForm.querySelector('button[type="submit"]')
      const originalButtonText = submitButton.textContent
      submitButton.textContent = "Sending..."
      submitButton.disabled = true

      try {
        const response = await fetch(supportForm.action, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        })

        if (response.ok) {
          supportForm.style.display = "none"
          confirmationMessage.style.display = "block"
          errorMessage.style.display = "none"

          // Scroll to confirmation message
          confirmationMessage.scrollIntoView({ behavior: "smooth" })

          // Reset form after delay
          setTimeout(() => {
            supportForm.reset()
            supportForm.style.display = "block"
            confirmationMessage.style.display = "none"
            submitButton.textContent = originalButtonText
            submitButton.disabled = false
          }, 10000)
        } else {
          throw new Error("Form submission failed")
        }
      } catch (error) {
        console.error("Form submission error:", error)
        errorMessage.style.display = "block"
        confirmationMessage.style.display = "none"

        // Scroll to error message
        errorMessage.scrollIntoView({ behavior: "smooth" })

        // Reset button state
        submitButton.textContent = originalButtonText
        submitButton.disabled = false

        // Hide error message after delay
        setTimeout(() => {
          errorMessage.style.display = "none"
        }, 8000)
      }
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
