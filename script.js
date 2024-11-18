const quotes = [
  "We suffer more in imagination than in reality.",
  "The unexamined life is not worth living.",
  "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
  "What a liberation to realize that 'the voice in my head' is not who I am. 'Who am I, then?' The one who sees that.",
  "Life can only be understood backwards; but it must be lived forwards.",
  "You have power over your mind—not outside events. Realize this, and you will find strength.",
  "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.",
  "When I let go of what I am, I become what I might be.",
  "It is no measure of health to be well adjusted to a profoundly sick society.",
  "Do I contradict myself? Very well, then I contradict myself, I am large, I contain multitudes."
];

getQuotes = () => {
  const randIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randIndex];
}