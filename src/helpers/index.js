export default {
  formatDate: () => {
    let d = new Date();
    let date = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    return `${date}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }
};
