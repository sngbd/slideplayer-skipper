document.querySelectorAll("[data-target='#download-modal']").forEach((d) => {
  d.addEventListener("click", () => {
    document.querySelector('button[type="submit"].uk-button.uk-button-success').disabled = false
    document.querySelector('button[type="submit"].uk-button.uk-button-success').click()
    document.querySelector('div#download-modal').remove()
  })
})