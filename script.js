  function setTheme(theme) {
          document.body.className = theme;
          localStorage.setItem('theme', theme);
          document.getElementById('message').innerText =
          "Theme set to " + theme;
          }

          window.onload = function () {
          const savedTheme = localStorage.getItem('theme');
          if (savedTheme) {
          setTheme(savedTheme);
              }
           };