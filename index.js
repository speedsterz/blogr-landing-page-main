mobile_menu = () => {
  const menu = document.getElementById("mobile_menu");
  const icon = document.getElementById("icon_mobile");
  menu.classList.toggle("hidden");
  if (icon.getAttribute("src") == "./images/icon-hamburger.svg")
    icon.setAttribute("src", "./images/icon-close.svg");
  else icon.setAttribute("src", "./images/icon-hamburger.svg");
};

handleProduct = () => {
  const select = document.getElementById("Product");
  const select2 = document.getElementById("ProductLi");
  select.classList.toggle("svg_flip");
  select2.classList.toggle("hidden");
};
handleCompany = () => {
  const select = document.getElementById("Company");
  const select2 = document.getElementById("CompanyLi");
  select.classList.toggle("svg_flip");
  select2.classList.toggle("hidden");
};
handleConnect = () => {
  const select = document.getElementById("Connect");
  const select2 = document.getElementById("ConnectLi");
  select.classList.toggle("svg_flip");
  select2.classList.toggle("hidden");
};

handleProductD = (e) => {
  const select1 = document.getElementById("ProductLiD");
  const select2 = document.getElementById("CompanyLiD");
  const select3 = document.getElementById("ConnectLiD");
  select1.classList.toggle("hidden");
  select2.classList.add("hidden");
  select3.classList.add("hidden");
  e.stopPropagation();
};
handlCompanyD = (e) => {
  const select1 = document.getElementById("ProductLiD");
  const select2 = document.getElementById("CompanyLiD");
  const select3 = document.getElementById("ConnectLiD");
  select1.classList.add("hidden");
  select2.classList.toggle("hidden");
  select3.classList.add("hidden");
  e.stopPropagation();
};
handleConnectD = (e) => {
  const select1 = document.getElementById("ProductLiD");
  const select2 = document.getElementById("CompanyLiD");
  const select3 = document.getElementById("ConnectLiD");
  select1.classList.add("hidden");
  select2.classList.add("hidden");
  select3.classList.toggle("hidden");
  e.stopPropagation();
};

stop = (e) => {
  e.stopPropagation();
};

close_menu = () => {
  const select1 = document.getElementById("ProductLiD");
  const select2 = document.getElementById("CompanyLiD");
  const select3 = document.getElementById("ConnectLiD");
  select1.classList.add("hidden");
  select2.classList.add("hidden");
  select3.classList.add("hidden");
};
