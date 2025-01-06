document.getElementById("myButton").onclick = function() {
    alert("Hello, World!");
};

async function loadImage(ipUrl) {
    try {
      const response = await fetch(ipUrl, {
        mode: 'cors',
      });
      const blob = await response.blob();
      const imgUrl = URL.createObjectURL(blob);
      document.querySelector('img').src = imgUrl;
    } catch (error) {
      console.error('Image loading failed:', error);
    }
  }

  const ipUrl = 'https://143.244.184.83/image';
  loadImage(ipUrl);