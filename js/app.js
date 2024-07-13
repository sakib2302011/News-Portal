//  --------   category section   ----------

const loadcategory = async() => {
  const url = `https://openapi.programming-hero.com/api/news/categories`;

  const res = await fetch(url);
  const data = await res.json();
  displaycategory(data.data.news_category);
}
loadcategory();
const displaycategory = categories => {
  const categoryContainer = document.getElementById('category-container');

  for(const category of categories){
    // console.log(category);
    const newCategory = document.createElement('div');
    newCategory.classList.add('nav-item');
    newCategory.innerHTML = `
      <h4 onclick="loadCategoryDetails('${category.category_id}')"> ${category.category_name} </h4>
    `
    categoryContainer.appendChild(newCategory);
  }
}

// ----------- category details  --------------

const loadCategoryDetails = categoryId => {
  console.log(categoryId);
}
