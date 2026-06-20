let button = document.getElementById("button");
button.addEventListener("click", () =>
  {
    let i = Math.floor(Math.random() * 10);
    if(i <= 3) 
    {
      window.open("https://www.doctorshinobi.com/outcore", "_blank");
    }
    else if(i >= 6) 
    {
      window.open("https://store.steampowered.com/app/311690/Enter_the_Gungeon/", "_blank");
    }
    else 
    {
      window.open("https://store.steampowered.com/app/2131630/METAL_GEAR_SOLID__Master_Collection_Version/", "_blank");
    }
  });

let arameisFacts = [
    `Did you know? Arameis is WHACK`,
    `Did you know? Arameis has... actually, this one\'s a little personal, I\'m not writing it here.`,
    `Did you know? EVANGELION GELION GELION EVA`,
    `Did you know? Arameis is actually the worst guy ever at Plants vs Zombies \(this has been verified by real american patriots\)`,
    `Did you know? Arameis is secretly a really funny bird I can't remember the name of.`,
    `Did you know? Arameis is DEAD. He's no longer with us \)\:`,
    `Did you know? Arameis is still alive to this day! \(\:`,
    `Did you know? I ran out of facts for this one, sorry.`,
    `Did you know? Arameis secretly runs the shadow organization rulling the gove\-`
];

let matheusFacts = [
    `Did you know? They used to call me the Drift King back in college.`,
    `Did you know? Matheus is.. me. I\'m Matheus. Hi.`,
    `Did you like my sunglasses, brother???`,
    `Did you know? This entry is not biased in any way.`,
    `Did you know?...  ...I\'m asking you. DID you know?`,
    `Did you know? Matheus is actually the best guy ever at Plants vs Zombies \(this has been verified by real american patriots\).`,
    `Did you know? Matheus plays Clone Drone in the Danger Zone, the "\awesomest\" game ever.`,
    `HELP`,
    `Did you know? Matheus is perfectly fine. He\'s doing alright. I swear.`
];

let jamesFacts = [
    `Did you know? James is just a businessman, doing business.`,
    `Did you know? James is a menace to society, and plays Factorio.`,
    `Did you know? James eats cereal without milk, apparently \(the real american patriots have yet to verify this\).`,
    `Did you know? James is the only person who actually paid attention to history class, ever.`,
    `Did you know? James really likes teaming on fortresses, twice.`,
    `Did you know? Being a person, James enjoys breathing and other human activities.`,
    `Did you know? We\'re gonna rob your house.`,
    `Did you know? I'm running out of facts again, very sorry.`,
    `Did you know? James plays Hollow Knight, I think. It's a shame they never got a sequel for the game, it\'s pretty fun.`
];

let dogFacts = [
  `Did you know? Dog facts.`,
  `Did you know? This dog is a REAL videogame. That means something, I think.`,
  `Did you know? This dog is known for having the highest K\/D ratio ever in Counter Strike\: Source.`,
  `Did you know? This dog is a very cool placeholder image.`,
  `Did you know? The exposure got a little messed up while taking this image, sorry!`,
  `Did you know? We're gonna rob your house.`,
  `Did you know? This dog has a mortality rate of only 86\%\! ...Our top scientists say it might not be a dog, though.`,
  `Did you know? According to Arameis, this dog is a very deep Evangelion reference.`,
  `Did you know? HELP`
]; 

let results = Number(Math.floor(Math.random() * arameisFacts.length));

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("fact1").textContent = arameisFacts[results];
  document.getElementById("fact2").textContent = matheusFacts[results]
  document.getElementById("fact3").textContent = jamesFacts[results]
  document.getElementById("fact4").textContent = dogFacts[results]
});