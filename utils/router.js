// Simple client-side router for lightweight-tms

function loadPage(pageName) {
  const app = document.getElementById("app");
  const filePath = `components/${pageName}.html`;

  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Component not found: ${filePath}`);
      }
      return response.text();
    })
    .then(html => {
      app.innerHTML = html;
    })
    .catch(err => {
      console.error(err);
      app.innerHTML = `
        <div style="padding: 1rem; color: red;">
          <h3>Error loading component</h3>
          <p>${err.message}</p>
        </div>
      `;
    });
}
