export const getChartHeight = () => {
  const windowWidth = window.innerWidth;
  return windowWidth < 768 ? 200 : 70; // Ubah nilai sesuai kebutuhan
};

export const radarChartHeight =  () => {
  const windowWidth = window.innerWidth;
  return windowWidth < 768 ? 200 : 190; // Ubah nilai sesuai kebutuhan
}

export const barChartHeight =  () => {
  const windowWidth = window.innerWidth;
  return windowWidth < 768 ? 200 : 190; // Ubah nilai sesuai kebutuhan
}


// export default getChartHeight;
