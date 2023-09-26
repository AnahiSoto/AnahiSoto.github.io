let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #3ca2a2;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #3ca2a2;">Desarrollo sitios web y doy cursos de IA</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();