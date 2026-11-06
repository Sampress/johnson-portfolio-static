/* Static contact form: opens the visitor's mail app with the enquiry filled in. */
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  var status = document.getElementById('contact-status');
  var EMAIL = 'samibejide60@gmail.com';
  function say(msg, ok) { status.textContent = msg; status.className = 'contact-status ' + (ok ? 'ok' : 'err'); }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = { name: form.elements.name.value.trim(), email: form.elements.email.value.trim(), subject: form.elements.subject.value.trim(), message: form.elements.message.value.trim() };
    if (!data.name) return say('Please enter your name.', false);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) return say('Please enter a valid email address.', false);
    if (data.message.length < 10) return say('Please write a slightly longer message.', false);
    var subject = encodeURIComponent(data.subject || 'Website enquiry from ' + data.name);
    var body = encodeURIComponent('Name: ' + data.name + '\nEmail: ' + data.email + '\n\n' + data.message);
    window.location.href = 'mailto:' + EMAIL + '?subject=' + subject + '&body=' + body;
    say('Your email app is opening with your enquiry. If it does not open, email ' + EMAIL + '.', true);
  });
})();
