/**
 * typography.js — Automatická úprava české typografie
 * Ošetřuje sirotky (předložky a spojky) nahrazením mezery za nezlomitelnou mezeru (\u00A0).
 */
document.addEventListener("DOMContentLoaded", () => {
    // Seznam předložek a spojek – díky příznaku 'i' na konci chytá malá i VELKÁ písmena (Nad, Před, Ve...)
    // Chytá začátky řádků, mezery, mezeru po tečce/čárce/závorce/uvozovkách
    const pattern = /(?:^|[\s(>„"“\.!\?-])(k|o|s|u|v|z|a|i|na|nad|pod|před|přes|pri|při|bez|od|do|pro|ze|ve|ke|se)\s+/gi;

    /**
     * Prochází textové uzly (TextNodes), aby nenarušil HTML tagy a atributy
     * @param {Node} element 
     */
    function fixTypography(element) {
        // Vynecháme bloky s kódem (Prism.js), aby skript neměnil syntaxi kódu
        if (["PRE", "CODE", "SCRIPT", "STYLE"].includes(element.tagName)) {
            return;
        }

        element.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                node.nodeValue = node.nodeValue.replace(pattern, (match, word) => {
                    // Najdeme přesnou pozici slova v nalezeném řetězci
                    const wordIndex = match.toLowerCase().lastIndexOf(word.toLowerCase());
                    // Získáme jakýkoliv znak před slovesem/předložkou (mezera, tečka, uvozovka...)
                    const prefix = match.slice(0, wordIndex);
                    
                    return `${prefix}${word}\u00A0`;
                });
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                fixTypography(node);
            }
        });
    }

    // Aplikace na všechny běžné textové kontejnery
    const contentContainers = document.querySelectorAll("main, article, section, p, li, h1, h2, h3, h4, h5, h6, td, th");
    contentContainers.forEach(container => fixTypography(container));
});