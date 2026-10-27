const searchInput = document.querySelector("#catalog-search");
const products = [...document.querySelectorAll(".catalog-item")];
const searchStatus = document.querySelector("#search-status");

if (searchInput && searchStatus) {
  const initialQuery = new URLSearchParams(window.location.search).get("q") || "";
  searchInput.value = initialQuery;

  const filterProducts = () => {
    const query = searchInput.value.trim().toLocaleLowerCase("tr");
    let visibleCount = 0;

    for (const product of products) {
      const matches = product.textContent.toLocaleLowerCase("tr").includes(query);
      product.hidden = !matches;
      visibleCount += Number(matches);
    }

    searchStatus.textContent = visibleCount
      ? `${visibleCount} ürün gösteriliyor.`
      : "Aramana uygun ürün bulunamadı.";
  };

  searchInput.addEventListener("input", filterProducts);
  filterProducts();
}