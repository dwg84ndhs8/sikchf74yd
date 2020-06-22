// Load jQuery from NPM
import $ from 'jquery';
import 'bootstrap/js/dist/modal';

window.jQuery = $;
window.$ = $;

$('#imageModal').on('show.bs.modal', function openModal(event) {
  const button = $(event.relatedTarget);
  const imgsrc = button.data('imgsrc');
  const modal = $(this);
  modal.find('.modal-body img').attr('src', imgsrc);
});
