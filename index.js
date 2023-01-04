async function teste(object) {
  try {
    const data = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    });
    console.log(data);
    if (data.status == "ok") {
      const dataJson = data.json();
      if (dataJson.user.type === "teacher") {
      }
    }
  } catch (error) {
    console.log(error);
  }
}

const registerEvent = () => {
  const form = document.getElementById("registerTesting");
  const htmlElements = [...form.elements];
  console.log(htmlElements);
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const body = {};

    htmlElements.forEach((elt) => {
      if (elt.tagName == "INPUT" && elt.value.length !== 0) {
        body[elt.id] = elt.value;
      }
    });
    console.log(body);
    await teste(body);
  });
};

registerEvent();
