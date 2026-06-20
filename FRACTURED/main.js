
let button = document.querySelector(".button2");
button.addEventListener("click", () =>
  {
    // rng that makes the download page lead to a different game every time, I'm genuinely so proud of this
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
  })


let icon = document.querySelectorAll(".icon")

for (let j = 0; j < icon.length; j++) 
{
  icon[j].addEventListener("mouseover", () => 
  {
    icon[j].src = icon[j].getAttribute("id") + " (selected).png";
  });
  icon[j].addEventListener("mouseout", () => 
  {
    icon[j].src = icon[j].getAttribute("id") + ".png";
  })
}
