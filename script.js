
const malla = window.mallaData;
const container = document.getElementById("malla-container");
const estado = JSON.parse(localStorage.getItem("estadoMalla") || "{}");

function crearElementoCurso(curso) {
  const div = document.createElement("div");
  div.classList.add("course");
  div.textContent = curso.nombre;
  div.dataset.id = curso.id;

  if (!estado[curso.id]) estado[curso.id] = "locked";
  const prereqCumplidos = curso.prerrequisitos.every(pr => estado[pr] === "completed");

  if (estado[curso.id] === "completed") div.classList.add("completed");
  else if (!prereqCumplidos && curso.prerrequisitos.length > 0) div.classList.add("locked");

  div.addEventListener("click", () => {
    if (div.classList.contains("locked")) return;
    estado[curso.id] = estado[curso.id] === "completed" ? "unlocked" : "completed";
    localStorage.setItem("estadoMalla", JSON.stringify(estado));
    location.reload();
  });

  return div;
}

function renderizarMalla() {
  const semestres = [...new Set(malla.map(c => c.semestre))].sort((a, b) => a - b);
  semestres.forEach(s => {
    const label = document.createElement("div");
    label.classList.add("semester");
    label.textContent = `Semestre ${s}`;
    container.appendChild(label);

    malla.filter(c => c.semestre === s).forEach(curso => {
      container.appendChild(crearElementoCurso(curso));
    });
  });
}

renderizarMalla();
