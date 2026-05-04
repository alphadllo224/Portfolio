function openProjet(id) {
  const overlay = document.getElementById("projetOverlay");
  const detail = document.getElementById("projetDetail");
  
  if (projets[id]) {
    detail.innerHTML = projets[id];
    overlay.style.display = "block";
    
    // Bloque le scroll du site (body ET html)
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    
    // Remonte l'overlay en haut
    overlay.scrollTop = 0;
  }
}

function closeProjet() {
  const overlay = document.getElementById("projetOverlay");
  overlay.style.display = "none";
  
  // Réactive le scroll partout
  document.body.style.overflow = "auto";
  document.documentElement.style.overflow = "auto";
}

function zoomImage(img) {
  // Crée l'overlay de zoom
  const zoomOverlay = document.createElement("div");
  zoomOverlay.id = "zoomOverlay";
  zoomOverlay.innerHTML = `
    <span class="close-zoom" onclick="this.parentElement.remove()">✕</span>
    <img src="${img.src}" class="zoomed-img">
  `;
  
  // Fermer au clic n'importe où
  zoomOverlay.onclick = function(e) {
    if(e.target.id === "zoomOverlay") this.remove();
  };
  
  document.body.appendChild(zoomOverlay);
}
