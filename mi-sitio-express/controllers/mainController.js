const messages = [];
const pokedex = []; 

const home = (req, res) => {
  res.render("home", { title: "Inicio" });
};

const about = (req, res) => {
  res.render("about", { title: "Acerca de" });
};

const contact = (req, res) => {
  res.render("contact", { title: "Contacto" });
};

const saveContact = (req, res) => {
  const { nombre, email, mensaje } = req.body;

  messages.push({ nombre, email, mensaje });

  res.redirect("/admin");
};

const admin = (req, res) => {
  res.render("admin", { title: "Administración", messages });
};

const pokedexView = (req, res) => {
  res.render("pokedex", { title: "Pokédex", pokedex });
};

const savePokemon = (req, res) => {
  const { nombre, tipo, habilidad, region, descripcion } = req.body;

  pokedex.push({ nombre, tipo, habilidad, region, descripcion });

  res.redirect("/pokedex");
};

const mainController = {
  home,
  about,
  contact,
  saveContact,
  admin,
  pokedexView,
  savePokemon
};

module.exports = mainController;
