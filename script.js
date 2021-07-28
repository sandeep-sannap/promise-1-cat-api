// https://api.thecatapi.com/v1/breeds
getCatbreeds();
async function getCatbreeds() {
  var cat_list = document.querySelector("#cat_list");
  let output = "";
  try {
    const result = await fetch(`https://api.thecatapi.com/v1/breeds`, {
      method: "GET",
    });
    const data = await result.json();
    data.forEach((obj) => {
      output += `
          <div class="col-lg-3 m-2">
            <div class="card" style="width: 18rem;">
                <img src="${obj.image.url}" class="card-img-top" alt="image">
                <div class="card-body">
                    <h5 class="card-title font-weight-bold text-danger">${obj.name}</h5>
                    <p><b>Origin: </b>${obj.origin}</p>
                    <p><b>Child Friendly: </b>${obj.child_friendly}</p>
                    <p><b>Stranger Friendly: </b>${obj.stranger_friendly}</p>
                    <p><b>Temperament: </b>${obj.temperament}</p>
                    <p><b>Weight: </b></p>
                    <p>&ensp;&ensp;<b>imperial: </b>${obj.weight.imperial}</p>
                    <p>&ensp;&ensp;<b>metric: </b>${obj.weight.metric}</p>
                    <p class="card-text"><b>Description</b>${obj.description}</p>
                    <a href="${obj.cfa_url}" class="btn btn-primary">Go To Wiki</a>
                </div>
            </div>
          </div>
          `;
      cat_list.innerHTML = output;
    });
  } catch (error) {
    console.log(error);
  }
}
