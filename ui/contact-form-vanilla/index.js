// on form sumit, add checks like form action url and method
//then send the formdata and alert respinse or error

(() => {
  const SUBMIT_URL = "https://www.greatfrontend.com/api/questions/contact-form";
  const form = document.querySelector("form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    if (form.action !== SUBMIT_URL) {
      alert("Incorrect form action");
      return;
    }

    if (form.method.toLowerCase() !== "post") {
      alert("incorrect form methods");
    }

    try {
      const formData = new FormData(form);
      const response = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const text = await response.text();
      alert(`Success: ${text}`);
    } catch (error) {
      alert(`Error submitting the form: ${error}`);
    }
  });
})();
