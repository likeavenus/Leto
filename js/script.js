const blocks = document.querySelectorAll('.voucher');

Array.prototype.forEach.call(blocks, function(block) {
  block.onmouseover = function(event) {
    Array.prototype.forEach.call(blocks, function(block) {
      block.classList.remove('voucher--big');
      block.classList.add('voucher--small');
    });

    event.currentTarget.classList.add('voucher--big');
  };

  block.onmouseout = function(event) {
    Array.prototype.forEach.call(blocks, function(block) {
      block.classList.remove('voucher--big');
      block.classList.remove('voucher--small');
    });
  }
});