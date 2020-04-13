class MessageView extends View {
  template(model) {
    return `
        <p class="alert alert-success">${model.text}</p>
        `;
  }
}
