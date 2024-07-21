const inputEle = document.getElementById("search-input");
const buttonEle = document.getElementById("search-button");
const nameEle = document.getElementById("pokemon-name");
const imgEle = document.getElementById("sprite");
const idEle = document.getElementById("pokemon-id");
const weightEle = document.getElementById("weight");
const heightEle = document.getElementById("height");
const typesEle = document.getElementById("types")
const hpEle = document.getElementById("hp");
const attackEle = document.getElementById("attack");
const defenseEle = document.getElementById("defense");
const specialAttackEle = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speedEle = document.getElementById("speed");
const cardBlack = document.querySelector(".crad-black");
const cardPokemon = document.querySelector(".pokemon-card");

const fetchData = async () => {
    const nameOrId = inputEle.value.toLowerCase();
    try {
      const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${nameOrId}`);
      if(!res.ok){
        alert("Pokémon not found");
      cardBlack.style.display = "block";
      cardPokemon.style.display = "none";
      inputEle.value = "";
      return;
      }
      const data = await res.json();
      const newType = data.types.map(data => data.type.name);

      cardBlack.style.display = "none";
      cardPokemon.style.display = "block";

      imgEle.src = `${data.sprites.front_default}`
      nameEle.innerText = data.name.toUpperCase();
      idEle.innerText = `ID: ${data.id}`
      heightEle.innerText = `Height: ${data.height}`
      weightEle.innerText = `Weight: ${data.weight}`
      typesEle.innerHTML = newType.map((type,i) => `<span id="${type}" >${type}</span>`).join(" ");
      hpEle.innerText = `${data.stats[0].base_stat}`
      attackEle.innerText = `${data.stats[1].base_stat}`
      defenseEle.innerText = `${data.stats[2].base_stat}`
      specialAttackEle.innerText = `${data.stats[3].base_stat}`
      specialDefense.innerText = `${data.stats[4].base_stat}`
      speedEle.innerText = `${data.stats[5].base_stat}`
    } catch (err) {
      console.log(err);
    }
  };

  buttonEle.addEventListener("click",fetchData);