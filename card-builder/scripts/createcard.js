document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.card-form');
    const previewButton = document.querySelector('#preview-btn');
    const saveButton = document.querySelector('#save-btn');
    
    const toInput = document.querySelector('#to');
    const fromInput = document.querySelector('#from');
    const titleInput = document.querySelector('#title');
    const subtitleInput = document.querySelector('#subtitle');
    const messageInput = document.querySelector('#message');
    
    const titlePreview = document.querySelector('.title-text');
    const subtitlePreview = document.querySelector('.subtitle-text');
    const toPreview = document.querySelector('.to-text');
    const messagePreview = document.querySelector('.message-text');
    const fromPreview = document.querySelector('.from-text');
    
    let cards = JSON.parse(localStorage.getItem('cards')) || [];
  
    // Preview button functionality
    previewButton.addEventListener('click', () => {
      titlePreview.textContent = titleInput.value || 'TITLE';
      subtitlePreview.textContent = subtitleInput.value || 'SUBTITLE';
      toPreview.textContent = toInput.value || 'RECIPIENT';
      messagePreview.textContent = messageInput.value || 'YOUR MESSAGE HERE';
      fromPreview.textContent = fromInput.value || 'SENDER';
    });
    
    // Save button functionality
    saveButton.addEventListener('click', (e) => {
      e.preventDefault();
      
      const newCard = {
        to: toInput.value,
        from: fromInput.value,
        title: titleInput.value,
        subtitle: subtitleInput.value,
        message: messageInput.value
      };
      
      cards.push(newCard);
      localStorage.setItem('cards', JSON.stringify(cards));
      form.reset();
      alert('Card saved successfully!');
    });
  });
  