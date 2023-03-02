
        document.getElementById("contact-form").addEventListener("submit", function(event) {
          event.preventDefault();
          const form = event.target;
          const formData = new FormData(form);
          fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
              "Accept": "application/json"
            }
          })
          .then(response => {
            if (response.ok) {
              alert("Thanks for your message! We'll be in touch soon.");
              form.reset();
            } else {
              throw new Error("Something went wrong.");
            }
          })
          .catch(error => {
            alert("Something went wrong. Please try again later.");
          });
        });
        