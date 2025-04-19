
const URL_GAS = "https://script.google.com/a/macros/unsa.edu.pe/s/AKfycbxw6Lwd4skIJtKM2gZkn9sgVBHl7hm8hCT2vTau572m/dev";

document.getElementById("formTarea").addEventListener("submit", async function(e) {
  e.preventDefault();

  const tarea = document.getElementById("tarea").value;
  const fecha = document.getElementById("fecha").value;

  const datos = { tarea, fecha };

  try {
    const res = await fetch(URL_GAS, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datos)
    });

    const texto = await res.text();
    document.getElementById("mensaje").textContent = texto;
    document.getElementById("formTarea").reset();
  } catch (error) {
    document.getElementById("mensaje").textContent = "Error al guardar la tarea.";
    console.error(error);
  }
});
