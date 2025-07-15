
const malla = window.mallaData;
const grid = document.getElementById("malla-grid");
const estado = JSON.parse(localStorage.getItem("estadoMalla") || "{}");

function crearCurso(curso) {
  const div = document.createElement("div");
  div.className = "course";
  div.textContent = curso.nombre;
  div.dataset.id = curso.id;

  if (!estado[curso.id]) estado[curso.id] = "locked";
  const desbloqueado = curso.prerrequisitos.every(p => estado[p] === "completed");

  if (estado[curso.id] === "completed") div.classList.add("completed");
  else if (!desbloqueado && curso.prerrequisitos.length > 0) div.classList.add("locked");

  div.addEventListener("click", () => {
    if (div.classList.contains("locked")) return;
    estado[curso.id] = estado[curso.id] === "completed" ? "unlocked" : "completed";
    localStorage.setItem("estadoMalla", JSON.stringify(estado));
    location.reload();
  });

  return div;
}

function renderMalla() {
  const semestres = [...new Set(malla.map(c => c.semestre))].sort((a, b) => a - b);
  semestres.forEach(sem => {
    const col = document.createElement("div");
    col.className = "column";
    const title = document.createElement("h2");
    title.textContent = `Semestre ${sem}`;
    col.appendChild(title);

    malla.filter(c => c.semestre === sem).forEach(curso => {
      col.appendChild(crearCurso(curso));
    });

    grid.appendChild(col);
  });
}

renderMalla();
