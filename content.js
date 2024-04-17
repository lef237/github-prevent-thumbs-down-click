function hideThumbsDownButton() {
  const reactionMenu = document.querySelector("ul.dropdown-menu-reactions");
  if (reactionMenu) {
    const thumbsDownButton = reactionMenu.querySelector(
      'button[data-reaction-content="-1"]'
    );
    if (thumbsDownButton) {
      console.log("Thumbs down button found:", thumbsDownButton);
      thumbsDownButton.style.setProperty("display", "none", "important");
    }
  }
}

function observeDOM(mutationsList, observer) {
  for (let mutation of mutationsList) {
    if (mutation.type === "childList") {
      console.log("DOM mutation observed:", mutation);
      hideThumbsDownButton();
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded event triggered");
  hideThumbsDownButton();

  const observer = new MutationObserver(observeDOM);
  observer.observe(document.body, { childList: true, subtree: true });
});

document.addEventListener("click", (event) => {
  if (event.target.matches('summary[data-target="reactions-menu.summary"]')) {
    console.log("Reactions menu clicked");
    hideThumbsDownButton();
  }
});
