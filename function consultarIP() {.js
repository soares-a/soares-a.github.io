function consultarIP() {
    let ip = document.getElementById("input-ip").value;
    fetch(`https://ipapi.co/${ip}/json/`)
      .then(response => response.json())
      .then(data => {
        document.getElementById("resultado").innerHTML = `
          <p>País: ${data.country_name}</p>
          <p>Cidade: ${data.city}</p>
          <p>Latitude: ${data.latitude}</p>
          <p>Longitude: ${data.longitude}</p>
        `;
      })
      .catch(error => {
        document.getElementById("resultado").innerHTML = "Não foi possível consultar o IP informado.";
        console.error(error);
      });
  }
  