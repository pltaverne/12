

const techInterest = document.getElementById("techInterest");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");
let interestLevel;

submitBtn.onclick = function () {
  interestLevel = techInterest.value;
  interestLevel = Number(interestLevel);
  if (interestLevel > 10 || interestLevel < 1) { result.textContent = `Veuillez entrer un nombre entre 1 et 10.`; }
  else if (interestLevel >= 8) { result.textContent = `Vous avez un fort intérêt pour la technologie!`; }
  else if (interestLevel >= 5) { result.textContent = `Vous avez un intérêt modéré pour la technologie.`; }
  else { result.textContent = `Vous avez un faible intérêt pour la technologie.`; }

}
