/**
 * ChemCorp — Main JS
 * Smooth scroll helper + any future interactions.
 */

/**
 * Smooth-scroll to a section by id.
 * @param {string} id - The element id to scroll to.
 */
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
